/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var Suggestions = React.createClass({

	render: function() {
		return (
			<div className="suggestions">
				<h3>See also</h3>

				<h4>Cherryplum:</h4>
				<a href="https://github.com/hognogi/cherryplum">Framework demo</a>
				<a href="https://github.com/hognogi/cherryplum-blog">This blog</a>
			</div>
		);
	}
});


module.exports = Suggestions;
