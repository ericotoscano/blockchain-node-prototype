import { IConnectedNode, INode } from "./INode";
import INodeAddress from "./INodeAddress";
import INodeUrl from "./INodeUrl";

export default class Node implements INode {
  private connectedNodes: IConnectedNode[] = [];

  constructor(readonly nodeUrl: INodeUrl, readonly nodeAddress: INodeAddress) {}

  getConnectedNodes(): IConnectedNode[] {
    return [...this.connectedNodes];
  }

  setConnectedNodes(newConnectedNodes: IConnectedNode[]): void {
    this.connectedNodes = [...newConnectedNodes];
  }
}
