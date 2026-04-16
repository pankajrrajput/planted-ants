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
    <svg
      role="presentation"
      fill="none"
      focusable="false"
      strokeWidth="2"
      width="24"
      height="24"
      className="hidden sm:block icon icon-picto-box"
      viewBox="0 0 24 24"
    >
      <path d="M2.22 5.472a.742.742 0 0 0-.33.194..." stroke="currentColor" />
      <path d="M22.269 5.997a.771.771 0 0 0-.16-.335..." fill="currentColor" />
      <path d="m17.5 8.255-5.215 2.03h-.571..." stroke="currentColor" />
    </svg>
  );

  const SupportIcon = () => (
    <svg
      role="presentation"
      fill="none"
      focusable="false"
      strokeWidth="2"
      width="24"
      height="24"
      className="hidden sm:block icon icon-picto-customer-support"
      viewBox="0 0 24 24"
    >
      <path d="M1.714 14.143c0-3.919..." fill="currentColor" />
      <path d="M2.38 11.263C2.524 6.537..." stroke="currentColor" />
    </svg>
  );

  const HeartIcon = () => (
    <svg
      role="presentation"
      fill="none"
      focusable="false"
      strokeWidth="2"
      width="24"
      height="24"
      className="hidden sm:block icon icon-picto-love"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 5.457C6.823-.895 1.358 3.619..."
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
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