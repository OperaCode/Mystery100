import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">GuessMaster</h1>
          <p className="text-lg mb-6">
            Try to guess the secret number between 1 and 100. Limited attempts.
            Can you beat the odds?
          </p>
          <button
            onClick={() => navigate("/game")}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:opacity-80 transition"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
