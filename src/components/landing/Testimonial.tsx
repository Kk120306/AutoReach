import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        comment: "AutoReach increased our Instagram engagement by 400% in just 2 months.The AI targeting is remarkably precise.",
        name: "Sarah Johnson",
        position: "Marketing Director, TechCorp"
    },
    {
        comment: "I save 10 hours per week on social media management. AutoReach handles everything while I focus on content creation.",
        name: "Mike Chen",
        position: "Founder, CreativeStudio"
    },
    {
        comment: "The ROI is incredible. We've gained 50K followers and our sales increased by 200% since using AutoReach.",
        name: "Emily Rodriguez",
        position: "CEO, FashionBrand"
    }
]

const Testimonial = () => {
    return (

        <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-950 to-black relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-16 w-2 h-2 bg-gray-700 rounded-full opacity-40"></div>
                <div className="absolute top-48 right-24 w-1 h-1 bg-gray-600 rounded-full opacity-60"></div>
                <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-gray-700 rounded-full opacity-50"></div>
                <div className="absolute bottom-48 right-16 w-1 h-1 bg-gray-600 rounded-full opacity-30"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Trusted by 10,000+</h2>
                    <p className="text-xl text-gray-400 font-light">Businesses worldwide</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((test, idx) =>
                    (<Card key={idx} className="bg-gradient-to-br from-black to-gray-950 border-gray-800 hover:border-gray-700 transition-all duration-300">
                        <CardContent className="pt-8">
                            <div className="flex items-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-white fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-8 font-light leading-relaxed">
                                {test.comment}
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-medium text-white">{test.name}</p>
                                    <p className="text-sm text-gray-400">{test.position}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;




