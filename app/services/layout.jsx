
export async function generateMetadata(){
  return {
    title: "ScaleoXperts Services | Sales Consulting & Digital Marketing Solutions",
    description:
      "Digital marketing, strategy and growth consulting. ScaleoXperts offers expert services to help your business grow. Your best online marketing company. Start today!",
    keywords: [
      "digital marketing consulting",
      "strategy consulting",
      "growth consulting",
      "scaleoxperts",
      "best online marketing company",
    ],
    other: {
      "link:canonical": "https://scaleoxperts.com/services",
    },
  }
};
  
  export default function ServicesLayout({ children }) {
    return <>{children}</>;
  }