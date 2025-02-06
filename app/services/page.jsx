import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

const categories = [
  {
    title: "Sales & Business Growth Strategies",
    description: "Accelerate revenue growth with proven sales strategies and cutting-edge techniques. We develop comprehensive sales frameworks, implement effective lead generation, and leverage CRM automation to streamline your sales pipeline, helping you close more deals and boost your bottom line.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "Digital Marketing & Brand Development",
    description: "Elevate your brand's online presence with our holistic digital marketing solutions. We offer SEO, social media marketing, paid advertising, content marketing, and email campaigns to create a cohesive brand message and enhance your visibility in the digital landscape.",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "Intelligent Business Process Automation",
    description: "Transform operations with AI and machine learning-powered automation. We streamline workflows, reduce manual tasks, and increase efficiency by implementing robust CRM solutions and optimizing your operational framework, helping you reduce costs and focus on strategic activities.",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Startup Scaling Solutions",
    description: "Propel your startup to new heights with our tailored scaling solutions. We develop go-to-market strategies, optimize pricing models, secure funding, and help navigate rapid growth challenges, ensuring your business can handle increased demand efficiently.",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Market Research & Strategic Planning",
    description: "Gain a competitive edge with our comprehensive market research and strategic planning. We provide actionable insights into your industry, competitors, and target audience, helping you make informed decisions and craft winning business strategies.",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Lead Generation & Outreach Optimization",
    description: "Supercharge your sales pipeline with sophisticated lead generation and outreach optimization. We develop targeted campaigns, implement outbound marketing strategies, and optimize your sales funnel using cutting-edge tools and techniques to build a robust pipeline of qualified prospects.",
    icon: "📩",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Comprehensive Bookkeeping & Accounting Solutions",
    description: "Streamline your financial operations with our expert bookkeeping and accounting services. We provide accurate, timely, and hassle-free financial management, ensuring your books are always in order. From transaction recording to financial statement preparation, we handle it all, allowing you to focus on growing your business with peace of mind.",
    icon: "📚",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Strategic Virtual CFO Services",
    description: "Elevate your financial strategy with our Virtual CFO services. We provide expert financial planning, in-depth analysis, and strategic insights to drive your company's growth. Our experienced professionals offer high-level financial guidance, helping you make informed decisions, optimize cash flow, and achieve your business objectives without the cost of a full-time CFO.",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Custom Website & App Development",
    description: "Enhance your digital presence with our bespoke website and app development services. Leveraging our network of skilled freelancers, we create tailored, responsive websites and powerful applications that align with your brand and business goals. From sleek corporate sites to complex e-commerce platforms and mobile apps, we deliver cutting-edge digital solutions to elevate your online footprint.",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  }
]

const page = () => {
  return (
    <div className='min-h-screen pb-[2rem] bg-white relative overflow-hidden'>
      <NavBar />
      <div className='z-10 max-w-[88rem] pt-[2rem] mx-auto'>
        {categories.map((category, index) => (
          <section key={index} className={`container mx-auto pt-[5rem] py-16 flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={350}
                  className="rounded-[0.45rem] shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h3 className="text-orange-600 font-bold mb-2">OUR SERVICES</h3>
              <h2 className="text-4xl font-bold font-pop mb-4 text-[#0a0a0a]">{category.title}</h2>
              <p className="text-gray-700 mb-6 font-inter">
                {category.description}
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#ff8d1a] text-white px-6 py-2 rounded-full hover:bg-[#fe9328] transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default page