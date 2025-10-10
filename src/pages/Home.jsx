import { Chrome, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-blue-700 mb-4"
      >
        My Leads Chrome Extension
      </motion.h1>
      <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
        Save and manage your favorite links — effortlessly, right from your browser.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/download" className="bg-blue-600 text-white px-6 py-3 rounded-full flex group items-center gap-2 hover:bg-blue-700">
          <Chrome className="group-hover:text-black/40 transition-colors duration-400 ease-linear" /> Download
        </Link>
        <a href="https://github.com/arifbasha559/MyLeads" className="group bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900">
          <Github className="group-hover:text-green-500 transition-colors duration-300 ease-linear" /> GitHub Repo
        </a>
      </div>
    </div>
  );
}
