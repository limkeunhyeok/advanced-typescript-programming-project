import { AddPictureRouter } from "./Routing/AddRouter";
import { FindByIdRouter } from "./Routing/FindByIdRouter";
import { GetPictureRouter } from "./Routing/GetPictureRouter";
import { RoutingEngine } from "./Routing/RoutingEngine";
import { Server } from "./server";

export class AdvancedTypeScriptProjectsChapter4 extends Server {
  protected AddRouting(routingEngine: RoutingEngine, router: any): void {
    routingEngine.Add(AddPictureRouter, router);
    routingEngine.Add(GetPictureRouter, router);
    routingEngine.Add(FindByIdRouter, router);
  }
}

new AdvancedTypeScriptProjectsChapter4(3000).WithCorsSupport().Start();