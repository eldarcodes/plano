"use client";

import { useSettings } from "@/hooks/use-settings";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Label } from "@/components/ui/label";

export function SettingsModal() {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle>My settings</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>

            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Plano looks on your device
            </span>
          </div>

          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
}
