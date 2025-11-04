import { div } from "framer-motion/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import GameCard from "../components/GameCard";

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
          <div className="absolute -top-18 left-1/2 -translate-x-1/2 border-cyan-400 shadow-md  rounded-2xl">
            <div
              className={`px-8 py-2 rounded-xl border-2 text-4xl font-extrabold text-white/60 transition ${
                gameOver ? "blur-none" : "blur-sm"
              }`}
            >
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
            <main className="grid grid-cols-3 gap-6 p-10 text-white max-w-5xl mx-auto">
              {/* LEFT COLUMN — INTRO */}
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-[0_0_30px_#6C63FF44] flex flex-col justify-center">
                <h2 className="text-2xl font-black mb-3 tracking-wider uppercase">
                  Arcade Mode 🎮
                </h2>
                <p className="text-white/80 leading-relaxed text-sm">
                  Welcome Challenger! Hidden deep in the machine is a secret
                  number between
                  <span className="font-bold text-cyan-400">1</span> and
                  <span className="font-bold text-cyan-400">100</span>. You have
                  limited attempts - your difficulty level determines how many
                  attempts you get. Trust your instincts. Beat the machine.
                  Prove you are the champion and register your name in the{" "}
                  <span className="font-bold text-cyan-400">
                    Mystery100 Hall of Fame
                  </span>
                </p>
                <p className="mt-4 font-bold text-cyan-400 text-sm uppercase tracking-widest">
                  Enter your Guess 👉
                </p>
              </div>

              {/* CENTER COLUMN — main original game UI will render dynamically here */}
              <div className="col-span-1 flex justify-center items-center">
                {/* Main game input */}
                <GameCard
                  difficulty={difficulty}
                  attempts={attempts}
                  guess={guess}
                  setGuess={setGuess}
                  gameOver={gameOver}
                  handleGuess={handleGuess}
                  message={message}
                  restart={restart}
                />
              </div>

              {/* RIGHT COLUMN — leaderboard placeholder */}
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-[0_0_30px_#6C63FF44] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-black mb-3 tracking-wider">
                  Hall of Fame 🏆
                </h2>
                <p className="text-white/75 text-sm">
                  Coming Soon — Top scorers will appear here
                </p>
              </div>
            </main>
          )}
        </section>
      </div>
    </div>
  );
}
