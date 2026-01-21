import React from 'react'
import Main_Logo1 from './images/Main_Logo.png'
import NavbarVideo from './images/BG_video.mp4'
import { useRef, useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md border border-gray-200
                 transition-all duration-300 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Question */}
      <div className="flex justify-between items-center p-6">
        <h3 className="text-lg font-semibold text-gray-800">
          {question}
        </h3>

        <span
          className={`text-gray-500 transition-transform duration-300
            ${open ? "rotate-180" : "rotate-0"}`}
        >
          ▼
        </span>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-48 opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6"}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  
const [showTerms, setShowTerms] = useState(false);
const [showPrivacy, setShowPrivacy] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

const scrollRef = useRef(null);
const isDown = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const onMouseDown = (e) => {
  isDown.current = true;
  startX.current = e.pageX - scrollRef.current.offsetLeft;
  scrollLeft.current = scrollRef.current.scrollLeft;
};

const onMouseMove = (e) => {
  if (!isDown.current) return;
  e.preventDefault();
  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX.current) * 1.2; // speed control
  scrollRef.current.scrollLeft = scrollLeft.current - walk;
};

const onMouseUp = () => {
  isDown.current = false;
};

// Touch
const onTouchStart = (e) => {
  startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
  scrollLeft.current = scrollRef.current.scrollLeft;
};

const onTouchMove = (e) => {
  const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX.current) * 1.2;
  scrollRef.current.scrollLeft = scrollLeft.current - walk;
};

  return (
    <div>
      {/* NAVBAR */}
{/* NAVBAR */}
<nav className="sticky top-0 z-50 bg-white border-b shadow-md">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

    {/* LOGO */}
    <a
      href="#"
      className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
    >
      <img src={new URL('./images/Main_Logo.png', import.meta.url).href} className="w-10 sm:w-14 rounded-md" />
      <span className="text-xl sm:text-[25px] font-bold text-violet-800 flex">
        SnapTo<span className="text-orange-400">Art</span>
      </span>
    </a>

    {/* DESKTOP MENU */}
    <ul className="hidden md:flex gap-6 font-bold">
      {["products", "how-it-works", "why-us", "faqs", "contact"].map((id) => (
        <li key={id}>
          <button
            onClick={() => scrollToSection(id)}
            className="hover:text-blue-700"
          >
            {id.replace("-", " ").toUpperCase()}
          </button>
        </li>
      ))}
    </ul>

    {/* DESKTOP BUTTONS */}
    <div className="hidden md:flex gap-2">
      <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
        Sign In
      </button>
      <button className="bg-white hover:bg-gray-200 text-blue-900 font-bold py-1 px-3 rounded border">
        Get Started
      </button>
    </div>

    {/* HAMBURGER (MOBILE) */}
    <button
      className="md:hidden text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
      {["products", "how-it-works", "why-us", "faqs", "contact"].map((id) => (
        <button
          key={id}
          onClick={() => {
            scrollToSection(id);
            setMenuOpen(false);
          }}
          className="block w-full text-left font-semibold py-2 hover:text-blue-700"
        >
          {id.replace("-", " ").toUpperCase()}
        </button>
      ))}

      {/* MOBILE BUTTONS */}
      <div className="pt-3 border-t flex flex-col gap-2">
        <button className="bg-blue-900 text-white font-bold py-2 rounded">
          Sign In
        </button>
        <button className="bg-gray-100 text-blue-900 font-bold py-2 rounded">
          Get Started
        </button>
      </div>
    </div>
  )}
