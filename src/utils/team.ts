const teamPhotos = import.meta.glob<string>("../assets/v2/team/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
});

const photosBySlug = new Map(
  Object.entries(teamPhotos).map(([path, url]) => [path.replace(/^.*\//, "").replace(/\.[^.]+$/, ""), url])
);

export function personSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function personPhoto(name: string) {
  return photosBySlug.get(personSlug(name));
}

export function personInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}
