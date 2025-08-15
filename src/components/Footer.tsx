import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Pricing", "API", "Integrations"],
    },
    {
        title: "Company",
        links: ["About", "Blog", "Careers", "Contact"],
    },
    {
        title: "Support",
        links: ["Help Center", "Documentation", "Status", "Privacy"],
    },
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-gray-800 py-16 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-sm flex items-center justify-center">
                                <Zap className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-semibold text-white">AutoReach</span>
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed">
                            AI-powered social media automation for modern businesses.
                        </p>
                    </div>

                    {/* Dynamic link columns */}
                    {footerLinks.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="font-medium text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3 text-gray-400">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href="#"
                                            className="hover:text-white transition-colors font-light"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-500 font-light">
                        &copy; 2024 AutoReach. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;