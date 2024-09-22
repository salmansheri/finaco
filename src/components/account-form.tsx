import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { insertAccountSchema } from "../../drizzle/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { SubmitButton } from "./submit-button";

export const formShema = insertAccountSchema.pick({
  name: true,
});

export type FormValues = z.input<typeof formShema>;

interface AccountFormProps {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
}
export const AccountForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
}: AccountFormProps) => {
  const form = useForm({
    resolver: zodResolver(formShema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="eg. Cash, Bank, Credit Card"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-4">
          <SubmitButton isLoading={disabled}>
            {id ? "Save Changes" : "Create Account"}
          </SubmitButton>
          {!!id && (
            <Button
              type="button"
              onClick={handleDelete}
              className="w-full "
              variant="outline"
              disabled={disabled}
            >
              <Trash className="size-4 mr-2" />
              Delete Account
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
