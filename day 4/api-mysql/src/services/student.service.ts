import { IStudent } from "../interfaces/student.interface";
import db from "../libs/mysql.lib";
export class StudentService {
  private static async run(query: string) {
    const [result] = await db.promise().query(query);
    return result;
  }
  public static async getAllService() {
    const sql = "SELECT * FROM student";
    const result = (await this.run(sql)) as IStudent[];
    return result;
  }
  public static async getByIdService(id: number) {
    const sql = `SELECT * FROM student WHERE id = ${id} LIMIT 0,1`;
    const result = (await this.run(sql)) as IStudent[];
    return result[0];
  }
  public createService() {}
  public updateService() {}
  public deleteService() {}
}
