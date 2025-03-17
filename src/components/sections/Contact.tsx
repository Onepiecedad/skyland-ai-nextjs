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
    <section id="contact" className="relative py-14 sm:py-16 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      {/* Section Content */}
      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            Get In Touch
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.4] text-white/80 mt-4 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's talk about your goals and how we can help you achieve them.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-light text-white/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "w-full",
                "bg-blue-600/20",
                "text-white/90",
                "border border-blue-500/20",
                "backdrop-blur-sm",
                "rounded-xl",
                "px-4 py-3",
                "text-lg font-light",
                "transition-all duration-300",
                "placeholder:text-white/30",
                "hover:border-blue-400/30",
                "hover:bg-blue-500/30",
                "focus:outline-none",
                "focus:border-blue-400/40",
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
            <label htmlFor="email" className="block text-lg font-light text-white/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "w-full",
                "bg-blue-600/20",
                "text-white/90",
                "border border-blue-500/20",
                "backdrop-blur-sm",
                "rounded-xl",
                "px-4 py-3",
                "text-lg font-light",
                "transition-all duration-300",
                "placeholder:text-white/30",
                "hover:border-blue-400/30",
                "hover:bg-blue-500/30",
                "focus:outline-none",
                "focus:border-blue-400/40",
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
            <label htmlFor="message" className="block text-lg font-light text-white/80">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={cn(
                "w-full",
                "bg-blue-600/20",
                "text-white/90",
                "border border-blue-500/20",
                "backdrop-blur-sm",
                "rounded-xl",
                "px-4 py-3",
                "text-lg font-light",
                "transition-all duration-300",
                "resize-none",
                "placeholder:text-white/30",
                "hover:border-blue-400/30",
                "hover:bg-blue-500/30",
                "focus:outline-none",
                "focus:border-blue-400/40",
                errors.message && "border-red-400/30 focus:border-red-400/30"
              )}
              placeholder="Tell us about your business and how we can help..."
            />
            {errors.message && (
              <p className="text-sm text-red-400/70">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              disabled={status === 'loading'}
              className={cn(
                "px-8 py-6 w-full",
                "bg-blue-400/[0.08]",
                "text-white/90 hover:text-white",
                "transition-all duration-500",
                "rounded-2xl text-lg font-light",
                "border border-blue-400/10",
                "backdrop-blur-sm",
                "flex items-center justify-center gap-3",
                "group relative",
                "hover:scale-[1.02]",
                "hover:border-blue-400/30",
                "hover:bg-blue-400/[0.12]",
                "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
                "overflow-hidden",
                status === 'loading' && "opacity-70 cursor-not-allowed"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Message Sent!</span>
                </>
              ) : status === 'error' ? (
                <>
                  <XCircle className="w-6 h-6 text-red-400" />
                  <span>Failed to Send</span>
                </>
              ) : (
                <>
                  <Send className={cn(
                    "w-6 h-6 text-blue-500/80",
                    "transition-all duration-500",
                    "group-hover:scale-110",
                    "group-hover:rotate-3",
                    "group-hover:animate-wiggle"
                  )} />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </div>
          
          {/* Error Message */}
          {errorMessage && (
            <p className="text-sm text-red-400/70 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
} 