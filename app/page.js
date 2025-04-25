import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="md:px-16 lg:px-32 xl:px-36">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero section will go here */}
      </main>
    </div>
  );
}
