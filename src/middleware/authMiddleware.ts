/// <reference path="../types/express/index.d.ts" />

import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/authService";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // 'Bearer <token>'

  if (!token) {
    return res.status(403).json({ message: "Token não fornecido" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }

  req.user = decoded;  
  next();
};

