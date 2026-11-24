"use client";

import React, { useState } from "react";

type FaqTopic = "All" | "General" | "Visa" | "Packages" | "Transport" | "Payments";

interface FaqItem {
  id: number;
  topic: Exclude<FaqTopic, "All">;
  question: string;
  answer: string;
}

const TOPICS: FaqTopic[] = [
  "All",
  "General",
  "Visa",
  "Packages",
  "Transport",
  "Payments",
];

const FAQS: FaqItem[] = [
  {
    id: 1,
    topic: "General",
    question: "What is Umrah and who can perform it?",
    answer:
      "Umrah is a voluntary Islamic pilgrimage to Makkah that can be performed at any time of the year. Any Muslim with a valid passport and Umrah or tourist visa can perform Umrah, either individually or with family.",
  },
  {
    id: 2,
    topic: "Transport",
    question: "Is transport between Makkah and Madinah included?",
    answer:
      "Yes. Depending on your selected package, we arrange private air-conditioned cars, family GMC/HiAce vans, Haramain High-Speed Train tickets, or comfortable group coaches for Jeddah–Makkah–Madinah–Jeddah transfers.",
  },
  {
    id: 3,
    topic: "Visa",
    question: "Do you help with the Umrah visa?",
    answer:
      "Yes, Fly Wonder Travel & Tours handles complete Umrah visa processing, mandatory Saudi health insurance, and Nusuk permit guidance so your documentation is 100% ready before departure.",
  },
  {
    id: 4,
    topic: "Payments",
    question: "How do I pay?",
    answer:
      "You can confirm your booking via bank transfer, online payment, or by visiting our Lahore office at LG-28, LandMark Plaza, Jail Road. A partial advance locks your hotels and flights, with the balance due before travel.",
  },
  {
    id: 5,
    topic: "Packages",
    question: "Can I customise a package to suit my family and budget?",
    answer:
      "Absolutely. You can choose your exact travel dates, total nights in Makkah and Madinah, hotel distance (Economy to 5-star Haram view), room sharing, flights from Lahore, and private Ziarat tours.",
  },
  {
    id: 6,
    topic: "General",
    question: "How early should I book my Umrah?",
    answer:
      "We recommend booking at least 3 to 4 weeks in advance for regular months and 2 to 3 months early for Ramadan or school holidays to get the best flight fares and hotels closest to the Haram.",
  },
];

const WHATSAPP_NUMBER = "923097879999";

export default function UmrahFaqSection() {
  const [selectedTopic, setSelectedTopic] = useState<FaqTopic>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesTopic =
      selectedTopic === "All" || faq.topic === selectedTopic;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const teamWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Fly Wonder Travel & Tours! I have a question regarding Umrah packages."
  )}`;

  return (
    <section className="bg-white py-20 px-4 text-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#F6F4EF] border border-[#E6DFD1] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] text-[#444444] mb-4">
            <span className="w-4 h-4 rounded-full border border-[#666666] inline-flex items-center justify-center text-[10px]">
              ?
            </span>
            <span>QUESTIONS &amp; ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-3">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base text-[#555555]">
            Search the questions below or filter by topic.
          </p>
        </div>

        {/* Search Input + Topic Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <div className="relative w-full sm:w-64">
            <svg
              className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-neutral-200 bg-white text-sm text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-[#111111]"
            />
          </div>

          {TOPICS.map((topic) => {
            const isActive = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`h-10 px-4 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-[#444444] border-neutral-200 hover:border-neutral-400"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* 2-Column Accordion Grid */}
        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-neutral-200/90 rounded-2xl p-5 transition-all hover:border-neutral-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B8862D] flex-shrink-0">
                        {faq.topic}
                      </span>
                      <span className="text-sm sm:text-[15px] font-bold text-[#111111] leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <span className="w-7 h-7 rounded-full bg-[#F6F4EF] text-[#111111] flex items-center justify-center flex-shrink-0 text-base font-medium">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3.5 pt-3 border-t border-neutral-100 text-sm text-[#555555] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 text-sm text-[#555555]">
            No matching questions found.{" "}
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("All");
              }}
              className="font-bold text-[#111111] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Contact Team Link */}
        <p className="text-center text-xs sm:text-sm text-[#555555] mt-10">
          Still have a question?{" "}
          <a
            href={teamWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#111111] hover:text-[#B8862D] transition-colors"
          >
            Contact our team.
          </a>
        </p>
      </div>
    </section>
  );
}