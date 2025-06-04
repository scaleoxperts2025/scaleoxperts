
export async function generateMetadata() {
  return {
    title: "ScaleOXperts | Business Growth and Consulting Services",
    description:
      "Discover business growth strategy, IT consulting services, marketing and growth strategy, and consultancy sales with ScaleOXperts’ expert team. Book free consultation.",
    keywords: [
      "ScaleOXperts",
      " business growth services",
      " business consulting services",
      " business growth strategy",
      " IT consulting services",
      " marketing and growth strategy",
      " consultancy sales"
    ],
    alternates: {
      canonical: "https://scaleoxperts.com/services",
    },
  }
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}