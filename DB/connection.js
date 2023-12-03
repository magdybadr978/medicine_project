import mysql from "mysql2";
import { promisify } from  "util";

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password :"",
  database : "meds"
})

export default promisify(connection.execute).bind(connection);