import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-500 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Company Section */}
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Shop Section */}
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Deals</a></li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t border-gray-300 pt-6 flex justify-center">
                <p className="text-sm text-gray-900">&copy; 2024 Your Ecommerce Store. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
