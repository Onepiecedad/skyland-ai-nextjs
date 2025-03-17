import React, { useState } from 'react';
import { Brain, Send, Loader2, CheckCircle, XCircle, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const navigation = [
  { name: 'AI Solutions', href: '#ai-solutions' },
  { name: 'Industries', href: '#industry-specific' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Who We Are', href: '#who-we-are' }
];

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
    <footer className="relative mt-auto border-t border-white/10">
      <div className="py-10 md:py-14 px-6 md:px-12">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-12">
            {/* Left Side - Company Info */}
            <div className="space-y-6 text-center md:text-left">
              {/* Logo & Mission */}
              <div className="space-y-4">
                <h4 className="text-2xl font-light tracking-wider text-white">SKYLAND AI</h4>
                <p className="text-lg leading-relaxed text-white/80 font-light max-w-md mx-auto md:mx-0">
                  Transforming businesses through AI automation. We help companies save time, reduce costs, and grow revenue with custom AI solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@skylandai.se" className="text-lg font-light hover:text-blue-400/90 transition-colors">info@skylandai.se</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <a 
                    href="https://linkedin.com/company/skylandai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-light hover:text-blue-400/90 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Navigation */}
            <nav className="space-y-6 text-center md:text-right">
              {/* Navigation Links */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:block md:space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-lg text-white/80 hover:text-white transition-colors block py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Copyright */}
              <p className="text-base text-white/60 font-light">
                © {new Date().getFullYear()} Skyland AI. All rights reserved.
              </p>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 