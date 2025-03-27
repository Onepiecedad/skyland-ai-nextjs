"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/MainHeading";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Loader2, Send, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/contexts/ToastContext";
import { InputField } from "@/components/ui/InputField";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

function ContactSection() {
  const { showToast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const validate = () => {
    const errs = { ...errors };
    let valid = true;
    if (!formData.name) (errs.name = "Name required"), (valid = false);
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      (errs.email = "Valid email required"), (valid = false);
    if (formData.phone && !/^\+?\d{6,15}$/.test(formData.phone))
      (errs.phone = "Invalid phone"), (valid = false);
    if (formData.website && !/^https?:\/\/.+/.test(formData.website))
      (errs.website = "Invalid website"), (valid = false);
    if (!formData.message) (errs.message = "Message required"), (valid = false);
    setErrors(errs);
    return valid;
  };

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return showToast("error", "Fix errors before sending.");
    setStatus("loading");

    try {
      const webhook = "https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b";

      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          "Full Name": formData.name,
          "Email": formData.email,
          "Phone Number": formData.phone,
          "Companies": formData.website,
          "Message": formData.message,
          "User intent": "Contact form submission",
          "Conversation Id": "form-" + Date.now(),
          "Date Submitted": new Date().toISOString(),
          "Source": "website_contact_form",
        }),
      });

      setStatus("success");
      showToast("success", "Message sent!");
      setFormData({ name: "", email: "", phone: "", website: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      setStatus("error");
      showToast("error", "Failed to send. Try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-16 sm:py-24 pb-32">
      <SectionHeading
        title="Get In Touch"
        subtitle="Ready to transform your business with AI? Let's talk about your goals and how we can help you achieve them."
      />

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 mt-12">
        <InputField label="Name" id="name" value={formData.name} onChange={handleChange} error={errors.name} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Email" id="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <InputField label="Phone (optional)" id="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} />
        </div>
        <InputField label="Website (optional)" id="website" value={formData.website} onChange={handleChange} error={errors.website} />

        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-light text-white/80">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={cn("w-full rounded-md p-3 resize-none", errors.message && "border border-red-400/40")}
            placeholder="Tell us about your business..."
          />
          {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
        </div>

        <div className="pt-4 flex justify-end">
          <AnimatedButton
            type="submit"
            disabled={status === "loading"}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {status === "loading" ? "Sending..." : "Send Message"}
          </AnimatedButton>
        </div>
      </form>
    </section>
  );
}

export default ContactSection; 