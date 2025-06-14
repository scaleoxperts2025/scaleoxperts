export default function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/+918008129875"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1fbb58] transition-colors duration-300 z-50 flex items-center justify-center"
        style={{
          width: "50px",
          height: "50px",
          minWidth: "50px",
          minHeight: "50px",
        }}
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>
    );
  }