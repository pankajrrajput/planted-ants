"use client";

export default function AccidentalBeginning() {
  return (
    <div className="section left-image-right-content">
      <div className="container">

        {/* IMAGE */}
        <div className="imageWrapper">
          <img
            src="//theantzone.com/cdn/shop/files/IMG_6907_edited_edited.jpg?v=1690339605&width=1000"
            alt="Ants"
          />
        </div>

        {/* TEXT */}
        <div className="content">
          <h2>The Accidental Beginning.</h2>

          <p>
            Much to our surprise, a number of people did trek through the cold
            to visit us on that first day at the reptile convention, not all of
            whom were our parents. In fact, so many others ventured in that we
            sold our entire inventory of ants by the end of the day.
          </p>

          <p>
            As we watched a community form around ants in our clear glass tubes,
            our mission took shape. We set ourselves the task of offering
            widespread, sustainable access to ant-keeping and ant queens of the
            highest quality. That meant building a proper incubation center, and{" "}
            <strong>taking care a whole lot of ants.</strong>
          </p>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 1000px;
          margin: auto;
          flex-wrap: wrap;
        }

        .imageWrapper img {
          width: 100%;
          max-width: 450px;
          border-radius: 10px;
        }

        .content {
          max-width: 500px;
        }

        .content h2 {
          font-size: 32px;
          margin-bottom: 15px;
        }

        .content p {
          margin-bottom: 15px;
          line-height: 1.6;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}