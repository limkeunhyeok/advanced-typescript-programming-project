import express, { Request, Response } from 'express';
import cors from 'cors';
import { Mongo } from './Database';
import { RoutingEngine } from './Routing/RoutingEngine';

export abstract class Server {
  private router: any;

  constructor(private port: number = 3000, private app: express.Application = express(), private mongo: Mongo = new Mongo(), private routingEngine: RoutingEngine = new RoutingEngine()) {}

  public Start(): void {
    this.app.use(express.json({ limit: '100mb' }));
    this.app.use(express.urlencoded({ limit: '100mb', extended: true }));
    this.mongo.Connect();
    this.router = express.Router();
    this.AddRouting(this.routingEngine, this.router);
    this.app.use(this.router);
    this.OnStart();
    this.app.listen(this.port, () => {
      console.log(`Express server running on port ${this.port}`)
    });
  }

  protected abstract AddRouting(routingEngine: RoutingEngine, router: any): void;

  protected OnStart(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello from the server')
    });
  }

  public WithCorsSupport(): Server {
    this.app.use(cors());
    return this;
  }
}
