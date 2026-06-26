import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <LoaderCircle
      className="h-10 w-10 animate-spin text-rose-600"
      strokeWidth={1.5}
    />
  );
}