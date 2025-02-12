import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";

const QuestionCard = React.memo(
  ({
    question,
    answer,
    index,
    setHoveredIndex,
    isOpen,
    toggleQuestion,
    updateHeight,
  }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
      if (cardRef.current) {
        updateHeight(index, cardRef.current.offsetHeight, false);
      }
    }, [updateHeight, index]);

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
        if (isOpen) {
          const timer = setTimeout(
            () => updateHeight(index, cardRef.current.offsetHeight, true),
            300
          );
          return () => clearTimeout(timer);
        }
      }
    }, [isOpen, index, updateHeight]);

    return (
      <div
        ref={cardRef}
        className="relative flex flex-col items-start p-3 border-b border-black dark:border-white/20 w-full cursor-pointer"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => toggleQuestion(index)}
        data-index={index}
      >
        <div className="w-full flex items-center justify-between">
          <p className="sm:text-[26px] text-[20px] unselectable dark:text-white w-fit">
            {question}
          </p>
          <button className="rounded-full border border-black dark:border-white leading-none w-7 h-7 text-[25px] transition-transform duration-300">
            <div
              className="transition-transform duration-300 dark:text-white"
              style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
            >
              +
            </div>
          </button>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? "1000px" : "0px" }}
        >
          <p className="text-[18px] text-[#686868] dark:text-[#A0A0A0] mt-3">
            {answer}
          </p>
        </div>
      </div>
    );
  }
);

const AdoptionQuestions = ({ redirect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [openQuestions, setOpenQuestions] = useState({});
  const [heights, setHeights] = useState({});
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const questions = useMemo(
    () => [
      "Why should I choose ScaleOXperts over other firms?",
      "How can I get started with Scaloxperts?",
      "What kind of businesses can benefit the most from your services?",
      "How do you ensure measurable business growth?",
      "What is the cost structure for your services?",
      "What industries do you specialize in?",
      "How long does it take to see results?",
      "What if I need ongoing support after the initial consultation?",
    ],
    []
  );
  
  const answers = useMemo(
    () => [
      "Unlike generic consulting firms, we provide tailored, hands-on strategies specifically designed for MSMEs and startups. Our data-driven approach ensures sustainable growth, increased revenue, and enhanced brand visibility.",
      "Schedule a free consultation call  on our website or connect to us via our contact us page.",
      "At ScaleOXperts, we specialize in manufacturing, real estate, education, and hospitality, offering customized growth strategies for startups, mid-sized firms, and large enterprises. We help businesses scale, improve efficiency, and enhance market positioning.",
      "We focus on actionable, results-driven strategies. From sales optimization and lead generation to automation and digital marketing, we implement solutions that drive tangible improvements in revenue, conversions, and brand reach.",
      "At ScaleOXperts, we offer customized service packages with flexible pricing, tailored to your business size, industry, and goals. Book a free consultation to get a personalized quote and maximize growth with cost-efficient solutions.",
      "We work with a wide range of industries, including manufacturing, real estate, education, and hospitality. Our expertise allows us to customize strategies based on industry trends and business needs.",
      "Results depend on the scope of work, but many clients see noticeable improvements within 3-6 months. Sales optimizations and automation often provide quicker ROI, while branding and digital marketing strategies build long-term success.",
      "Absolutely! We offer continuous support and consulting to help businesses sustain and scale their growth over time. Our team remains a strategic partner, assisting with evolving business challenges and new opportunities.",
    ],
    []
  );

  const updateHeight = useCallback((index, height, isOpen) => {
    setHeights((prev) => ({
      ...prev,
      [index]: { ...prev[index], [isOpen ? "open" : "closed"]: height },
    }));
  }, []);

  const toggleQuestion = useCallback((index) => {
    setOpenQuestions((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const updateHoverStyle = useCallback(() => {
    if (hoveredIndex !== null && containerRef.current) {
      const card = containerRef.current.querySelector(
        `[data-index="${hoveredIndex}"]`
      );
      if (card) {
        const { offsetTop } = card;
        const isOpen = openQuestions[hoveredIndex];
        const height = isOpen
          ? heights[hoveredIndex]?.open
          : heights[hoveredIndex]?.closed;
        setHoverStyle({
          top: `${offsetTop}px`,
          height: `${height || card.offsetHeight}px`,
          opacity: 1,
        });
      }
    } else {
      setHoverStyle({ opacity: 0 });
    }
  }, [hoveredIndex, openQuestions, heights]);

  const recalculateHeights = useCallback(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll("[data-index]");
      cards.forEach((card, index) => {
        const isOpen = openQuestions[index];
        const contentElement = card.querySelector("div[style]");

        // Update closed height
        updateHeight(index, card.offsetHeight, false);

        // Update open height
        if (isOpen && contentElement) {
          contentElement.style.maxHeight = "none";
          updateHeight(index, card.offsetHeight, true);
          contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
        }
      });
    }
  }, [openQuestions, updateHeight]);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const widthDiff = Math.abs(currentWidth - windowWidth);

      if (widthDiff >= 10) {
        setWindowWidth(currentWidth);
        recalculateHeights();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [recalculateHeights, windowWidth]);

  useEffect(() => {
    updateHoverStyle();
  }, [updateHoverStyle, openQuestions, heights]);
  return (
    <div className="md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] max-w-[88rem] relative mx-auto bg-white dark:bg-[#131313] font-[poppins] flex">
      <div className="flex w-full mx-auto justify-between gap-24">
        <div className="flex-1 relative">
          <div ref={containerRef} className="w-full">
            <div
              className="absolute left-0 w-full bg-[#f5f5f5] dark:bg-white/5 transition-all duration-300 ease-in-out"
              style={hoverStyle}
            />
            {questions.map((question, index) => (
              <QuestionCard
                key={index}
                question={question}
                answer={answers[index]}
                index={index}
                setHoveredIndex={setHoveredIndex}
                isOpen={!!openQuestions[index]}
                toggleQuestion={toggleQuestion}
                updateHeight={updateHeight}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex bg-[#F1F1F1] dark:bg-[#1F1F1F] w-1/4 aspect-square rounded-xl flex-col align-middle justify-center mx-auto">
          <h2 className="text-center text-[5.25rem] leading-7 mb-11">🤔</h2>
          <h2 className="text-center font-bold font-inter text-2xl dark:text-white">
            Have more Questions? <br />
            Book a FREE Call
          </h2>
          <div className="flex justify-center mt-5">
            <button
              onClick={redirect}
              className="sm:px-[1.42rem] xss:px-[2rem] xss:py-[0.7rem] xss:text-lg sm:py-[0.4rem] bg-[#ff8d1a] border border-[#ff8d1a] transition-all hover:scale-[1.03] hover:bg-[#fe9328] hover:border-[#fe9328] text-white sm:text-base font-pop font-medium rounded-full"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdoptionQuestions);
