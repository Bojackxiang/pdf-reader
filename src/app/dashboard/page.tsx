import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import Dashboard from "@/components/Dashboard";

interface DashboardPageProps {}

const DashboardPage = async ({}: DashboardPageProps) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) {
    // need to redirect to sign up page
    return;
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id!,
    },
  });

  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }

  return <Dashboard userId={user.id}/>;
};

export default DashboardPage;
