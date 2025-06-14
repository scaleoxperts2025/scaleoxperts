export default function SectionHeader({ title, subtitle }) {
    return (
      <>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-poppins">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-600 text-center mb-12 font-inter">
            {subtitle}
          </p>
        )}
      </>
    );
  }