import Hero from "@/components/Home/Hero";
import Navigation from "@/components/Home/Navigation";

export default function Home() {
  return (
    <div className="font-mono h-screen">
      <Navigation />
      <main className=" container mx-auto">
        <Hero />
      </main>
    </div>
  );
}
