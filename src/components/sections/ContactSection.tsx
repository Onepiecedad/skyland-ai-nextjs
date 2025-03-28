"use client";

import { useState, FormEvent } from "react";
import { DanaButton } from "@/components/ui/DanaButton";
import { cn } from "@/lib/utils";
import { glass, hover, transition, layout, typography } from "@/lib/theme";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      console.log("Fix errors before sending.");
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <section className={cn("py-20", layout.container)}>
      <div className={cn("grid", layout.cardGap, "items-center")}>
        <div className={layout.elementSpacing}>
          <h2 className={cn(typography.heading, "text-3xl sm:text-4xl")}>
            Get in Touch
          </h2>
          <p className={cn(typography.paragraph, "max-w-2xl")}>
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={cn(
          "w-full max-w-xl",
          glass.card,
          transition.base,
          hover.card,
          "p-6"
        )}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-white/5 border border-white/10",
                  "text-white placeholder-white/50",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500",
                  errors.name && "border-red-500"
                )}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-white/5 border border-white/10",
                  "text-white placeholder-white/50",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500",
                  errors.email && "border-red-500"
                )}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className={cn(
                  "w-full px-4 py-2 rounded-lg",
                  "bg-white/5 border border-white/10",
                  "text-white placeholder-white/50",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500",
                  errors.message && "border-red-500"
                )}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="pt-4">
              <DanaButton />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
} 