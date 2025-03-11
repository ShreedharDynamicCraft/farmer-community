"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { PlusCircle, MessageCircle, Clock, Search } from "lucide-react";
import { QUESTIONS } from "../data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = QUESTIONS.filter((question) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      question.title.toLowerCase().includes(query) ||
      question.content.toLowerCase().includes(query) ||
      question.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-green-800">Farmers' Community</h1>
          <p className="text-gray-600 mt-1">Ask questions and share knowledge about agriculture</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Link to="/questions/new">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
              <PlusCircle className="h-5 w-5" />
              Ask Question
            </button>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <Link to={`/questions/${question.id}`} key={question.id} className="block">
              <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:border-green-500 transition">
                <h2 className="text-xl font-semibold text-green-800">{question.title}</h2>
                <p className="text-gray-600 mt-1 line-clamp-2">{question.content}</p>
                <div className="flex flex-wrap items-center justify-between mt-3 text-sm text-gray-500">
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <MessageCircle className="mr-1 h-4 w-4" />
                      <span>{question.answerCount} answers</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{question.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600">No questions found matching your search.</p>
            <button className="mt-2 text-green-700 underline" onClick={() => setSearchQuery("")}>
              Clear search
            </button>
          </div>
        )}
      </div>
    </>
  );
}
