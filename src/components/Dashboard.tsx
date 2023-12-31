"use client";

import React from "react";
import UploadButton from "./UploadButton";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>

        <UploadButton isSubscribed={true} />
      </div>
    </main>
  );
};

export default Dashboard;
