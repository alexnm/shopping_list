var app = app || {};

(function () {
	'use strict';

	var ItemForm = React.createClass({
    render: function() {
      return (
        <form className="itemForm">
          <input type="text" placeholder="Quantity..." ref="author" />
          <input type="text" placeholder="Name..." ref="text" />
          <input type="submit" value="Post" />
        </form>
      );
    }
	});
})();