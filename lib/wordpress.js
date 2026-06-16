const WP_API = "https://videocms.digitalconnection.ae/wp-json/wp/v2";

async function getMediaUrl(id) {
  if (!id) return "";

  const res = await fetch(`${WP_API}/media/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return "";

  const media = await res.json();
  return media?.source_url || "";
}

export async function getPhotographyImages() {
  const res = await fetch(`${WP_API}/pages/121`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const page = await res.json();

  const images = await Promise.all(
    (page?.acf?.fotografia || []).map(async (item) => {
      const imageId = item.field_667561b8e98e3;
      return getMediaUrl(imageId);
    })
  );

  return images.filter(Boolean);
}