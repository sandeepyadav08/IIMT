import { getHomePage } from "@/lib/wordpress";
import WordPressContent from "@/components/WordPressContent";
import { notFound } from "next/navigation";

export default async function Home() {
  // Fetch home page content from WordPress
  const homePage = await getHomePage();

  // If no home page exists in WordPress, show 404
  if (!homePage) {
    notFound();
  }

  return (
    <div className="wordpress-page-wrapper">
      <div className="container">
        <div className="wordpress-page-content">
          <WordPressContent content={homePage.content.rendered} />
        </div>
      </div>
    </div>
  );
}
