"use client";

import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  const { user } = useUser();

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created successfully.",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/images/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/images/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}
        {"'s "} Plano
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}
