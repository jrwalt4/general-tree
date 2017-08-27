/**
 *
 */
import { Tree } from './Tree';

export class TreeNode<T> {

  /**
   * @internal
   */
  public key: string;
  private value: T;
  private tree: Tree<T>;
  private parentKey?: string;
  private firstChildKey?: string;
  private nextSiblingKey?: string;

  constructor(tree: Tree<T>, key: string, value: T) {
    this.key = key;
    this.value = value;
    this.tree = tree;
  }

  public getParent(): TreeNode<T> | undefined {
    if (this.parentKey) {
      return this.tree.getNode(this.parentKey);
    }
  }

  public getFirstChild(): TreeNode<T> | undefined {
    if (this.firstChildKey) {
      return this.tree.getNode(this.firstChildKey);
    }
  }

  public getNextSibling(): TreeNode<T> | undefined {
    return this.nextSiblingKey ? this.tree.getNode(this.nextSiblingKey) : void 0;
  }

  public getChildren(): TreeNode<T>[] {
    let sibling: TreeNode<T> | undefined = this.getFirstChild();
    const children: TreeNode<T>[] = [];
    while (sibling) {
      children.push(sibling);
      sibling = sibling.getNextSibling();
    }

    return children;
  }

  public appendChild(node: TreeNode<T>): boolean {
    if (this.tree.addNode(node)) {
      node.parentKey = this.key;

      return true;
    }

    return false;
  }
}
