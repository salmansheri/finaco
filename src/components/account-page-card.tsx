"use client";

import { columns } from "@/app/(dashboard)/accounts/columns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAccounts } from "@/hooks/features/api/use-get-accounts";
import { useNewAccount } from "@/hooks/use-new-account";
import { Loader2, Plus } from "lucide-react";
import { DataTable } from "./data-table";

import { Skeleton } from "./ui/skeleton";
import { useBulkDeleteAccounts } from "@/hooks/features/api/use-bulk-delete";

export const AccountPageCard = () => {
  const newAccount = useNewAccount();
  const accountsQuery = useGetAccounts();

  const accounts = accountsQuery.data || [];

  const deleteAccountsMutation = useBulkDeleteAccounts();

  const isDisabled =
    accountsQuery.isLoading || deleteAccountsMutation.isPending;

  if (accountsQuery.isLoading) {
    return (
      <Card className="border-none drop-shadow-sm ">
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent>
          <div className="h-[500px] w-full flex items-center justify-center">
            <Loader2 className="size-6 text-violet-600 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none drop-shadow-sm ">
      <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>

        <Button size="sm" onClick={newAccount.onOpen}>
          {" "}
          <Plus className="size-4 mr-2" />
          Add new
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable
          filterKey="name"
          columns={columns}
          data={accounts}
          onDelete={(row) => {
            const ids = row.map((r) => r.original.id);

            deleteAccountsMutation.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </CardContent>
    </Card>
  );
};
