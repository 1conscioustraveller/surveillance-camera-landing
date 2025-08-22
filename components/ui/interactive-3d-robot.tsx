// components/ui/interactive-3d-robot.tsx
'use client';

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black ${className}`}>
      <div className="text-center text-white">
        <div className="text-6xl mb-4">🤖</div>
        <h2 className="text-2xl font-bold mb-2">3D Robot Experience</h2>
        <p className="text-purple-300">Interactive 3D experience coming soon!</p>
      </div>
    </div>
  );
}
