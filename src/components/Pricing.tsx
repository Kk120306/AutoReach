import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
    {
        title: "Starter",
        price: "$0",
        period: "/month",
        description: "For individuals and small businesses",
        features: [
            "1 social media account",
            "500 AI interactions daily",
            "Basic analytics",
            "Email support",
        ],
        buttonText: "Start Free",
        buttonClass:
            "w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border-0",
        cardClass:
            "bg-gradient-to-b from-gray-950 to-black border-gray-800 hover:border-gray-700 transition-all duration-300",
    },
    {
        title: "Professional",
        price: "$79",
        period: "/month",
        description: "For growing businesses and agencies",
        features: [
            "5 social media accounts",
            "2,000 AI interactions daily",
            "Advanced analytics",
            "Priority support",
            "Custom targeting",
        ],
        buttonText: "Start Free Trial",
        buttonClass:
            "w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-gray-300",
        cardClass:
            "bg-gradient-to-b from-gray-950 to-black border-white relative transform scale-105 shadow-2xl shadow-gray-900/50",
        badge: { text: "Popular", class: "bg-gradient-to-r from-white to-gray-200 text-black font-medium" },
    },
    {
        title: "Enterprise",
        price: "$199",
        period: "/month",
        description: "For large teams and enterprises",
        features: [
            "Unlimited accounts",
            "10,000 AI interactions daily",
            "White-label solution",
            "Dedicated support",
            "Custom integrations",
        ],
        buttonText: "Contact Sales",
        buttonClass:
            "w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border-0",
        cardClass:
            "bg-gradient-to-b from-gray-950 to-black border-gray-800 hover:border-gray-700 transition-all duration-300",
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-gray-800 to-transparent opacity-30" />
                <div className="absolute bottom-40 right-1/4 w-20 h-1 bg-gradient-to-r from-gray-800 to-transparent opacity-30" />
                <div className="absolute top-1/2 left-10 w-6 h-6 border-l border-t border-gray-800 opacity-40" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Simple Pricing</h2>
                    <p className="text-xl text-gray-400 font-light">Choose the plan that scales with your business</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <Card key={idx} className={plan.cardClass}>
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <Badge className={plan.badge.class}>{plan.badge.text}</Badge>
                                </div>
                            )}

                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-xl font-medium text-white">{plan.title}</CardTitle>
                                <div className="mt-6">
                                    <span className="text-4xl font-light text-white">{plan.price}</span>
                                    <span className="text-gray-400 font-light">{plan.period}</span>
                                </div>
                                <CardDescription className="mt-4 text-gray-400 font-light">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className={plan.buttonClass}>{plan.buttonText}</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}



export default Pricing;