import INodeUrl from './INodeUrl';

export default class NodeUrl implements INodeUrl {
  private readonly value: string;

  constructor(private readonly baseUrl: string, private readonly port: string) {
    this.value = this.create();
  }

  private create(): string {
    return `${this.baseUrl}${Number(this.port)}`;
  }

  getValue(): string {
    return this.value;
  }

  equals(otherNodeUrl: INodeUrl): boolean {
    if (!otherNodeUrl) return false;

    return this.value === otherNodeUrl.getValue();
  }
}
