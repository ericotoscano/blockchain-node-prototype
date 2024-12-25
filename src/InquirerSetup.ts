import IInquirerSetup from './IInquirerSetup';

export default class InquirerSetup implements IInquirerSetup {
  private readonly message: string = `Select one port number to use in your localhost blockchain node`;
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

  getMessage(): string {
    return this.message;
  }

  getChoices(): { name: string; value: string }[] {
    return this.choices;
  }
}
