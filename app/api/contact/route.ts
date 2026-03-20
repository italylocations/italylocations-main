import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY ?? '',
        response: token,
        remoteip: ip,
      }),
    }
  )
  const data = await res.json()
  return data.success === true
}

function buildEmailHtml(fields: {
  name: string
  email: string
  company?: string
  projectType: string
  shootingDate?: string
  message: string
  budgetRange?: string
}): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 16px;color:#9ca3af;font-size:13px;white-space:nowrap;">${label}</td>
          <td style="padding:8px 16px;color:#f9fafb;font-size:14px;">${value}</td>
        </tr>`
      : ''

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#0a0f1e;margin:0;padding:32px;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#111827;border-radius:16px;overflow:hidden;border:1px solid rgba(201,168,76,0.25);">
    <div style="background:linear-gradient(135deg,#1a2744,#0a0f1e);padding:28px 32px;border-bottom:1px solid rgba(201,168,76,0.2);">
      <p style="margin:0 0 4px;color:#c9a84c;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">Italy Locations</p>
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Project Inquiry</h1>
    </div>
    <div style="padding:24px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row('Name', fields.name)}
        ${row('Email', fields.email)}
        ${row('Company', fields.company ?? '')}
        ${row('Project Type', fields.projectType)}
        ${row('Shooting Date', fields.shootingDate ?? '')}
        ${row('Budget', fields.budgetRange ?? '')}
      </table>
      <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.08);">
        <p style="margin:0 0 8px;color:#9ca3af;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Message</p>
        <p style="margin:0;color:#f9fafb;font-size:14px;line-height:1.65;white-space:pre-wrap;">${fields.message}</p>
      </div>
    </div>
    <div style="padding:16px 32px 24px;text-align:center;">
      <a href="mailto:${fields.email}" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 28px;border-radius:999px;">Reply to ${fields.name}</a>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, projectType, shootingDate, message, budgetRange, website, turnstileToken } = body

    // Validate required fields
    if (!name || !email || !message || !projectType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Honeypot check — silent false positive
    if (website) {
      return NextResponse.json({ success: true })
    }

    // Turnstile verification
    const ip = req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for') ?? ''
    const turnstileValid = await verifyTurnstile(turnstileToken, ip)
    if (!turnstileValid) {
      return NextResponse.json({ error: 'Verification failed' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Italy Locations <noreply@italylocations.com>',
      to: 'info@italylocations.com',
      replyTo: email,
      subject: `New inquiry: ${projectType} — ${name}`,
      html: buildEmailHtml({ name, email, company, projectType, shootingDate, message, budgetRange }),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
