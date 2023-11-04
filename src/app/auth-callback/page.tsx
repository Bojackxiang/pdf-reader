import React from "react";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

interface AuthCallbackProps {}

const AuthCallbackPage = ({}: AuthCallbackProps) => {
  console.log('auth callback page')
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: (data) => {
      console.log("onSuccessData", data);
      console.log(data);
      router.push(origin ? `/${origin}` : "/dashboard");
    },
  });
  console.log(data);

};

export default AuthCallbackPage;
