import jwt from "jsonwebtoken";
import  User  from "../models/User";

const SECRET_KEY = "Secreto"; 

export const generateToken = (user: User) => {
  return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};