</nav>

       {/* Hero Content */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-10">

        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          src={NavbarVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

       
        <div className="relative z-10 h-full flex items-center text-white px-4 sm:px-25">
          <div class="border-1 p-6 rounded-2xl inset-0 bg-black/15 transition-transform duration-300 ease-out 
                      hover:scale-[1.05] hover:shadow-2xl">
            <h1 className="text-2xl sm:text-[40px] text-black font-semibold mb-4 font-stretch-50%">
              FROM PHOTO TO MASTERPIECE
            </h1>
            <br />
            <p className="text-2xl mb-6 max-w-xl mx-auto">
              Turn Your Photos into custom painting crafted  
              <br />
              with care and precision by professional artists.
            </p>
            <button className="bg-purple-500 text-white  px-6 py-3 rounded hover:bg-purple-600 border-1">
              ORDER NOW
            </button>
            <br /><br />
            <p class="font-style: italic px-1">Starting at ₹599</p>
          </div>
        </div>

      </section>

{/* PRODUCTS SECTION */}
<section id="products" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
      Our Art Styles
    </h2>
    <p className="text-gray-600 mb-12 text-justify font-semibold">Your photo is more than just an image. At SnapToArt, our artists handcraft each artwork using your photo as reference, paying attention to fine details, textures, and emotions. From realistic oil paintings to elegant pencil sketches and vibrant watercolors, every creation reflects true artistic skill.
From Photo to Masterpiece, we bring your vision to life on canvas.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      transition-transform duration-300 ease-out 
                      hover:scale-[1.04] hover:shadow-xl cursor-pointer">
        <img
          src="/src/images/products/oil-painting.jpg"
          alt="Oil Painting"
          className="w-full h-[310px] object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-xl font-semibold mb-2">Oil Painting</h3>
          <p className="text-sm text-gray-600">
            Rich textures and timeless elegance
          </p>
        </div>
      </div>

      {/* Repeat for other cards */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      transition-transform duration-300 ease-out 
                      hover:scale-[1.04] hover:shadow-xl cursor-pointer">
        <img
          src="/src/images/products/pencil-sketch.jpg"
          alt="Pencil Sketch"
          className="w-full h-[310px] object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-xl font-semibold mb-2">Pencil Sketch</h3>
          <p className="text-sm text-gray-600">
            Minimal and expressive hand-drawn art
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      transition-transform duration-300 ease-out 
                      hover:scale-[1.04] hover:shadow-xl cursor-pointer">
        <img
          src="/src/images/products/watercolor.jpg"
          alt="Watercolor"
          className="w-full h-[310px] object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-xl font-semibold mb-2">Watercolor</h3>
          <p className="text-sm text-gray-600">
            Soft blends with artistic depth
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      transition-transform duration-300 ease-out 
                      hover:scale-[1.04] hover:shadow-xl cursor-pointer">
        <img
          src="/src/images/products/colored-pencil.jpg"
          alt="Colored Pencil"
          className="w-full h-[310px] object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-xl font-semibold mb-2">Colored Pencil</h3>
          <p className="text-sm text-gray-600">
            Vibrant details with smooth shading
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      transition-transform duration-300 ease-out 
                      hover:scale-[1.04] hover:shadow-xl cursor-pointer">
        <img
          src="/src/images/products/acrylic-painting.jpg"
          alt="Acrylic Painting"
          className="w-full h-[310px] object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-xl font-semibold mb-2">Acrylic Painting</h3>
          <p className="text-sm text-gray-600">
            Bold colors and modern texture
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                      transition-transform duration-300 ease-out 
                      hover:scale-[1.04] hover:shadow-xl cursor-pointer">
        <img
          src="/src/images/products/charcoal-drawing.jpg"
          alt="Charcoal Drawing"
          className="w-full h-[310px] object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-xl font-semibold mb-2">Charcoal Drawing</h3>
          <p className="text-sm text-gray-600">
            Dramatic contrast and depth
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* HOW IT WORKS SECTION */}
<section id="how-it-works" className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Title */}
    <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
      How It Works
    </h2>

    {/* Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14 text-center relative">


      {/* Step 1 */}
      <div className="p-4 sm:p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl border-1">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ">
          <img src="./src/images/upload_img.png"/>
        </div>
        <h3 className="text-lg font-semibold mb-2">Upload Your Photo</h3>
        <p className="text-sm text-gray-600">
          Choose a clear photo and upload it securely to our platform.
        </p>
        
      </div>

      {/* Step 2 */}
      <div className="p-4 sm:p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl border-1">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
          <img src="./src/images/check_mark.jpg" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Select Art Style</h3>
        <p className="text-sm text-gray-600">
          Pick from oil painting, pencil sketch, watercolor, and more.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-4 sm:p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl border-1">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
          <img src="./src/images/paint_brush.jpg" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Artist Creation</h3>
        <p className="text-sm text-gray-600">
          Our professional artists handcraft your artwork with precision.
        </p>
      </div>

      {/* Step 4 */}
      <div className="p-4 sm:p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl border-1">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold">
          <img src="./src/images/fast_delivery.jpg" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Delivered to You</h3>
        <p className="text-sm text-gray-600">
          Get the final artwork delivered to your doorstep.
        </p>
      </div>
      <div className="hidden lg:block absolute top-[90px] left-[21%]  text-gray-500 text-6xl ">
  🠆
</div>
<div className="hidden lg:block absolute top-[90px] left-[48%]  text-gray-500 text-6xl ">
  🠆
</div>
<div className=" hidden lg:block absolute top-[90px] left-[75%]  text-gray-500 text-6xl ">
  🠆
</div>
    </div>

  </div>
</section>

{/* REVIEWS */}
<section id="why-us" className="py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
      Loved by Our Customers
    </h2>
    <p className="text-justify text-gray-600 mb-8 font-semibold">Thousands of customers trust SnapToArt to transform their photos into beautiful, hand-painted artworks.
Each piece is carefully created by skilled artists with attention to detail and emotion.
From Photo to Masterpiece, we turn your moments into timeless art.</p>
    <div
  ref={scrollRef}
  className="overflow-x-auto cursor-grab active:cursor-grabbing"
  onMouseDown={onMouseDown}
  onMouseMove={onMouseMove}
  onMouseUp={onMouseUp}
  onMouseLeave={onMouseUp}
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onMouseUp}
>
  <div className="marquee flex gap-8 select-none p-2">



        {/* REVIEW CARD */}
        <div className="min-w-[280px] sm:min-w-[340px] bg-gray-50 p-6 rounded-2xl shadow-md border-1 border-gray-400">
          <p className="text-gray-700 mb-4">
            “Absolutely stunning artwork. It feels like a real painting made just for me.”
          </p>
          <div className="flex justify-between">
            <span className="font-semibold">Rohit Sharma</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

        <div className="min-w-[280px] sm:min-w-[340px] bg-gray-50 p-6 rounded-2xl shadow-md border-1 border-gray-400">
          <p className="text-gray-700 mb-4">
            “The oil painting quality exceeded my expectations.”
          </p>
          <div className="flex justify-between">
            <span className="font-semibold">Ananya Verma</span>
            <span className="text-yellow-400">★★★★</span>
          </div>
        </div>

        <div className="min-w-[280px] sm:min-w-[340px] bg-gray-50 p-6 rounded-2xl shadow-md border-1 border-gray-400">
          <p className="text-gray-700 mb-4">
            “Fast delivery and beautiful detailing. Highly recommended.”
          </p>
          <div className="flex justify-between">
            <span className="font-semibold">Suresh Patel</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

        <div className="min-w-[280px] sm:min-w-[340px] bg-gray-50 p-6 rounded-2xl shadow-md border-1 border-gray-400">
          <p className="text-gray-700 mb-4">
            “Customer support was very helpful and responsive.”
          </p>
          <div className="flex justify-between">
            <span className="font-semibold">Neha Kapoor</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

        {/* DUPLICATE CONTENT FOR LOOP */}
        <div className="min-w-[280px] sm:min-w-[340px] bg-gray-50 p-6 rounded-2xl shadow-md border-1 border-gray-400">
          <p className="text-gray-700 mb-4">
            “Absolutely stunning artwork. It feels like a real painting made just for me.”
          </p>
          <div className="flex justify-between">
            <span className="font-semibold">Rohit Sharma</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

