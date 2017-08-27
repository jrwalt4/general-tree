/**
 * tests for Tree
 */
import { Tree } from './Tree';
import { TreeNode } from './TreeNode';

describe('Tree', () => {
  let tree: Tree<string>;
  beforeEach(() => {
    tree = new Tree();
  });
  it('constructs', () => {
    expect(tree instanceof Tree).toBeTruthy();
  });
  it('has a root node', () => {
    expect(tree.getRoot()).not.toBeUndefined();
  });
  it('creates TreeNodes', () => {
    expect(tree.createNode('test') instanceof TreeNode).toBeTruthy();
  });
});
