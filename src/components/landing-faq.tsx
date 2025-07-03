import { Plus, HelpCircle, MessageCircle, Users } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'How does the AI-powered insights feature work?',
    answer:
      'Our AI analyzes your spending patterns, income trends, and financial behavior to provide personalized recommendations. It can identify potential savings opportunities, predict future expenses, and suggest budget optimizations tailored to your lifestyle.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with no cancellation fees. Your data will remain accessible for 30 days after cancellation, giving you time to export your information if needed.',
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'We provide 24/7 customer support through live chat, email, and phone. Our premium users also get access to dedicated account managers and priority support with guaranteed response times.',
  },
  {
    question: 'How accurate is the expense categorization?',
    answer:
      'Our AI-powered categorization is over 95% accurate and learns from your preferences. You can easily correct any miscategorized transactions, and the system will remember your preferences for future similar transactions.',
  },
  {
    question: 'Can I set up custom budget categories?',
    answer:
      "Yes! You can create unlimited custom budget categories that fit your lifestyle. Whether it's 'Coffee Shop Visits' or 'Pet Expenses', you have complete control over how you organize and track your spending.",
  },
];

export default function LandingFAQ() {
  return (
    <section className="w-full py-10 ">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="sticky top-8">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-2xl">
                    <HelpCircle className="w-12 h-12" />
                  </div>

                  <div className="absolute inset-0 rounded-full border-2 border-[#194e3e] opacity-20 animate-ping" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#4a9d7a] to-[#67c095] flex items-center justify-center text-white shadow-lg animate-bounce">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <h4 className="text-left text-primary font-bold border rounded-full px-4 shadow-xl py-2 w-fit ">
                FAQ
              </h4>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 pt-3">
                What people ask about Clarity
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Get answers to the most common questions about our personal
                finance platform. Can't find what you're looking for? Our
                support team is here to help 24/7.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#194e3e] rounded-full opacity-15 animate-bounce hidden lg:block" />
            <div
              className="absolute top-32 -left-4 w-4 h-4 bg-[#4a9d7a] rounded-full opacity-25 animate-bounce hidden lg:block"
              style={{ animationDelay: '0.8s' }}
            />

            <Accordion type="multiple" className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#194e3e]/30 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group [&[data-state=open]]:border-b [&[data-state=open]]:border-gray-200">
                    <div className="flex items-center gap-4 w-full">
                      {/* Question number */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>

                      <span className="font-semibold text-gray-900 group-hover:text-[#194e3e] transition-colors text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <div className="ml-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#194e3e] flex items-center justify-center transition-all duration-300">
                        <Plus className="w-4 h-4 text-gray-600 group-hover:text-white transition-all duration-300 group-data-[state=open]:rotate-45" />
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <div className="flex gap-4">
                      <div className="w-8 flex justify-center pt-1">
                        <div className="w-1 h-full bg-gradient-to-b from-[#194e3e] to-[#4a9d7a] rounded-full opacity-30" />
                      </div>

                      <div className="flex-1">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span>Was this helpful?</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
