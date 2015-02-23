var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ShoppingListActions = require('../actions/shopping_list_actions');
var assign = require('object-assign');

var items = [];

var Store = assign({}, EventEmitter.prototype, {
	getAll: function() {
    return items;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
  	case ShoppingListActions.ADD_ITEM:
  		items.push(action.item);
  		Store.emitChange();
  		break;
  	case ShoppingListActions.REMOVE_ITEM:
  		items.splice(action.index, 1);
  		Store.emitChange();
  		break;
  }
});

module.exports = Store;