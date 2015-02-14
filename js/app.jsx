var app = app || {};

(function () {
	'use strict';

	var items = [ { name: 'Iaurt', qty: 2 }, { name: 'Paine', qty: 1 }, { name: 'fasole', qty: 1, unit: 'kg' } ];
	var ShoppingListItem = app.ShoppingListItem;
	var ItemForm = app.ItemForm;

	var ShoppingList = React.createClass({
		componentDidMount: function() {
			this.setState( { items: this.props.items } )
		},
		addItem: function( newItem ) {
			this.state.items.push(newItem);
			this.setState( { items: this.state.items } );
		},
		removeItem: function( index ) {
			this.state.items.splice(index, 1);
			this.setState( { items: this.state.items })
		},
		getInitialState: function() {
			return { items : [] };
		},
		render: function() {

			var itemList = this.props.items.map( function(item, index) {
				return (
					<ShoppingListItem
							item = { item }
							index = { index }
							onItemRemoved = { this.removeItem }
					/>
					);
			}.bind(this));
			return (
					<div>
							{ itemList }
							<ItemForm onItemAdded = { this.addItem } />
					</div>
			);
		}
	});

	React.render(
			<ShoppingList items={items} />,
			document.getElementById('react-root')
		);
})();