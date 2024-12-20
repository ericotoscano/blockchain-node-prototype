import IChoicesSetup from './IChoicesSetup';

export default class ChoicesSetup implements IChoicesSetup {
  private readonly choices: { name: string; value: string }[];

  constructor(private readonly ports: string[]) {
    this.choices = this.setChoices();
  }

  private formatChoice(port: string): { name: string; value: string } {
    return { name: port, value: port };
  }

  private setChoices(): { name: string; value: string }[] {
    return this.ports.map((port) => this.formatChoice(port));
  }

  getChoices(): { name: string; value: string }[] {
    return this.choices;
  }
}
