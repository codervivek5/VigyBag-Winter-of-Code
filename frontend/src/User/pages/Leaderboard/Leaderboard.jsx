import React, { useState } from 'react';

const sampleScores = [
  { id: 1, name: 'John Doe', score: 95 },
  { id: 2, name: 'Jane Smith', score: 90 },
  { id: 3, name: 'Michael Johnson', score: 85 },
  { id: 4, name: 'Emily Davis', score: 80 },
  { id: 5, name: 'Chris Lee', score: 75 },
];

function Leaderboard() {
  const [scores, setScores] = useState(sampleScores);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

          body {
            font-family: 'Press Start 2P', cursive;
          }
        `}
      </style>
      <div className="min-h-screen bg-gradient-to-r from-purple-900 to-blue-900 text-white p-4 md:p-8">
        <h1 className="mt-[15vh] text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300 leading-relaxed">
          Leaderboard
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-3 text-left text-yellow-300">Rank</th>
                <th className="py-3 text-left text-yellow-300">Name</th>
                <th className="py-3 text-left text-yellow-300">Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={score.id} className="border-b border-gray-600 table-row hover:bg-gray-700 transition duration-300">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{score.name}</td>
                  <td className="py-3 px-4">{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
