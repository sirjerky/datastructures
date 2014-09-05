"use strict";

var expect = require('chai').expect;
var List = require('../../app/js/list');

describe('List', function(){

  var list;

  beforeEach(function(){
    list = new List();
  });

  it('can create a new List', function(){
    expect(list).to.be.instanceOf(List);
  });

  it('has a property called datastore', function(){
    expect(list).to.have.property('datastore');
  });

  it('should return length', function(){
    expect(list.length()).to.be.eql(0);
  });

  it('should append an item', function(){
    list.append('a thing');
    expect(list.length()).to.be.eql(1);
  });

  it('should find item', function(){
    list.append('a thing');
    expect(list.find('a thing')).to.be.eql(0);
  });

  it('should list contents', function(){
    list.append('a thing');
    expect(list.toString()).to.be.eql('a thing');
  });

  it('should remove item', function(){
    list.append('a thing');
    list.remove('a thing');
    expect(list.length()).to.be.eql(0);
  });

  it('should contain item', function(){
    list.append('a thing');
    expect(list.contains('a thing')).to.be.true;
  });

  it('should clear list', function(){
    list.append('a thing');
    list.append('another thing');
    list.clear();
    expect(list.length()).to.be.eql(0);
  });

});
