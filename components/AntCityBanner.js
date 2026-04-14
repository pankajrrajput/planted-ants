"use client";

export default function AntCityBanner() {
  return (
    <section className="ant-banner">
      <img
        src="/images/anit-sec-banner.png"
        alt="Build your ant city"
        className="ant-banner__image"
      />

      <div className="ant-banner__overlay">
        <div className="ant-banner__content">
          <h2>Build your ant city.</h2>
          <p>
            Embark on an architectural adventure as you build your own ant city!
          </p>
        </div>
      </div>
    </section>
  );
}