"use client";

import React, { useState } from 'react';

const faqs = [
  { q: "Do you offer international and domestic flight bookings?", a: "Yes, we provide affordable and confirmed ticketing for all major international and domestic airlines." },
  { q: "Can I make a customized tour plan?", a: "Absolutely! Our team can tailor a tour package specifically to your preferences, budget, and travel dates." },
  { q: "How can I book a tour package?", a: "You can book by clicking the 'Call Now' button to speak directly with our agents, or by sending us a message on WhatsApp." },
  { q: "Do you offer group tours?", a: "Yes, we organize group tours for families, corporate teams, and friends to various exciting destinations." },
  { q: "Do you help with visa applications?", a: "Yes, we provide complete visa assistance including document preparation and submission guidance for multiple countries." },
  { q: "How do I make payments?", a: "We accept payments via bank transfer, online payment gateways, and cash at our Lahore office." },
  { q: "What documents are required for visa processing?", a: "Requirements vary by country. Generally, you need a valid passport, photographs, bank statements, and flight reservations. Our team will provide the exact checklist." },
  { q: "Can I cancel or change my flight?", a: "Yes, modifications and cancellations are possible based on the airline's specific policies and fare rules." },
  { q: "How long does the visa process take?", a: "Processing times depend on the destination country's embassy. We strive to submit your documents promptly to ensure the fastest possible turnaround." },
  { q: "Are tour packages refundable?", a: "Refund policies depend on the specific package and how close to the departure date you cancel. Please discuss this with our agent during booking." },
  { q: "Do you guarantee visa approval?", a: "Visa approval is solely at the discretion of the respective embassy. However, our expert guidance ensures your application is flawless, maximizing approval chances." },
  { q: "Do you provide travel insurance?", a: "Yes, we can arrange comprehensive travel insurance to cover medical emergencies and trip cancellations." },
  { q: "How do I contact customer support?", a: "You can reach us 24/7 at 0309 787 9999 or 0239 787 9999, email us at info@flywonder.pk, or visit our office at LandMark Plaza, Lahore." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#121f2f] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-white/10 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="text-slate-400 text-xl font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {/* Expanding Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}