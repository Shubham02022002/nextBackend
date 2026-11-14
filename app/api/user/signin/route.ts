import { orm } from "@/prisma/db";
import { UserSignInSchema } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const secret = process.env.SERVER_SECRET;
  if (!secret) {
    return NextResponse.json(
      {
        message: "Server configuration error",
      },
      { status: 500 },
    );
  }
  const body = await req.json();
  const response = UserSignInSchema.safeParse(body);
  if (!response.success) {
    return NextResponse.json(
      {
        message: "Invalid Inputs",
      },
      { status: 400 },
    );
  }
  const isValidUser = await orm.User.where({
    email: response.data.email,
  }).first();

  if (!isValidUser) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );
  }
  const isPasswordValid = await bcrypt.compare(
    response.data.password,
    isValidUser.password,
  );
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );
  }

  const token = jwt.sign(
    { userId: isValidUser.id, email: isValidUser.email },
    secret,
    {
      expiresIn: "1h",
    },
  );
  return NextResponse.json(
    {
      message: "Logged in successfully",
      token: `Bearer ${token}`,
    },
    { status: 200 },
  );
}
