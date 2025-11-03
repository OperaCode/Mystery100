import { div } from "framer-motion/client";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function HomePage() {
  // states for main game
  const [secret] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  //   difficulty state
  const [difficulty, setDifficulty] = useState("");

  const handleGuess = () => {
    const num = Number(guess);
    if (!num || num < 1 || num > 100) {
      toast.error("Enter a Number between 1- 100");
      return;
    }

    const newAttempts = attempts - 1;
    setAttempts(newAttempts);

    if (num === secret) {
      toast.success("Correct Answer 👏");
      setMessage("🎉 YOU GOT IT!");
      setGameOver(true);
    } else if (num > secret) {
      setMessage("⬆️ Too high");
    } else {
      setMessage("⬇️ Too low");
    }

    if (newAttempts === 0 && num !== secret) {
      toast.error("You are out of attempts ");
      setMessage(`💀 Game Over — Number was ${secret}`);
      setGameOver(true);
    }
  };

  const handleDifficulty = (level) => {
    setDifficulty(level);
    if (level === "easy") {
      setAttempts(15);
    } else if (level === "medium") {
      setAttempts(10);
    } else if (level === "hard") {
      setAttempts(5);
    }
  };

  const restart = () => window.location.reload();

  return (
    <div className="bg-linear-to-br from-blue-600 via-purple-600 to-pink-500">
      <header className="sticky top-0 z-40 w-full backdrop-blur bg-[#03001C]/60 border-b border-[#6C63FF]/30 shadow-lg p-6 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className=" mx-auto w-10 h-10 bg-white rounded-xl shadow-2xl flex items-center justify-center">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              ?
            </span>
          </div>
          <h2 className="text-xl font-bold text-indigo-100 tracking-wide">
            Mystery100
          </h2>
        </div>

        <a
          href="/"
          className="px-4 py-1.5 rounded-lg bg-[#6C63FF]/40 border border-[#6C63FF]/60 text-indigo-200 hover:bg-[#6C63FF]/70 transition font-medium text-sm"
        >
          ← Back to Landing
        </a>
      </header>

      <div className="flex items-center justify-center h-screen ">
        <section className="relative">
          {/* SECRET NUMBER DISPLAY BLUR */}
          <div className="absolute -top-18 left-1/2 -translate-x-1/2 ">
            <div className="px-8 py-2 rounded-xl border-2 text-4xl font-extrabold text-white/60 blur">
              {secret}
            </div>
          </div>

          {!difficulty && (
            <div className="text-center text-white ">
              <h3 className="text-2xl font-bold mb-3">
                Select Difficulty Level
              </h3>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleDifficulty("easy")}
                  className="cursor-pointer px-4 py-2 bg-green-500 rounded-xl"
                >
                  Easy
                </button>
                <button
                  onClick={() => handleDifficulty("medium")}
                  className="cursor-pointer px-4 py-2 bg-yellow-500 rounded-xl"
                >
                  Medium
                </button>
                <button
                  onClick={() => handleDifficulty("hard")}
                  className="cursor-pointer px-4 py-2 bg-red-500 rounded-xl"
                >
                  Hard
                </button>
              </div>
            </div>
          )}

          {/* MAIN GAME BODY */}
          {difficulty && (
            <main>
              {/* Introduction space to game */}
              <div>Introduction</div>

              {/* Main game input */}
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[30px] shadow-[0_0_30px_#6C63FF44] w-[380px] text-center border border-white/20 text-white">
                <h1 className="text-3xl font-black mb-3 tracking-wide">
                  Number Guesser
                </h1>

                <p className="mb-4 font-bold text-sm text-white/70 uppercase tracking-wide">
                  Difficulty{difficulty || "None"} - Attempts {""}
                  <span className="text-[#00E1FF] font-bold">{attempts}</span>
                </p>

                <input
                  type="number"
                  className="bg-white/20 text-white placeholder-white/50 border border-white/30 w-full p-3 rounded-xl mb-4 outline-none focus:border-[#00E1FF] transition"
                  placeholder="Enter your guess..."
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  disabled={gameOver}
                />

                <button
                  onClick={handleGuess}
                  disabled={gameOver}
                  className="bg-[#6C63FF] hover:bg-[#5a52e7] text-white px-4 py-3 rounded-xl w-full mb-3 font-semibold tracking-wide transition disabled:opacity-25"
                >
                  Guess
                </button>

                <p className="font-bold text-xl mb-4 text-[#00E1FF]">
                  {message}
                </p>

                {gameOver && (
                  <button
                    onClick={restart}
                    className="bg-[#00E1FF] hover:bg-[#00c9e7] text-black font-bold px-4 py-3 rounded-xl w-full tracking-wide"
                  >
                    Restart Game
                  </button>
                )}
              </div>

              <div>Leaderboard</div>
            </main>
          )}
        </section>
      </div>
    </div>
  );
}
