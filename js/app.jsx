var app = app || {};

(function () {
	'use strict';

	var items = [ { name: 'Iaurt', qty: 2 }, { name: 'Paine', qty: 1 }, { name: 'fasole', qty: 1, unit: 'kg' } ]

	var ShoppingList = React.createClass({
		render: function() {
			var itemList = this.props.items.map( function(item) {
				return (
					<ShoppingListItem item={item} />
					);
			});

			return (
				{ itemList }
			);
		}
	});

	var ShoppingListItem = React.createClass({
		render: function() {
	    return (
	      <div className="shopping-list-item">
	        <span> { this.props.item.qty } { this.props.item.unit } </span>
	        x
	        <span> { this.props.item.name } </span>
	      </div>
	    );
	  }
	});

	React.render(
			<ShoppingList items={items} />,
			document.getElementById('react-root')
		);
})();