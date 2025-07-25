import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 px-6 md:px-12 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold mb-2 tracking-tight">Bhaviya</h2>
          <p className="text-gray-400 text-base mb-2">
            Bhaviya is a creative technology company delivering modern, scalable digital solutions for businesses worldwide. We blend innovation, design, and engineering to help you grow.
          </p>
        </div>
        {/* Addresses */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Our Offices</h3>
          <div className="flex items-start gap-2 text-gray-300">
            <FaMapMarkerAlt className="mt-1 text-gray-400" />
            <div>
              <span className="font-semibold text-white">India</span><br />
              123 Tech Park, Bangalore, KA 560001<br />
              +91 98765 43210
            </div>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <FaMapMarkerAlt className="mt-1 text-gray-400" />
            <div>
              <span className="font-semibold text-white">USA</span><br />
              456 Silicon Ave, San Francisco, CA 94107<br />
              +1 (415) 555-1234
            </div>
          </div>
        </div>
        {/* Contact & Support */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Contact & Support</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-gray-400" />
            <a href="mailto:support@bhaviya.com" className="hover:text-white transition">support@bhaviya.com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt className="text-gray-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaHeadset className="text-gray-400" />
            <a href="#" className="hover:text-white transition">24/7 Live Chat</a>
          </div>
          <div className="flex gap-4 mt-2 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition"><FaLinkedin /></a>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <p className="text-gray-400 text-base">Get the latest updates, tips, and offers from Bhaviya in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bhaviya. All rights reserved.
      </div>
    </footer>
  );
}

