
import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

interface DashboardPageProps {}

const DashboardPage = ({}: DashboardPageProps) => {
  const {getUser} = getKindeServerSession();
  const user = getUser()
  
  if(!user || !user.id){
    redirect("/auth-callback?origin=dashboard")
  }


  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage