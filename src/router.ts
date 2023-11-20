import { Express, Request, Response } from "express";

/**
 * Router
 *
 * @param {Express} server
 */
const Router = (server: Express) => {
  server.get("", (req: Request, res: Response) => res.sendStatus(200));
};


export default Router