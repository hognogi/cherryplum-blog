/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var Footer = React.createClass({

	render: function() {
		return (
			<Row className="footer">
				<div className="content">
					<span>
						This site serves mostly as a personal blog hosted on <a href="https://cloud.google.com/">google cloud</a>, and it's powered by <a href="https://nodejs.org/">node.js</a> and 
						it's served by <a href="https://www.mongodb.com/">MongoDB</a>. 
						The web front-end is powered by <a href="https://facebook.github.io/react/">React</a>&nbsp; 
						and the admin front-end is assembled using <a href="http://olado.github.io/doT/index.html">DoT.js</a>. 
					 </span>
					 <br />

					 <span>To see the full code running this site, please visit the <a href="https://github.com/hognogi/cherryplum-blog">github page</a>.</span>
					 <br />
					<span>Developed by <a href="/contact">Beni Hognogi</a>, designed by <a href="#">Szekely Jonathan</a></span>
				</div>
			</Row>
		);
	}

});


module.exports = Footer;
