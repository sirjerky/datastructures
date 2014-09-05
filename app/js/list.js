var List = function(){
  this.datastore = [];
  this.listSize = 0;
  this.pos = 0;
};

List.prototype.append = function(element){
  this.datastore[this.listSize] = element;
  this.listSize++;
};

List.prototype.find = function(element){
  for (var i = 0; i < this.datastore.length; i++){
    if (this.datastore[i] === element){
      return i
    }
  }
  return -1;
};

List.prototype.remove = function(element){
  var found = this.find(element);
  if (found > -1){
    this.datastore.splice(found, 1);
    --this.listSize;
    return true;
  }
  return false;
};

List.prototype.length = function(){
  return this.listSize;
};

List.prototype.toString = function(){
  var returnString = '';
  for (i=0; i < this.datastore.length; i++){
    returnString += returnString + this.datastore[i];
  }
  return returnString;
};

List.prototype.insert = function(element, after){
  var insertPos = this.find(after);
  if(insertPos > -1 ){
    this.datastore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
};

List.prototype.clear = function(){
  this.datastore = [];
  this.listSize = this.pos = 0;
};

List.prototype.contains = function(element){
  if(this.find(element) > -1) return true;
  return false;
};

List.prototype.moveTo = function(position){
  this.pos = position;
};

List.prototype.getElement = function(){
  return this.datastore[this.pos];
};

List.prototype.next = function(){
  return this.datastore[this.pos++];
};

List.prototype.previous = function(){
  return this.datastore[--this.pos];
};

List.prototype.hasNext = function(){
  if (this.pos > this.listSize - 1){
    return false;
  } else { 
    return true;
  }
};

List.prototype.hasPrevious = function(){
  if (this.pos <= 0){
    return false;
  } else {
    return true;
  }
};

List.prototype.front = function(){
  this.pos = 0;
};

List.prototype.end = function(){
  this.pos = this.listSize - 1;
};

List.prototype.currPos = function(){
  return this.pos;
};

List.prototype.insertLarge = function(element){
  
};

List.prototype.insertSmall = function(element){

};

module.exports = List;
