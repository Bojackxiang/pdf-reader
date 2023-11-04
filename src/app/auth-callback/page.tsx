import React from "react";

import { useParams, useRouter, useSearchParams } from "next/navigation";


interface AuthCallbackProps {}

const AuthCallbackPage = ({}: AuthCallbackProps) => {
  console.log('auth callback page')
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  <div>auth callback</div>


};

export default AuthCallbackPage;