{/* FAQ SECTION */}
<section id="faqs" className="py-5 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      <FaqItem
        question="What is SnapToArt?"
        answer="SnapToArt is a custom art platform that transforms your photos into beautiful, hand-crafted artworks such as oil paintings, pencil sketches, watercolors, and more—created by professional artists."
      />

      <FaqItem
        question="How long does delivery take?"
        answer="Our standard delivery time is between 5–7 business days depending on your location. Express delivery options are also available at checkout."
      />

      <FaqItem
        question="Can I customize my photo album design?"
        answer="Yes, you can customize the art style, size, framing, and finishing options. Our artists work closely to match your preferences."
      />

      <FaqItem
        question="Do you offer international shipping?"
        answer="Yes, we offer international shipping to selected countries. Shipping costs and delivery timelines may vary based on destination."
      />

      <FaqItem
        question="What image formats are supported?"
        answer="We support common image formats such as JPG, JPEG, PNG, and HEIC. For best results, upload high-resolution images."
      />

      <FaqItem
        question="Is there a limit to how many photos I can upload?"
        answer="You can upload multiple photos per order. The exact limit depends on the product type selected during checkout."
      />
    </div>

  </div>
</section>

{/* CONTACT US SECTION */}
<section id="contact" className="bg-gray-400 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT: GOOGLE MAP */}
    <div className="w-full h-[220px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg border-1 border-gray-300">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.291438534342!2d77.57287849160643!3d12.898350049640996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15420bf579bd%3A0x967944e22e144705!2sSarakki%20Lake!5e0!3m2!1sen!2sin!4v1768924058259!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* RIGHT: CONTACT DETAILS */}
    <div className="bg-gray-200 p-6  rounded-xl shadow-lg border-1 border-gray-300 h-[300px]">
      <h2 className="text-4xl font-bold mb-4 ml-2 text-gray-900">
        Contact Us
      </h2>

      {/* Address */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-blue-600 text-xl">📍</span>
        <p className="text-gray-800 leading-relaxed">
          Sarakki Lake, JP nagar 6th phase
          Bengaluru,<br />
           Karnataka - 560076
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-blue-600 text-xl">📞</span>
        <p className="text-gray-800">
          +91 6363623220
        </p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-blue-600 text-xl">✉️</span>
        <p className="text-gray-800">
          praveengmpravin@gmail.com
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-blue-600 ml-1 ">
        <a href="#" className="hover:bg-blue-500 h-5 w-5 hover:scale-110 transition-transform"><img src="./src/images/fb_image.png"/></a>
        <a href="#" className="hover:bg-orange-300 h-5 w-5 hover:scale-110 transition-transform"><img src="./src/images/insta_image.png"/></a>
        <a href="#" className="h-5 w-5 hover:scale-110 transition-transform"><img src="./src/images/x_image.png"/></a>
        <a href="#" className="hover:bg-blue-500 h-5 w-5 hover:scale-110 transition-transform"><img src="./src/images/linkedin-img.png"/></a>
      </div>
    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-gray-800 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
    {/* Links */}
    <div className="flex justify-center gap-2 text-sm mb-4">
      <button
  onClick={() => setShowTerms(true)}
  className="hover:text-white hover:underline transition-colors"
>
  Terms of Service
</button>

      <p> | </p>
      <button
  onClick={() => setShowPrivacy(true)}
  className="hover:text-white hover:underline transition-colors"
>
  Privacy Policy
</button>
    </div>

    {/* Copyright */}
    <p className="text-sm text-gray-500">
      © 2026 All rights reserved by SnapToArt. 
    </p>

  </div>
</footer>
{showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
{showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}


    </div>
  )
}

