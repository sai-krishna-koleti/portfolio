import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post("https://backend-rag-portfolio-production.up.railway.app/chat", {
        question: question,
      });

      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg z-50"
      >
        💬 Ask About Me
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 p-4 flex flex-col">
          
          <h2 className="font-bold mb-3">
            Ask About Sai Krishna
          </h2>

          {/* Answer Box */}
          <div className="flex-1 overflow-auto border p-2 rounded mb-3 text-sm">
            {loading ? "Thinking..." : answer}
          </div>

          {/* Input */}
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
            className="w-full border p-2 rounded mb-2"
          />

          <button
            onClick={askQuestion}
            className="bg-blue-600 text-white py-2 rounded"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}

