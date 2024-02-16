import React from "react";

function ContactUsPage() {
  return (
    <div class="container mx-auto px-4">
      {/* Header */}
      <header class="py-8">
        <nav class="flex items-center justify-between">
          {/* <h1 class="text-2xl font-bold">Your Website Name</h1> */}
          <ul class="flex items-center space-x-4">
            <li>
              <a
                href="/"
                class="px-3 py-2 text-lg font-medium hover:bg-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                class="px-3 py-2 text-lg font-medium hover:bg-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                class="px-3 py-2 text-lg font-medium hover:bg-gray-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main class="py-12">
        <section class="mb-8">
          <h2 class="text-xl font-bold mb-4">Hero Section</h2>
          <p class="text-gray-700">This is the hero section of your website.</p>
        </section>
        <section class="mb-8">
          <h2 class="text-xl font-bold mb-4">About Us</h2>
          <p class="text-gray-700">
            This is where you can tell visitors about your website or business.
          </p>
        </section>
        {/* <section class="mb-8">
          <h2 class="text-xl font-bold mb-4">Contact Us</h2>
          <p class="text-gray-700">This is where visitors can contact you.</p>
          <form>
            <label htmlFor="name" class="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              class="block w-full border rounded py-2 px-3 mb-4"
            />
            <label htmlFor="email" class="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              class="block w-full border rounded py-2 px-3 mb-4"
            />
            <label htmlFor="message" class="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              class="block w-full border rounded py-2 px-3 mb-4"
            ></textarea>
            <button
              type="submit"
              class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </section> */}
      </main>

      {/* Footer */}
      <footer class="py-4 text-center">
        <p>Copyright &copy; 2023 Your Website Name</p>
      </footer>
    </div>
  );
}

export default ContactUsPage;
