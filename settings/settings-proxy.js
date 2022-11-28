const yamlObject = {
	"settings": {
		"csspath": {
			"default": [
				"static/css/main.css"
			],
			"myTheme": [
				"static/css/myHappyTheme1.css",
				"static/css/myHappyTheme2.css"
			],
			"darkTheme": [
				"static/css/myDarkTheme.css"
			],
			"cozy": [
				"YOUR COZY THEME CSS PATH"
			]
		},
		"rootqjson": "static/qjsons/LoginPage",
		"rootLangCode": "tr-TR",
		"alertqjson": "settings/qjson/alert.qjson",
		"pipelineqjson": "settings/qjson/pipeline.qjson",
		"loadingqjson": "settings/qjson/loading.qjson",
		"RegionalDefinition": [
			{
				"region": "tr",
				"FormattingDefinition": {
					"groupSeparator": {
						"overwrite": true,
						"value": "."
					},
					"radixPoint": {
						"overwrite": true,
						"value": ","
					},
					"digits": {
						"overwrite": false,
						"value": 2
					},
					"enforceDigitsOnBlur": {
						"overwrite": true,
						"value": true
					},
					"longDateFormat": {
						"overwrite": true,
						"value": "DD-MM-YYYY HH-MM"
					},
					"longTimeFormat": {
						"overwrite": true,
						"value": "HH-MM-SS"
					},
					"shortTimeFormat": {
						"overwrite": true,
						"value": "HH-MM"
					},
					"moneyFormat": {
						"overwrite": true,
						"value": "en-US"
					},
					"serviceDateFormat": {
						"overwrite": true,
						"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
					},
					"displayDateFormat": {
						"overwrite": true,
						"value": "dd/MM/yyyy"
					},
					"devExLocaleCDNAddress": "https://cdn3.devexpress.com/jslib/21.2.3/js/localization/dx.messages.tr.js"
				}
			},
			{
				"region": "en",
				"FormattingDefinition": {
					"groupSeparator": {
						"overwrite": true,
						"value": "."
					},
					"radixPoint": {
						"overwrite": true,
						"value": ","
					},
					"digits": {
						"overwrite": false,
						"value": 2
					},
					"enforceDigitsOnBlur": {
						"overwrite": true,
						"value": true
					},
					"longDateFormat": {
						"overwrite": true,
						"value": "DD-MM-YYYY HH-MM"
					},
					"longTimeFormat": {
						"overwrite": true,
						"value": "HH-MM-SS"
					},
					"shortTimeFormat": {
						"overwrite": true,
						"value": "HH-MM"
					},
					"moneyFormat": {
						"overwrite": true,
						"value": "en-US"
					},
					"serviceDateFormat": {
						"overwrite": true,
						"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
					},
					"displayDateFormat": {
						"overwrite": true,
						"value": "dd/MM/yyyy"
					}
				}
			}
		]
	},
	"localProxy": {
		"/services/processmanager": "http://localhost/processmanager",
		"/api/users": "https://reqres.in/api/users",
		"/api/usersError": "https://reqres.indd/api/users",
		"/services/demorequest": "https://reqres.in/api/users?page=2"
	}
}
if (typeof exports === 'object' && typeof module === 'object'){
 	module.exports = yamlObject;
}else{ 
	window['plateauUISettings'] = yamlObject;
}
