import { Request, Response } from "express";
import { Picture } from "../Database";
import { IRouter } from "./Router";

export class GetPictureRouter implements IRouter {
  public AddRoute(route: any): void {
    route.post('/add/', (req: Request, res: Response) => {
      Picture.distinct('_id', (err: any, picture: any) => {
        if (err) {
          res.send(err);
        }
        res.send(picture);
      })
    })
  }
}