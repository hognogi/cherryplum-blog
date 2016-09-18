/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var Bio = React.createClass({

	render: function() {
		return (
			<Row >
				<Col xs={12}>
					<h1 className="main-title">Short bio</h1>

					<p>
						Hello everyone, 
					</p>
					<p>
						My name is Beni Hognogi, and I'm currently working as a front-end developer at <a target="_blank" href="http://www.accesa.eu/">Accesa</a>
					</p>
					<p>
						There are many thing that interest me, but this website was build to focus on programming, and as an highly opinionated person, i'm looking forward to any meaningfull conversation. 
					</p>

				</Col>
			</Row>
		);
	}

});


module.exports = Bio;
