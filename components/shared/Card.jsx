export default function Card({ children, className = "" }) {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
        {children}
      </div>
    );
  }