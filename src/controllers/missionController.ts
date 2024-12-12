import { Request, Response } from "express";
import Mission from "../models/mission";

export const registerMission = async (req: Request, res: Response) => {
  const { name, description, launchDate } = req.body;

  try {
    const mission = await Mission.create({ name, description, launchDate });
    res.status(201).json(mission);
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar missão", error });
  }
};

export const listMissions = async (req: Request, res: Response) => {
  try {
    const missions = await Mission.findAll();
    res.status(200).json(missions);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar missões", error });
  }
};

export const deleteMission = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const mission = await Mission.findByPk(id);
    if (!mission) {
      return res.status(404).json({ message: "Missão não encontrada" });
    }

    await mission.destroy();
    res.status(200).json({ message: "Missão excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir missão", error });
  }
};
