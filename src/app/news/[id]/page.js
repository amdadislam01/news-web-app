import Image from "next/image";
import React from "react";

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_285332a420614f838a0d5ce5aed5a0af",
    { cache: "no-store" }
  );

  const data = await res.json();

  const article = data.results.find((a) => a.article_id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">News not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
        <Image
          src={article.image_url}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mt-8 leading-tight">
        {article.title}
      </h1>

      <div className="mt-4 text-gray-500 text-sm flex items-center gap-4">
        <p>
          <span className="font-semibold text-teal-700">Source:</span>{" "}
          {article.source_name || article.source_id}
        </p>
        <p>•</p>
        <p>{article.pubDate}</p>
      </div>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        {article.description || "No description available."}
      </p>

      <div className="mt-10 bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Full Article
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          {article.content === "ONLY AVAILABLE IN PAID PLANS"
            ? "Full article content is not available in the free API plan."
            : article.content}
        </p>

        <a
          href={article.link}
          target="_blank"
          className="inline-block mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default NewsDetails;
