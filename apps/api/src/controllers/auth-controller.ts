import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import { Resend } from "resend";
import fs from "fs/promises";
import handlebars from "handlebars";

import { registerSchema } from "../validations/auth-validation.js";

const resend = new Resend(process.env.RESEND_API_KEY);

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  try {
    const { email, firstName, lastName, username, password, phoneNumber } =
      registerSchema.parse(req.body);

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
        password: hashedPassword,
        phoneNumber,
      },
    });

    const tamplateSource = await fs.readFile(
      "src/templates/registration-welcoming-template.hbs",
      "utf-8"
    );
    const compiledTemplate = handlebars.compile(tamplateSource.toString());
    const htmlTemplate = compiledTemplate({ customerName: firstName });

    const { error: resendError } = await resend.emails.send({
      from: "NexTime <cs@resend.dev>",
      to: [email],
      subject: "Welcoming",
      html: htmlTemplate,
    });

    if (resendError) {
      res
        .status(400)
        .json({ message: "Registration Succes but failed to send email" });
      return;
    }

    res.status(201).json({ message: "Registration success" });
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      res.status(500).json({
        message: "From ZOD: Failed to register new user",
        error: error.flatten().fieldErrors,
      });
      return;
    }

    res.status(500).json({ message: "Failed to register new user", error });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { username, password, email } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username: username }, { email: email }] },
    });

    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const JWTToken = jwt.sign(
      {
        id: existingUser.id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        username: existingUser.username,
        email: existingUser.email,
        role: existingUser.role,
      },
      "superdupersecret"
    );

    res
      .cookie("accessToken", JWTToken)
      .status(200)
      .json({ message: "Login success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
}

export async function logout(req: Request, res: Response) {
  try {
    res
      .clearCookie("accessToken")
      .status(200)
      .json({ message: "Logout success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to logout" });
  }
}
