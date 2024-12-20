import 'dotenv/config';
import express, { Express } from 'express';
import { select } from '@inquirer/prompts';
import EnvFileService from './EnvFileService';
import ChoicesSetup from './ChoicesSetup';
import IChoicesSetup from './IChoicesSetup';
import ExpressAppSetup from './ExpressAppSetup';
import ServerManagement from './ServerManagement';
import ServerListeningSetup from './SetupServerListener';
import ProcessListeningSetup from './SetupProcessListener';
import ErrorHandling from './ErrorHandling';

const main = async () => {
  const ports: string[] = EnvFileService.formatPortsOptions(process.env.PORTS);
  const choicesSetup: IChoicesSetup = new ChoicesSetup(ports);
  const choices: { name: string; value: string }[] = choicesSetup.getChoices();

  try {
    const answer = await select({
      message: 'Select one port number to use in your localhost blockchain node',
      choices,
    });

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
