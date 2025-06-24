"use client";
import { use, useEffect, useState } from "react";

export default function CoffeeJokeCard() {
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    const fetchKJokes = async () => {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      //   console.log(res);
      setShowPunchline(data.punchline);
    };
    fetchKJokes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border-2 border-amber-200">
        <div className="text-center">
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Coffee Joke</h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              Why did the coffee file a police report?
            </p>

            {!showPunchline ? (
              <button
                onClick={() => setShowPunchline(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Reveal Punchline
              </button>
            ) : (
              <div className="animate-fade-in">
                <p className="text-xl text-amber-700 font-bold bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
                  It got mugged! 😄
                </p>
                <button
                  onClick={() => setShowPunchline(false)}
                  className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Hide Punchline
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 text-sm text-gray-500">Joke ID: 431</div>
        </div>
      </div>
    </div>
  );
}
