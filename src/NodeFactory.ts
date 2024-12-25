import { INode } from './INode';
import INodeUrl from './INodeUrl';
import NodeUrl from './NodeUrl';

export default interface INodeFactory {
  createNode(): INode;
}

export default class NodeFactory implements INodeFactory {
  constructor(private readonly baseUrl: string, private readonly port: string) {}

  createNode(): INode {
    const nodeUrl: INodeUrl = this.createNodeUrl();

    const nodeAddress: INodeAddress = this.createNodeAddress();

    return new Node(nodeUrl, nodeAddress);
  }

  private createNodeUrl(): INodeUrl {
    return new NodeUrl(this.baseUrl, this.port);
  }

  private createNodeAddress(): INodeAddress {}
}
