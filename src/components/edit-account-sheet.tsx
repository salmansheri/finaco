"use client";
import { useCreateAccount } from "@/hooks/features/api/use-create-account";
import { useOpenAccount } from "@/hooks/use-open-account";
import { AccountForm, FormValues } from "./account-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { useGetAccount } from "@/hooks/features/api/use-get-account";
import { Loader2 } from "lucide-react";

export const EditAccountSheet = () => {
  const { isOpen, onClose, id } = useOpenAccount();

  const accountQuery = useGetAccount(id);

  const mutation = useCreateAccount();
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Edit Account</SheetTitle>
          <SheetDescription>Edit an existing account</SheetDescription>
        </SheetHeader>
        {accountQuery.isLoading ? (
          <div className="absolute inset-0 flex items-center">
            <Loader2 className="size-4 text-violet-600 animate-spin" />
          </div>
        ) : (
          <>
            <AccountForm
              onSubmit={onSubmit}
              disabled={mutation.isPending}
              defaultValues={defaultValues}
              id={id}
            />
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
