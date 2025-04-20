// components/EmptyState.tsx
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  action,
  subtitle,
  message = "No items found",
}: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center py-10">
      <Inbox className="w-12 h-12 text-gray-400 mb-2" />
      <h3 className="text-lg font-semibold text-gray-600">{message}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
      {action}
    </div>
  );
}
