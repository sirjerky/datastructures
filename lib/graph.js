"use strict";

var Graph = function(v){
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  this.edgeTo = [];
  for (var i = 0; i < this.vertices; i++){
    this.adj[i] = [];
    this.marked[i] = false;
  }
};

Graph.prototype.addEdge = function(v, w){
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
};

Graph.prototype.showGraph = function(){
  var result = '';
  for(var i = 0; i < this.vertices; i++){
    result += i + ' ->';
    for (var j = 0; j< this.vertices; j++){
      if(this.adj[i][j] !== undefined){
        result += ' ' + this.adj[i][j];
      }
    }
    result += '; ';
  }
  return result.trim();
};

Graph.prototype.addVertex = function(){
  this.adj[this.vertices] = [];
  this.vertices++;
};

Graph.prototype.depthFirst = function(vert){
  var result = '';
  this.marked[vert] = true;
  if(this.adj[vert] !== undefined){
    result += "Visited vertex: " + vert + '\n';
  }
  for(var i = 0; i < this.adj[vert].length; i++){
    var w = this.adj[vert][i];
    if(!this.marked[w]){
      result += this.depthFirst(w);
    }
  }
  return result;
};

Graph.prototype.breadthFirst = function(vert){
  var result = '';
  var queue = [];
  this.marked[vert] = true;
  queue.push(vert);
  while(queue.length > 0){
    var v = queue.shift();
    if(v !== undefined){
      result += ('Visited vertex: ' + v + '\n');
    }
    for (var i = 0; i < this.adj[v].length; i++){
      var w = this.adj[v][i];
      if(!this.marked[w]){
        this.marked[w] = true;
        this.edgeTo[w] = vert;
        queue.push(w);
      }
    }
  }
  return result;
};

module.exports = Graph;
