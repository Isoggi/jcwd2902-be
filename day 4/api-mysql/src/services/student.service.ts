import db from "../libs/mysql.lib";
export class StudentService {
  public static async getAllService() {
    const sql = "SELECT * FROM student";
    const [result] = await db.promise().query(sql);
    return result;
  }
  public static async getByIdService(id: number) {
    const sql = `SELECT * FROM student WHERE id = ${id} LIMIT 0,1`;
    const result = await db.promise().query(sql);
    return result;
  }
  public createService() {}
  public updateService() {}
  public deleteService() {}
}
