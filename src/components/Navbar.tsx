import { Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-sm top-0 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-sm flex items-center justify-center">
                            <Zap className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-xl font-semibold text-white">AutoReach</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                            Reviews
                        </Link>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                        >
                            <Link href='/sign-in'>Sign In</Link>
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-gray-300"
                        >
                            Start Free Trial
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;