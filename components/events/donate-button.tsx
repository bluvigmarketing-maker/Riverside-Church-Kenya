"use client";

import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

/**
 * Shown on events the admin flags as donation-enabled. Paystack isn't wired
 * up yet (client's chosen interim behavior), so this just opens a
 * "coming soon" dialog — swapping in real checkout later only touches this
 * component.
 */
export function DonateButton() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button className="btn-metallic gold-line font-semibold" />}
      >
        <HeartHandshake className="size-4" aria-hidden="true" />
        Donate
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Online giving is coming soon</DialogTitle>
          <DialogDescription>
            We&rsquo;re setting up secure online giving for this event. Please check back
            shortly, or speak to a church leader on the day about how to give.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
