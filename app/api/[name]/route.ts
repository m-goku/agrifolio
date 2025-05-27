import { connectDB } from "@/app/db/connection";
import { NextResponse } from "next/server";
import { Profile } from "@/app/db/model";

export async function GET(
  req: Request,
  { params }: { params: { name: string } }
) {
  const connection = await connectDB();

  if (connection) {
    const profile = await Profile.findOne({ pid: params.name });
    if (!profile)
      return NextResponse.json({ error: "profile not found", status: 404 });
    return NextResponse.json(profile);
  }
}
