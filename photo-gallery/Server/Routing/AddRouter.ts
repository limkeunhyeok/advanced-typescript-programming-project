import { Request, Response } from "express";
import { Picture } from "../Database";
import { IRouter } from "./Router";

export class AddPictureRouter implements IRouter {
  public AddRoute(route: any): void {
    route.post('/add/', (req: Request, res: Response) => {
      const picture = new Picture(req.body);
      picture.save((err: any, picture: any) => {
        if (err) {
          res.send(err);
        }
        res.json(picture);
      })
    })
  }
}