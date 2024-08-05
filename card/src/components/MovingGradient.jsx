import React from 'react';

const MovingGradientBackground = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 animate-move-horizontal"
        style={{ animationDuration: '10s', animationIterationCount: 'infinite' }}
      ></div>
      <div className="z-10">
        {/* Your content here */}
        <h1 className="text-white text-4xl">Content goes here</h1>
      </div>
      <style jsx>{`
        @keyframes move-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-move-horizontal {
          animation-name: move-horizontal;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default MovingGradientBackground;
