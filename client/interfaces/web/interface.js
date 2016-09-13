
module.exports = function(CORE, interface_name){

	var web_intf = CORE.factories.interface();


	var doT = require("dot");
	web_intf.dots = doT.process({path: "./client/interfaces/web/views"});

	web_intf.view('homepage', function(data){

		return web_intf.dots.react_base({
			pageData : {
				posts		: data.posts, 
				media		: data.media, 
				settings 	: {
					homepage_tagline : data.settings.homepage_tagline,
					homepage_subtext : data.settings.homepage_subtext,
					tag_colors 	: data.settings.tag_colors,
					tag_prio 	: data.settings.tag_prio 
				},
				tags		: data.tags,
				auth		: data.auth
			},

			metaData : {
				main_title 			: data.settings.main_title || "",
				favicon_url			: data.settings.favicon_url || "",
				main_title_suffix	: data.settings.homepage_meta_title_suffix || "",
				description			: CORE.config.meta_data.homepage.description || "",
				keywords			: CORE.config.meta_data.homepage.keywords || "",
				page_url			: CORE.config.base_url,
				image_url			: data.settings.homepage_image_url || ""
			}
		});
	});


	web_intf.view('contact', function(data){

		return web_intf.dots.react_base({
			pageData : {},
			metaData : {
				main_title 			: data.settings.main_title || "",
				favicon_url			: data.settings.favicon_url || "",
				main_title_suffix 	: data.settings.contact_meta_title_suffix || "",
				description			: CORE.config.meta_data.contact.description || "",
				keywords			: CORE.config.meta_data.contact.keywords || "",
				page_url			: CORE.config.base_url + "contact",
				image_url			: data.settings.contact_image_url || ""
			}	
		});

	});


	web_intf.view('login', function(data){


		
		return web_intf.dots.react_base({
			pageData: {
				validation_message : data.validation_message
			},

			metaData : {
				main_title : data.settings.main_title,
				favicon_url			: data.settings.favicon_url || "",
				main_title_suffix 	: data.settings.login_meta_title_suffix || "",
				description			: CORE.config.meta_data.login.description || "",
				keywords			: CORE.config.meta_data.login.keywords || "",
				page_url			: CORE.config.base_url + "login"
			}
		});
	});



	web_intf.view('post', function(data){

		var _settings = data.settings,
			
			_primary_image_url = data.media.reduce(function(acc, crt){
				return ("" + crt._id) == data.post.primary_image_id ?
					CORE.config.base_url + crt.url : acc;
			}, "");



		

		return web_intf.dots.react_base({
			pageData : {
				post: data.post,
				media: data.media,
				settings : {
					tag_colors 	: _settings.tag_colors,
					tag_prio 	: _settings.tag_prio 
				}
			},


			metaData : {
				description		: data.post.meta_description,
				keywords		: data.post.meta_keywords,
				page_url		: CORE.config.base_url + "p/" + data.post.permalink,
				favicon_url		: _settings.favicon_url || "",
				main_title 		: data.post.headline,
				image_url		: _primary_image_url
			}

		});
	});

	web_intf.view('404', function(data){
		return web_intf.dots.react_base({
			pageData : {
				err_object: {
					err_message : "Error 404: Page not found :("
				}
			},

			metaData : {
				main_title : "404 Page not found"
			}
		});
	});

	web_intf.view('403', function(data){
		return web_intf.dots.react_base({
			pageData : {
				err_object: {
					err_message : "Error 403: Access is forbidden ;) "
				}
			},

			metaData : {
				main_title : "403 Access forbidden"
			}
		});
	});


	web_intf.view('500', function(data){
		return web_intf.dots.react_base({
			pageData : {
				err_object: {
					err_message : "Error 500: Internal server error x_x. Please help me by sending me the error report:",
					err_report : JSON.stringify(data.err_object, null, 4)
				}
			},

			metaData : {
				main_title : "500 Internal Server Error"
			}
		});
	});

	return web_intf;
};
