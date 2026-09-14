export const instagramUrl = "https://www.instagram.com/wlsnarchives/";
export const instagramHandle = "@wlsnarchives";
export const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

// Layout samples only. Replace these records with the client's licensed photographs.
export const photographs = [
  { id: "garden", title: "Garden Venue", category: "stories", label: "Story", image: "garden", alt: "A wedding moment outdoors — sample photograph", shape: "landscape" },
  { id: "studio", title: "Studio Series", category: "portraits", label: "Portrait", image: "studio", alt: "A close-up portrait in soft light — sample photograph", shape: "portrait" },
  { id: "editorial", title: "Editorial Headshot", category: "portraits", label: "Portrait", image: "editorial", alt: "A portrait against a softly blurred background — sample photograph", shape: "offset" },
  { id: "celebration", title: "Wedding Celebration", category: "stories", label: "Story", image: "celebration", alt: "A wedding celebration — sample photograph", shape: "wide" },
  {"id": "city-colour", "title": "City in Colour", "category": "portraits", "label": "Portrait", "image": "city-colour", "alt": "A woman with braids and glasses in front of a painted yellow wall — sample photograph", "shape": "landscape"},
  {"id": "colour-study", "title": "Colour Study", "category": "portraits", "label": "Portrait", "image": "colour-study", "alt": "A woman in a patterned shirt against a warm red wall — sample photograph", "shape": "portrait"},
  {"id": "quiet-profile", "title": "A Quiet Profile", "category": "portraits", "label": "Portrait", "image": "quiet-profile", "alt": "A softly silhouetted side profile against a pale sky — sample photograph", "shape": "offset"},
  {"id": "golden-details", "title": "Golden Details", "category": "stories", "label": "Story", "image": "golden-details", "alt": "Two gold wedding bands resting on delicate pale flowers — sample photograph", "shape": "wide"},
  {"id": "rings-and-roses", "title": "Rings and Roses", "category": "stories", "label": "Story", "image": "rings-and-roses", "alt": "Wedding rings balanced on a bouquet of pale pink roses — sample photograph", "shape": "landscape"},
  {"id": "golden-profile", "title": "Golden Profile", "category": "portraits", "label": "Portrait", "image": "golden-profile", "alt": "A woman in profile with a long ponytail against a golden backdrop — sample photograph", "shape": "portrait"},
  {"id": "beneath-the-veil", "title": "Beneath the Veil", "category": "stories", "label": "Story", "image": "beneath-the-veil", "alt": "A wedding couple embracing beneath a veil in warm sunlight — sample photograph", "shape": "offset"},
  {"id": "just-married", "title": "Just Married", "category": "stories", "label": "Story", "image": "just-married", "alt": "A newly married couple kissing outdoors surrounded by their wedding party — sample photograph", "shape": "portrait"},
];
