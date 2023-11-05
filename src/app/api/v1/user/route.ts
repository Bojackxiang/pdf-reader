import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const POSTPathAlias = "::USER::CREATE::[POST]";

// post request
export async function POST(
  req: Request,
  { params }: { params: { paramName: string } }
) {
  try {
    console.log(POSTPathAlias);
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user || !user.email || !user.id) {
      return new NextResponse("UnAuthenticated", { status: 401 });
    }

    await db.user.create({
      data: {
        id: user.id,
        email: user.email,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(POSTPathAlias, error);
  }
}
