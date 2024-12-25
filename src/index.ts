import 'dotenv/config';
import express, { Express } from 'express';
import { select } from '@inquirer/prompts';
import EnvFileService from './EnvFileService';
import ExpressAppSetup from './ExpressAppSetup';
import ServerManagement from './ServerManagement';
import ServerListeningSetup from './SetupServerListener';
import ProcessListeningSetup from './SetupProcessListener';
import ErrorHandling from './ErrorHandling';
import IInquirerSetup from './IInquirerSetup';
import InquirerSetup from './InquirerSetup';
import INodeFactory from './NodeFactory';

const main = async () => {
  const baseUrl: string = EnvFileService.getBaseUrl();

  const ports: string[] = EnvFileService.getPorts();

  const inquirerSetup: IInquirerSetup = new InquirerSetup(ports);

  const choices: { name: string; value: string }[] = inquirerSetup.getChoices();

  const message: string = inquirerSetup.getMessage();

  try {
    const answer = await select({ message, choices });

    const nodeFactory: INodeFactory = new NodeFactory(baseUrl, answer);

    //instanciar um Node, criar a url e o address e guardar no .env

    const app: Express = express();
    new ExpressAppSetup(app);

    const serverManagement = new ServerManagement(Number(answer), app);
    const serverListeningSetup = new ServerListeningSetup(serverManagement);
    const processListeningSetup = new ProcessListeningSetup(serverManagement);

    serverListeningSetup.setupErrorListener();
    processListeningSetup.setupGracefulShutdown();
  } catch (error: any) {
    ErrorHandling.handleStartupError(error);
  }
};

main();
