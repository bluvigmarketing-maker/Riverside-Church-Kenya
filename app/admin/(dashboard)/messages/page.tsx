import { Mail } from "lucide-react";
import { requirePermission } from "@/lib/admin/require-session";
import { createClient } from "@/lib/supabase/server-auth";
import type { ContactMessage } from "@/lib/types";

export default async function AdminMessagesPage() {
  await requirePermission("messages");

  const supabase = await createClient();
  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  const messages = (data as ContactMessage[]) ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Messages</h1>
        <p className="mt-1 text-navy-700">Submissions from the public Contact form.</p>
      </div>

      {messages.length === 0 ? (
        <p className="text-navy-600">No messages yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <div key={message.id} className="rounded-2xl border border-navy-100 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-heading font-semibold text-navy-950">{message.name}</p>
                <span className="text-xs text-navy-500">
                  {new Date(message.created_at).toLocaleString("en-KE", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
              </div>
              <a
                href={`mailto:${message.email}`}
                className="mt-0.5 flex items-center gap-1.5 text-sm text-gold-700 hover:underline"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                {message.email}
              </a>
              <p className="mt-3 whitespace-pre-wrap text-navy-700">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
