import { Zap, Users, BarChart3, Shield, Clock, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
    {
        icon: Zap,
        title: "Smart Engagement",
        description: "AI automatically engages with your target audience through intelligent interactions",
    },
    {
        icon: Users,
        title: "Audience Growth",
        description: "Organic follower growth through precision targeting and authentic engagement",
    },
    {
        icon: BarChart3,
        title: "Analytics",
        description: "Comprehensive insights and metrics to optimize your social media strategy",
    },
    {
        icon: Shield,
        title: "Platform Safe",
        description: "Built-in compliance measures ensure your accounts remain within platform guidelines",
    },
    {
        icon: Clock,
        title: "24/7 Operation",
        description: "Continuous automation that works around the clock to grow your presence",
    },
    {
        icon: Star,
        title: "Multi-Platform",
        description: "Unified management across Instagram, Twitter, LinkedIn, and TikTok",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-gray-950 to-black relative">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-32 h-32 border border-gray-800/30 rotate-45" />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-gray-800/10 to-gray-900/10 rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Built for Scale</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Everything you need to automate and grow your social media presence
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(({ icon: Icon, title, description }, idx) => (
                        <Card
                            key={idx}
                            className="bg-gradient-to-br from-black to-gray-950 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/20"
                        >
                            <CardHeader className="pb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mb-6">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <CardTitle className="text-white font-medium text-lg">{title}</CardTitle>
                                <CardDescription className="text-gray-400 font-light leading-relaxed">
                                    {description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Features;

