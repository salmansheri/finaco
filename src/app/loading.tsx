import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen animate-spin text-violet-600 font-bold h-36 w-36">
      <Loader2 />;
    </div>
  );
}
