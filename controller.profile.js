var profile = (function(){
	var testResourceRe = /tests|demos/,

		copyOnly = function(filename, mid){
			var list = {
				"controller/controller.profile":1,
				"controller/package.json":1
			};
			return (mid in list) || (/^resources\//.test(mid) && !/\.css$/.test(filename)) || /(png|jpg|jpeg|gif|tiff)$/.test(filename);
		};

	return {
		resourceTags:{
			test: function(filename, mid){
				return testResourceRe.test(mid);
			},

			copyOnly: function(filename, mid){
				return copyOnly(filename, mid) || this.test(filename, mid);
			},

			amd: function(filename, mid){
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		},

		trees:[
			[".", ".", /(\/\.)|(~$)/]
		]
	};
})();
