import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero />
      <Posts />
    </main>
  );
}
