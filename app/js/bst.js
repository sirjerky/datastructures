"use strict";

var Counter = require('../../lib/counter');

var BST = function(){
  this.root = null;

  this._Node = function(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  };

};

BST.prototype.isEmpty = function(){
  if(this.root === null) return true;
  return false;
};

BST.prototype.insert = function(element){
  var n = new this._Node(element, null, null);
  if (this.root === null){
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true){
      parent = current;
      if (n.data < current.data){
        current = current.left;
        if (current === null){
          parent.left = n;
          break;
        }
      } else{
        current = current.right;
        if (current === null){
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node){
  var result = '';
  if (node !== null){
    result += this.inOrder(node.left);
    result += node.data + ' ';
    result += this.inOrder(node.right);
  }
  return result;
};

BST.prototype.preOrder = function(node){
  var result = '';
  if (!(node === null)){
    result += node.data + ' ';
    result += this.preOrder(node.left);
    result += this.preOrder(node.right);
  }
  return result;
};

BST.prototype.postOrder = function(node){
  var result = '';
  if (!(node === null)){
    result += this.postOrder(node.left);
    result += this.postOrder(node.right);
    result += node.data + ' ';
  }
  return result;
};

BST.prototype.getMin = function(){
  var current = this.root;
  while(current.left){
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function(){
  var current = this.root;
  while(current.right){
    current = current.right;
  }
  return current.data;
};

BST.prototype.nodeCount = function(node){
  var count = 0;
  if (!(node === null)){
    count++;
    count += this.nodeCount(node.left);
    count += this.nodeCount(node.right);
  }
  return count;
};

BST.prototype.edgeCount = function(node){
  var count = 0;
  if (node !== null){
    if(node.left !== null) count++;
    count += this.edgeCount(node.left);
    if(node.right !== null) count++;
    count += this.edgeCount(node.right);
  }
  return count;
};

module.exports = BST;
