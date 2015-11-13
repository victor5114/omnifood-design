'use strict';

module.exports = function() {
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
        return self.name.length;
    }
    
}