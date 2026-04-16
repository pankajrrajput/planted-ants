export default function TextWithIcons() {
  const items = [
    {
      title: "Free Shipping",
      text: "Free shipping on orders of $99",
      icon: "box",
    },
    {
      title: "24/7 Customer Service",
      text: "Email us at plantedants@gmail.com",
      icon: "support",
    },
    {
      title: "100% Guaranteed",
      text: "All orders are guaranteed to arrive alive.",
      icon: "heart",
    },
  ];
  const BoxIcon = () => (
    <img src="/images/icon1.png" alt="Box Icon" />
  );

  const SupportIcon = () => (
    <img src="/images/icon2.png" alt="Support Icon" />
  );

  const HeartIcon = () => (
    <img src="/images/icon3.png" alt="Heart Icon" />
  );
  const icons = {
    box: BoxIcon,
    support: SupportIcon,
    heart: HeartIcon,
  };

  return (
    <div className="bg-gray-100 py-10 text-with-icon">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center icon-item-main">
        {items.map((item, i) => {
          const Icon = icons[item.icon];

          return (
            <div key={i} className="flex flex-col items-center gap-3 px-4">
              {/* SVG ICON */}
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon />
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}