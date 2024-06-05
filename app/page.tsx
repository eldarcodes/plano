import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-[90px] font-bold">Plano</h1>

      <Button size="lg" className="text-lg font-semibold">
        Explore
      </Button>
    </main>
  );
}
