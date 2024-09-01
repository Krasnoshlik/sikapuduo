"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: 'What is the monthly cost of your app?',
      answer: 'Our app is free to download and use. Some premium features may require a subscription, which starts at $5 per month.',
    },
    {
      question: 'What banking services do you offer?',
      answer: 'We offer a wide range of banking services including savings accounts, checking accounts, loans, credit cards, and investment options.',
    },
    {
      question: 'How can I contact Sikapuduo Bank for assistance?',
      answer: 'You can contact Sikapuduo Bank via our 24/7 customer service hotline at 1-800-123-4567 or email us at support@sikapuduobank.com. We also have a live chat option on our website.',
    },
    {
      question: 'Are there any fees associated with Sikapuduo Bank accounts?',
      answer: 'Sikapuduo Bank offers fee-free banking for most of our basic accounts. However, certain services such as overdraft protection or international wire transfers may incur fees. Please refer to our fee schedule for more details.',
    },
    {
      question: 'How do I report a lost or stolen card?',
      answer: 'If you have lost your card or it has been stolen, please call our emergency hotline immediately at 1-800-123-4567. You can also freeze your card via our mobile app to prevent unauthorized transactions.',
    },
  ];

  const toggleAccordion = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='max-w-[650px] mx-auto px-3 text-center pt-16'>
      <h3 className='font-semibold text-[30px] md:text-[50px]'>Frequently asked questions</h3>

      <div className='mt-10 text-left'>
        {questions.map((item, index) => (
          <div key={index} className='mb-4'>
            <button
              onClick={() => toggleAccordion(index)}
              className='w-full text-left px-4 py-2 bg-[#1B5962] rounded-lg font-medium flex justify-between text-lg'
            >
              {item.question}
              <span className='text-2xl'>
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className='overflow-hidden bg-[#1B5962] mt-1 rounded-lg'
            >
              <div className='px-4 py-3'>
                <p>{item.answer}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
