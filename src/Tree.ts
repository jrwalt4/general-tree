/**
 *
 */
import * as cuid from 'cuid';
import { TreeNode } from './TreeNode';

interface ITreeNodeStore<T> {
  [key: string]: TreeNode<T>;
}

export class Tree<T> {
  private store: ITreeNodeStore<T> = {};
  private rootKey: string;

  public getRoot(): TreeNode<T> {
    return this.store[this.rootKey];
  }

  public createNode(value: T): TreeNode<T> {
    return new TreeNode<T>(this, this.nextId(), value);
  }

  /**
   * @internal
   */
  public getNode(key: string): TreeNode<T> {
    return this.store[key];
  }

  /**
   * @internal
   */
  public addNode(node: TreeNode<T>): boolean {
    this.store[node.key] = node;

    return this.store[node.key] && this.store[node.key] === node;
  }

  private nextId(): string {
    return cuid();
  }
}
