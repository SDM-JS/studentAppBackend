import "dotenv/config";
import BaseError from "../errors/base.error.js";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

export default async function (req, res, next) {
  try {
    const authorization = req.headers.authorization;
    console.log("salom1");

    if (!authorization) {
      return next(BaseError.Unauthorized());
    }
    const token = authorization.split(" ")[1];
    console.log("salom2");

    if (!token) {
      return next(BaseError.Unauthorized());
    }
    const { userId, role } = jwt.verify(token, process.env.JWT_SECRET);
    console.log("salom3");

    if (!userId) {
      return next(BaseError.Unauthorized());
    }
    const query = await prisma.student.findFirst({
      where: {
        id: userId,
      },
    });
    console.log("salom4");
    const student = {
      fullName: query.fullName,
      id: query.id,
      email: query.email,
      parentNumber: query.parentNumber,
      username: query.username,
      role,
    };
    if (!student) {
      return next(BaseError.Unauthorized());
    }
    req.student = student;
    next();
  } catch (error) {}
}
