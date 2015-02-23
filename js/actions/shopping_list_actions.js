var Dispatcher = require('../dispatcher/dispatcher');

var Actions = {
	addItem : function(item) {
		Dispatcher.dispatch({
      actionType: this.ADD_ITEM,
      item: item
    });
	},

	removeItem : function(index) {
		Dispatcher.dispatch({
      actionType: this.REMOVE_ITEM,
      index: index
    });
	},

	ADD_ITEM : 'ADD_ITEM',
	REMOVE_ITEM : 'REMOVE_ITEM'
};

module.exports = Actions;