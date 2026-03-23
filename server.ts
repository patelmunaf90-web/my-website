import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, phone, product, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.ethereal.email',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // 1. Send email to Admin (You)
      await transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER || 'no-reply@globalsoftware.com'}>`,
        to: 'patelmunaf90@gmail.com',
        subject: `New Inquiry from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nProduct: ${product}\nMessage: ${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #4f46e5;">New Business Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Product:</strong> ${product}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
        `,
      });

      res.status(200).json({ message: 'Inquiry sent successfully' });
    } catch (error) {
      console.error('Contact email error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // API Route for Newsletter Subscription
  app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      // Configure SMTP Transporter
      // Note: User needs to provide these in .env
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.ethereal.email',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send Confirmation Email
      await transporter.sendMail({
        from: `"Global Software" <${process.env.SMTP_USER || 'no-reply@globalsoftware.com'}>`,
        to: email,
        subject: 'Welcome to Global Software Newsletter!',
        text: 'Thank you for subscribing to our newsletter. We will keep you updated with the latest news and offers.',
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #4f46e5;">Welcome to Global Software!</h1>
            <p>Hi there,</p>
            <p>Thank you for subscribing to our newsletter. We are excited to have you with us!</p>
            <p>We will keep you updated with the latest news, product updates, and exclusive offers.</p>
            <br />
            <p>Best Regards,</p>
            <p><strong>Global Software Team</strong></p>
          </div>
        `,
      });

      res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
      console.error('Email sending error:', error);
      // Even if email fails, we might want to log the subscription
      res.status(500).json({ error: 'Failed to send email. Please check SMTP configuration.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
