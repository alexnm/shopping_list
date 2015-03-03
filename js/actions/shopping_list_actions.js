var Dispatcher = require('../dispatcher/dispatcher');
var $ = require('jquery');

var Actions = {
	addItem : function(item) {
		Dispatcher.dispatch({
      actionType: this.ADD_ITEM,
      item: item
    });

    $.ajax('/api/add', {
    	type: 'POST',
			data: item
		});
	},

	checkItem : function(index) {
		$.ajax('/api/check/' + index, {
			type: 'PATCH'
		});
		Dispatcher.dispatch({
      actionType: this.CHECK_ITEM,
      index: index
    });
	},

	removeItem : function(index) {
		$.ajax('/api/remove/' + index, {
			type: 'DELETE'
		});
		Dispatcher.dispatch({
      actionType: this.REMOVE_ITEM,
      index: index
    });
	},

	getData: function() {
		$.get('/api/list', function(response) {
			Actions.receiveData(response.data)
		});
	},

	receiveData : function(data) {
		Dispatcher.dispatch({
			actionType: this.RECEIVE_DATA,
			data: data
		});
	},

	ADD_ITEM : 'ADD_ITEM',
	REMOVE_ITEM : 'REMOVE_ITEM',
	CHECK_ITEM : 'CHECK_ITEM',
	RECEIVE_DATA : 'RECEIVE_DATA'
};

module.exports = Actions;