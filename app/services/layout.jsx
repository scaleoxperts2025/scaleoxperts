
export async function generateMetadata(){
  return {
    title: "ScaleOXperts Clients | Strategy, Sales & Growth Consulting",
    description:
      "Discover how ScaleOXperts empowers clients with growth consultant expertise, go to market strategy, IT consulting services, and business process consulting.",
    keywords: [
      "Scaleoxperts",
      " growth consultant expertise",
      " go to market strategy",
      " IT consulting services",
      " business process consulting"
    ],
    alternates: {
      canonical: "https://scaleoxperts.com/services",
    },
  }
};
  
  export default function ServicesLayout({ children }) {
    return <>{children}</>;
  }