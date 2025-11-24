"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Destinations from "@/components/Destinations";
import Culture from "@/components/Culture";
import Food from "@/components/Food";
import TravelTips from "@/components/TravelTips";
import QuickFacts from "@/components/QuickFacts";
import SubscriptionForm from "@/components/SubscriptionForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <Destinations />
      <Culture />
      <Food />
      <TravelTips />
      <QuickFacts />
      <SubscriptionForm />
      <Footer />
    </main>
  );
}
