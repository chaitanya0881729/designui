

"use client";



import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import Image from 'next/image';

import fq from './images/fq.png'

import fqbg from './images/fqbg.svg'


const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqData = [
    { question: "Why wouldn't I just hire a full-time designer?", answer: "Our service offers flexibility and cost-effectiveness compared to a full-time hire." },
    { question: "Is there a limit to how many requests I can have?", answer: "We offer different plans to accommodate various request volumes." },
    { question: "How fast will I receive my designs?", answer: "Most designs are delivered within 48 hours." },
    { question: "What will I receive in 48 hours?", answer: "You'll receive initial design concepts and drafts for review." },
    { question: "Who are the designers?", answer: "Our team consists of experienced professional designers." },
    { question: "How does the pause feature work?", answer: "You can pause your subscription anytime with no penalties." },
    { question: "How do you handle larger requests?", answer: "We scale our resources according to project complexity." },
    { question: "What programs do you design in?", answer: "We use industry-standard design software." },
    { question: "How do I request designs?", answer: "Simply submit your request through our platform." },
    { question: "What if I don't like the design?", answer: "We offer unlimited revisions until you're satisfied." },
    { question: "Is there any design work you don't cover?", answer: "We handle most design needs but some specialized services may be excluded." },
    { question: "What if I only have a single request?", answer: "We offer flexible plans including single-request options." },
    { question: "Are there any refunds if I don't like the service?", answer: "Yes, we offer a satisfaction guarantee." }
  ];

  return (
   
    <div className='relative'>

<div className="flex justify-between gap-20  max-w-4xl mx-auto px-4 py-12">
      <div className="w-3/5">
        <h1 className="text-6xl font-bold mb-12">Commonly asked questions</h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <span className="text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openQuestion === index && (
                <div className="pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-2/5 h-[450px] p-10   bg-white shadow-lg ">
 
        <div className="text-center">
          {/* <Image
            src={fq} 
            alt="Smiley face" 
            className="mx-auto mb-4"
          /> */}

    <Image src={fq} alt={''}  width={200} height={200} className="mx-auto mb-4" />

          <h2 className="text-3xl   font-bold mb-4">Book a 15-minute <br /> intro call</h2>
          <button className="bg-black text-white rounded-full px-8 py-3 mb-4">
            Schedule now
          </button>
          <p className="text-sm">
            Prefer to email?{' '}
            <a href="mailto:hello@designjoy.co" className="text-red-500">
              hello@designjoy.co
            </a>
          </p>
        </div>
      </div>


      <div className="absolute top-[35%] right-0">
          <Image src={fqbg} alt={''}/>

        </div>
    </div>

    </div>


  );
};

export default FAQSection;