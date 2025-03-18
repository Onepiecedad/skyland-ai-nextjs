import { useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Create a constant for shared input styles at the top of the component
  const inputStyles = [
    // Base styles matching the CSS
    "w-full",
    "px-3 py-3",  // padding: 12px
    "my-2",       // margin: 8px 0
    "rounded-md", // border-radius: 6px
    "border border-white/20", // border: 1px solid rgba(255, 255, 255, 0.2)
    "bg-white/10",  // background: rgba(255, 255, 255, 0.1)
    "text-white",   // color: white
    "text-base",    // font-size: 16px
    "transition-all duration-300 ease-in-out",

    // Placeholder styles
    "placeholder:text-white/50",  // color: rgba(255, 255, 255, 0.5)
    "placeholder:transition-colors",
    "placeholder:duration-300",
    "placeholder:ease-in-out",

    // Focus states
    "focus:placeholder:text-white/90", // color: rgba(255, 255, 255, 0.9)
    "focus:border-white/80",           // border-color: rgba(255, 255, 255, 0.8)
    "focus:shadow-[0_0_8px_rgba(255,255,255,0.3)]", // box-shadow: 0 0 8px rgba(255, 255, 255, 0.3)
    "focus:bg-white/15",               // background: rgba(255, 255, 255, 0.15)
    "focus:outline-none",
  ];

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      website: '',
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

    // Phone validation (optional field)
    if (formData.phone.trim() && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Website validation (optional field)
    if (formData.website.trim() && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website.trim())) {
      newErrors.website = 'Please enter a valid website URL';
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
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || '/api/contact';
      console.log('Submitting to webhook URL:', webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          workflow_data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            website: formData.website,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: 'website_contact_form'
          }
        }),
      });

      console.log('Response status:', response.status);
      let responseData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(
          typeof responseData === 'object' && responseData.message 
            ? responseData.message 
            : 'Failed to send message'
        );
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', website: '', message: '' });
      
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
    <section id="contact" className="relative py-8 sm:py-10 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      {/* Section Content */}
      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-5 md:mb-6">
          <h2 className="text-[36px] md:text-[42px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl font-light tracking-[-0.015em] leading-[1.3] text-white/90 mt-2 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's talk about your goals and how we can help you achieve them.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto space-y-3">
          {/* Name Field */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-base font-light text-white/80">
              Name
            </label>
            <div className="group">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={cn(
                  inputStyles,
                  errors.name && "border-red-400/30 focus:border-red-400/30"
                )}
                placeholder="Your name"
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-400/70 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-base font-light text-white/80">
                Email
              </label>
              <div className="group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    inputStyles,
                    errors.email && "border-red-400/30 focus:border-red-400/30"
                  )}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-400/70 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-base font-light text-white/80">
                Phone (optional)
              </label>
              <div className="group">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={cn(
                    inputStyles,
                    errors.phone && "border-red-400/30 focus:border-red-400/30"
                  )}
                  placeholder="+46 70 123 4567"
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-400/70 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Website Field */}
          <div className="space-y-1">
            <label htmlFor="website" className="block text-base font-light text-white/80">
              Company Website (optional)
            </label>
            <div className="group">
              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleChange}
                className={cn(
                  inputStyles,
                  errors.website && "border-red-400/30 focus:border-red-400/30"
                )}
                placeholder="https://company.com"
              />
            </div>
            {errors.website && (
              <p className="text-xs text-red-400/70 mt-1">{errors.website}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-base font-light text-white/80">
              Message
            </label>
            <div className="group">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className={cn(
                  inputStyles,
                  "resize-none",
                  errors.message && "border-red-400/30 focus:border-red-400/30"
                )}
                placeholder="Tell us about your business and how we can help..."
              />
            </div>
            {errors.message && (
              <p className="text-xs text-red-400/70 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              disabled={status === 'loading'}
              className={cn(
                "p-3",
                "w-[60px] h-[60px]",
                "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
                "text-white/95 hover:text-white",
                "border border-white/[0.08]",
                "backdrop-blur-sm",
                "rounded-full",
                "flex items-center justify-center",
                "group relative",
                "hover:scale-[1.05]",
                "hover:border-blue-400/[0.2]",
                "hover:from-blue-400/[0.08] hover:via-blue-500/[0.08] hover:to-blue-400/[0.08]",
                "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
                "overflow-hidden",
                "transition-all duration-300",
                status === 'loading' && "opacity-70 cursor-not-allowed"
              )}
              aria-label="Send Message"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {status === 'loading' ? (
                <Loader2 className="w-7 h-7 animate-spin text-blue-400/80" />
              ) : status === 'success' ? (
                <CheckCircle className="w-7 h-7 text-green-400" />
              ) : status === 'error' ? (
                <XCircle className="w-7 h-7 text-red-400" />
              ) : (
                <div className="relative w-7 h-7 flex items-center justify-center group-hover:animate-pulse">
                  <Send className={cn(
                    "w-7 h-7 text-blue-500/90",
                    "absolute",
                    "group-hover:text-blue-400",
                    "group-hover:scale-[1.3]",
                    "transition-all duration-300 ease-in-out"
                  )} />
                  <Send className={cn(
                    "w-7 h-7 text-blue-400/0",
                    "absolute",
                    "group-hover:text-blue-400/30",
                    "group-hover:scale-[1.6]",
                    "group-hover:animate-ping",
                    "transition-all duration-300 ease-in-out"
                  )} />
                </div>
              )}
            </Button>
          </div>
          
          {/* Error Message */}
          {errorMessage && (
            <p className="text-xs text-red-400/70 text-center mt-1">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
} 