import { useState, useEffect } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { useToast } from '../../contexts/ToastContext';
import { LoadingSpinner } from '../ui/LoadingSpinner';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { showToast } = useToast();
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
      showToast('error', 'Please fill in all required fields correctly');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
      console.log('Submitting to webhook URL:', webhookUrl);
      
      const formSubmissionData = {
        "Full Name": formData.name,
        "Conversation Id": "form-" + Date.now(),
        "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
        "Email": formData.email,
        "Phone Number": formData.phone,
        "Companies": formData.website,
        "User intent": "Contact form submission",
        "Message": formData.message,
        "Transcript": "", // Empty for form submissions
        "Summary": "", // Empty for form submissions
        "Sentiment": "neutral",
        "Source": "website_contact_form"
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formSubmissionData)
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
      showToast('success', 'Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', website: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      const errorMsg = error instanceof Error ? error.message : 'Something went wrong';
      setErrorMessage(errorMsg);
      showToast('error', errorMsg);
      
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    // Listen for conversation end event from ElevenLabs widget
    const handleConversationEnd = async (event: any) => {
      try {
        const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
        
        // Extract conversation data from the event
        const { transcript, summary, sentiment } = event.detail;
        
        // Prepare data in the format we tested, including form data
        const conversationData = {
          "Full Name": formData.name,
          "Conversation Id": "dana-" + Date.now(),
          "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
          "Email": formData.email,
          "Phone Number": formData.phone,
          "Companies": formData.website, // Using website field for company
          "User intent": summary?.split('.')[0] || "",
          "Message": formData.message,
          "Transcript": transcript || "",
          "Summary": summary || "",
          "Sentiment": sentiment || "neutral",
          "Source": "dana_voice_agent"
        };

        // Send data to webhook
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(conversationData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log('Conversation data sent successfully');
      } catch (error) {
        console.error('Error sending conversation data:', error);
      }
    };

    window.addEventListener('conversationEnd', handleConversationEnd);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('conversationEnd', handleConversationEnd);
    };
  }, [formData]); // Add formData as dependency

  return (
    <section id="contact" className="relative py-8 sm:py-10 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-5 md:mb-6">
          <h2 className="text-[36px] md:text-[42px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl font-light tracking-[-0.015em] leading-[1.3] text-white/90 mt-2 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's talk about your goals and how we can help you achieve them.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-3">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-base font-light text-white/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "w-full px-3 py-3 rounded-md",
                errors.name && "border-red-400/30"
              )}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-xs text-red-400/70 mt-1">{errors.name}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-base font-light text-white/80">
                Email
              </label>
              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-3 py-3 rounded-md",
                    errors.email && "border-red-400/30"
                  )}
                  placeholder="your@email.com"
                />
                <div className="form-field-hover-gradient" />
              </div>
              {errors.email && (
                <p className="text-xs text-red-400/70 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-base font-light text-white/80">
                Phone (optional)
              </label>
              <div className="group relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-3 py-3 rounded-md",
                    errors.phone && "border-red-400/30"
                  )}
                  placeholder="+46 70 123 4567"
                />
                <div className="form-field-hover-gradient" />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-400/70 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="website" className="block text-base font-light text-white/80">
              Company Website (optional)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={cn(
                "w-full px-3 py-3 rounded-md",
                errors.website && "border-red-400/30"
              )}
              placeholder="https://company.com"
            />
            {errors.website && (
              <p className="text-xs text-red-400/70 mt-1">{errors.website}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-base font-light text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className={cn(
                "w-full px-3 py-3 rounded-md resize-none",
                errors.message && "border-red-400/30"
              )}
              placeholder="Tell us about your business and how we can help..."
            />
            {errors.message && (
              <p className="text-xs text-red-400/70 mt-1">{errors.message}</p>
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className={cn(
                "w-full sm:w-auto min-w-[160px]",
                "bg-gradient-to-r from-blue-400/[0.04] via-blue-500/[0.04] to-blue-400/[0.04]",
                "border border-white/[0.08]",
                "backdrop-blur-[4px]",
                "text-white/70",
                "transition-all duration-300",
                "hover:bg-gradient-to-r hover:from-blue-400/[0.08] hover:via-blue-500/[0.08] hover:to-blue-400/[0.08]",
                "hover:border-blue-400/20",
                "hover:text-white",
                "hover:shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]",
                "focus:outline-none",
                "focus:bg-gradient-to-r focus:from-blue-400/[0.08] focus:via-blue-500/[0.08] focus:to-blue-400/[0.08]",
                "focus:border-blue-400/20",
                "focus:text-white",
                "focus:shadow-[0_0_20px_-5px_rgba(96,165,250,0.2)]",
                status === 'loading' && "opacity-70 cursor-not-allowed"
              )}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <XCircle className="w-4 h-4 mr-2" />
                  Try Again
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
} 