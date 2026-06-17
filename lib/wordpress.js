const WP_API = "https://www.videocms.digitalconnection.pt/wp-json/wp/v2";

export async function getHomePage() {
  const res = await fetch(`${WP_API}/pages/121`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  return res.json();
}