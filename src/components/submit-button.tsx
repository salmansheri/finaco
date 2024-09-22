import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface SubmitButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}
export const SubmitButton = ({
  isLoading,

  children,
}: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="animate-spin size-4 mr-2" />
          Loading...
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};
