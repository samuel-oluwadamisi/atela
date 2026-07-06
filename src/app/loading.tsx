import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
 <button
  disabled
  className="rounded-lg border-[3px] border-black bg-amber-700 px-6 py-4"
>
  <div className="flex gap-2">
    <span className="h-2 w-2 animate-bounce rounded-full bg-white" />
    <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:150ms]" />
    <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:300ms]" />
  </div>
</button>
    </div> 
  );
}