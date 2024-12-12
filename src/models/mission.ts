import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Mission extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public launchDate!: Date;
}

Mission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    launchDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Mission",
    tableName: "missions",
  }
);

export default Mission;


