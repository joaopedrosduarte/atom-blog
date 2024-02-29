"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Hero from "@/components/Hero";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col w-full">
        <Header />
        <Hero />
        <Posts />
      </main>
    </QueryClientProvider>
  );
}
