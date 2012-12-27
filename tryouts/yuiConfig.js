/*global YUI_config:true */
YUI_config = {
	//filter:'raw',
	//combine:false,
	//gallery: 'gallery-2012.08.22-20-00',
	groups: {
		js: {
			base: 'js',
			modules: {
				'myView': {
					path: '/myView.js',
					requires: ['view']
				},
				'pieModel': {
					path: '/pieModel.js',
					requires: ['model', 'model-sync-rest']
				},
				'pieEditor': {
					path: '/pieEditor.js',
					requires: ['myView', 'pieModel']
				},
				'pieDTView': {
					path: '/pieDTView.js',
					requires: ['datatable', 'pieModel']
				},
				'pieView': {
					path: '/pieView.js',
					requires: ['myView', 'pieModel']
				},
				'pieList': {
					path: '/pieList.js',
					requires: ['model-list', 'pieModel', 'model-sync-rest']
				},
				'pieListView': {
					path: '/pieListView.js',
					requires: ['myView', 'pieList']
				}
			}
		}
	}
};
