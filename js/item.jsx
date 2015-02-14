var app = app || {};

(function () {
	'use strict';

	app.ShoppingListItem = React.createClass({
		handleRemove: function() {
			this.props.onItemRemoved(this.props.index);
		},
		render: function() {
			var item = this.props.item;
			return (
					<div className="shopping-list-item">
						<span> { item.qty } { item.unit } </span>
						<span> x </span>
						<span> { item.name } </span>
						<a href="javascript:void(0)" onClick={ this.handleRemove }> x </a>
					</div>
			);
		}
	});
})();