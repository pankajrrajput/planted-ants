"use client";

export default function GoingNationalSection() {
  return (
    <div className="section section--narrow section-blends section-full">
      
      <div className="grid md:grid-cols-2 gap-10 items-start">

        

        {/* SCROLLING CONTENT */}
        <div className="space-y-20">

          {/* ITEM 01 */}
          <div className="opacity-100 transition-all">
            <span className="text-sm font-bold">01</span>
            <div className="sticky top-20">
            <img
                src="/images/going_national.webp"
                alt="Going National"
                className="small-img"
                height="50"
                width="50"
            />
            </div>

            <h2 className="text-4xl font-bold mt-2">
              Going National
            </h2>

            <p className="mt-4 text-base leading-relaxed">
              Seven years, an ant-based incubation room, over 15 different ant species,
              and a lot of innovation later, we are now a licensed biological company
              and are able to provide ants outside of California to 46 out of the 48 states.
            </p>

            <p className="mt-4 text-base leading-relaxed">
              We're still a small start-up, but every day we're getting closer to our mission.
              The ant named bobette remains in our heart.
            </p>
          </div>

        </div>

        {/* IMAGE (STATIC ON DESKTOP) */}
        <div className="sticky top-20">
          <img
            src="/images/going_national.webp"
            alt="Going National"
            className="rounded-sm w-full"
          />
        </div>

      </div>
    </div>
  );
}