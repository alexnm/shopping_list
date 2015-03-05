var Dispatcher = require('../dispatcher/dispatcher');
var request = require('superagent');

var Actions = {
	addItem : function(item) {
		Dispatcher.dispatch({
      actionType: this.ADD_ITEM,
      item: item
    });

		request.post('/api/add').send(item).end();
	},

	checkItem : function(index) {
		Dispatcher.dispatch({
      actionType: this.CHECK_ITEM,
      index: index
    });

    request.patch('/api/check/' + index).end();
	},

	removeItem : function(index) {
		Dispatcher.dispatch({
      actionType: this.REMOVE_ITEM,
      index: index
    });

    request.del('/api/remove/' + index).end();
	},

	getData: function() {
		request.get('/api/list').end(function(response) {
			Actions.receiveData(response.body.data);
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