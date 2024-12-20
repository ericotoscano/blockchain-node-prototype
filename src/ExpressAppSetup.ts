import { Express, json } from 'express';

export default class ExpressAppSetup {
  constructor(private readonly app: Express) {
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.app.use(json());
  }

  private setRoutes(): void {}
}
