#!/usr/bin/env nodejs
(function () {
	"use strict";
	var fs = require('fs'),
		path = require('path'),
		fOut = path.resolve(process.argv[3]),
		output = fs.createWriteStream(fOut,{mode:511, flags:'w'}),
		base = path.resolve(process.argv[2]),
		full,data, stats, YUI_config;

	var	YUI = function () {
		return {
			use:function(){}
		};
	};
	YUI.add = function (module, fn, version, config) {
		config = config || {};
		var req = config.requires,
		skinnable = config.skinnable,
		opts = config.optional,
		m = [];
		console.log('processing',YUI.full);
		m.push('\t\t\t\t\tpath: \'' + YUI.full.replace(/\\/g,'/').replace(base,'') + '\'');
		if (req) {
			m.push('\t\t\t\t\trequires: [\'' + req.join('\', \'') + '\']');
		}
		if (opts) {
			m.push('\t\t\t\t\toptionals: [\'' + opts.join('\', \'') + '\']');
		}
		if (skinnable) {
			m.push('\t\t\t\t\tskinnable: true');
		}
		//console.log('\t\t\t\t\'' + module + '\': {\n' + m.join(',\n') + '\n\t\t\t\t}\n');
		YUI.output.push('\t\t\t\t\'' + module + '\': {\n' + m.join(',\n') + '\n\t\t\t\t}');
	};
	YUI.Env= {
		core:[]
	};
	YUI.output = [];



	var	traverse = function(folder) {
		fs.readdirSync(folder).forEach(function(item) {
			if (item.charAt(0) !== '.') {
				full = path.resolve(folder, item);
				if (full != fOut) {
					stats = fs.statSync(full);
					if (stats.isDirectory()) {
						traverse(full);
					}
					if (stats.isFile() && path.extname(item) === '.js') {
						console.log('requiring:', full);
						YUI.full = full;
						data = fs.readFileSync(full, 'utf8');
						// console.log(data);
						try {
							eval(data);
						} catch(err) {
							console.log('err',full);
							console.log(err);
						}
					}
				}
			}
		});


	};

	output.write('/*global YUI_config:true */\n');
	output.write('YUI_config = {\n');
	output.write('	//filter:\'raw\',\n');
	output.write('	//combine:false,\n');
	output.write('	//gallery: \'gallery-2012.08.22-20-00\',\n');

	output.write('	groups: {\n');
	output.write('		js: {\n');
	output.write('			base: \'js\',\n');
	output.write('			modules: {\n');

	traverse(base);

	output.write(YUI.output.join(',\n'));
	output.write('\n			}\n');
	output.write('		}\n');
	output.write('	}\n');
	output.write('};\n');

	output.end();
}());


