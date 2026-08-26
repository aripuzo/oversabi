/**
 * The fabric library.
 *
 * "Adire", "Aso Oke", "Ankara" and "Kente" are high-volume informational
 * queries with weak, low-authority results — this copy is what ranks for
 * them, and it doubles as the fallback whenever Sanity has no `fabric`
 * documents published.
 *
 * Historical detail here is checked against the Saint Louis Art Museum's
 * aso oke collection notes and Adire African Textiles' account of Yoruba
 * resist-dyeing. Correct it rather than removing it if you know better —
 * accuracy is the reason these pages are worth reading.
 */

export interface FabricSection {
  heading: string
  body: string
}

export interface FabricEntry {
  _id: string
  slug: string
  name: string
  origin: string
  /** Short summary, used on the index page and as the meta description. */
  description: string
  characteristics: string[]
  image?: string
  /** Long-form detail page content. */
  title: string
  intro: string
  sections: FabricSection[]
  bestFor: string[]
  care: string
}

export const fallbackFabrics: FabricEntry[] = [
  {
    _id: 'adire',
    slug: 'adire',
    name: 'Adire',
    origin: 'Yoruba, South-West Nigeria',
    description:
      'Indigo resist-dyed cotton from Abeokuta and Ibadan, patterned by tying, stitching or hand-painting cassava starch before dyeing. No two lengths are identical.',
    characteristics: ['Hand-dyed indigo', 'Medium-weight cotton', 'No two lengths alike'],
    image: '/images/fabric-adire.webp',
    title: 'Adire: Yoruba Indigo Resist-Dyed Cloth',
    intro:
      'Adire is cloth patterned by stopping dye from reaching parts of it. The word covers the whole family of Yoruba resist techniques, and the results range from a loose tie-dyed spiral to a stencilled pattern precise enough to look printed. It is the cloth we reach for most often when a client wants something recognisably Nigerian that still reads as modern.',
    sections: [
      {
        heading: 'Where it comes from',
        body: `Adire is a Yoruba craft centred on Abeokuta and Ibadan in South-West Nigeria. Simple tied patterns on locally woven, hand-spun cotton came first; the tradition expanded sharply in the early twentieth century when imported shirting cotton became widely available through European textile merchants, and Yoruba women turned a domestic craft into a commercial one. The 1920s and 30s were its commercial peak, and the most intricate starch-resist work continued into the early 1970s.

It has always been women's work. The dyers were artists and traders at once, and the patterns carried names, proverbs and social meaning rather than being decoration alone.`,
      },
      {
        heading: 'How the patterns are made',
        body: `Three techniques account for most of what you will see, and they can be combined on one cloth.

Adire oniko is tied resist. The cloth is bound with raffia, or tied around seeds and stones, so the bound areas stay pale. This gives the circles, spirals and starbursts most people picture first.

Adire alabere is stitched resist. Raffia is sewn through the cloth and pulled tight before dyeing, then cut away afterwards. It produces fine, linear, deliberate patterning.

Adire eleko is starch resist, and it is the most skilled of the three. Cassava starch paste is painted on freehand with a feather or a palm rib, or applied through a cut metal stencil, then washed off after dyeing. Freehand eleko is where the real artistry sits, and it is increasingly rare.`,
      },
      {
        heading: 'The indigo',
        body: `Traditional adire is dyed with indigo from the elu plant, fermented in large clay or cement pits. The cloth is dipped repeatedly — each dip deepens the colour, and a very dark ground may have taken a dozen or more. The dye oxidises from green to blue as the cloth meets the air, which is the part worth watching if you ever get to a dye pit.

Synthetic indigo largely replaced the plant dye through the twentieth century. It is cheaper and more consistent; it is also why some modern adire crocks onto lighter clothing. Ours is washed and set before it is cut.`,
      },
      {
        heading: 'What it is like to wear',
        body: `Adire is medium-weight cotton with enough body to hold a shape, which makes it far more versatile than its reputation as a wrapper cloth suggests. It takes structure well: a fitted shirt dress, a shirt with a proper collar, a straight trouser. It softens with every wash and looks better a year in than the day it was made.

The thing to plan for is that no two lengths match exactly. If a piece needs more than one length of cloth, the panels are chosen together at the start rather than sourced later.`,
      },
    ],
    bestFor: [
      'Shirt dresses and structured day dresses',
      'Men’s shirts and short-sleeved buba',
      'Jackets and unlined blazers',
      'Panelled detail against plain cloth',
    ],
    care:
      'Cold hand wash separately for the first three or four washes — indigo bleeds. Dry in shade, not direct sun. Iron on the reverse while very slightly damp.',
  },

  {
    _id: 'aso-oke',
    slug: 'aso-oke',
    name: 'Aso Oke',
    origin: 'Yoruba, hand-woven',
    description:
      'Yoruba prestige cloth, hand-woven in narrow strips and sewn edge to edge. Heavy, structured, and the traditional cloth of agbada, gele and bridal wear.',
    characteristics: ['Hand-woven strips', 'Heavyweight', 'Ceremonial and bridal'],
    title: 'Aso Oke: The Hand-Woven Cloth of Yoruba Ceremony',
    intro:
      'Aso oke is Yoruba prestige cloth, woven by hand on narrow-strip looms and sewn together into whole garments. It is heavier and stiffer than anything printed, and that is precisely the point — it is the reason an agbada holds its shoulders and a gele holds its shape.',
    sections: [
      {
        heading: 'Woven, not printed',
        body: `Yoruba weavers work on narrow-strip horizontal looms, producing cloth only a few inches wide and of variable length. A tailor then joins those strips along their finished edges until there is enough width for a garment. Every seam you can see on a piece of aso oke is a record of how it was made.

This is why aso oke costs what it does, and why lead times are longer. You are not buying cloth off a roll; you are commissioning a length that is woven for the piece.`,
      },
      {
        heading: 'The three classic cloths',
        body: `Sanyan is the tan, undyed wild silk, spun from the cocoons of the anaphe moth. It is the most understated of the three and historically the most prestigious — a sanyan agbada is a quiet statement rather than a loud one.

Alaari is magenta, woven from imported silk that reached Yorubaland through trans-Saharan trade by the eighteenth century. It is the celebratory cloth, and the one most people picture when they picture aso oke.

Etu is dark indigo cotton with a fine check, named for the guinea fowl whose plumage it resembles. It is the most wearable of the three outside ceremony.

Twentieth-century weaving introduced rayon, Lurex and metallic threads, which is where the shimmering contemporary aso oke comes from. Both traditions are alive; they simply do different jobs.`,
      },
      {
        heading: 'What it is made into',
        body: `For men: the agbada, the flowing outer robe, worn over a buba and sokoto, usually with a matching fila. For women: the buba, the iro wrapper, the gele headwrap and the ipele shoulder sash, and increasingly structured contemporary pieces — corsetry, panelled gowns, tailored jackets.

Aso ebi, the practice of a family or wedding party dressing in matched cloth, is where most aso oke is commissioned today. If you are ordering for a group, order the full quantity in one go: strips woven months apart will not match.`,
      },
      {
        heading: 'What it is like to wear',
        body: `Heavy, warm, and structured. It does not drape — it stands. That is an advantage for anything sculptural and a consideration in Lagos heat, which is why a full aso oke agbada is a ceremony garment rather than a daily one.

Lighter contemporary weaves exist and we use them for pieces meant to be worn more than twice a year. If you want the look without the weight, an aso oke yoke, cuff or sash against a lighter cloth reads beautifully and costs considerably less.`,
      },
    ],
    bestFor: [
      'Agbada, buba and sokoto',
      'Bridal and aso ebi ensembles',
      'Gele and ipele',
      'Structured jackets and panelled detail',
    ],
    care:
      'Dry clean only. Store folded with acid-free tissue rather than hung — the weight will distort the shoulders on a hanger. Keep metallic weaves out of direct sun.',
  },

  {
    _id: 'ankara',
    slug: 'ankara',
    name: 'Ankara',
    origin: 'African wax print',
    description:
      'Wax-resist printed cotton worn across West Africa. Colourfast, hard-wearing, cool in Lagos heat, and the workhorse of ready-to-wear.',
    characteristics: ['100% cotton', 'Colourfast wax print', 'Everyday and occasion'],
    image: '/images/fabric-ankara.webp',
    title: 'Ankara: African Wax Print, and How to Choose It',
    intro:
      'Ankara is the wax-print cotton you see everywhere in West Africa, and the cloth most of our ready-to-wear is cut from. It is cool, it is durable, it takes tailoring well, and the range of print is effectively infinite. Choosing it well is mostly about reading the cloth rather than the pattern.',
    sections: [
      {
        heading: 'A borrowed technique that became West African',
        body: `The wax-resist method came from Indonesian batik. Dutch manufacturers industrialised it in the nineteenth century intending to sell back into the Indonesian market, largely failed, and found an enthusiastic market on the West African coast instead.

What happened next is the interesting part. West African traders — overwhelmingly women — began dictating design, colour and motif to the mills, and the cloth became genuinely West African in everything but where it was printed. Prints acquired local names, proverbs and social meanings that had nothing to do with the Netherlands.

Today the cloth is printed in the Netherlands, in Ghana and Nigeria, and in very large volumes in China. The differences between them matter more than the differences between prints.`,
      },
      {
        heading: 'How to tell good cloth from poor cloth',
        body: `Look at the reverse. On genuine wax print the pattern penetrates the cloth and the back is nearly as vivid as the front. On a cheap roller print the back is pale and ghostly — that cloth will fade after a few washes.

Feel the weight. Good wax print has a slight stiffness and a faint waxy hand before its first wash, and it softens rather than going limp.

Look for the crackle. Fine veining in the colour is a signature of the wax-resist process, not a fault.

Check the selvedge. Reputable mills print their name and a design number along the edge.`,
      },
      {
        heading: 'Buying and planning',
        body: `Ankara is sold in six-yard pieces, and twelve for a full wrapper set. Six yards is comfortably enough for a dress with sleeves, or a skirt and top, with cloth left for a matching headwrap or a bag.

Prints run in limited batches. If you find one you love, buy the whole piece then — coming back in a month for two more yards of the same design usually does not work, and we cannot source what the mill has stopped printing.

Tell us at consultation if the print has a direction or a large repeat. Matching a bold motif across a seam or centring it on a bodice takes extra cloth, and it is the difference between a garment that looks made and one that looks assembled.`,
      },
      {
        heading: 'What it is like to wear',
        body: `Cotton, breathable, and forgiving — the reason it is worn daily across the region rather than saved for occasions. It holds a press, takes a structured seam, and survives Lagos humidity better than most alternatives.

It is our default for wrap dresses, tailored blazers, separates and children's wear, and it works as the quiet ground for a Kente or aso oke accent.`,
      },
    ],
    bestFor: [
      'Wrap dresses and day dresses',
      'Tailored blazers and separates',
      'Shirts, skirts and children’s wear',
      'Matching headwraps and accessories',
    ],
    care:
      'Cold machine wash inside out, mild detergent, no bleach. Dry in shade. Iron on the reverse on a medium setting.',
  },

  {
    _id: 'kente',
    slug: 'kente',
    name: 'Kente',
    origin: 'Akan, Ghana',
    description:
      'Silk and cotton interwoven into blocks of colour by Akan weavers, each pattern named and meaningful. Best used as accent rather than whole garments.',
    characteristics: ['Silk-cotton blend', 'Woven, not printed', 'Best used as accent'],
    title: 'Kente: Woven Meaning, and How We Use It',
    intro:
      'Kente is Ghanaian, not Nigerian, and we say so plainly because a great deal of what is sold as kente is neither woven nor Ghanaian. Real kente is hand-woven by Akan weavers in narrow strips, and every pattern carries a name and a meaning. We use it deliberately and sparingly.',
    sections: [
      {
        heading: 'What it is',
        body: `Kente is woven on narrow-strip looms by Asante and Ewe weavers in Ghana, from silk and cotton, in strips that are then sewn together. Historically it was royal cloth, restricted in who could wear which pattern.

Each design has a name and a proverb or history attached. That is the part most often lost when kente is printed onto polyester and sold by the yard — printed "kente" is a picture of a cloth, not the cloth. It is not dishonest to wear it, but it is not the same object, and we do not describe it as kente.`,
      },
      {
        heading: 'Why we use it as accent',
        body: `Two reasons, one practical and one about restraint.

The practical one: real kente is expensive and heavy, and a full garment is a serious commission. Most clients who ask for kente want the colour and the weave to register, not to be wearing four metres of it.

The other: kente is loud by design, and it reads more powerfully against something quiet. A kente yoke on a plain shirt, a cuff on a jacket, a sash over a simple gown, a collar and pocket detail — each of these lands harder than a full length, and costs a fraction.

If you do want a full kente piece we will make it, and we will source genuine woven cloth rather than print.`,
      },
      {
        heading: 'Wearing it respectfully',
        body: `Some patterns are associated with specific occasions, families or chieftaincy. If you are commissioning kente for a particular event, tell us and we will ask the supplier which design is appropriate — it takes one message and it means you are wearing the cloth as it is meant to be worn.

This matters more for kente than for the other cloths we work with, because its patterns are a language rather than a decoration.`,
      },
    ],
    bestFor: [
      'Yokes, cuffs and collars',
      'Sashes and stoles',
      'Panelled detail on plain cloth',
      'Full ceremonial pieces on commission',
    ],
    care:
      'Dry clean only. Store flat or loosely rolled. Never wring, and keep it out of prolonged direct sunlight.',
  },
]

export function getFabricBySlug(slug: string): FabricEntry | undefined {
  return fallbackFabrics.find((f) => f.slug === slug)
}
