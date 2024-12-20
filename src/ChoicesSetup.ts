import IChoicesSetup from "./IChoicesSetup";

export default class ChoicesSetup implements IChoicesSetup {
  constructor(private readonly ports: string[]) {}

  private setChoice(port: string): { name: string; value: string } {
    return { name: port, value: port };
  }

  setChoices(): { name: string; value: string }[] {
    return this.ports.map((port) => this.setChoice(port));
  }
}
