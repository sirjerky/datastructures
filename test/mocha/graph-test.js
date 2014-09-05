"use strict";

var expect = require('chai').expect;
var Graph = require('../../lib/graph');

describe('Graph', function(){
  var graph;

  beforeEach(function(){
    graph = new Graph(5);
  });

  it('should create a new instance of Graph', function(){
    expect(graph).to.be.instanceof(Graph);
  });

  it('should create an edge', function(){
    graph.addEdge(0,1);
    expect(graph.adj[0][0]).to.be.not.undefined;
  });

  it('should show graph', function(){
    graph.addEdge(0,1);
    graph.addEdge(0,2);
    expect(graph.showGraph()).to.be.equal('0 -> 1 2; 1 -> 0; 2 -> 0; 3 ->; 4 ->;');
  });

  it('should add a vertex', function(){
    graph.addVertex(1);
    expect(graph.showGraph()).to.be.equal('0 ->; 1 ->; 2 ->; 3 ->; 4 ->; 5 ->;');

  });

  it('should return a depth first search', function(){
    graph.addEdge(0,1);
    graph.addEdge(0,2);
    graph.addEdge(1,3);
    expect(graph.depthFirst(0)).to.be.equal('Visited vertex: 0\nVisited vertex: 1\nVisited vertex: 3\nVisited vertex: 2\n');
  });

  it('should return a breadth first search', function(){
    graph.addEdge(0,1);
    graph.addEdge(0,2);
    graph.addEdge(1,3);
    expect(graph.breadthFirst(0)).to.be.equal('Visited vertex: 0\nVisited vertex: 1\nVisited vertex: 2\nVisited vertex: 3\n');
  });

});
