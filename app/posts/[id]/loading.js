"use client" // مطلوب لاستخدام الـ useEffect والـ useState

import { useEffect, useState } from 'react';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        {/* Spinner Animation */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-neutral-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-transparent border-neutral-700 rounded-full animate-spin"></div>
        </div>

        {/* Text with Dots Animation */}
        <h2 className="text-xl font-semibold text-neutral-100">
          جاري التحميل<span className="opacity-100">{dots}</span>
          <span className="invisible">...</span> {/* للحفاظ على المساحة */}
        </h2>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-neutral-700 rounded-full overflow-hidden mt-4 mx-auto">
          <div className="h-full bg-neutral-300 rounded-full animate-progress"></div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}