import { orm } from "@/prisma/db";
import { UserSignUpSchema } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import z, { email, object } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function GET() {
  return Response.json({
    name: "Shubham",
    email: "chaudhary2001shubham@gmail.com",
  });
}

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
  const response = z.safeParse(UserSignUpSchema, body);
  if (!response.success) {
    return NextResponse.json(
      {
        message: "Invalid Inputs",
      },
      { status: 400 },
    );
  }
  const isExistingUser = await orm.User.where({
    email: response.data.email,
  }).first();
  if (isExistingUser) {
    return NextResponse.json(
      {
        message: "User already exists",
      },
      { status: 409 },
    );
  }
  const hashedPassword = await bcrypt.hash(response.data.password, 10);
  const newUser = await orm.User.create({
    ...response.data,
    password: hashedPassword,
  });
  const token = jwt.sign({ email: newUser.email }, secret, {
    expiresIn: "1h",
  });

  return NextResponse.json(
    {
      message: "User create Successfully",
      token: `Bearer ${token}`,
    },
    { status: 200 },
  );
}
