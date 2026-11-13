import { NextRequest } from "next/server";

export async function GET() {
  return Response.json({
    name: "Shubham",
    email: "chaudhary2001shubham@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, password } = await req.json();
  return Response.json({
    message: "Account created successfully",
  });
}
