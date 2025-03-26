import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wand2,
  Home as HomeIcon,
  Layout as TemplatesIcon,
  Send as ContactIcon,
  Zap as FeaturesIcon,
} from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Home() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate("/builder", { state: { prompt } });
    }
  };

  // const handleNavigation = (route: string) => {
  //   navigate(route);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute top-6 left-6 flex items-center space-x-2 z-50">
        <Wand2 className="w-8 h-8 text-blue-500" />
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Solid</span>
      </div>

      <div className="absolute top-6 right-6 flex space-x-4 z-50">
        <a href="https://ai-website-builder-nu.vercel.app/blog">
          <button className="bg-blue-600/20 hover:bg-red-500 backdrop-blur-md p-3 rounded-full transition-all duration-300 group">
            <TemplatesIcon className="w-6 h-6 text-red-500 group-hover:text-purple-100 group-hover:rotate-12 transition-transform" />
          </button>
        </a>

        <a href="https://ai-website-builder-nu.vercel.app/support">
          <button className="bg-blue-600/20 hover:bg-yellow-500 backdrop-blur-md p-3 rounded-full transition-all duration-300 group">
            <ContactIcon className="w-6 h-6 text-yellow-500 group-hover:text-blue-100 group-hover:rotate-12 transition-transform" />
          </button>
        </a>

        <a href="https://ai-website-builder-nu.vercel.app/#features">
          <button className="bg-blue-600/20 hover:bg-green-500 backdrop-blur-md p-3 rounded-full transition-all duration-300 group">
            <FeaturesIcon className="w-6 h-6 text-green-300 group-hover:text-green-100 group-hover:rotate-12 transition-transform" />
          </button>
        </a>

        <a href="https://ai-website-builder-nu.vercel.app/">
          <button className="bg-blue-600/20 hover:bg-blue-500 backdrop-blur-md p-3 rounded-full transition-all duration-300 group">
            <HomeIcon className="w-6 h-6 text-blue-300 group-hover:text-purple-100 group-hover:rotate-12 transition-transform" />
          </button>
        </a>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob origin-center"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob-delayed origin-center"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <Wand2 className="w-16 h-16 text-blue-500 animate-pulse transform hover:scale-110 transition-transform" />
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            AI Website Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Describe your dream website, and we'll craft it with AI-powered
            precision
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-800 transform hover:scale-[1.02] transition-all duration-300">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the website you want to build..."
              className="w-full h-40 p-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-xl font-bold text-lg 
                bg-gradient-to-r from-purple-500 to-blue-600 
                text-white 
                hover:from-purple-500 hover:to-blue-700 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                disabled:cursor-not-allowed
                group flex items-center justify-center gap-2"
            >
              <Wand2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Generate Website
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


