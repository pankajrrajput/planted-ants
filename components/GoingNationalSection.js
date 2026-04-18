  "use client";

  export default function GoingNationalSection() {
    return (
      <div className="section section--narrow section-blends section-full content-section-with-image national-section">
        
        <div className="grid md:grid-cols-2 gap-10 items-start nation-inner">

          

          {/* SCROLLING CONTENT */}
          <div className="space-y-20">

            {/* ITEM 01 */}
            <div className="opacity-100 transition-all left-content">
              <span className="text-sm font-bold">01</span>
              <div className="image-item">
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
                Seven years, an ant-based incubation room, over 15 different ant species, and a lot of innovation later, we are now an licensed biological company and are able to provide ants outside of California to 46 out of the 48 states and sell these organisms on a state by state basis. All you have to do is purchase, and the ants will arrive within 24-48 hours after your purchase.
              </p>

              <p className="mt-4 text-base leading-relaxed">
                We're still a small start-up, but every day we're getting closer to our mission. Meanwhile, the little ant named bobette, which inspired our company and our name after dying next to a plant, remains in our heart -- and now she gets a good night’s sleep. 
              </p>
            </div>

          </div>

          {/* IMAGE (STATIC ON DESKTOP) */}
          <div className="sticky top-20 right-content">
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