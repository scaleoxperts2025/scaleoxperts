export default function Section({ title, content, tag = "h2" }) {
    const Tag = tag;
    return (
      <div className="mb-16">
        <Tag className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
          {title}
        </Tag>
        <p className="text-gray-600 leading-relaxed font-inter">{content}</p>
      </div>
    );
  }