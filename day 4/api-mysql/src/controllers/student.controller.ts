import { Request, Response } from "express";
import { responseHandler } from "../helpers/response.helper";
import { StudentService } from "../services/student.service";

export class StudentController {
  public async getAll(req: Request, res: Response) {
    const data = await StudentService.getAllService();
    res.send(responseHandler("Students", data));
  }
  public async getById(req: Request, res: Response) {
    const id = req.params.id;
    const data = await StudentService.getByIdService(Number(id));
    res.send(responseHandler("Student Id", data));
  }
  public create(req: Request, res: Response) {
    res.send(responseHandler("create new student"));
  }
  public update(req: Request, res: Response) {
    // const data = readData();
    const { id } = req.params;
    // const index = data.students.findIndex((item) => item.id == Number(id));
    // if (index === -1) throw new ErrorResponse("student not found", 404);
    // data.students[index] = { ...data.students[index], ...req.body };
    // writeData(data);
    res.send(responseHandler("update student", { id }));
  }
  public delete(req: Request, res: Response) {
    // const data = readData();
    const { id } = req.params;
    // const index = data.students.findIndex((item) => item.id == Number(id));
    // if (index === -1) throw new ErrorResponse("student not found", 404);
    // data.students.splice(index, 1);
    // writeData(data);
    res.send(responseHandler("delete student", { id }));
  }
}
