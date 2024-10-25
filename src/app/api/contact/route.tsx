import { NextResponse } from 'next/server'

async function verifyRecaptcha(token: string) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const projectId = process.env.RECAPTCHA_PROJECT_ID;

    if (!secretKey || !projectId) {
        console.error('Missing reCAPTCHA configuration:', { secretKey: !!secretKey, projectId: !!projectId });
        return false;
    }

    const verificationUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secretKey}`;

    try {
        console.log('Sending request to reCAPTCHA API:', { projectId, verificationUrl });

        const response = await fetch(verificationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event: {
                    token: token,
                    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                    expectedAction: 'CONTACT_FORM_SUBMIT'
                }
            }),
        });

        const responseText = await response.text();
        console.log('reCAPTCHA API response:', responseText);

        if (!response.ok) {
            console.error('reCAPTCHA API error:', responseText);
            return false;
        }

        const data = JSON.parse(responseText);

        if (!data.tokenProperties || typeof data.tokenProperties.valid !== 'boolean') {
            console.error('Unexpected reCAPTCHA API response format');
            return false;
        }

        return data.tokenProperties.valid && data.riskAnalysis && data.riskAnalysis.score >= 0.5;
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const recaptchaToken = formData.get('recaptchaToken') as string

        if (!recaptchaToken) {
            return NextResponse.json({ error: 'reCAPTCHA token is missing' }, { status: 400 })
        }

        console.log('Verifying reCAPTCHA token:', recaptchaToken);
        const recaptchaVerified = await verifyRecaptcha(recaptchaToken)

        if (!recaptchaVerified) {
            return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
        }

        // Aquí puedes procesar los datos del formulario
        // Por ejemplo, enviar un correo electrónico o guardar en una base de datos

        // Simulamos un proceso asíncrono
        await new Promise(resolve => setTimeout(resolve, 1000))

        return NextResponse.json({ message: 'Form submitted successfully' })
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}