/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var Suggestions = React.createClass({

	render: function() {
		return (
			<div className="suggestions">
				<h3>See also</h3>

				<h4>Github Links:</h4>
				<a href="https://github.com/hognogi/cherryplum">Framework demo</a>
				<a href="https://github.com/hognogi/cherryplum-blog">This blog</a>

				
				<h4>What's next?</h4>
				<a href="#">A series detailing all the decisions that led to this blog</a>
				<a href="#">A video in which I will try to explain how the blog works</a>
				<a href="#">Many subjective optinions</a>
			</div>
		);
	}
});


module.exports = Suggestions;
