import QuestionsCards from "../QuestionsCards/QuestionsCards";

export default function FAQ({ redirect }) {
  return (
    <section className="mt-24">
      <h2 className="text-center font-inter text-[#090909] sm:text-5xl xs:text-4xl xss:text-3xl leading-10 relative xs:w-full xss:w-[97%] z-10 mb-10">
        Questions? Answers.
      </h2>
      <QuestionsCards redirect={redirect} />
    </section>
  );
}