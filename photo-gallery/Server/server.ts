import express, { Request, Response } from 'express';

export class Server {
  constructor(private port: number = 3000, private app: express.Application = express()) {}

  public Start(): void {
    this.app.use(express.json({ limit: '100mb' }));
    this.app.use(express.urlencoded({ limit: '100mb', extended: true }));
    this.OnStart();
    this.app.listen(this.port, () => {
      console.log(`Express server running on port ${this.port}`)
    });
  }

  protected OnStart(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello from the server')
    });
  }
}

new Server(3000).Start();