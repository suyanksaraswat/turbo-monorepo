export function CircularProgressIndicator({
  size = 40,
  strokeWidth = 4,
  progress = 70,
  primaryColor = 'blue-600',
}: {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  primaryColor?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <>
      <svg
        width={size}
        height={size}
        className="animate-spin">
        <circle
          className={`text-${primaryColor}`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </>
  );
}
