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
      question: 'How do I customize my storefront?',
      answer: 'You can customize your storefront through our intuitive dashboard. Simply navigate to the design section and choose from our pre-built themes or create your own custom layout with drag-and-drop functionality.'
    },
    {
      question: 'What makes pricing different from a Shopify app?',
      answer: 'Unlike traditional Shopify apps, our pricing engine uses advanced algorithms and real-time market data to optimize your prices automatically. We provide dynamic pricing, bulk management, and region-specific pricing that adapts to market conditions.'
    },
    {
      question: 'Can you import existing product data?',
      answer: 'Yes! Our platform supports seamless data migration from Shopify, CSV files, and other e-commerce platforms. Our team will help you migrate your existing product catalog, pricing rules, and customer data without any downtime.'
    },
    {
      question: 'How much time does product creation take you?',
      answer: 'Product creation is incredibly fast with our automated tools. Individual products can be created in under 2 minutes, while bulk imports can process thousands of products in just a few minutes. Our AI helps generate product descriptions and optimize pricing automatically.'
    },
    {
      question: 'Why should I move from Shopify to your product?',
      answer: 'Our platform is built specifically for B2B sellers who need advanced pricing controls, bulk management, and automated workflows. While Shopify is great for B2C, we provide specialized tools for wholesale, volume discounts, custom pricing per customer, and advanced inventory management that B2B businesses require.'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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