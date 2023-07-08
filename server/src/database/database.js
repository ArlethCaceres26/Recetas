import Sequelize from "sequelize";

// conexion a la base de datos

//export const sequelize = new Sequelize("recetasdb", "postgres", "0000", {
  //host: "localhost",
  //dialect: "postgres",
//});
 
export const sequelize = new Sequelize("railway", "postgres", "ZNqDRz7h5YYszGjXfoxR", {
  host: "containers-us-west-113.railway.app",
  dialect: "postgres",
  logging: false,
  port: 6347,
});