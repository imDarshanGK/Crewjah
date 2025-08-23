"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingAuth() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-6xl min-h-[600px]">
        {/* Left: Branding & Illustration */}
        <div className="flex-1 flex flex-col justify-center pl-8 pr-8 md:pl-16 md:pr-12 py-12">
          <div className="flex items-center mb-10">
            <Image src="/learnova-logo.png" alt="Learnova Logo" width={56} height={56} className="rounded-2xl shadow-md mr-4" />
            <span className="text-3xl md:text-4xl font-bold text-[#3b3bff]">Learnova</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3b3bff] mb-6 leading-tight">Learn smarter<br />with AI</h1>
          <p className="text-lg text-[#232946] mb-10 max-w-md">Your AI-powered study companion. Track progress, take quizzes, and more. Free, privacy-first, and ad-free.</p>
          {/* SVG Illustration (replace with your own or Undraw/Storyset SVG) */}
          <div className="w-full flex justify-center md:justify-start">
            <img src="https://undraw.co/api/illustrations/undraw_online_learning_re_qw08.svg" alt="Learning Illustration" className="w-80 md:w-[340px]" />
          </div>
        </div>
        {/* Right: Auth Form */}
        <div className="flex-1 flex flex-col justify-center items-center bg-white">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#232946] mb-8">Sign In</h2>
            <form className="flex flex-col gap-4">
              <input type="email" placeholder="Email or Username" className="border border-[#e0e7ff] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6a5cff]" />
              <input type="password" placeholder="Password" className="border border-[#e0e7ff] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6a5cff]" />
              <div className="flex justify-end mb-2">
                <a href="/forgot-password" className="text-sm text-[#3b3bff] hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full bg-[#3b3bff] hover:bg-[#6a5cff] text-white font-semibold py-3 rounded-xl shadow-md transition text-lg mb-2">Sign In</button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-[#e0e7ff]" />
              <span className="mx-3 text-[#b3bcf6] text-sm">or</span>
              <div className="flex-1 h-px bg-[#e0e7ff]" />
            </div>
            <button onClick={() => router.push("/signup")}
              className="w-full border-2 border-[#3b3bff] text-[#3b3bff] font-semibold py-3 rounded-xl shadow-md transition text-lg bg-transparent hover:bg-[#f0f3ff] mb-4">
              Sign Up
            </button>
            {/* Social login buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <button className="w-full flex items-center justify-center gap-2 border border-[#e0e7ff] rounded-lg py-2 bg-white hover:bg-[#f0f3ff] text-[#232946] font-medium">
                <img src="/google.svg" alt="Google" className="w-5 h-5" /> Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-[#e0e7ff] rounded-lg py-2 bg-white hover:bg-[#f0f3ff] text-[#232946] font-medium">
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" /> Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
