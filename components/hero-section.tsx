"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-[100vh] flex items-center px-6 pt-32 pb-20 lg:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-10 gap-12 lg:gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:col-span-7 pr-0 lg:pr-8">
            {/* Availability Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium tracking-widest text-secondary uppercase">
                Open to Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              CRAFTING
              <br />
              <span className="italic bg-gradient-to-r from-[#CFBDFF] via-[#E0CCFF] to-[#CFBDFF] bg-clip-text text-transparent inline-block pr-4">
                MODERN
              </span>
              <br />
              WEB
              <br />
              EXPERIENCES.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I’m a Computer Science grad and UI/UX focused developer. Whether it's WordPress, custom JS, or Android apps, I make sure everything is <i className="italic text-foreground">ngam</i> and high-performance. Let's <i className="italic text-foreground">kasi jadi</i> your next project!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="px-6 h-12 text-base font-semibold"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 h-12 text-base font-medium"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-start lg:col-span-3">
            <div className="relative w-full max-w-[340px] lg:max-w-none">
              {/* Profile Card */}
              <div className="w-full bg-muted rounded-3xl overflow-hidden">
                {/* Profile Image */}
                <div className="aspect-square relative w-full h-full">
                  <Image
                    src="/profile.jpeg"
                    alt="Naim Rahman"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Name Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-card/95 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        Front-end & Android Developer
                      </p>
                      <p className="text-lg font-semibold text-card-foreground">
                        Naim Rahman
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
