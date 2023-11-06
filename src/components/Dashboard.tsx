"use client";

import React from "react";
import UploadButton from "./UploadButton";
import { useQuery } from "@tanstack/react-query";
import { db } from "@/db";
import axios from "axios";

const END_POINT = "http://localhost:3000/api/v1/file";
interface DashboardProps {
  userId: string;
}

const Dashboard = (props: DashboardProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pdf-files"],
    queryFn: async () => {
      const response = await axios.get(`${END_POINT}?userName=test`);
      return response.data;
    },
  });

  console.log(data, isLoading, error);

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>

        <UploadButton isSubscribed={true} />

        {isLoading ? (
          <div>loading</div>
        ) : (
          <div>
            {data.files && data.files.length > 0 ? (
              <div>valid length</div>
            ) : (
              <div>invalid length</div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
