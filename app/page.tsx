import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


import { getHomePage } from "../lib/wordpress";

export async function generateMetadata() {
  const page = await getHomePage();
  const yoast = page?.yoast_head_json;

  return {
    title: yoast?.title || "Digital Connection Video",
    description: yoast?.description || "",
    alternates: {
      canonical: yoast?.canonical,
    },
    openGraph: {
      title: yoast?.og_title,
      description: yoast?.og_description,
      url: yoast?.og_url,
      siteName: yoast?.og_site_name,
      type: yoast?.og_type || "website",
      images: yoast?.og_image?.map((img: any) => ({
        url: img.url,
        width: img.width,
        height: img.height,
      })),
    },
    twitter: {
      card: yoast?.twitter_card || "summary_large_image",
      title: yoast?.twitter_title || yoast?.title,
      description: yoast?.twitter_description || yoast?.description,
      images: yoast?.twitter_image ? [yoast.twitter_image] : undefined,
    },
    robots: {
      index: yoast?.robots?.index !== "noindex",
      follow: yoast?.robots?.follow !== "nofollow",
    },
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}