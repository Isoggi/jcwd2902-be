export class ErrorHandler extends Error {
  statusCode: number;
  constructor(message: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

// class SuccessResponse {
//   success: boolean = true;
//   message: string;
//   data?: any;
//   constructor(message: string, data?: any) {
//     this.message = message;
//     this.data = data;
//   }
// }

export const responseHandler = (
  message: string,
  data?: any,
  success: boolean = true
) =>
  // new SuccessResponse(success,message, data);
  ({ success, message, data });
