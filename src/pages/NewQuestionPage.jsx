import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

export default function NewQuestionPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    if (!tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      content,
      tags,
      author: "CurrentUser",
      date: new Date().toISOString(),
    });

    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Questions
      </Link>

      <div className="border border-gray-300 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Ask a Question</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Question Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g., How to control pests in organic farming?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium">
              Question Details
            </label>
            <textarea
              id="content"
              placeholder="Describe your question in detail..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 h-32"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium">
              Tags
            </label>
            <div className="flex gap-2 mt-1">
              <input
                id="tags"
                type="text"
                placeholder="e.g., organic, pests, crops"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="border border-gray-300 rounded-md px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Add up to 5 tags to categorize your question</p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-green-50 text-green-700 border border-green-400 rounded-md px-2 py-1 flex items-center gap-1"
                  >
                    {tag}
                    <button type="button" onClick={() => handleRemoveTag(tag)} className="text-green-700 hover:text-green-900">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="border border-gray-300 rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              Post Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
