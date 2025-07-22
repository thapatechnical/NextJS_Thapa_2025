"use client";

import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved to
            another location.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <Home size={20} />
            <Link href="/">
              <span className="hover:text-white">Go Home</span>
            </Link>
          </button>

          <button
            className="group flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
            onClick={() => router.back()}
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
