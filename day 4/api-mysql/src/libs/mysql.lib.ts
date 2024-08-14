import mysql from "mysql2";
import { MYSQL_CONFIG } from "../config";
export default mysql.createPool(MYSQL_CONFIG);