export default App


const TermsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-[92%] sm:w-[90%] max-w-3xl rounded-lg shadow-xl overflow-hidden">


        {/* Header */}
        <div className="px-6 py-4 border-b text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Terms & Conditions
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto text-gray-700 space-y-4">


          <p>
            Welcome to <strong>SnapToArt</strong>! By using our platform,
            you agree to the following terms and conditions:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              SnapToArt allows users to upload personal photographs for
              custom artwork for private, non-commercial use.
            </li>
            <li>
              You are responsible for ensuring uploaded images comply
              with copyright and content laws.
            </li>
            <li>
              Orders once artwork creation begins cannot be modified.
            </li>
            <li>
              SnapToArt is not liable for courier delays or incorrect
              delivery information.
            </li>
            <li>
              By placing an order, you agree to our Privacy Policy.
            </li>
          </ul>

          <p>
            Thank you for choosing <strong>SnapToArt</strong>.
          </p>

        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-t flex justify-end">

          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};

const PrivacyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-[92%] sm:w-[90%] max-w-3xl rounded-lg shadow-xl overflow-hidden">


        {/* Header */}
        <div className="px-6 py-4 border-b text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Privacy Policy
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto text-gray-700 space-y-4">


          <p>
            At <strong>SnapToArt</strong>, your privacy is important to us.
            This policy explains how we collect, use, and protect your information.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              We collect personal information such as name, email, phone number,
              and uploaded images solely to process your orders.
            </li>
            <li>
              Uploaded photos are used only for artwork creation and are not shared
              with third parties without consent.
            </li>
            <li>
              Payment information is processed securely through trusted payment providers.
              SnapToArt does not store card details.
            </li>
            <li>
              We may use cookies to improve user experience and website performance.
            </li>
            <li>
              You may contact us anytime to request data removal or clarification.
            </li>
          </ul>

          <p>
            By using SnapToArt, you agree to this Privacy Policy.
          </p>

        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-t flex justify-end">

          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};

