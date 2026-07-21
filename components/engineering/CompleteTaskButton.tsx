"use client";

interface Props {
  onComplete: () => void;
}

export default function CompleteTaskButton({
  onComplete,
}: Props) {
  return (
    <button
      onClick={onComplete}
      className="mt-8 rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-500"
    >
      Complete Task
    </button>
  );
}