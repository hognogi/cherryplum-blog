module.exports = {
	port: process.env.CHERRYPLUM_NODEJS_PORT,
	ipaddress : process.env.CHERRYPLUM_NODEJS_IP,

	base_url : "http://www.hognogi.com/",

	default_interface : "web",

	directories : {
		routes : 			"./server/routes",
		interfaces: 		"./client/interfaces",
		helpers: 			"./server/helpers",
		factories: 			"./server/factories",
		middlewares: 		"./server/middlewares",
		repositories: 		"./server/repositories"
	},

	root_path_relative_to_core : "../",

	upload_folder_relative_to_root : "./client/res/uploads/",
	route_to_upload_folder			: "res/uploads/",

	mongodb_url : process.env.CHERRYPLUM_MONGODB_DB_URL || "mongodb://localhost:27017",
	mongodb_db_name :  process.env.CHERRYPLUM_MONGODB_DB_NAME ||  "blog2",

	media_validator: {
		max_size: 30000000, // 30 MiB
		allowed_mimetypes : ["image/jpeg","image/jpg", "image/pjpeg", "image/png", "image/bmp", "application/octet-stream", "video/avi", "image/gif"]

	},

	secrets : {
		jwt : process.env.CHERRYPLUM_BLOG_JWT_SECRET || "Custom string used for encoding the JWT tokens"
	},

	settings : {
		default_page_size : 10
	},

	admin_user : {
		//username 	: process.env.CHERRYPLUM_ADMIN_USERNAME, 
		//password	: process.env.CHERRYPLUM_ADMIN_PASSWORD,
		name 		: process.env.CHERRYPLUM_ADMIN_NAME ||  "Beni Hognogi",
		email 		: process.env.CHERRYPLUM_ADMIN_EMAIL || "beni@hognogi.com",
		created		: Date.now(),
		access_keys : ["ADMIN"]
	},
	

	meta_data : {

		homepage : {
			description 	: "In the biginning there was node.js. Then a random blog appeared, and it's backbone was another freaking js framework named \"cherryplum\"",
			keywords		: "node.js, Cherryplum, framework, blog, javascript, Beni Hognogi"
		},

		contact : {
			description 	: "In the biginning there was node.js. Then a random blog appeared, and it's backbone was another freaking js framework named \"cherryplum\"",
			keywords		: "node.js, Cherryplum, framework, blog, javascript, Beni Hognogi"
		},

		login : {
			description 	: "In the biginning there was node.js. Then a random blog appeared, and it's backbone was another freaking js framework named \"cherryplum\"",
			keywords		: "node.js, Cherryplum, framework, blog, javascript, Beni Hognogi"
		}

	}
};
