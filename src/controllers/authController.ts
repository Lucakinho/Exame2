import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../services/authService";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user || !user.checkPassword(password)) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const token = generateToken(user);

  res.status(200).json({ token });
};
