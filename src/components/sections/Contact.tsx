import { useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
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
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      {/* Get In Touch Section */}
      <div className="relative max-w-5xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] leading-[1.2] text-white/90 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.6] text-white/70 max-w-2xl mx-auto">
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
              onChange={handleChange}
              className={cn(
                "w-full",
                "bg-gradient-to-br from-blue-400/[0.08] to-blue-400/[0.02]",
                "text-white/80",
                "border border-blue-400/10",
                "backdrop-blur-xl",
                "rounded-xl",
                "px-4 py-3",
                "text-base font-light",
                "transition-all duration-500",
                "placeholder:text-white/20",
                "hover:border-blue-400/20",
                "hover:from-blue-400/[0.12] hover:to-blue-400/[0.04]",
                "focus:outline-none",
                "focus:border-blue-400/30",
                "focus:from-blue-400/[0.15] focus:to-blue-400/[0.05]",
                "focus:shadow-[0_0_30px_-5px_rgba(96,165,250,0.2)]",
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
              onChange={handleChange}
              className={cn(
                "w-full",
                "bg-gradient-to-br from-blue-400/[0.08] to-blue-400/[0.02]",
                "text-white/80",
                "border border-blue-400/10",
                "backdrop-blur-xl",
                "rounded-xl",
                "px-4 py-3",
                "text-base font-light",
                "transition-all duration-500",
                "placeholder:text-white/20",
                "hover:border-blue-400/20",
                "hover:from-blue-400/[0.12] hover:to-blue-400/[0.04]",
                "focus:outline-none",
                "focus:border-blue-400/30",
                "focus:from-blue-400/[0.15] focus:to-blue-400/[0.05]",
                "focus:shadow-[0_0_30px_-5px_rgba(96,165,250,0.2)]",
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
              onChange={handleChange}
              rows={4}
              className={cn(
                "w-full",
                "bg-gradient-to-br from-blue-400/[0.08] to-blue-400/[0.02]",
                "text-white/80",
                "border border-blue-400/10",
                "backdrop-blur-xl",
                "rounded-xl",
                "px-4 py-3",
                "text-base font-light",
                "transition-all duration-500",
                "resize-none",
                "placeholder:text-white/20",
                "hover:border-blue-400/20",
                "hover:from-blue-400/[0.12] hover:to-blue-400/[0.04]",
                "focus:outline-none",
                "focus:border-blue-400/30",
                "focus:from-blue-400/[0.15] focus:to-blue-400/[0.05]",
                "focus:shadow-[0_0_30px_-5px_rgba(96,165,250,0.2)]",
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
                "w-14 h-14",
                "bg-gradient-to-br from-blue-400/[0.15] to-blue-400/[0.05]",
                "border border-blue-400/15",
                "backdrop-blur-xl",
                "rounded-xl",
                "transition-all duration-500",
                "group/button relative",
                "hover:scale-[1.02]",
                "hover:border-blue-400/30",
                "hover:from-blue-400/[0.2] hover:to-blue-400/[0.08]",
                "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.25)]",
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
                "transform-gpu",
                "group-hover/button:scale-110",
                "group-hover/button:rotate-3",
                "group-hover/button:animate-wiggle"
              )}>
                {status === 'loading' && <Loader2 className="h-5 w-5 animate-spin text-blue-400/90" aria-hidden="true" />}
                {status === 'success' && <CheckCircle className="h-5 w-5 text-green-400/90" aria-hidden="true" />}
                {status === 'error' && <XCircle className="h-5 w-5 text-red-400/90" aria-hidden="true" />}
                {status === 'idle' && <Send className="h-5 w-5 text-blue-400/90" aria-hidden="true" />}
              </div>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
} 