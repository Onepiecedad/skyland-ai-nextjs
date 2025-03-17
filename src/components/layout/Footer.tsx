import React, { useState } from 'react';
import { Brain, Send, Loader2, CheckCircle, XCircle, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Replace this URL with your actual n8n webhook URL
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '/api/contact';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workflow_data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: 'website_contact_form'
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <footer id="contact" className="relative mt-0 pt-16 pb-12 px-8 sm:px-12">
      {/* Contact Form Section */}
      <div className="relative z-20 max-w-lg mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-light text-white/90 mb-4">Get In Touch</h2>
          <p className="text-[16px] font-light text-white/80 leading-[1.6] max-w-md mx-auto">
            Ready to transform your business with AI? Let's talk.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          aria-label="Contact form"
          className={cn(
            "p-10 rounded-2xl backdrop-blur-2xl transition-all duration-400 group/card",
            "bg-gradient-to-b from-blue-400/[0.03] to-transparent",
            "hover:from-blue-400/[0.04] hover:to-blue-400/[0.01]",
            "border border-white/[0.08] hover:border-white/[0.1]",
            "hover:scale-[1.01] hover:shadow-[0_0_30px_-15px_rgba(96,165,250,0.1)]",
            "transform-gpu relative",
            "space-y-8"
          )}
        >
          {/* Glow effect container */}
          <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover/card:opacity-100">
            <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-blue-400/[0.06] to-transparent" />
          </div>

          <div className="relative space-y-6">
            <div className="group/input">
              <label htmlFor="name" className="block text-sm font-light text-white/80 mb-2 group-hover/card:text-white/95 transition-colors duration-300">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(
                    "w-full bg-white/[0.03] rounded-lg px-4 py-3",
                    "text-white placeholder:text-white/25",
                    "border transition-all duration-300",
                    errors.name 
                      ? "border-red-400/50 focus:border-red-400 focus:shadow-[0_0_1rem_0_rgba(248,113,113,0.1)]" 
                      : "border-white/[0.08] focus:border-blue-400/40 focus:shadow-[0_0_1rem_0_rgba(96,165,250,0.1)]",
                    "group-hover/card:border-white/[0.12]",
                    "outline-none",
                    "font-light text-base",
                    "focus:scale-[1.01] focus:bg-white/[0.04]",
                    "transform-gpu"
                  )}
                  placeholder="Your name"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              {errors.name && (
                <p id="name-error" className="mt-2 text-sm font-light text-red-400" role="alert">{errors.name}</p>
              )}
            </div>

            <div className="group/input">
              <label htmlFor="email" className="block text-sm font-light text-white/80 mb-2 group-hover/card:text-white/95 transition-colors duration-300">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(
                    "w-full bg-white/[0.03] rounded-lg px-4 py-3",
                    "text-white placeholder:text-white/25",
                    "border transition-all duration-300",
                    errors.email 
                      ? "border-red-400/50 focus:border-red-400 focus:shadow-[0_0_1rem_0_rgba(248,113,113,0.1)]" 
                      : "border-white/[0.08] focus:border-blue-400/40 focus:shadow-[0_0_1rem_0_rgba(96,165,250,0.1)]",
                    "group-hover/card:border-white/[0.12]",
                    "outline-none",
                    "font-light text-base",
                    "focus:scale-[1.01] focus:bg-white/[0.04]",
                    "transform-gpu"
                  )}
                  placeholder="your@email.com"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-2 text-sm font-light text-red-400" role="alert">{errors.email}</p>
              )}
            </div>

            <div className="group/input">
              <label htmlFor="message" className="block text-sm font-light text-white/80 mb-2 group-hover/card:text-white/95 transition-colors duration-300">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(
                    "w-full bg-white/[0.03] rounded-lg px-4 py-3",
                    "text-white placeholder:text-white/25",
                    "border transition-all duration-300",
                    errors.message 
                      ? "border-red-400/50 focus:border-red-400 focus:shadow-[0_0_1rem_0_rgba(248,113,113,0.1)]" 
                      : "border-white/[0.08] focus:border-blue-400/40 focus:shadow-[0_0_1rem_0_rgba(96,165,250,0.1)]",
                    "group-hover/card:border-white/[0.12]",
                    "outline-none",
                    "font-light text-base",
                    "focus:scale-[1.01] focus:bg-white/[0.04]",
                    "transform-gpu",
                    "resize-none"
                  )}
                  placeholder="Tell us about your project..."
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm font-light text-red-400" role="alert">{errors.message}</p>
              )}
            </div>
          </div>

          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className={cn(
              "w-full flex items-center justify-center gap-2",
              "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
              "hover:from-blue-400/[0.06] hover:via-blue-500/[0.06] hover:to-blue-400/[0.06]",
              "text-white/75 hover:text-white/90",
              "border border-white/[0.08] hover:border-blue-400/[0.15]",
              "transition-all duration-300",
              "hover:shadow-[0_0_15px_-5px_rgba(96,165,250,0.15)]",
              "rounded-lg px-5 py-3",
              "text-base font-light",
              "backdrop-blur-xl",
              "transform-gpu hover:scale-[1.02]",
              status === 'loading' && "opacity-50 pointer-events-none"
            )}
            aria-label={
              status === 'loading' ? 'Sending message...' :
              status === 'success' ? 'Message sent successfully' :
              status === 'error' ? 'Failed to send message' :
              'Send message'
            }
          >
            <div className="transition-transform duration-400 group-hover/card:scale-110 group-hover/card:rotate-2">
              {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {status === 'success' && <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />}
              {status === 'error' && <XCircle className="h-4 w-4 text-red-400" aria-hidden="true" />}
              {status === 'idle' && <Send className="h-4 w-4" aria-hidden="true" />}
            </div>
            {status === 'loading' ? 'Sending...' : 
             status === 'success' ? 'Sent!' :
             status === 'error' ? 'Failed' : 'Send Message'}
          </Button>
          
          {errorMessage && (
            <p className="mt-4 text-sm font-light text-center text-red-400/80" role="alert">{errorMessage}</p>
          )}
        </form>
      </div>

      {/* Footer Content */}
      <div className="relative z-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-3">
            <a 
              href="#" 
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Brain className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" aria-hidden="true" />
              <span className="text-base font-light tracking-wider text-white/80 group-hover:text-white/90 transition-colors">
                SKYLAND AI
              </span>
            </a>
            <p className="text-sm font-light text-white/60">
              Empowering businesses with intelligent AI solutions for a smarter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white/80 mb-3">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="#ai-solutions" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  Who We Are
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center justify-center">
            <p className="text-sm font-light text-white/40">
              © {new Date().getFullYear()} Skyland AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 