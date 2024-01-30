const supertest = require('supertest')
const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')
const api = supertest(app)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
  console.log(process.env['NODE_ENV']?.toString());
})


var MyHashSet = function() {
  this.hash = []
  this.modulo = 5
  
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  let position = key % this.modulo;
  if(!this.hash[position]){
      this.hash[position] = []
  }
  this.hash[position].push(key);
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  let itemToRemoveArray = key % this.modulo;
  let itemIndex = this.hash[itemToRemoveArray] ? this.hash[itemToRemoveArray].indexOf(key) : -1
  if(itemIndex !== -1){
      this.hash[itemToRemoveArray].splice(itemIndex, 1)
  }
};

/** 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  let position = key % this.modulo
  return (this.hash[position] && this.hash[position].includes(key))
};
var obj = new MyHashSet()
obj.add(1)
obj.add(2)