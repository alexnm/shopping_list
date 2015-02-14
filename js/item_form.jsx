var app = app || {};

(function () {
	'use strict';

  app.ItemForm = React.createClass({
    handleSubmit: function(e) {
      e.preventDefault();
      var newItem = {
        name: this.refs.name.getDOMNode().value.trim(),
        qty: this.refs.qty.getDOMNode().value.trim(),
        unit: this.refs.unit.getDOMNode().value.trim()
      };

      // send message to shopping list
      this.props.onItemAdded(newItem);

      // clear form
      this.refs.name.getDOMNode().value = '';
      this.refs.qty.getDOMNode().value = '';
      this.refs.unit.getDOMNode().value = '';
    },
    render: function() {
      return (
        <form className="itemForm" onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="Quantity..." ref="qty" />
          <input type="text" placeholder="Name..." ref="name" />
          <input type="text" placeholder="Unit..." ref="unit" />
          <input type="submit" value="Add" />
        </form>
      );
    }
	});
})();