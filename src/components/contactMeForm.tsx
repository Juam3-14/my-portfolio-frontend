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
    const router = useRouter()
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        console.log('reCAPTCHA site key:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
        if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.enterprise) {
            setRecaptchaLoaded(true)
        }
    }, [])

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
            console.log('reCAPTCHA token:', token) // Log the token for debugging
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
            console.error('Form reference is null')
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        const action = "CONTACT_FORM_SUBMIT"
        const formData = new FormData(formRef.current)

        const formValues = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message")
        }

        try {
            const response = await fetch((process.env.NEXT_PUBLIC_COMUNICATIONS_BACKEND) + "/verify-recaptcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, action, ...formValues }),
            });

            const result = await response.json();

            if (response.ok) {
                // Procesar el envío real del formulario o acciones adicionales si es válido
                setSubmitStatus('success');
                router.refresh();
            } else {
                console.error("Error en la validación del reCAPTCHA:", result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Script
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                onLoad={() => {
                    console.log('reCAPTCHA script loaded')
                    setRecaptchaLoaded(true)
                }}
            />
            <Card className="w-full max-w-[95%] md:max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center">{title}</CardTitle>
                    <p className="text-muted-foreground text-center">{subtitle}</p>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" name="firstName" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" name="lastName" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone (optional)</Label>
                            <Input id="phone" name="phone" type="tel" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message (max 1200 characters)</Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                maxLength={1200}
                                rows={5}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="attachment">Attachment (optional)</Label>
                            <Input id="attachment" name="attachment" type="file" />
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting || !recaptchaLoaded}
                            className="w-full"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                        {submitStatus === 'success' && (
                            <div className="flex items-center justify-center text-green-600">
                                <CheckCircle className="mr-2" />
                                Message sent successfully!
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="flex items-center justify-center text-red-600">
                                <AlertCircle className="mr-2" />
                                There was an error sending your message. Please try again.
                            </div>
                        )}
                    </form>
                </CardContent>
            </Card>
        </>
    )
}