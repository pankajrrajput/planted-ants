export default function StorySection() {
  return (
    <section className="bg-[#f0f0f0] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          It began with an ant named bob.
        </h2>

        {/* Content */}
        <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>
            Going back to 2015, Kushal saved an ant during his college years
            that his roommate was about to squish and named it bob. Bob lived a
            lavish and great life.
          </p>

          <p>
            Due to bob's death weeks later, Kushal wanted to start an ant colony
            and he eventually figured out that bob was actually a girl, as all
            worker ants are. It was quite the shock to him, so he renamed her
            bobette.
          </p>
        </div>

      </div>
    </section>
  );
}