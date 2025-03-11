import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ThumbsUp, MessageSquare, Clock } from "lucide-react";
import TalkToSpecialist from "../components/TalkToSpecialist";
import { QUESTIONS, ANSWERS } from "../data";

export default function QuestionPage() {
  const { id } = useParams();
  const question = QUESTIONS.find((q) => q.id === id);
  const answers = ANSWERS.filter((a) => a.questionId === id);

  const [newAnswer, setNewAnswer] = useState("");
  const [localAnswers, setLocalAnswers] = useState(answers);

  if (!question) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Question not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (!newAnswer.trim()) return;

    const answer = {
      id: `new-${Date.now()}`,
      content: newAnswer,
      author: "CurrentUser",
      date: "Just now",
      questionId: question.id,
      votes: 0,
    };

    setLocalAnswers([...localAnswers, answer]);
    setNewAnswer("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Questions
      </Link>

      <div className="border p-4 rounded-md mb-8">
        <div className="flex flex-wrap gap-2 mb-2">
          {question.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-green-50 text-green-700 text-sm rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-green-800">{question.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Asked by {question.author}</span>
          <span>•</span>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{question.date}</span>
          </div>
        </div>
        <p className="mt-4 whitespace-pre-line">{question.content}</p>
      </div>

      <TalkToSpecialist questionTitle={question.title} />

      <div className="mb-8 mt-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" /> {localAnswers.length} Answers
        </h2>

        {localAnswers.length > 0 ? (
          <div className="space-y-6">
            {localAnswers.map((answer) => (
              <div key={answer.id} className="border p-4 rounded-md">
                <div className="flex gap-4">
                  <button className="rounded-full h-8 w-8 border p-1">
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                  <div className="flex-1">
                    <p className="whitespace-pre-line">{answer.content}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>{answer.author}</span>
                  <span>{answer.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border p-6 text-center bg-gray-100 rounded-md">
            <p>No answers yet. Be the first to answer this question!</p>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Your Answer</h2>
        <form onSubmit={handleSubmitAnswer}>
          <textarea
            className="w-full min-h-32 p-2 border rounded-md mb-4"
            placeholder="Share your knowledge or experience..."
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            required
          />
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
            Post Your Answer
          </button>
        </form>
      </div>
    </div>
  );
}