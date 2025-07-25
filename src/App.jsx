import React, { useState } from "react";
const currentYear = new Date().getFullYear();

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => setDark(!dark);

  return (
    <div className={dark ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="fixed top-0 w-full bg-orange-100 dark:bg-gray-800 px-6 py-4 shadow z-10 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kujo Patu</h1>
        <button onClick={toggleDark} className="text-sm bg-gray-700 text-white px-3 py-1 rounded">
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="pt-20 px-6 space-y-12 max-w-4xl mx-auto">

        <section className="text-center">
          <img src="/profile.jpg" className="w-32 h-32 rounded-full mx-auto border-4 border-orange-400" />
          <h2 className="text-3xl font-bold mt-4">Kujo Patu Emmanuel</h2>
          <p className="text-lg">Computer Engineer | Logistics Professional</p>
          <a href="/resume.pdf" className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded" download>Download Resume</a>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Services</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>General Supplies & Distribution</li>
            <li>Logistics & Warehouse Management</li>
            <li>Web Development</li>
            <li>IT Consulting</li>
            <li>Product Distribution</li>
            <li>Data Analytics & Dashboards</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          <ul className="space-y-2">
            <li><strong>Inventory Tracker:</strong> Warehouse system</li>
            <li><strong>React Portfolio:</strong> Personal website builder</li>
            <li><strong>Logistics Dashboard:</strong> Supply chain dashboard</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Blog Posts</h3>
          <ul className="space-y-2">
            <li><strong>React Forms:</strong> Contact forms with EmailJS</li>
            <li><strong>Tailwind Tips:</strong> Fast styling with utility classes</li>
            <li><strong>AI in Logistics:</strong> Smarter decision making</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Testimonials</h3>
          <blockquote className="italic">"Kujo is reliable and highly professional." – A. Client</blockquote>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <div className="space-x-4">
            <a href="https://wa.me/2348034445666" className="bg-green-600 text-white px-4 py-2 rounded" target="_blank">WhatsApp</a>
            <a href="https://calendly.com/sincereemmy" className="bg-blue-600 text-white px-4 py-2 rounded" target="_blank">Book on Calendly</a>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          &copy; {currentYear} Kujo Patu Emmanuel
        </footer>
      </div>
    </div>
  );
}