/**
 * Fallback fabric library, used when Sanity has no `fabric` documents.
 * "Adire", "Aso Oke", "Ankara" and "Kente" are high-volume informational
 * queries with weak competition — this copy is what ranks for them.
 */
export interface FabricEntry {
  _id: string
  name: string
  origin: string
  description: string
  characteristics: string[]
  image?: string
}

export const fallbackFabrics: FabricEntry[] = [
  {
    _id: 'adire',
    name: 'Adire',
    origin: 'Yoruba, South-West Nigeria',
    description:
      'Indigo-dyed cotton made by Yoruba women in Abeokuta and Ibadan, patterned by tying, stitching or hand-painting cassava paste before dyeing. Every length is slightly different, which is the point. Adire has enough body for structured dresses and shirts and softens with each wash.',
    characteristics: ['Hand-dyed indigo', 'Medium-weight cotton', 'No two lengths alike'],
    image: '/images/fabric-adire.webp',
  },
  {
    _id: 'aso-oke',
    name: 'Aso Oke',
    origin: 'Yoruba, hand-woven',
    description:
      'Narrow strips woven on a traditional loom and sewn edge to edge, historically the cloth of Yoruba ceremony. Heavier and stiffer than Ankara, which is exactly why it holds the shoulders of an agbada and the sculpture of a gele. Sanyan, alaari and etu are the classic types.',
    characteristics: ['Hand-woven strips', 'Heavyweight', 'Ceremonial and bridal'],
  },
  {
    _id: 'ankara',
    name: 'Ankara',
    origin: 'African wax print',
    description:
      'The wax-resist cotton print worn across West Africa. Colourfast, hard-wearing and cool in Lagos heat, which makes it the workhorse of the ready-to-wear collection — wrap dresses, tailored blazers, separates. Prints run in limited batches, so a design you like is worth ordering while it lasts.',
    characteristics: ['100% cotton', 'Colourfast wax print', 'Everyday and occasion'],
    image: '/images/fabric-ankara.webp',
  },
  {
    _id: 'kente',
    name: 'Kente',
    origin: 'Akan, Ghana',
    description:
      'Silk and cotton interwoven into blocks of colour by Akan weavers, each pattern carrying its own meaning. We use it in panels and accents rather than whole garments — a Kente yoke, cuff or sash against a plainer cloth reads better than a full length and costs considerably less.',
    characteristics: ['Silk-cotton blend', 'Woven, not printed', 'Best used as accent'],
  },
]
