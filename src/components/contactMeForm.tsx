"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from 'lucide-react'
import Script from 'next/script'

interface ContactMeProps {
    title: string;
    subtitle: string;
}

declare global {
    interface Window {
        grecaptcha: {
            enterprise: {
                ready: (callback: () => void) => void;
                execute: (siteKey: string, options: { action: string }) => Promise<string>;
            };
        };
    }
}

export default function ContactMeForm({ title, subtitle }: ContactMeProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [messageLength, setMessageLength] = useState(0)
    const [textareaHeight, setTextareaHeight] = useState('auto')
    const router = useRouter()
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [formReset, setFormReset] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.enterprise) {
            setRecaptchaLoaded(true)
        }
        if (formReset) {
            if (formRef.current) formRef.current.reset();
            setFormReset(false);
        }
    }, [formReset])

    const executeRecaptcha = async () => {
        if (!recaptchaLoaded) {
            console.error('reCAPTCHA not loaded')
            return null
        }
        try {
            const token = await window.grecaptcha.enterprise.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
                { action: 'CONTACT_FORM_SUBMIT' }
            )
            return token
        } catch (error) {
            console.error('Error executing reCAPTCHA:', error)
            return null
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        const token = await executeRecaptcha()
        if (!token) {
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        if (!formRef.current) {
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        const action = "CONTACT_FORM_SUBMIT"
        const formData = new FormData(formRef.current)

        const formValues = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            message: formData.get("message") as string
        }

        // Log form values for debugging
        console.log("Form values:", formValues)

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_COMUNICATIONS_BACKEND}/contact-message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add any necessary authentication headers here
                },
                body: JSON.stringify({ token, action, ...formValues }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                router.refresh();
            } else {
                console.error("Error in form submission:", result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setMessageLength(value.length);

        // Adjust textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        <>
            <Script
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                onLoad={() => {
                    setRecaptchaLoaded(true)
                }}
            />
            <Card className="w-full max-w-[95%] md:max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center">{title}</CardTitle>
                    <p className="text-muted-foreground text-center">{subtitle}</p>
                </CardHeader>
                <CardContent>
                    {submitStatus === 'success' && !formReset ? (
                        <div className="text-center space-y-4">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                            <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                            <p>Thank you for your message. You will receive an email confirmation shortly.</p>
                            <Button onClick={() => {
                                setSubmitStatus('idle');
                                setIsSubmitting(false);
                                setMessageLength(0);
                                setFormReset(true);
                            }} className="mt-4">
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" name="firstName" required disabled={isSubmitting} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" name="lastName" required disabled={isSubmitting} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required disabled={isSubmitting} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone (optional)</Label>
                                <Input id="phone" name="phone" type="tel" disabled={isSubmitting} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message (max 1200 characters)</Label>
                                <Textarea
                                    ref={textareaRef}
                                    id="message"
                                    name="message"
                                    required
                                    maxLength={1200}
                                    rows={5}
                                    onChange={handleMessageChange}
                                    disabled={isSubmitting}
                                    style={{ height: textareaHeight, minHeight: '100px' }}
                                />
                                <p className="text-sm text-muted-foreground text-right">
                                    {messageLength}/1200 characters
                                </p>
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting || !recaptchaLoaded}
                                className="w-full"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                            {submitStatus === 'error' && (
                                <div className="flex items-center justify-center text-red-600">
                                    <AlertCircle className="mr-2" />
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    )}
                </CardContent>
            </Card>
        </>
    )
}