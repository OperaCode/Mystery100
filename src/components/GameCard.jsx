import React from "react";

const GameCard = ({difficulty,attempts,gameOver,guess,handleGuess,setGuess,message,restart}) => {
  return (
    <>
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

        <p className="font-bold text-xl mb-4 text-[#00E1FF]">{message}</p>

        {gameOver && (
          <button
            onClick={restart}
            className="bg-[#00E1FF] hover:bg-[#00c9e7] text-black font-bold px-4 py-3 rounded-xl w-full tracking-wide"
          >
            Restart Game
          </button>
        )}
      </div>
    </>
  );
};

export default GameCard;
