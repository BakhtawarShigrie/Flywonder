"use client";

import React, { useState, useEffect } from 'react';

const reviews = [
  { id: 1, name: "Abrar Hussain", text: "Fly Wonder Travel & Tours is the best travel agency in this area! Trusted service, professional team, and always customer-focused. Highly recommended!" },
  { id: 2, name: "Usman Tariq", text: "Got my Dubai visa processed within days. The team at Fly Wonder is extremely cooperative and handles everything professionally." },
  { id: 3, name: "Fatima Noor", text: "Our family Umrah trip was perfectly organized. From hotels to transport, everything was top-notch. Thank you Fly Wonder!" },
  { id: 4, name: "Ali Raza", text: "Booked a tour to Skardu with them. The itinerary was well planned, and the guides were very helpful. A truly memorable experience." },
  { id: 5, name: "Zainab Shah", text: "Got the cheapest air tickets for my UK flight. They genuinely care about saving their customers' money. Great service!" },
  { id: 6, name: "Muhammad Bilal", text: "Highly professional staff. They assisted me with my Iran Ziaraat trip, and the whole journey was spiritually uplifting and hassle-free." },
  { id: 7, name: "Sana Akram", text: "I have booked multiple international flights through them. Never faced a single issue. They are my go-to travel agency now." },
  { id: 8, name: "Kamran Ahmed", text: "The hotel reservations they made for us in Baku were amazing and exactly as promised. Very transparent dealings." },
  { id: 9, name: "Hassan Mahmud", text: "Excellent customer support! They were available 24/7 to answer my queries while I was traveling abroad." },
  { id: 10, name: "Ayesha Khan", text: "Best Umrah packages in Lahore. The proximity of the hotels to the Haram made our trip very peaceful." },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section className="bg-gradient-to-b from-[#16273b] to-[#121f2f] py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">What Our Travelers Say</h2>
        
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl mx-12">
          
          <div className="min-h-[160px] flex flex-col justify-center items-center">
            {/* Quote Icon */}
            <div className="text-sky-400/30 text-6xl absolute top-6 right-10 font-serif">"</div>
            
            <p className="text-slate-200 text-lg md:text-xl italic mb-8 relative z-10 leading-relaxed">
              "{reviews[currentIndex].text}"
            </p>
            
            <div className="flex flex-col items-center">
              {/* 5 Stars */}
              <div className="flex text-sky-400 mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-xl">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold">{reviews[currentIndex].name}</h4>
                  <span className="text-slate-400 text-sm">Valued Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        
      </div>
    </section>
  );
}