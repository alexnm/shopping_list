var React = require('react/addons');
var ItemForm = require('./item_form.react')
var ShoppingListItem = require('./item.react')
var ShoppingListStore = require('../stores/shopping_list_store');
var ShoppingListActions = require('../actions/shopping_list_actions');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ShoppingList = React.createClass({
	componentDidMount: function() {
		ShoppingListStore.addChangeListener(this.onChange);
	},
	onChange: function() {
		this.setState( { items: ShoppingListStore.getAll() } );
	},
	addItem: function( newItem ) {
		ShoppingListActions.addItem( newItem );
	},
	removeItem: function( index ) {
		ShoppingListActions.removeItem( index );
	},
	toggleItem: function( index ) {
		this.state.items[index].checked = !this.state.items[index].checked;
		this.setState( { items: this.state.items } );
	},
	getInitialState: function() {
		return { items : ShoppingListStore.getAll() };
	},
	render: function() {

		var itemList = this.state.items.map( function(item, index) {
			return (
				<ShoppingListItem
						key = { index }
						item = { item }
						index = { index }
						onItemRemoved = { this.removeItem }
						onItemChecked = { this.toggleItem }
				/>
				);
		}.bind(this));
		return (
				<div>
					<ReactCSSTransitionGroup transitionName="example">
						{ itemList }
					</ReactCSSTransitionGroup>
					<ItemForm onItemAdded = { this.addItem } />
				</div>
		);
	}
});

module.exports = ShoppingList;