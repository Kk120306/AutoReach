import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

// Modularising all reuable compoenents - others will be hard coded 

import Navbar from "@/components/Navbar"
import Features from "@/components/landing/Features"
import Pricing from "@/components/Pricing"
import Testimonial from "@/components/landing/Testimonial"
import Footer from "@/components/Footer"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
                            backgroundSize: "50px 50px",
                        }}
                    >
                    </div>
                </div>

                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-gray-700/15 to-gray-800/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-900/10 to-gray-800/10 rounded-full blur-3xl"></div>
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-40 left-10 w-2 h-2 bg-gray-600 rounded-full opacity-60"></div>
                    <div className="absolute top-60 right-32 w-1 h-1 bg-gray-500 rounded-full opacity-40"></div>
                    <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-50"></div>
                    <div className="absolute top-80 right-1/4 w-1 h-1 bg-gray-500 rounded-full opacity-30"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center">
                        <Badge className="mb-8 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 border-gray-700 hover:from-gray-800 hover:to-gray-700">
                            AI-Powered Social Media Automation
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
                            Automate Your
                            <br />
                            <span className="font-normal bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Social Presence
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Advanced AI that engages with your audience, grows your following, and amplifies your reach across all
                            platforms. Effortlessly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-gray-300 text-base px-8 py-3 font-medium"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 text-base px-8 py-3 font-medium bg-transparent"
                            >
                                <Play className="mr-2 w-4 h-4" />
                                View Demo
                            </Button>
                        </div>
                        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                            <span>No credit card required</span>
                            <span>•</span>
                            <span>2-minute setup</span>
                            <span>•</span>
                            <span>Cancel anytime</span>
                        </div>
                    </div>

                    <div className="mt-20 relative">
                        <div className="absolute -top-8 -left-8 w-16 h-16 border border-gray-800 rotate-45 opacity-30"></div>
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rotate-12 opacity-40"></div>
                        <div className="absolute top-1/2 -left-12 w-8 h-8 border border-gray-700 rounded-full opacity-25"></div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-1 mx-auto max-w-4xl relative">
                            <img
                                src="/placeholder.svg?height=600&width=800&text=AutoReach Dashboard"
                                alt="AutoReach Dashboard"
                                className="w-full rounded-md"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Features />

            <Pricing />

            <Testimonial />


            <section className="py-24 bg-gradient-to-r from-gray-950 via-black to-gray-950 border-t border-gray-800 relative">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-800/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-700/10 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Ready to Scale?</h2>
                    <p className="text-xl text-gray-400 mb-12 font-light">
                        Join thousands of businesses automating their social media growth with AutoReach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-gray-300 text-base px-8 py-3 font-medium"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 text-base px-8 py-3 font-medium bg-transparent"
                        >
                            Schedule Demo
                        </Button>
                    </div>
                    <p className="text-gray-500 text-sm">No credit card required • 2-minute setup • Cancel anytime</p>
                </div>
            </section>

            <Footer /> 

        </div>
    )
}
