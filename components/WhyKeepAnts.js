import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function WhyKeepAnts() {
  return (
    <section className="section section-full py-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/whykeppants.jpeg"
            alt="Ant keeping setup"
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Keep Ants?
          </h2>

          <p className="mb-4 text-gray-700">
            The great advantages of ant keeping are that ants are small and require less space than a dog, cat, or rabbit; also, ants do not make noise.
          </p>

          <p className="mb-4 text-gray-700">
            If their enclosures are cleaned properly they are odorless; they don’t require visits to a vet; other than their home, there are few expenses associated with their care; they do not require constant grooming; a queen ant has a long lifespan (about 10 years), and ants don’t require constant handling, socialization or interaction with their owners.
          </p>

          <p className="mb-6 text-gray-700">
            They can be left to care for themselves for a few days if need be. Unless someone is allergic to their bite, ants aren’t dangerous; they are also very educational pets for kids, teens, and adults alike, and are a great way to learn about nature, biological relationships, organization, and responsibility.
          </p>

          <a
            href={buildShopifyUrl("/collections/ants-for-sale")}
            className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Ants For Sale
          </a>

        </div>
      </div>

    </section>
  );
}