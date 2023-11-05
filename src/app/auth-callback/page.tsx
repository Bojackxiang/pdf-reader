"use client";

import { redirect, useRouter } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const END_POINT = "http://localhost:3000/api/v1/user";

interface AuthCallbackProps {}

const AuthCallbackPage = ({}: AuthCallbackProps) => {
  const router = useRouter();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryFn: async () => {
      const response = await axios.post(END_POINT, undefined);
      return response.data;
    },
    queryKey: ["query_init_users"],
  });

  console.log(data)

  if (isSuccess) {
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  }
 

  
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default AuthCallbackPage;
