"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleContinue = () => {
    router.push("/auth/login");
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50 px-4">
      <div className="w-full max-w-sm text-center space-y-8">
        {/* Indian Flag - Mobile Optimized */}
        <div className="mx-auto w-48 h-32 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="h-1/3 bg-orange-500"></div>
          <div className="h-1/3 bg-white flex items-center justify-center relative">
            <div className="relative w-12 h-12">
              {/* Ashoka Chakra */}
              <div className="absolute inset-0 border-2 border-blue-800 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[...Array(24)].map((_, i) => {
                    const angle = (i * 360) / 24;
                    const x1 = 50 + 45 * Math.cos((angle * Math.PI) / 180);
                    const y1 = 50 + 45 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <line
                        key={i}
                        x1={50}
                        y1={50}
                        x2={x1}
                        y2={y1}
                        stroke="#1e3a8a"
                        strokeWidth={1.5}
                      />
                    );
                  })}
                  <circle cx={50} cy={50} r={6} fill="#1e3a8a" />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-1/3 bg-green-600"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
              भारत सरकार
            </h1>
            <h2 className="text-lg font-medium text-gray-600">
              Government of India
            </h2>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-xl font-bold text-orange-600 mb-1">
              राशन वितरण प्रणाली
            </h3>
            <p className="text-base text-gray-600">
              Public Distribution System
            </p>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          <div
            className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-green-600 animate-pulse"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Continue Button */}
        <Button 
          onClick={handleContinue}
          className="w-full max-w-xs mx-auto mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 text-base font-medium rounded-lg shadow-md active:scale-95 transition-transform duration-200"
        >
          Continue
        </Button>

        {/* Digital India Initiative */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">डिजिटल इंडिया पहल</p>
          <p className="text-xs text-gray-500">Digital India Initiative</p>
        </div>
      </div>
    </div>
  );
}