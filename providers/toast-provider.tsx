"use client";

import { Toaster } from "@/components/ui/sonner";

export function ToastProvider() {
  return <Toaster position="bottom-center" duration={2500} />;
}
