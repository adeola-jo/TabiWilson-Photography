export const instagramUrl = "https://www.instagram.com/wlsnarchives/";
export const instagramHandle = "@wlsnarchives";
export const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

// Layout samples only. Replace these records with the client's licensed photographs.
export const photographs = [
  { id: "garden", title: "Garden Venue", category: "stories", label: "Story", image: "garden", alt: "A wedding moment outdoors — sample photograph", shape: "landscape" },
  { id: "studio", title: "Studio Series", category: "portraits", label: "Portrait", image: "studio", alt: "A close-up portrait in soft light — sample photograph", shape: "portrait" },
  { id: "editorial", title: "Editorial Headshot", category: "portraits", label: "Portrait", image: "editorial", alt: "A portrait against a softly blurred background — sample photograph", shape: "offset" },
  { id: "celebration", title: "Wedding Celebration", category: "stories", label: "Story", image: "celebration", alt: "A wedding celebration — sample photograph", shape: "wide" },
];
