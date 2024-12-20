import 'dotenv/config';
import { select } from '@inquirer/prompts';
import EnvFileService from './EnvFileService';
import ChoicesSetup from './ChoicesSetup';
import IChoicesSetup from './IChoicesSetup';

const ports: string[] = EnvFileService.formatPortsOptions(process.env.PORTS);

const choicesSetup: IChoicesSetup = new ChoicesSetup(ports);

const choices: { name: string; value: string }[] = choicesSetup.setChoices();

const answer = select({
  message: 'Select one port number to use in your localhost blockchain node',
  choices,
});
