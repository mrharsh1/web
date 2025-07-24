import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white border-t border-neutral-800 px-8 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-2">Creware</h2>
          <p className="mb-4 text-neutral-300">A Warehouse of Creativity</p>
          <p className="mb-6 text-neutral-400 text-sm">At Creware Technologies, we're more than just an IT company; we're a creative hub where ideas take shape, igniting digital transformation for businesses worldwide where innovation and imagination converge to craft exceptional IT software solutions.</p>
          {/* Newsletter */}
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-white text-neutral-900 font-semibold hover:bg-neutral-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Addresses */}
        <div>
          <h3 className="font-semibold mb-2">Lewes, US</h3>
          <p className="text-neutral-400 text-sm mb-2">Coastal Highway<br/>+91 99533-07846</p>
          <h3 className="font-semibold mb-2 mt-4">Nairobi, Kenya</h3>
          <p className="text-neutral-400 text-sm">Rhapta Road, Westlands<br/>+254 792793117</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Bangalore, INDIA</h3>
          <p className="text-neutral-400 text-sm mb-2">Himagiri Silicon City, Thogur Cross<br/>+91 78294-13575</p>
          <h3 className="font-semibold mb-2 mt-4">Jaipur, INDIA</h3>
          <p className="text-neutral-400 text-sm">Mansarovar, Creware Ln<br/>+91 78294-13575</p>
        </div>
        {/* Navigation & Contact */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-semibold mb-2">About us</h3>
            <ul className="text-neutral-400 text-sm space-y-1">
              <li>Services</li>
              <li>Hire Team</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Partners</h3>
            <ul className="text-neutral-400 text-sm space-y-1">
              <li>Careers</li>
              <li>Contact us</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <a href="mailto:info@creware.asia" className="text-neutral-200 text-sm hover:underline">info@creware.asia</a>
            <div className="flex gap-3 mt-2 text-xl">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Email"><FaEnvelope /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-neutral-800 pt-4 text-center text-neutral-500 text-sm">
        &copy; {new Date().getFullYear()} Creware. All rights reserved.
      </div>
    </footer>
  );
}

