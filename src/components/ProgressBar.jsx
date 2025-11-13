// ProgressBar component displays completion percentage
export default function ProgressBar({ value = 0 }) {
  return (
    <div className="progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
      <div style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}
