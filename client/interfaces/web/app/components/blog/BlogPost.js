/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var DateFormat = require('dateformat');
var sanitizeHtml = require('sanitize-html');

var getSanitizedPostContent = function(state){
	var content = state.content;

	if(state.isTeaser) {
		content = state.snippet
	}


	return {
		__html : content
	}

/*
	return {
		__html : sanitizeHtml(content, {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'h2', 'h1' ]),
			allowedAttributes: false
		})
	}*/
};


var getMeta = function (created) {
	if( !created ) return "";

	var _date = new Date( created/1000 );
	return DateFormat(_date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
};


var BlogPost = React.createClass({
	contextTypes: {
    	media			: React.PropTypes.object,
		tag_color_map	: React.PropTypes.object,
		texts			: React.PropTypes.object
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		return false;
	},

	getInitialState : function(){

		return {
			title : this.props.postData.headline || '',
			meta : getMeta(this.props.postData.created),
			content: this.props.postData.body || '',
			snippet: this.props.postData.snippet || '',
			tags: this.props.postData.tags || [],
			primary_image : this.props.postData.primary_image_id ? this.context.media[ this.props.postData.primary_image_id  ] : false,
			isTeaser: this.props.isTeaser,
			created: new Date(this.props.postData.created/1000),
			permalink: this.props.postData.permalink
		}
	},

	render: function() {
		var context = this.context;


		return (

			<article className={"blog-post clearfix" + (this.state.isTeaser? ' blog-post-teaser' : '')}>

				{ this.state.isTeaser ?
					(<a href={"/p/" + this.state.permalink} ><h2>{this.state.title}</h2></a>):
					<h2>{this.state.title}</h2>
				}
				<div className="post-meta">{this.state.meta}</div>

				{ this.state.primary_image ?
					(<figure >
						<img src={"/" + this.state.primary_image.url} alt={this.state.primary_image.original_name} />
					</figure>):
					null
				}


				<div className="post-content" dangerouslySetInnerHTML={getSanitizedPostContent( this.state )} />

				{ this.state.isTeaser ? <div className="post-buttons">
					<a className="full-post" href={"/p/" + this.state.permalink + ""}>
						<i className="fa fa-align-justify"></i>
						View full article
					</a>
					{ <a className="post-comments-button" href={"/p/" + this.state.permalink + "#comments"}>
											<i className="fa fa-comments-o"></i>
											See comments
					</a>}
				</div>: null}

				<div className="post-tags">
					{this.state.tags.map(function(tag, i){
						return <a href={"/t/"+tag} className={context.tag_color_map[tag] || ''} key={i} >{tag}</a>
					})}
				</div>
			</article>
		);
	}

});


module.exports = BlogPost;
