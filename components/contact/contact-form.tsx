"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const supabase = createClient();
      const { error } = await supabase.from("contact_messages").insert({ name, email, message });
      if (error) throw error;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="gold-line rounded-2xl border bg-navy-50 p-6 text-center">
        <p className="font-heading text-lg font-semibold text-navy-950">Message sent!</p>
        <p className="mt-1 text-navy-700">
          Thank you for reaching out — we&rsquo;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          className="gold-line mt-4 font-semibold"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-navy-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-navy-200 px-3 py-2 text-navy-950 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-navy-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-navy-200 px-3 py-2 text-navy-950 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-lg border border-navy-200 px-3 py-2 text-navy-950 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="btn-metallic gold-line font-semibold"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        Send Message
      </Button>
    </form>
  );
}
