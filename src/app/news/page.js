import Image from "next/image";
import Link from "next/link";

const News = async () => {
  const API_URL ="https://newsdata.io/api/1/news?apikey=pub_7e8ec0a7278447f29cec02a50202961d";
  const res = await fetch(API_URL, { cache: "no-store" });
  const data = await res.json();
  const articles = data.results || [];
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-14">
        Latest News
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 hover:text-teal-700 transition mb-3 leading-tight">
                {item.title ? item.title.slice(0, 90) : "No Title Available"}...
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {item.description
                  ? item.description.slice(0, 150) + "..."
                  : "No description available."}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Source:{" "}
                  <span className="font-semibold text-teal-700">
                    {item.source_id || "Unknown"}
                  </span>
                </span>

                <Link
                  href={`/news/${item.article_id}`}
                  className="px-4 py-1.5 bg-teal-600 text-white text-xs rounded-lg hover:bg-teal-700 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
