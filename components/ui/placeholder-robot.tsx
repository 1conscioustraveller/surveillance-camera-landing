// components/ui/placeholder-robot.tsx
'use client';

interface PlaceholderRobotProps {
  className?: string;
}

export function PlaceholderRobot({ className }: PlaceholderRobotProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black ${className}`}>
      <div className="text-center text-white">
        <div className="text-6xl mb-4">🤖</div>
        <h2 className="text-2xl font-bold mb-2">Advanced 3D Surveillance</h2>
        <p className="text-purple-300">Interactive experience coming soon!</p>
      </div>
    </div>
  );
}
