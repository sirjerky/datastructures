"use strict";

var expect = require('chai').expect;
var BST = require('../../app/js/bst');

describe('BST', function(){

  var bst;

  beforeEach(function(){
    bst = new BST();
  });

  it('should create a new BST', function(){
    expect(bst).to.be.instanceof(BST);
  });

  it('should be empty', function(){
    expect(bst.isEmpty()).to.be.true;
  });

  it('should insert Node and no longer be empty', function(){
    bst.insert(42);
    expect(bst.isEmpty()).to.be.false;
  });

  it('should print nodes in order', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    expect(bst.inOrder(bst.root)).to.equal('33 42 54 ');
  });

  it('should print nodes from top to bottom', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    expect(bst.preOrder(bst.root)).to.equal('42 33 54 ');
  });

  it('should print nodes from bottom to top', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    expect(bst.postOrder(bst.root)).to.equal('33 54 42 ');
  });

  it('should return lowest value', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    bst.insert(66);
    bst.insert(11);
    bst.insert(9);
    bst.insert(24);
    expect(bst.getMin()).to.be.eql(9);
  });

  it('should return highest value', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    bst.insert(66);
    bst.insert(11);
    bst.insert(9);
    bst.insert(24);
    expect(bst.getMax()).to.be.eql(66);
  });

  it('should return number of nodes', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    bst.insert(66);
    expect(bst.nodeCount(bst.root)).to.be.eql(4);
  });

  it('should return number of edges', function(){
    bst.insert(42);
    bst.insert(54);
    bst.insert(33);
    bst.insert(66);
    expect(bst.edgeCount(bst.root)).to.be.eql(3);
  });

});
