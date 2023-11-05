import { redirect, useSearchParams } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/db";
import { Loader2 } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

interface AuthCallbackProps {}

const AuthCallbackPage = async ({}: AuthCallbackProps) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // handle if no user
  if (!user || !user.email || !user.id) {
    // handle auth err: sign out
    return;
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    const response = await db.user.create({
      data: {
        email: user.email,
        id: user.id,
      },
    });

    console.log(response);
    if (response.id) {
      redirect("/dashboard");
    } else {
      // handler error page
      // sign out
      return;
    }
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
