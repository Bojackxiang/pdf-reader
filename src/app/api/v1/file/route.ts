import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const GETPathAlias = "[GET]";

// get request
export async function GET(
  req: Request,
) {
  try {
    
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      return new Response("UnAuthenticated", { status: 405 });
    }

    const files = await db.file.findMany({
      where: {
        userId: user.id
      }
    })

    return NextResponse.json({files});
  } catch (error) {
    console.error(GETPathAlias, error);
  }
}








