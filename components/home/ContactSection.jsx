import { forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => {
  return (
    <section className="w-full pt-20 pb-10">
      <div className="max-w-[80rem] mx-auto px-4">
        <div ref={ref} className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          <div className="md:flex">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;

function ContactInfo() {
  return (
    <div className="md:w-2/5 bg-gradient-to-r from-[#f97316] to-[#f97416ea] p-8 md:p-12 text-white">
      <h3 className="text-3xl font-mono font-semibold mb-6">
        Contact Us
      </h3>
      <p className="mb-8 font-inter text-orange-100">
        We'd love to hear from you. Drop us a message and we'll get
        back to you as soon as possible.
      </p>
      <div className="space-y-6">
        <ContactItem 
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          }
          text="+91 8008129875"
        />
        <ContactItem 
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          }
          text="scaleoxperts@gmail.com"
        />
        <ContactItem 
          icon={
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </>
          }
          text="3rd Floor, Oyster Complex, Somajiguda, Hyderabad, India"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center group">
      <div className="w-12 h-12 border border-orange-300 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
        <svg
          className="w-6 h-6 text-orange-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon}
        </svg>
      </div>
      <span className="font-inter text-orange-100">
        {text}
      </span>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="md:w-3/5 p-4 sm:p-12">
      <form action="https://formspree.io/f/xqaelgar" method="POST" className="space-y-6">
        <FormField 
          id="name" 
          label="Name" 
          type="text" 
          placeholder="Your Name" 
        />
        <FormField 
          id="email" 
          label="Email" 
          type="email" 
          placeholder="your@email.com" 
        />
        <FormField 
          id="message" 
          label="Message" 
          type="textarea" 
          placeholder="Your message here..." 
        />
        <SubmitButton />
      </form>
    </div>
  );
}

function FormField({ id, label, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 font-pop">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 font-inter"
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 font-inter"
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
}

function SubmitButton() {
  return (
    <div>
      <button
        type="submit"
        className="w-full px-6 xs:px-8 sm:px-10 py-3 xs:py-3 
          text-sm xs:text-base md:text-lg 
          bg-[#ff801e] border border-[#ff8d1a] 
          transition-all hover:scale-[1.03] hover:bg-[#fe9328] 
          hover:border-[#fe9328] text-white 
          font-pop font-medium rounded-full whitespace-nowrap"
      >
        Send Message
      </button>
    </div>
  );
}