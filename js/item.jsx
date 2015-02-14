var app = app || {};

(function () {
	'use strict';

	var ShoppingListItem = React.createClass({
		render: function() {
	    return (
	      <div className="shopping-list-item">
	        <span> { this.props.qty } { this.props.unit } </span>
	        x
	        <span> { this.props.item } </span>
	      </div>
	    );
	  }
	});
})();