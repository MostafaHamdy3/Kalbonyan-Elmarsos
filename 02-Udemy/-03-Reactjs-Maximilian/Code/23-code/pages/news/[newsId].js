// our-domain.com/news/somethingImportant

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // Send a request to the backend API

  // Fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
