const brands = [
  { name: "Vlisco", abbr: "VLISCO" },
  { name: "Zara", abbr: "ZARA" },
  { name: "House of Chi", abbr: "house of chi" },
  { name: "Maybelline", abbr: "MAYBELLINE" },
  { name: "Gucci", abbr: "GUCCI" },
  { name: "ASOS", abbr: "asos" },
];

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      aria-label="Trusted by leading brands"
      className="py-14 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-8">
          Trusted by Leading Fashion Brands &amp; Manufacturers
        </p>

        <ul
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
          aria-label="Brand logos"
        >
          {brands.map((brand) => (
            <li key={brand.name}>
              <span
                className="text-xl font-black tracking-tight text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 transition-colors cursor-default select-none"
                aria-label={brand.name}
              >
                {brand.abbr}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}