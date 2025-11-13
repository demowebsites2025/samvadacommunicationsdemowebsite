import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden animate-fade-in">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Customer Feedbacks
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative">
            {/* Navigation Arrows */}
            <div className="absolute top-8 right-8 flex gap-2">
              <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Quote className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 space-y-6">
                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  "I am really really happy with the kind of service you guys provide every single time. There is an event that I give you or a small photo shoot or video editing or Digital Marketing. Every single thing is done so smoothly. You are always available, just a call away with lot of patience. You help and resolve each doubt of mine. Long way to go to you and your team. Let's continue to work together for many more years team."
                </p>

                {/* Divider */}
                <div className="w-16 h-1 bg-purple-600 rounded-full"></div>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Anushree Chandrashekar
                  </h4>
                  <p className="text-gray-600">
                    Founder & CEO at Skillyuvam Academy
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative purple accent */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-purple-600/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;