import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-teal-600 to-green-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold">NewsViewer</h2>
          <p className="text-white/80 mt-2">
            Your source for the latest and trending global news.
          </p>
        </div>

        {/* Right */}
        <div className="flex md:justify-end items-center space-x-5 text-2xl">
          <Link href="#" className="hover:text-gray-200">
            <FaFacebook />
          </Link>

          <Link href="https://github.com" className="hover:text-gray-200">
            <FaGithub />
          </Link>

          <Link href="https://linkedin.com" className="hover:text-gray-200">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div className="text-center py-4 border-t border-white/20">
        <p className="text-white/80">
          © {new Date().getFullYear()} NewsViewer — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
