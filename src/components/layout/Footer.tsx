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
    <footer className="relative mt-16 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      {/* Get In Touch Section */}
      <div className="relative max-w-5xl mx-auto px-8 pb-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] leading-[1.2] text-white/80 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.6] text-white/60 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's talk about your goals and how we can help you achieve them.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-light text-white/70">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              className={cn(
                // Base styles
                "w-full",
                "bg-gradient-to-r from-blue-400/[0.02] via-blue-500/[0.02] to-blue-400/[0.02]",
                "text-white/80",
                "border border-white/[0.06]",
                "backdrop-blur-xl",
                "rounded-xl",
                "px-4 py-3",
                "text-base font-light",
                "transition-all duration-500",
                "placeholder:text-white/20",
                
                // Focus & Hover styles
                "focus:outline-none",
                "hover:from-blue-400/[0.04] hover:via-blue-500/[0.04] hover:to-blue-400/[0.04]",
                "hover:border-blue-400/[0.1]",
                "focus:from-blue-400/[0.04] focus:via-blue-500/[0.04] focus:to-blue-400/[0.04]",
                "focus:border-blue-400/[0.1]",
                "focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.1)]",
                
                // Error state
                errors.name && "border-red-400/30 focus:border-red-400/30"
              )}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-sm text-red-400/70">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-light text-white/70">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className={cn(
                // Base styles
                "w-full",
                "bg-gradient-to-r from-blue-400/[0.02] via-blue-500/[0.02] to-blue-400/[0.02]",
                "text-white/80",
                "border border-white/[0.06]",
                "backdrop-blur-xl",
                "rounded-xl",
                "px-4 py-3",
                "text-base font-light",
                "transition-all duration-500",
                "placeholder:text-white/20",
                
                // Focus & Hover styles
                "focus:outline-none",
                "hover:from-blue-400/[0.04] hover:via-blue-500/[0.04] hover:to-blue-400/[0.04]",
                "hover:border-blue-400/[0.1]",
                "focus:from-blue-400/[0.04] focus:via-blue-500/[0.04] focus:to-blue-400/[0.04]",
                "focus:border-blue-400/[0.1]",
                "focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.1)]",
                
                // Error state
                errors.email && "border-red-400/30 focus:border-red-400/30"
              )}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-sm text-red-400/70">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-lg font-light text-white/70">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              rows={4}
              className={cn(
                // Base styles
                "w-full",
                "bg-gradient-to-r from-blue-400/[0.02] via-blue-500/[0.02] to-blue-400/[0.02]",
                "text-white/80",
                "border border-white/[0.06]",
                "backdrop-blur-xl",
                "rounded-xl",
                "px-4 py-3",
                "text-base font-light",
                "transition-all duration-500",
                "resize-none",
                "placeholder:text-white/20",
                
                // Focus & Hover styles
                "focus:outline-none",
                "hover:from-blue-400/[0.04] hover:via-blue-500/[0.04] hover:to-blue-400/[0.04]",
                "hover:border-blue-400/[0.1]",
                "focus:from-blue-400/[0.04] focus:via-blue-500/[0.04] focus:to-blue-400/[0.04]",
                "focus:border-blue-400/[0.1]",
                "focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.1)]",
                
                // Error state
                errors.message && "border-red-400/30 focus:border-red-400/30"
              )}
              placeholder="Tell us about your business and how we can help..."
            />
            {errors.message && (
              <p className="text-sm text-red-400/70">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className={cn(
                "flex items-center justify-center",
                "w-16 h-16",
                "bg-gradient-to-r from-blue-400/[0.02] via-blue-500/[0.02] to-blue-400/[0.02]",
                "hover:from-blue-400/[0.04] hover:via-blue-500/[0.04] hover:to-blue-400/[0.04]",
                "text-white/70 hover:text-white/90",
                "border border-white/[0.06] hover:border-blue-400/[0.1]",
                "transition-all duration-500",
                "hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.1)]",
                "rounded-xl",
                "backdrop-blur-xl",
                "transform-gpu hover:scale-[1.02]",
                "group/button",
                status === 'loading' && "opacity-50 pointer-events-none"
              )}
              aria-label={
                status === 'loading' ? 'Sending message...' :
                status === 'success' ? 'Message sent successfully' :
                status === 'error' ? 'Failed to send message' :
                'Send message'
              }
            >
              <div className={cn(
                "transition-all duration-500",
                "group-hover/button:scale-110",
                "group-hover/button:rotate-3",
                "group-hover/button:animate-wiggle"
              )}>
                {status === 'loading' && <Loader2 className="h-6 w-6 animate-spin text-blue-400/60" aria-hidden="true" />}
                {status === 'success' && <CheckCircle className="h-6 w-6 text-green-400/60" aria-hidden="true" />}
                {status === 'error' && <XCircle className="h-6 w-6 text-red-400/60" aria-hidden="true" />}
                {status === 'idle' && <Send className="h-6 w-6 text-blue-400/60" aria-hidden="true" />}
              </div>
            </Button>
          </div>
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