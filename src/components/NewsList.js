"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsList = ({ articles }) => {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-10 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search news by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 
                     focus:ring-teal-500 outline-none transition"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredArticles.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No news found.
          </p>
        )}

        {filteredArticles.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300"
          >
            <div className="relative w-full h-56 bg-gray-100">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover"
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

export default NewsList;
