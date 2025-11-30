import NewsList from "@/components/NewsList";


const News = async () => {
  const API_URL ="https://newsdata.io/api/1/news?apikey=pub_285332a420614f838a0d5ce5aed5a0af";
  const res = await fetch(API_URL, { cache: "no-store" });
  const data = await res.json();
  const articles = Array.isArray(data.results) ? data.results : [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-14">
        Latest News
      </h1>

      <NewsList articles={articles} />
    </div>
  );
};

export default News;
