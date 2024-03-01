"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Hero from "@/components/Hero";
import { Toaster } from 'sonner'

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col w-full">
        <Toaster position="bottom-center" richColors/>
        <Header />
        <Hero />
        <Posts />
      </main>
    </QueryClientProvider>
  );
}
