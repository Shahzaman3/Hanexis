import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.faq-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // FAQ items animation
      gsap.fromTo('.faq-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-accordion',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'What is a Price Management System (PMS)?',
      answer: 'A PMS is a software solution that automates pricing strategies by factoring in costs, competitor prices, market trends, and business rules to ensure accurate and profitable pricing.'
    },
    {
      question: 'How does Autoprice Pro help with dynamic pricing?',
      answer: 'Autoprice Pro automatically adjusts product prices in real-time based on material costs, competitor updates, and business-defined rules, eliminating manual work.'
    },
    {
      question: 'Can I set different prices for retailers, wholesalers, and regions?',
      answer: 'Yes. The system supports tiered pricing, region-specific adjustments, and customized rules for different customer groups.'
    },
    {
      question: 'Does it integrate with my existing Shopify store?',
      answer: 'Absolutely. Autoprice Pro integrates seamlessly with Shopify, syncing prices, stock, and invoices in real time.'
    },
    {
      question: 'Can I track competitor prices?',
      answer: 'Yes. Autoprice Pro (upcoming feature) allows competitor price monitoring so you can stay competitive without constant manual checks.'
    },
    {
      question: 'What kind of reports can I generate?',
      answer: 'You can access insights on sales trends, customer behavior, margins, stock allocation, and price-performance analytics.'
    },
    {
      question: 'Is it suitable for small businesses or only large enterprises?',
      answer: 'Autoprice Pro is designed to scale — whether you’re a small retailer or a large enterprise, it adapts to your pricing needs.'
    },
    {
      question: 'Does it support promotions or discounts?',
      answer: 'Yes. You can schedule discounts, run promotional campaigns, and even set recurring offers (monthly/quarterly).'
    },
    {
      question: 'How secure is my data?',
      answer: 'The system follows industry-standard encryption and data security practices to keep your pricing, inventory, and customer data safe.'
    },
    {
      question: 'Do I get customer support if I face issues?',
      answer: 'Yes. Our support team is proactive, friendly, and available to help you with setup, troubleshooting, and strategy guidance.'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 gap-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">FAQ</span>
            </div>
            <h2 className="faq-title text-4xl lg:text-5xl font-bold mb-6">
              Questions ? Let's Clear Up Things
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some quick answersto help you feel confident about using Hanexis
            </p>
          </div>

          <div className="faq-accordion  bg-blue-5 bg-blue-50 rounded-3xl p-8 shadow-premium">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="faq-item border border-border/50 bg-blue-100 rounded-2xl px-6 hover:border-primary/30 transition-smooth"
                >
                  <AccordionTrigger className="text-left  font-semibold text-lg hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground  text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact section */}
            <div className="text-center mt-12 p-8 gradient-hero rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="gradient-primary text-white px-8 py-3 rounded-xl hover:shadow-card-hover transition-smooth font-medium">
                  Contact Support
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary/5 transition-smooth font-medium">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;