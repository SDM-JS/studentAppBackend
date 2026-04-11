import "dotenv/config";
import BaseError from "../errors/base.error.js";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

export default async function (req, res, next) {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return next(BaseError.Unauthorized());
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return next(BaseError.Unauthorized());
    }
    const { userId, role } = jwt.verify(token, process.env.JWT_SECRET);
    if (!userId) {
      return next(BaseError.Unauthorized());
    }
    const query = await prisma.student.findFirst({
      where: {
        id: userId,
      },
    });
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
