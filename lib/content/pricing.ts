/**
 * ⚠️  CONFIRM EVERY FIGURE BEFORE DEPLOYING THIS PAGE.
 *
 * These ranges are not invented, but they are not confirmed either. They
 * come from the comment block at the bottom of sanity/schemas/category.ts,
 * which reads "CATEGORIES TO CREATE ... Ankara Collection (₦65,000 -
 * ₦80,000), Bubu Collection (₦50,000+), Lace Collection (₦100,000 -
 * ₦110,000)" and is annotated "based on actual data".
 *
 * Note they conflict with the placeholder prices that used to sit on the
 * homepage (₦42,000 - ₦68,000), so at least one of the two is out of date.
 * Anything without a sourced figure below is deliberately left as "on
 * request" rather than guessed.
 *
 * Why this page exists: oversabi.com.ng/pricing is still in Google's index
 * from the previous site, titled "Price list | How much to Sew | Tailor
 * Price", and it currently 404s. "How much do tailors charge in Nigeria"
 * is the highest-intent query in this market and you already ranked for it.
 */

export interface PriceLine {
  item: string
  detail: string
  from: number | null
  to: number | null
}

export const priceLines: PriceLine[] = [
  {
    item: 'Ankara pieces',
    detail: 'Wrap dresses, tailored blazers, separates and day dresses in wax print.',
    from: 65000,
    to: 80000,
  },
  {
    item: 'Bubu and kaftan (women)',
    detail: 'Flowing pieces, lined or unlined, with or without embroidery at the neckline.',
    from: 50000,
    to: null,
  },
  {
    item: 'Lace pieces',
    detail: 'Occasion and aso-ebi wear in beaded or corded lace.',
    from: 100000,
    to: 110000,
  },
  {
    item: "Men's wear",
    detail: 'Kaftan, agbada and senator, cut to measure. Aso Oke adds to the cloth cost.',
    from: null,
    to: null,
  },
  {
    item: 'Bridal',
    detail: 'Multi-fitting commissions. Quoted individually after consultation.',
    from: null,
    to: null,
  },
  {
    item: 'Alterations',
    detail: 'Taking in, letting out, hemming and repairs, including garments made elsewhere.',
    from: null,
    to: null,
  },
  {
    item: 'Accessories',
    detail: 'Headwraps, bags and matching pieces, often cut from cloth left over from a commission.',
    from: null,
    to: null,
  },
]

export const pricingFaqs = [
  {
    q: 'How much do tailors charge in Lagos?',
    a: 'It varies enormously — a roadside tailor may charge a few thousand naira for a simple gown, while an atelier working to measure with multiple fittings charges from around ₦50,000. What you are paying for at the higher end is pattern-cutting to your measurements, fittings, and finishing that survives washing.',
  },
  {
    q: 'Does the price include fabric?',
    a: 'Our quotes are for the making unless we agree otherwise. If you bring your own cloth you pay for the work only. If we source the cloth for you, it is quoted separately so you can see exactly what the material costs.',
  },
  {
    q: 'What makes one piece more expensive than another?',
    a: 'Four things, roughly in order: how much hand-finishing it needs, whether it is lined, how much cloth the cut consumes, and how many fittings it takes. Beading and embroidery are the biggest single additions.',
  },
  {
    q: 'Do you charge extra for measurements taken remotely?',
    a: 'No. Virtual fittings and remote measurement cost the same as coming into the atelier. Shipping is quoted separately based on destination.',
  },
  {
    q: 'How much deposit do you take?',
    a: 'We confirm the deposit at consultation, once the piece and the cloth are agreed.',
  },
]
