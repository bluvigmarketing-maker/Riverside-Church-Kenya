"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";

export function DeleteButton({
  action,
  confirmText = "Delete this? This can't be undone.",
}: {
  action: () => Promise<void>;
  confirmText?: string;
}) {
  const [pending, setPending] = useState(false);

  return (
    <button
      type="button"
      disabled={pending}
      onClick={async () => {
        if (!window.confirm(confirmText)) return;
        setPending(true);
        try {
          await action();
        } finally {
          setPending(false);
        }
      }}
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
    >
      {pending ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <Trash2 className="size-4" aria-hidden="true" />
      )}
      Delete
    </button>
  );
}
