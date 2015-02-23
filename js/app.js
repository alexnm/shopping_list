var React = require('react/addons');
var ShoppingList = require('./components/list.react')

var items = [];

React.render(
		<ShoppingList items={items} />,
		document.getElementById('react-root')
	);