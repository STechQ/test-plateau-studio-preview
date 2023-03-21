var settings = {
	"settings": {
		"value": {
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
			"rootqjson": "static/qjsons/samplesFirstPage",
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
			],
			"componentListPath": "/static/js/componentList.js",
			"containerServicesPath": "/static/js/containerServices.js"
		},
		"type": "object"
	},
	"componentList": {
		"value": {
			"VAlert": {
				"qValue": {},
				"border": {
					"options": [
						"'left'"
					]
				},
				"class": {},
				"color": {
					"editorDefaultValue": "'warning'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"closeIcon": {
					"editorDefaultValue": "'mdi-close'"
				},
				"closeLabel": {},
				"coloredBorder": {
					"editorDefaultValue": "true"
				},
				"dismissible": {
					"editorDefaultValue": "true"
				},
				"elevation": {
					"editorDefaultValue": "4",
					"options": [
						"0",
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
						"16",
						"17",
						"18",
						"19",
						"20",
						"21",
						"22",
						"23",
						"24"
					]
				},
				"icon": {
					"editorDefaultValue": "'mdi-check-circle'",
					"options": [
						"'mdi-information'",
						"'mdi-check-circle'",
						"'mdi-alert-circle'",
						"'mdi-close-circle'"
					]
				},
				"type": {},
				"mode": {},
				"origin": {},
				"prominent": {},
				"tag": {},
				"tile": {},
				"text": {},
				"transition": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VAppBar": {
				"dark": {},
				"absolute": {},
				"app": {},
				"bottom": {},
				"clippedLeft": {},
				"clippedRight": {},
				"collapse": {},
				"color": {},
				"dense": {},
				"elevation": {
					"type": "number | string"
				},
				"extended": {},
				"fadeImgOnScroll": {},
				"fixed": {},
				"flat": {},
				"outlined": {},
				"prominent": {},
				"rounded": {
					"type": "boolean | string"
				},
				"src": {
					"type": "object | string"
				},
				"maxWidth": {
					"type": "number | string"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VAutocomplete": {
				"appendIcon": {},
				"qValue": {
					"type": "any"
				},
				"attach": {},
				"autofocus": {},
				"backgroundColor": {},
				"autoSelectFirst": {},
				"class": {},
				"clearIcon": {},
				"clearable": {},
				"counter": {
					"type": "boolean | string | number"
				},
				"counterValue": {},
				"disabled": {},
				"deletableChips": {},
				"dense": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"filter": {},
				"flat": {},
				"height": {
					"type": "number | string"
				},
				"hideDetails": {
					"type": "string | boolean"
				},
				"hideNoData": {},
				"hideSelected": {},
				"itemDisabled": {
					"type": "string | Array<any> | Function"
				},
				"internalSearch": {
					"type": "string"
				},
				"items": {
					"type": "Array<any>"
				},
				"itemText": {
					"type": "string | Array<any> | Function"
				},
				"itemValue": {
					"type": "string | Array<any> | Function"
				},
				"label": {},
				"loading": {
					"type": "boolean | string"
				},
				"menuProps": {
					"type": "{maxHeight: number}"
				},
				"outlined": {},
				"multiple": {},
				"noDataText": {},
				"noFilter": {},
				"prefix": {},
				"prependIcon": {},
				"placeholder": {},
				"rules": {
					"type": "Array<any>"
				},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"suffix": {},
				"smallChips": {},
				"solo": {},
				"validateOnBlur": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VAvatar": {
				"class": {
					"editorDefaultValue": "'primary'"
				},
				"color": {
					"editorDefaultValue": "'primary'"
				},
				"height": {
					"type": "number | string"
				},
				"left": {},
				"right": {},
				"size": {
					"type": "number | string"
				},
				"icon": {
					"editorDefaultValue": "'mdi-account'"
				},
				"tile": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VBadge": {
				"qValue": {},
				"bordered": {},
				"bottom": {},
				"class": {},
				"content": {},
				"dot": {},
				"icon": {
					"editorDefaultValue": "'mdi-account'"
				},
				"left": {},
				"label": {
					"editorDefaultValue": "'My CheckBox'"
				},
				"mode": {},
				"offsetX": {
					"type": "string | number"
				},
				"offsetY": {
					"type": "string | number"
				},
				"origin": {},
				"overlap": {},
				"tile": {},
				"transition": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"inline": {},
				"avatar": {}
			},
			"VBottomNavigation": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"fixed": {},
				"grow": {},
				"hideOnScroll": {},
				"horizontal": {},
				"mandatory": {},
				"scrollTarget": {},
				"scrollThreshold": {
					"type": "string | number"
				},
				"shift": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VBottomSheet": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"scrollable": {
					"editorDefaultValue": "false"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"hideOverlay": {}
			},
			"VBreadcrumbs": {
				"divider": {},
				"items": {
					"type": "Array<any>",
					"editorDefaultValue": "[{text = 'Dashboard', disabled = false, href = 'breadcrumbs_dashboard'},\n{text = 'Google', disabled = false, href = 'https://www.google.com', exact = true, target ='_blank'},\n{text = 'Link 1', disabled = true, href = 'breadcrumbs_link_1'}]"
				},
				"large": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VBreadcrumbsItem": {
				"class": {},
				"append": {},
				"exact": {},
				"href": {
					"type": "object | string"
				},
				"link": {},
				"replace": {},
				"ripple": {
					"type": "object | string"
				},
				"tag": {},
				"target": {},
				"to": {
					"type": "object | string"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VBtn": {
				"absolute": {},
				"appendIcon": {},
				"block": {},
				"bottom": {},
				"class": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'",
						"'white'"
					]
				},
				"depressed": {},
				"disabled": {},
				"elevation": {
					"type": "number | string",
					"options": [
						"0",
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
						"16",
						"17",
						"18",
						"19",
						"20",
						"21",
						"22",
						"23",
						"24"
					]
				},
				"fab": {},
				"fixed": {},
				"height": {
					"type": "number | string"
				},
				"href": {
					"type": "string | object"
				},
				"icon": {},
				"inputValue": {},
				"link": {},
				"loading": {},
				"raised": {},
				"outlined": {},
				"regular": {},
				"prependInnerIcon": {},
				"large": {},
				"left": {},
				"replace": {},
				"retainFocusOnClick": {},
				"right": {},
				"ripple": {
					"type": "boolean | object"
				},
				"tag": {},
				"text": {},
				"tile": {},
				"to": {
					"type": "string | object"
				},
				"top": {},
				"type": {},
				"xLarge": {},
				"xSmall": {},
				"width": {
					"type": "number | string"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"rounded": {},
				"tabindex": {
					"type": "number | string"
				},
				"target": {}
			},
			"VBtnToggle": {
				"qValue": {
					"type": "any"
				},
				"borderless": {},
				"class": {},
				"dense": {},
				"group": {},
				"mandatory": {},
				"max": {
					"type": "number | string"
				},
				"multiple": {},
				"tile": {},
				"activeClass": {},
				"backgroundColor": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VCard": {
				"activeClass": {},
				"tile": {},
				"exact": {},
				"loaderHeight": {
					"type": "string | number"
				},
				"nuxt": {},
				"replace": {},
				"ripple": {},
				"rounded": {
					"type": "boolean | string"
				},
				"target": {},
				"flat": {},
				"class": {},
				"disabled": {},
				"append": {},
				"hover": {},
				"href": {
					"type": "string | object"
				},
				"img": {},
				"link": {},
				"loading": {
					"type": "string | boolean"
				},
				"raised": {},
				"shaped": {},
				"tag": {},
				"to": {
					"type": "string | object"
				},
				"outlined": {},
				"elevation": {
					"options": [
						"0",
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
						"16",
						"17",
						"18",
						"19",
						"20",
						"21",
						"22",
						"23",
						"24"
					]
				},
				"height": {},
				"width": {},
				"color": {
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VSparkline": {
				"autoDraw": {},
				"autoLineWidth": {},
				"autoDrawDuration": {},
				"autoDrawEasing": {},
				"color": {},
				"fill": {},
				"gradient": {
					"editorDefaultValue": "['#f72047', '#ffd200', '#1feaea']"
				},
				"gradientDirection": {},
				"height": {},
				"labelSize": {},
				"labels": {},
				"lineWidth": {
					"editorDefaultValue": "2"
				},
				"showLabels": {},
				"radius": {},
				"smooth": {
					"editorDefaultValue": "10"
				},
				"type": {},
				"value": {
					"editorDefaultValue": "[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
				},
				"width": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VCarousel": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"append": {},
				"continuous": {},
				"cycle": {},
				"delimiterIcon": {},
				"height": {},
				"hideDelimiterBackground": {},
				"hideDelimiters": {},
				"interval": {
					"type": "number | string"
				},
				"showArrows": {},
				"showArrowsOnHover": {},
				"vertical": {},
				"verticalDelimiters": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"mandatory": {},
				"max": {
					"type": "number | string"
				},
				"multiple": {},
				"nextIcon": {},
				"prevIcon": {},
				"progress": {},
				"progressColor": {},
				"reverse": {},
				"touch": {},
				"touchless": {},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VCarouselItem": {
				"qValue": {
					"type": "any"
				},
				"eager": {
					"editorDefaultValue": "true"
				},
				"activeClass": {},
				"append": {},
				"disabled": {},
				"exact": {},
				"link": {},
				"nuxt": {},
				"replace": {},
				"target": {},
				"to": {},
				"transition": {},
				"href": {
					"type": "string | object"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VCheckbox": {
				"qValue": {},
				"class": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"compareValue": {
					"type": "any"
				},
				"compareText": {},
				"compareTableValue": {},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"hideDetails": {
					"type": "string | boolean"
				},
				"indeterminateIcon": {},
				"inputValue": {
					"type": "any"
				},
				"label": {
					"editorDefaultValue": "'My CheckBox'"
				},
				"loading": {
					"type": "boolean | string"
				},
				"multiple": {},
				"offIcon": {},
				"onIcon": {},
				"hint": {},
				"persistentHint": {},
				"ripple": {
					"type": "boolean | object"
				},
				"rules": {
					"type": "Array<any>"
				},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"validateOnBlur": {},
				"readonly": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VChip": {
				"activeClass": {},
				"class": {},
				"active": {},
				"append": {},
				"close": {},
				"draggable": {},
				"exact": {},
				"filter": {},
				"filterIcon": {},
				"href": {
					"type": "string | object"
				},
				"label": {},
				"link": {},
				"large": {},
				"pill": {},
				"replace": {},
				"ripple": {
					"type": "boolean | object"
				},
				"tag": {},
				"to": {
					"type": "string | object"
				},
				"small": {},
				"xSmall": {},
				"xLarge": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'default'",
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"closeIcon": {
					"options": [
						"'mdi-delete'",
						"'mdi-close'",
						"'mdi-close-circle'"
					]
				},
				"outlined": {},
				"textColor": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VChipGroup": {
				"activeClass": {},
				"centerActive": {},
				"color": {},
				"column": {},
				"mandatory": {},
				"max": {},
				"multiple": {},
				"nextIcon": {},
				"prevIcon": {},
				"showArrows": {},
				"qValue": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VCombobox": {
				"qValue": {
					"type": "any"
				},
				"allowOverflow": {},
				"appendIcon": {},
				"attach": {
					"editorDefaultValue": "true"
				},
				"autoSelectFirst": {},
				"autofocus": {},
				"persistentPlaceholder": {},
				"backgroundColor": {
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"cacheItems": {},
				"chips": {},
				"class": {},
				"clearIcon": {},
				"clearable": {},
				"color": {},
				"compareTableValue": {},
				"compareText": {},
				"compareValue": {
					"type": "any"
				},
				"counter": {
					"type": "boolean | string | number"
				},
				"counterValue": {},
				"deletableChips": {},
				"delimiters": {
					"type": "Array<any>"
				},
				"dense": {},
				"disabled": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"format": {},
				"formatValues": {
					"type": "Array<any>"
				},
				"filter": {},
				"height": {
					"type": "number | string"
				},
				"hideDetails": {
					"type": "string | boolean"
				},
				"hideNoData": {},
				"hideSelected": {},
				"hint": {},
				"itemColor": {
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"itemDisabled": {
					"type": "string | Array<any> | Function"
				},
				"itemText": {
					"type": "string | Array<any> | Function"
				},
				"itemValue": {
					"type": "string | Array<any> | Function"
				},
				"items": {
					"editorDefaultValue": "[{text = 'test1', value = 1},\n{ text = 'test2', value = 2}]"
				},
				"label": {
					"editorDefaultValue": "'My Combobox'"
				},
				"loading": {
					"type": "boolean | string"
				},
				"menuProps": {
					"type": "string | object | Array<any>"
				},
				"multiple": {},
				"noDataText": {},
				"noFilter": {},
				"openOnClear": {},
				"outlined": {},
				"persistentHint": {},
				"placeholder": {},
				"prefix": {},
				"prependInnerIcon": {},
				"readonly": {},
				"rules": {
					"type": "Array<any>"
				},
				"searchInput": {},
				"singleLine": {},
				"solo": {},
				"soloInverted": {},
				"step": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"suffix": {},
				"type": {},
				"validateOnBlur": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VContainer": {
				"class": {
					"editorDefaultValue": "'container container--fluid'"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VDataIterator": {
				"qValue": {
					"type": "Array<any>"
				},
				"class": {},
				"disabled": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VVirtualScroll": {
				"qValue": {
					"type": "Array<any>"
				},
				"class": {},
				"bench": {
					"type": "number | string"
				},
				"height": {
					"type": "number | string"
				},
				"itemHeight": {
					"type": "number | string"
				},
				"items": {
					"type": "Array<any>"
				},
				"maxHeight": {
					"type": "number | string"
				},
				"maxWidth": {
					"type": "number | string"
				},
				"minHeight": {
					"type": "number | string"
				},
				"minWidth": {
					"type": "number | string"
				},
				"width": {
					"type": "number | string"
				}
			},
			"VDataTable": {
				"qValue": {
					"type": "Array<any>"
				},
				"CompareDataField": {},
				"caption": {},
				"class": {},
				"calculateWidths": {},
				"customFilter": {},
				"customGroup": {},
				"disableFiltering": {},
				"disablePagination": {},
				"disableSort": {},
				"dense": {},
				"expandIcon": {},
				"expanded": {
					"type": "Array<any>"
				},
				"fixedHeader": {},
				"footerProps": {
					"editorDefaultValue": "{showFirstLastPage = true,\nfirstIcon = 'mdi-arrow-collapse-left',\nlastIcon = 'mdi-arrow-collapse-right',\nprevIcon = 'mdi-minus',\nnextIcon = 'mdi-plus'}"
				},
				"groupBy": {
					"type": "Array<any> | boolean"
				},
				"groupDesc": {
					"type": "Array<any> | boolean"
				},
				"headers": {
					"editorDefaultValue": "[{ text = 'Dessert (100g serving)', align= 'start', sortable= false, value= 'name'},\n{ text = 'Calories', value= 'calories', sortable = true },\n{ text = 'Fat (g)', value= 'fat' },\n{ text = 'Carbs (g)', value= 'carbs' },\n{ text = 'Protein (g)', value= 'protein' },\n{ text = 'Iron (%)', value= 'iron' }]"
				},
				"headerProps": {},
				"hideDefaultFooter": {},
				"hideDefaultHeader": {},
				"headersLength": {},
				"height": {
					"type": "number | string"
				},
				"loaderHeight": {
					"type": "number | string"
				},
				"loadingText": {},
				"itemClass": {
					"type": "string | Function"
				},
				"itemKey": {},
				"items": {
					"editorDefaultValue": "[{name = 'Frozens Yogurt', calories = 159, fat = '6.0', carbs = 24, protein = '4.0', iron = '1%'},\n{name = 'Ice cream sandwich', calories = 237, fat = '9.0', carbs = 37, protein = '4.3', iron = '1%'},\n{name = 'Eclair', calories = 262, fat = '16.0', carbs = 23, protein = '6.0', iron = '7%'},\n{name = 'Cupcake', calories = 305, fat = '3.7', carbs = 67, protein = '4.3', iron = '8%'},\n{name = 'Gingerbread',calories = 356, fat = '16.0', carbs = 49, protein = '3.9', iron = '16%'},\n{name = 'Jelly bean', calories = 375,  fat = '0.0', carbs = 94, protein = '0.0', iron = '0%'},\n{name = 'Lollipop', calories = 392, fat = '0.2', carbs = 98, protein = '0.0', iron = '2 %'},\n{name = 'Honeycomb', calories = 408, fat = '3.2', carbs = 87, protein = '6.5', iron = '45%'},\n{name = 'Donut', calories = 452, fat = '25.0', carbs = 51, protein = '4.9', iron = '22%'},\n{name = 'KitKat', calories = 518, fat = '26.0', carbs = 65, protein = '7', iron=  '6 %'}]"
				},
				"itemsPerPage": {
					"editorDefaultValue": "5"
				},
				"loading": {
					"type": "string | boolean"
				},
				"locale": {},
				"mobileBreakpoint": {
					"type": "number | string"
				},
				"multiSort": {},
				"mustSort": {},
				"noDataText": {},
				"noResultText": {},
				"options": {},
				"page": {},
				"search": {},
				"selectableKey": {},
				"serverItemsLength": {},
				"showExpand": {},
				"showGroupBy": {},
				"showSelect": {},
				"singleExpand": {},
				"singleSelect": {},
				"sortBy": {
					"type": "string | Array<any>"
				},
				"sortDesc": {
					"type": "boolean | Array<any>"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VDatePicker": {
				"qValue": {
					"type": "Array<any> | string",
					"editorDefaultValue": "Date.now().toFormattedString('YYYY-MM-DD')"
				},
				"dayFormat": {},
				"disabled": {},
				"eventColor": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"events": {
					"type": "Array<any>"
				},
				"firstDayOfWeek": {
					"editorDefaultValue": "1"
				},
				"headerDateFormat": {},
				"height": {
					"type": "number | string"
				},
				"landscape": {},
				"locale": {
					"editorDefaultValue": "'tr-tr'"
				},
				"localeFirsDayOfYear": {
					"type": "number | string"
				},
				"max": {},
				"min": {},
				"monthFormat": {},
				"multiple": {},
				"nextIcon": {},
				"prevIcon": {},
				"noTitle": {},
				"pickerDate": {},
				"range": {},
				"reactive": {},
				"readonly": {},
				"scrollable": {},
				"selectedItemsText": {},
				"showCurrent": {
					"type": "string | boolean"
				},
				"showWeek": {},
				"titleDateFormat": {},
				"type": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VDialog": {
				"qValue": {},
				"class": {},
				"contentClass": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"fullscreen": {},
				"hideOverlay": {},
				"internalActivator": {},
				"noClickAnimation": {},
				"openOnHover": {},
				"origin": {},
				"overlayColor": {},
				"overlayOpacity": {
					"type": "string | number"
				},
				"persistent": {},
				"retainFocus": {},
				"scrollable": {},
				"transition": {
					"type": "string | boolean"
				},
				"width": {
					"editorDefaultValue": "500"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"attach": {
					"editorDefaultValue": "",
					"showInEditor": false
				}
			},
			"VDivider": {
				"class": {},
				"inset": {},
				"vertical": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VEditDialog": {
				"eager": {
					"editorDefaultValue": "true"
				},
				"returnValue": {
					"type": "string | object"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VExpansionPanel": {
				"activeClass": {},
				"class": {},
				"flat": {},
				"readonly": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"disabled": {}
			},
			"VExpansionPanelContent": {
				"class": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"color": {}
			},
			"VExpansionPanelHeader": {
				"class": {},
				"color": {},
				"disabledIconRotate": {},
				"expandIcon": {},
				"hideActions": {},
				"ripple": {
					"type": "boolean | object"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VExpansionPanels": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"activeClass": {},
				"disabled": {},
				"accordion": {},
				"focusable": {},
				"hover": {},
				"inset": {},
				"mandatory": {},
				"max": {
					"type": "string | number"
				},
				"multiple": {},
				"popout": {},
				"readonly": {},
				"tile": {},
				"flat": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VFileInput": {
				"qValue": {
					"type": "any"
				},
				"accept": {},
				"appendIcon": {},
				"autofocus": {},
				"chips": {},
				"class": {},
				"clearIcon": {},
				"clearable": {},
				"counter": {
					"type": "boolean | string | number"
				},
				"counterSizeString": {},
				"dense": {},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "string | number"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"filled": {},
				"flat": {},
				"height": {
					"type": "number | string"
				},
				"hideDetails": {},
				"hideInput": {},
				"hint": {},
				"label": {},
				"loading": {
					"type": "boolean | string"
				},
				"multiple": {},
				"outlined": {},
				"persistentHint": {},
				"placeholder": {
					"editorDefaultValue": "'Select a file(Placeholder)'"
				},
				"prefix": {},
				"prependIcon": {},
				"prependInnerIcon": {},
				"rounded": {},
				"rules": {
					"type": "Array<any>"
				},
				"shaped": {},
				"solo": {},
				"soloInverted": {},
				"suffix": {},
				"showSize": {
					"type": "boolean | number"
				},
				"singleLine": {},
				"smallChips": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"truncateLength": {
					"type": "string | number"
				},
				"type": {},
				"validateOnBlur": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VFooter": {
				"absolute": {},
				"color": {},
				"class": {},
				"fixed": {},
				"inset": {},
				"padless": {},
				"tag": {},
				"tile": {},
				"width": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"rounded": {
					"type": "boolean | string"
				}
			},
			"VForm": {
				"qValue": {},
				"class": {},
				"disabled": {},
				"validate": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VIcon": {
				"class": {},
				"color": {},
				"dense": {},
				"disabled": {},
				"large": {},
				"left": {},
				"right": {},
				"size": {
					"type": "string | number"
				},
				"small": {},
				"tag": {},
				"text": {
					"editorDefaultValue": "'mdi-home'"
				},
				"xSmall": {},
				"xLarge": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VImg": {
				"class": {},
				"alt": {},
				"aspectRatio": {
					"type": "string | number"
				},
				"contain": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"height": {
					"type": "string | number",
					"editorDefaultValue": "'50'"
				},
				"lazySrc": {},
				"maxHeight": {
					"type": "string | number"
				},
				"maxWidth": {
					"type": "string | number"
				},
				"minHeight": {
					"type": "string | number"
				},
				"minWidth": {
					"type": "string | number"
				},
				"options": {},
				"position": {},
				"sizes": {},
				"src": {
					"type": "string | object",
					"editorDefaultValue": "'https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png'"
				},
				"srcset": {},
				"transition": {
					"type": "string | boolean"
				},
				"width": {
					"type": "string | number",
					"editorDefaultValue": "'50'"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VList": {
				"class": {},
				"activeClass": {},
				"dense": {},
				"expand": {},
				"subheader": {},
				"tag": {},
				"threeLine": {},
				"tile": {},
				"twoLine": {},
				"maxHeight": {},
				"maxWidth": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VListGroup": {
				"qValue": {
					"type": "any"
				},
				"appendIcon": {},
				"activeClass": {},
				"class": {},
				"color": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"group": {},
				"noAction": {},
				"prependIcon": {},
				"subGroup": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VListItem": {
				"append": {},
				"activeClass": {},
				"class": {},
				"color": {},
				"dense": {},
				"disabled": {},
				"exact": {},
				"inputValue": {
					"type": "any"
				},
				"href": {
					"type": "string | object"
				},
				"inactive": {},
				"link": {},
				"tag": {},
				"target": {},
				"threeLine": {},
				"to": {},
				"twoLine": {},
				"selectable": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"nuxt": {},
				"replace": {},
				"ripple": {},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VListItemAction": {
				"class": {}
			},
			"VListItemAvatar": {
				"class": {}
			},
			"VListItemContent": {
				"class": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VListItemGroup": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"mandatory": {},
				"multiple": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VMenu": {
				"attach": {
					"editorDefaultValue": "true"
				},
				"qValue": {
					"type": "any"
				},
				"class": {},
				"closeOnContentClick": {
					"editorDefaultValue": "true"
				},
				"closeOnClick": {
					"editorDefaultValue": "true"
				},
				"eager": {
					"editorDefaultValue": "true"
				},
				"left": {},
				"maxHeight": {
					"type": "any"
				},
				"minWidth": {},
				"offsetX": {},
				"offsetY": {},
				"nudgeLeft": {},
				"nudgeRight": {},
				"nudgeTop": {},
				"nudgeBottom": {},
				"openOnClick": {},
				"openOnHover": {},
				"openOnFocus": {},
				"returnValue": {},
				"right": {},
				"rounded": {},
				"top": {},
				"transition": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VNavigationDrawer": {
				"qValue": {
					"type": "any"
				},
				"absolute": {},
				"bottom": {},
				"class": {},
				"clipped": {},
				"disableResizeWatcher": {},
				"expandOnHover": {},
				"fixed": {},
				"permanent": {},
				"right": {},
				"width": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"temporary": {}
			},
			"VOverflowBtn": {
				"qValue": {
					"type": "any"
				},
				"allowOverflow": {},
				"appendIcon": {},
				"autoSelectFirst": {},
				"autofocus": {},
				"chips": {},
				"cacheItems": {},
				"class": {},
				"clearIcon": {},
				"clearable": {},
				"counter": {
					"type": "boolean | string | number"
				},
				"counterValue": {},
				"deletableChips": {},
				"dense": {},
				"editable": {},
				"eager": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"filter": {},
				"height": {
					"type": "number | string"
				},
				"hint": {},
				"itemDisabled": {
					"type": "string | Array<any> | Function"
				},
				"itemText": {
					"type": "string | Array<any> | Function"
				},
				"itemValue": {
					"type": "string | Array<any> | Function"
				},
				"items": {
					"type": "Array<any>"
				},
				"label": {},
				"loading": {
					"type": "boolean | string"
				},
				"menuProps": {
					"type": "string | object | Array<any>"
				},
				"multiple": {},
				"openOnClear": {},
				"persistentHint": {},
				"prependInnerIcon": {},
				"rules": {
					"type": "Array<any>"
				},
				"searchInput": {},
				"segmented": {},
				"smallChips": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"validateOnBlur": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VOverlay": {
				"qValue": {
					"type": "any"
				},
				"absolute": {},
				"class": {},
				"opacity": {
					"type": "number | string"
				},
				"zIndex": {
					"type": "number | string"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VPagination": {
				"qValue": {},
				"circle": {},
				"class": {},
				"disabled": {},
				"length": {
					"editorDefaultValue": "'5'"
				},
				"nextIcon": {},
				"prevIcon": {},
				"totalVisible": {
					"type": "string | number"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VParallax": {
				"alt": {},
				"class": {},
				"src": {
					"editorDefaultValue": "'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
				},
				"height": {},
				"srcset": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VProgressCircular": {
				"qValue": {
					"type": "number | string"
				},
				"button": {},
				"class": {},
				"color": {},
				"indeterminate": {},
				"rotate": {
					"type": "number | string"
				},
				"size": {
					"type": "number | string"
				},
				"width": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VProgressLinear": {
				"qValue": {
					"type": "number | string",
					"editorDefaultValue": "15"
				},
				"absolute": {},
				"backgroundOpacity": {
					"type": "string | number"
				},
				"backgroundColor": {
					"editorDefaultValue": "'purple'"
				},
				"bottom": {},
				"bufferValue": {
					"type": "string | number"
				},
				"class": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"fixed": {},
				"indeterminate": {},
				"rounded": {},
				"striped": {},
				"top": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VRadio": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"label": {
					"editorDefaultValue": "'Test radio label'"
				},
				"offIcon": {},
				"onIcon": {},
				"ripple": {
					"type": "boolean | object"
				},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				},
				"activeClass": {}
			},
			"VRadioGroup": {
				"qValue": {},
				"appendIcon": {},
				"class": {},
				"column": {
					"editorDefaultValue": "true"
				},
				"compareValue": {
					"type": "any"
				},
				"compareText": {},
				"compareTableValue": {},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"hint": {},
				"label": {},
				"mandatory": {},
				"max": {
					"type": "number | string"
				},
				"multiple": {},
				"persistentHint": {},
				"prependInnerIcon": {},
				"row": {},
				"readonly": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"validateOnBlur": {},
				"valueComparator": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				},
				"activeClass": {}
			},
			"VRangeSlider": {
				"qValue": {
					"type": "any",
					"editorDefaultValue": "[30,60]"
				},
				"appendIcon": {},
				"backgroundColor": {},
				"class": {},
				"color": {},
				"dense": {},
				"disabled": {},
				"height": {
					"type": "number | string"
				},
				"hideDetails": {
					"type": "boolean | string"
				},
				"hint": {},
				"id": {},
				"inverseLabel": {},
				"label": {},
				"loaderHeight": {
					"type": "number | string"
				},
				"loading": {},
				"persistentHint": {},
				"prependIcon": {},
				"readonly": {},
				"thumbColor": {},
				"thumbLabel": {},
				"tickSize": {
					"type": "number | string"
				},
				"ticks": {
					"type": "boolean | string"
				},
				"trackColor": {},
				"trackFillColor": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"max": {
					"type": "number | string",
					"editorDefaultValue": "100"
				},
				"min": {
					"type": "number | string",
					"editorDefaultValue": "0"
				},
				"prependInnerIcon": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"step": {
					"type": "number | string"
				},
				"validateOnBlur": {},
				"thumbSize": {
					"type": "number | string"
				},
				"tickLabels": {
					"type": "Array<any>"
				},
				"rules": {
					"type": "Array<any>"
				},
				"vertical": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VRating": {
				"qValue": {},
				"class": {},
				"clearable": {},
				"closeDelay": {
					"type": "number | string"
				},
				"dense": {},
				"emptyIcon": {},
				"fullIcon": {},
				"halfIcon": {},
				"halfIncrements": {},
				"hover": {},
				"large": {},
				"openDelay": {},
				"openDereadonlylay": {},
				"size": {
					"type": "number | string"
				},
				"small": {},
				"ripple": {
					"type": "boolean | object"
				},
				"xSmall": {},
				"xLarge": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VSelect": {
				"qValue": {
					"type": "any"
				},
				"attach": {},
				"appendIcon": {},
				"backgroundColor": {
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"chips": {},
				"class": {},
				"persistentPlaceholder": {},
				"clearable": {},
				"color": {},
				"compareValue": {
					"type": "any"
				},
				"compareText": {},
				"compareTableValue": {},
				"deletableChips": {},
				"dense": {},
				"disabled": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"error": {},
				"errorMessages": {},
				"height": {
					"type": "number | string"
				},
				"hideDetails": {
					"type": "string | boolean"
				},
				"hint": {},
				"internalValue": {},
				"items": {
					"editorDefaultValue": "[{text = 'test1', value = 1}, { text = 'test2', value = 2}]"
				},
				"itemColor": {
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"itemText": {},
				"itemValue": {},
				"label": {
					"editorDefaultValue": "'My Select'"
				},
				"loading": {},
				"multiple": {},
				"outlined": {},
				"persistentHint": {},
				"placeholder": {},
				"prependInnerIcon": {},
				"solo": {},
				"soloInverted": {},
				"success": {},
				"successMessages": {},
				"readonly": {},
				"regular": {},
				"rules": {
					"type": "Array<any>"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VSheet": {
				"class": {},
				"elevation": {
					"type": "number | string"
				},
				"height": {},
				"tag": {},
				"tile": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VSlideGroup": {
				"qValue": {
					"type": "any"
				},
				"activeClass": {},
				"centerActive": {},
				"dark": {},
				"mandatory": {},
				"multiple": {},
				"prevIcon": {},
				"showArrows": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VSlideItem": {
				"qValue": {
					"type": "any"
				},
				"activeClass": {},
				"disabled": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VSlider": {
				"qValue": {
					"type": "any"
				},
				"appendIcon": {},
				"class": {},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"hint": {},
				"label": {},
				"loading": {},
				"max": {
					"type": "number | string",
					"editorDefaultValue": "100"
				},
				"min": {
					"type": "number | string",
					"editorDefaultValue": "0"
				},
				"prependInnerIcon": {},
				"readonly": {
					"editorDefaultValue": "false"
				},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"step": {
					"type": "number | string"
				},
				"validateOnBlur": {},
				"thumbSize": {
					"type": "number | string"
				},
				"tickLabels": {
					"type": "Array<any>"
				},
				"ticks": {
					"type": "boolean | string"
				},
				"vertical": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VSnackbar": {
				"qValue": {
					"type": "any"
				},
				"absolute": {},
				"app": {},
				"bottom": {},
				"center": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"warning"
					]
				},
				"contentClass": {},
				"elevation": {
					"type": "number | string"
				},
				"multiLine": {},
				"outlined": {},
				"rounded": {
					"type": "number | string"
				},
				"shaped": {},
				"text": {},
				"tile": {},
				"timeout": {
					"type": "number | string"
				},
				"transition": {},
				"left": {},
				"top": {},
				"right": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"vertical": {}
			},
			"VSpeedDial": {
				"qValue": {
					"type": "any"
				},
				"absolute": {},
				"bottom": {},
				"class": {},
				"direction": {},
				"fixed": {},
				"left": {},
				"mode": {},
				"openOnHover": {},
				"origin": {},
				"right": {},
				"top": {},
				"transition": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VStepper": {
				"qValue": {
					"type": "any"
				},
				"altLabels": {},
				"class": {},
				"nonLinear": {},
				"vertical": {
					"editorDefaultValue": "false"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VStepperContent": {
				"step": {
					"type": "number | string"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VStepperHeader": {
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VStepperItems": {
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VStepperStep": {
				"complete": {},
				"completeIcon": {},
				"color": {},
				"editIcon": {},
				"editable": {},
				"rules": {
					"type": "Array<any>"
				},
				"step": {
					"type": "number | string"
				},
				"text": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"errorIcon": {}
			},
			"VSwitch": {
				"qValue": {
					"type": "any"
				},
				"appendIcon": {},
				"class": {},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"hint": {},
				"inset": {
					"editorDefaultValue": "true"
				},
				"label": {
					"editorDefaultValue": "'Test Switch'"
				},
				"loading": {
					"type": "boolean | string"
				},
				"persistentHint": {},
				"prependInnerIcon": {},
				"ripple": {
					"type": "boolean | object"
				},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"tabindex": {
					"type": "number | string"
				},
				"validateOnBlur": {},
				"valueComparator": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTab": {
				"activeClass": {},
				"appendIcon": {},
				"class": {},
				"link": {},
				"prependInnerIcon": {},
				"ripple": {
					"type": "boolean | object"
				},
				"replace": {},
				"tag": {},
				"target": {},
				"to": {
					"type": "string | object"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTabItem": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"disabled": {},
				"eager": {
					"editorDefaultValue": "true"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTabs": {
				"activeClass": {},
				"qValue": {
					"type": "any"
				},
				"alignWithTitle": {},
				"backgroundColor": {},
				"class": {},
				"centered": {},
				"centerActive": {},
				"height": {},
				"fixedTabs": {},
				"grow": {},
				"iconsAndText": {},
				"mobileBreakPoint": {
					"type": "number | string"
				},
				"nextIcon": {},
				"prevIcon": {},
				"showArrows": {},
				"vertical": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTabsItems": {
				"qValue": {
					"type": "any"
				},
				"class": {},
				"vertical": {},
				"continuous": {},
				"max": {
					"type": "number | string"
				},
				"multiple": {},
				"nextIcon": {},
				"prevIcon": {},
				"showArrows": {},
				"showArrowsOnHover": {},
				"touch": {},
				"touchless": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTabsSlider": {
				"class": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTextField": {
				"qValue": {
					"type": "any"
				},
				"appendIcon": {},
				"appendOuterIcon": {},
				"autofocus": {},
				"class": {},
				"clearIcon": {},
				"clearable": {},
				"persistentPlaceholder": {},
				"compareValue": {
					"type": "any"
				},
				"compareText": {},
				"compareTableValue": {},
				"counter": {
					"type": "boolean | string | number"
				},
				"counterValue": {},
				"dense": {},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"format": {},
				"formatValues": {
					"type": "Array<any>"
				},
				"height": {
					"type": "number | string"
				},
				"hideDetails": {
					"type": "string | boolean"
				},
				"hint": {},
				"label": {
					"editorDefaultValue": "'Text field label'"
				},
				"loading": {
					"type": "boolean | string"
				},
				"maxlength": {
					"type": "number | string"
				},
				"tabindex": {
					"type": "number | string"
				},
				"outlined": {},
				"persistentHint": {},
				"placeholder": {},
				"prefix": {},
				"prependIcon": {},
				"prependInnerIcon": {},
				"regular": {},
				"readonly": {},
				"rules": {
					"type": "Array<any>"
				},
				"solo": {},
				"soloInverted": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"suffix": {},
				"type": {},
				"validateOnBlur": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTextarea": {
				"qValue": {
					"type": "any"
				},
				"appendIcon": {},
				"autoGrow": {},
				"autofocus": {},
				"class": {},
				"clearIcon": {},
				"clearable": {},
				"counter": {
					"type": "boolean | string | number"
				},
				"counterValue": {},
				"disabled": {},
				"error": {},
				"errorCount": {
					"type": "number | string"
				},
				"errorMessages": {
					"type": "Array<any> | string"
				},
				"hint": {},
				"label": {},
				"loading": {
					"type": "boolean | string"
				},
				"maxlength": {},
				"noResize": {},
				"outlined": {},
				"persistentHint": {},
				"placeholder": {},
				"prefix": {},
				"prependInnerIcon": {},
				"regular": {},
				"readonly": {},
				"rows": {
					"type": "number | string"
				},
				"rules": {
					"type": "Array<any>"
				},
				"solo": {},
				"soloInverted": {},
				"success": {},
				"successMessages": {
					"type": "boolean | string"
				},
				"suffix": {},
				"validateOnBlur": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VTimePicker": {
				"qValue": {
					"type": "any"
				},
				"alignTop": {},
				"dark": {},
				"disabled": {},
				"format": {},
				"max": {},
				"min": {},
				"noTitle": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VTimeline": {
				"alignTop": {},
				"dense": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"VTimelineItem": {
				"color": {
					"options": [
						"'default'",
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"icon": {
					"options": [
						"'mdi-information'",
						"'mdi-check-circle'",
						"'mdi-alert-circle'",
						"'mdi-close-circle'"
					]
				},
				"iconColor": {
					"options": [
						"'default'",
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"fillDot": {},
				"hideDot": {},
				"large": {},
				"left": {},
				"right": {},
				"small": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VToolbar": {
				"absolute": {},
				"bottom": {},
				"class": {},
				"collapse": {},
				"extended": {},
				"floating": {},
				"prominent": {},
				"short": {},
				"src": {
					"type": "object | string"
				},
				"tag": {},
				"tile": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"VTreeview": {
				"qValue": {
					"type": "Array<any>"
				},
				"items": {
					"type": "Array<any>",
					"editorDefaultValue": "[{name = 'test1', id = 1, children=[{name='test1 Child', id = 2}, {name='test2 Child', id = 3}]},{ name = 'test3', id = 4, children=[{name='test4 Child', id=5}]}]"
				},
				"activatable": {},
				"hoverable": {},
				"openAll": {},
				"selectable": {},
				"selectedColor": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"selectionType": {},
				"active": {
					"type": "Array<any>"
				},
				"color": {
					"editorDefaultValue": "'primary'",
					"options": [
						"'primary'",
						"'secondary'",
						"'accent'",
						"'success'",
						"'error'",
						"'info'",
						"'warning'"
					]
				},
				"dense": {},
				"expandIcon": {},
				"itemChildren": {},
				"itemKey": {},
				"itemText": {},
				"multipleActive": {},
				"offIcon": {},
				"onIcon": {},
				"open": {
					"type": "Array<any>"
				},
				"openOnClick": {},
				"search": {},
				"shaped": {},
				"transition": {
					"type": "string | boolean"
				},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"QLabel": {
				"class": {},
				"maxWidth": {},
				"overflow": {},
				"tagType": {
					"editorDefaultValue": "'span'",
					"options": [
						"'span'",
						"'paragraph'"
					]
				},
				"text": {
					"editorDefaultValue": "'Text'"
				},
				"textOverflow": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"whiteSpace": {}
			},
			"QLegend": {
				"QJsonPath": {
					"editorDefaultValue": "'qjson://QLegend'",
					"runTimeOverrideValue": "qjson://QLegend"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"QCaptcha": {
				"QJsonPath": {
					"editorDefaultValue": "'qjson://QCaptcha'",
					"runTimeOverrideValue": "qjson://QCaptcha"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"QRichText": {
				"ToolBarcolor": {
					"editorDefaultValue": ""
				},
				"disabled": {},
				"buttonsHide": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"QDynamicFields": {
				"QJsonPath": {
					"editorDefaultValue": "'qjson://QDynamicFields'",
					"runTimeOverrideValue": "qjson://QDynamicFields"
				},
				"visible": {
					"editorDefaultValue": "true"
				}
			},
			"QDocumentViewer": {
				"customCompClass": {
					"editorDefaultValue": "'pdf'"
				},
				"src": {
					"editorDefaultValue": ""
				},
				"height": {},
				"scale": {},
				"visible": {
					"editorDefaultValue": "true"
				},
				"tabindex": {
					"type": "number | string"
				}
			},
			"DxPaging": {
				"pageSize": {
					"editorDefaultValue": "3"
				},
				"pageIndex": {},
				"enabled": {},
				"visible": {
					"editorDefaultValue": "true"
				}
			}
		},
		"type": "object"
	},
	"containerServices": {
		"type": "js",
		"value": "\nvar containerServices = {\n    extensions: {    \n    }\n}\n\n\nif (typeof exports === 'object' && typeof module === 'object') {\n    module.exports = containerServices;\n  } else {\n    window[\"plateauUIContainerServices\"] = containerServices;\n  }\n//#region JS Section"
	},
	"pipeline": {
		"type": "js",
		"value": "let pjson = {\"cJson\":[{\"T\":\"Messaging\",\"P\":{\"ID\":{\"H\":\"EdtrComp_22\",\"T\":\"prop\"}},\"E\":{\"onBeforeRequest\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nquick.EM.trace(\\\"onBeforeRequest executed\\\");\\r\\nvar langCode = quick.store.get(\\\"#pipelineBagStoreKey\\\") || \\\"en-US\\\";\\r\\nrequestObject.headers[\\\"request-language\\\"] = langCode;\\r\\n\",\"C\":true,\"EV\":true,\"HL\":\"JS\"},\"onAfterResponse\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n// manipulate the successful response\\r\\nquick.EM.trace(\\\"onAfterResponse executed\\\");\\r\\nquick.EM.trace(response);\\r\\n\",\"C\":true,\"EV\":true,\"HL\":\"JS\"},\"PreRender\":{\"H\":\"// let langCode = quick.Quick.getLanguage();\\r\\n// let lang = \\\"tr\\\";\\r\\n// if (langCode == \\\"en-US\\\") {\\r\\n//     lang = \\\"en\\\";\\r\\n// }\\r\\n// let request1 = <any>{};\\r\\n// request1.url = 'http://metadata.turisiam-int.turisiam.plateaux.softtech/api/localization/bundles';\\r\\n// request1.http = 'get';\\r\\n// request1.data = { locale: lang };\\r\\n// request1.responseField = 'data'\\r\\n// request1.onSuccess = 'localizationOnSuccess';\\r\\n// request1.onFail = 'localizationOnFail';\\r\\n// request1.blockRender = true;\\r\\n// quick.Request.async(request1);\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n\",\"I\":true,\"HL\":\"JS\"},\"localizationOnSuccess\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nif (response.data != null && response.data.success) {\\r\\n    quick.EM.trace(\\\"Localization Success\\\");\\r\\n    quick.EM.trace(response.data);\\r\\n    var resourceList = response.data.bundles[0].resources;\\r\\n    var langCode = \\\"tr-TR\\\";\\r\\n    if (response.data.bundles[0].language == \\\"en\\\") {\\r\\n        langCode = \\\"en-US\\\";\\r\\n    }\\r\\n    quick.importLocalization(langCode, resourceList, { overrite: true });\\r\\n}\\r\\n\",\"C\":true,\"HL\":\"JS\"},\"localizationOnFail\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nquick.EM.trace(\\\"Localization Fail\\\");\\r\\nquick.EM.trace(error);\\r\\n\",\"C\":true,\"HL\":\"JS\"},\"onAfterErrorResponse\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n// manipulate the failed response\\r\\nquick.EM.trace(\\\"onAfterErrorResponse executed\\\");\\r\\nquick.EM.trace(response);\\r\\n\",\"C\":true,\"EV\":true,\"HL\":\"JS\"},\"onPostRender\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n\",\"C\":true,\"EV\":true,\"HL\":\"JS\"},\"logHandler\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n\",\"C\":true,\"EV\":true,\"HL\":\"JS\"}},\"C\":{},\"_Editor\":{\"eID\":\"EdtrComp_22\"},\"O\":{\"compDomClasses\":\"newDropBorder\",\"cType\":\"child\"}}],\"clrids\":{\"tr-TR\":{\"validationMsg\":\"╬'Lütfen zorunlu alanları giriniz.'╩╩\"},\"en-US\":{\"validationMsg\":\"╬'Please enter all required fields'╩╩\"}},\"description\":{}};\nexport default pjson",
		"format": "qjson"
	},
	"alert": {
		"type": "js",
		"value": "let pjson = {\"cJson\":[{\"T\":\"Messaging\",\"P\":{\"ID\":{\"H\":\"EdtrComp_1\",\"T\":\"prop\"}},\"E\":{\"PostRender\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nif (quick.parent.props) {\\r\\n    quick.EM.trace(quick.parent.props);\\r\\n    //Quick.alert({text= 'Kayıt silinecektir onaylıyor musunuz?', category='Warning', actionButtons=[{name='Onayla', type='Confirm', clickEventName='onConfirm'},{ name='İptal', type='Cancel', clickEventName='onCancel'}]})\\r\\n    //Quick.alert({ error= { errorMessage= error.response.message, errorCode= 'HTTP_' + error.response.status, errorSource= 'Network' }\\r\\n    //---ALERT PARAMS---//\\r\\n    //title?: string\\r\\n    //text? : string\\r\\n    //category? : enum (Warning - Info - Success - Error)\\r\\n    //actionButtons?: [{name: string, type: enum (Confirm - Cancel), clickEventName: string}]\\r\\n    //error?: { errorMessage?: string, errorCode?: string, errorSource?: enum ( Network - Page - Validation )}\\r\\n    //Display Samples\\r\\n    components.cancelButton.visible = false;\\r\\n    components.confirmButton.visible = false;\\r\\n    components.validationBtn.visible = false;\\r\\n    if (quick.parent.props.error) {\\r\\n        if (quick.parent.props.error.errorSource == 'Validation') {\\r\\n            //validation error display\\r\\n            components.alertHeader.type = 'error';\\r\\n            components.alertHeaderText.text = quick.LR(quick.parent.props.error.errorCode);\\r\\n            components.validationBtn.visible = true;\\r\\n            components.validationBtnText.text = quick.parent.props.actionButtons[0].name;\\r\\n        }\\r\\n        if (quick.parent.props.error.errorSource == 'Network') {\\r\\n            //network error display\\r\\n            components.alertHeader.type = 'error';\\r\\n            components.alertHeaderText.text = quick.parent.props.error.errorCode;\\r\\n            components.alertText.text = quick.parent.props.error.errorMessage;\\r\\n        }\\r\\n    }\\r\\n    else {\\r\\n        //Confirm diplay\\r\\n        components.alertHeader.type = quick.parent.props.category;\\r\\n        components.alertHeaderText.text = quick.parent.props.title;\\r\\n        components.alertText.text = quick.parent.props.text;\\r\\n        var actionButtonList = [];\\r\\n        if (quick.parent.props.actionButtons != null) {\\r\\n            actionButtonList = quick.parent.props.actionButtons;\\r\\n        }\\r\\n        actionButtonList.forEach(function (actionButton) {\\r\\n            quick.EM.trace('actionButtons');\\r\\n            quick.EM.trace(actionButton);\\r\\n            if (actionButton.type == 'Confirm') {\\r\\n                components.confirmButton.visible = true;\\r\\n                components.confimButtonText.text = actionButton.name;\\r\\n            }\\r\\n            if (actionButton.type == 'Cancel') {\\r\\n                components.cancelButton.visible = true;\\r\\n                components.cancelButtonText.text = actionButton.name;\\r\\n            }\\r\\n        });\\r\\n    }\\r\\n    components.alertSampleDialog.qValue = true;\\r\\n}\\r\\n\",\"TO\":1,\"HL\":\"JS\"}},\"C\":{},\"_Editor\":{\"eID\":\"EdtrComp_1\"},\"O\":{\"cType\":\"child\"}},{\"T\":\"VRow\",\"P\":{\"ID\":{\"H\":\"EdtrComp_40\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'d-flex justify-center'╩╩\",\"T\":\"class\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VDialog\",\"P\":{\"ID\":{\"H\":\"alertSampleDialog\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'col-4'╩╩\",\"T\":\"class\"},\"eager\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VCard\",\"P\":{\"ID\":{\"H\":\"EdtrComp_65\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'col-xl-12 justify-space-around align-start'╩╩\",\"T\":\"class\"},\"color\":{\"H\":\"╬'white'╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VAlert\",\"P\":{\"ID\":{\"H\":\"alertHeader\",\"T\":\"prop\"},\"type\":{\"H\":\"╬'warning'╩╩\",\"T\":\"prop\"},\"icon\":{\"H\":\"╬'mdi-alert'╩╩\",\"T\":\"prop\"},\"prominent\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"},\"render\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"QLabel\",\"P\":{\"ID\":{\"H\":\"alertHeaderText\",\"T\":\"prop\"},\"text\":{\"H\":\"╬'home'╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{},\"_Editor\":{\"eID\":\"EdtrComp_6\"},\"O\":{\"cType\":\"child\",\"compDomClasses\":\"q-label newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_2\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-alert v-sheet theme--dark v-alert--prominent warning newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_65\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-card v-sheet theme--light white col-xl-12 justify-space-around align-start newDropBorder\"}},{\"T\":\"VCard\",\"P\":{\"ID\":{\"H\":\"EdtrComp_70\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'col-xl-12 align-start'╩╩\",\"T\":\"class\"},\"color\":{\"H\":\"╬'white'╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VContainer\",\"P\":{\"ID\":{\"H\":\"EdtrComp_74\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VRow\",\"P\":{\"ID\":{\"H\":\"EdtrComp_78\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"QLabel\",\"P\":{\"ID\":{\"H\":\"alertText\",\"T\":\"prop\"}},\"E\":{},\"C\":{},\"_Editor\":{\"eID\":\"EdtrComp_81\"},\"O\":{\"cType\":\"child\",\"compDomClasses\":\"q-label newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_78\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"row newDropBorder\"}},{\"T\":\"VRow\",\"P\":{\"ID\":{\"H\":\"EdtrComp_82\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'justify-space-around'╩╩\",\"T\":\"class\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VBtn\",\"P\":{\"ID\":{\"H\":\"confirmButton\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'success'╩╩\",\"T\":\"class\"}},\"E\":{\"click\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nquick.EM.trace('alert.qjson dialog Confirm type button clicked - onConfirmTask custom event on owner component will be triggered');\\r\\ncomponents.alertSampleDialog.qValue = false;\\r\\nquick.parent.events.onConfirm();\\r\\n\",\"P\":\"mouseEvent:unknown | undefined\",\"HL\":\"JS\"}},\"C\":{\"default\":{\"c\":[{\"T\":\"QLabel\",\"C\":{},\"E\":{},\"P\":{\"ID\":{\"H\":\"confimButtonText\",\"T\":\"prop\"},\"text\":{\"H\":\"╬'Evet'╩╩\",\"T\":\"prop\"}},\"_Editor\":{\"eID\":\"EdtrComp_90\"},\"O\":{\"cType\":\"child\",\"compDomClasses\":\"q-label newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_89\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-btn v-btn--contained theme--light v-size--default success newDropBorder\"}},{\"T\":\"VBtn\",\"P\":{\"ID\":{\"H\":\"validationBtn\",\"T\":\"prop\"},\"color\":{\"H\":\"╬'primary'╩╩\",\"T\":\"prop\"},\"regular\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"QLabel\",\"C\":{},\"E\":{},\"P\":{\"ID\":{\"H\":\"validationBtnText\",\"T\":\"prop\"}},\"_Editor\":{\"eID\":\"EdtrComp_4\"},\"O\":{\"cType\":\"child\",\"compDomClasses\":\"q-label newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_3\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-btn v-btn--contained theme--light v-size--default primary newDropBorder\"}},{\"T\":\"VBtn\",\"P\":{\"ID\":{\"H\":\"cancelButton\",\"T\":\"prop\"},\"class\":{\"H\":\"╬'error'╩╩\",\"T\":\"class\"}},\"E\":{\"click\":{\"H\":\"Object.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nquick.EM.trace('alert.qjson dialog Cancel type button clicked - ononCancelTask custom event on owner component will be triggered');\\r\\ncomponents.alertSampleDialog.qValue = false;\\r\\nquick.parent.events.onCancel();\\r\\n\",\"P\":\"mouseEvent:unknown | undefined\",\"HL\":\"JS\"}},\"C\":{\"default\":{\"c\":[{\"T\":\"QLabel\",\"C\":{},\"E\":{},\"P\":{\"ID\":{\"H\":\"cancelButtonText\",\"T\":\"prop\"},\"text\":{\"H\":\"╬'Hayır'╩╩\",\"T\":\"prop\"}},\"_Editor\":{\"eID\":\"EdtrComp_88\"},\"O\":{\"cType\":\"child\",\"compDomClasses\":\"q-label newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_87\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-btn v-btn--contained theme--light v-size--default error newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_82\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"row justify-space-around newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_74\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"container newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_70\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-card v-sheet theme--light white col-xl-12 align-start newDropBorder\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_58\"},\"O\":{\"cType\":\"slot\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_40\"},\"O\":{\"cType\":\"slot\"}}],\"clrids\":{\"tr-TR\":{\"notValidErrDefaultMessage\":\"╬'Zorunlu alanları giriniz'╩╩\"},\"en-US\":{\"notValidErrDefaultMessage\":\"╬'Enter all required fields'╩╩\"}},\"description\":{}};\nexport default pjson",
		"format": "qjson"
	},
	"loading": {
		"type": "js",
		"value": "let pjson = {\"cJson\":[{\"T\":\"VOverlay\",\"P\":{\"ID\":{\"H\":\"EdtrComp_265\",\"T\":\"prop\"},\"visible\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{\"default\":{\"c\":[{\"T\":\"VProgressCircular\",\"P\":{\"ID\":{\"H\":\"EdtrComp_266\",\"T\":\"prop\"},\"visible\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"},\"size\":{\"H\":\"╬50╩╩\",\"T\":\"prop\"},\"indeterminate\":{\"H\":\"╬true╩╩\",\"T\":\"prop\"},\"color\":{\"H\":\"╬'black'╩╩\",\"T\":\"prop\"}},\"E\":{},\"C\":{},\"_Editor\":{\"eID\":\"EdtrComp_266\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-progress-circular v-progress-circular--indeterminate black--text\"}}],\"cType\":\"slot\"}},\"_Editor\":{\"eID\":\"EdtrComp_265\"},\"O\":{\"cType\":\"slot\",\"compDomClasses\":\"v-overlay v-overlay--active theme--dark\"}}],\"clrids\":{\"tr-TR\":{\"label_CUSTOMER\":\"╬'Müşteri'╩╩\",\"label_PORTFOLIO\":\"╬'Portföy'╩╩\",\"label_FUND\":\"╬'Fon'╩╩\",\"label_CUSTOM\":\"╬'Genel'╩╩\",\"label_FX\":\"╬'Fx'╩╩\",\"label_ACTIVE\":\"╬'Aktif'╩╩\",\"label_PASSIVE\":\"╬'Pasif'╩╩\",\"label_accountNumber\":\"╬'Hesap Numarası'╩╩\",\"label_tcknOrTaxNumber\":\"╬'TCKN/VKN'╩╩\",\"label_customerNumber\":\"╬'Müşteri Numarası'╩╩\",\"label_customerName\":\"╬'Müşteri Adı'╩╩\",\"label_accountStatus\":\"╬'Hesap Statüsü'╩╩\",\"label_accountType\":\"╬'Hesap Tipi'╩╩\",\"label_customerType\":\"╬'Müşteri Tipi'╩╩\",\"label_openAccountDate\":\"╬'Hesap Açılış Tarihi'╩╩\",\"label_closeAccountDate\":\"╬'Hesap Kapanış Tarihi'╩╩\",\"label_investmentAdvisor\":\"╬'Yatırım Danışmanı'╩╩\",\"label_branch\":\"╬'Şube'╩╩\",\"label_subBranch\":\"╬'Alt Şube'╩╩\",\"label_agency\":\"╬'Acenta'╩╩\",\"label_accountCustomerType\":\"╬'Hesap Müşteri Tipi'╩╩\",\"label_openAccountDateRange\":\"╬'Hesap Açılış Tarih Aralığı'╩╩\",\"label_closeAccountDateRange\":\"╬'Hesap Kapanış Tarih Aralığı'╩╩\",\"label_noDataAvailable\":\"╬'Kayıt Bulunamadı'╩╩\",\"label_listInvestmentAccount\":\"╬'Yatırım Hesap Listeleme'╩╩\",\"label_accountName\":\"╬'Hesap Adı'╩╩\",\"label_branchCode\":\"╬'Şube Kodu'╩╩\",\"label_mpfType\":\"╬'Mpf Tipi'╩╩\",\"label_createInvestmentAccount\":\"╬'Yatırım Hesap Oluştur'╩╩\",\"label_cancel\":\"╬'Vazgeç'╩╩\",\"label_save\":\"╬'Kaydet'╩╩\",\"label_investmentAccountGroup\":\"╬'Hesap Grup Oluştur'╩╩\",\"label_groupName\":\"╬'Hesap Grup Adı'╩╩\",\"label_groupDesc\":\"╬'Hesap Grup Açıklamasını Giriniz...'╩╩\",\"label_groupType\":\"╬'Hesap Grup Türü'╩╩\",\"label_list\":\"╬'Listele'╩╩\",\"label_detail\":\"╬'Detay'╩╩\",\"label_update\":\"╬'Güncelle'╩╩\",\"label_excelExport\":\"╬'Excele Aktar'╩╩\",\"label_listAccountGroup\":\"╬'Hesap Grupları Listele'╩╩\",\"label_selectGroupType\":\"╬'Grup Türü Seçin'╩╩\",\"label_selectGroupStatus\":\"╬'Grup Statüsü Seçin'╩╩\",\"label_selectGroupName\":\"╬'Hesap Grup Adı Girin'╩╩\",\"label_groupStatus\":\"╬'Hesap Grup Statü'╩╩\",\"label_clear\":\"╬'Temizle'╩╩\",\"label_filter\":\"╬'Filtrele'╩╩\",\"label_resultList\":\"╬'Sonuç Listesi'╩╩\",\"label_accountDetail\":\"╬'Yatırım Hesap Detayı'╩╩\",\"label_lastProcessDate\":\"╬'Son İşlem Tarihi'╩╩\",\"label_accountInfo\":\"╬'Hesap Bilgileri'╩╩\",\"label_customerInfo\":\"╬'Müşteri Bilgileri'╩╩\",\"label_closeAccount\":\"╬'Hesap Kapat'╩╩\",\"label_accountGroupDesc\":\"╬'Hesap Grup Açıklaması'╩╩\",\"label_accountGroupType\":\"╬'Hesap Grup Türü Adı'╩╩\",\"label_accountGroupName\":\"╬'Hesap Grup Adı'╩╩\",\"label_groupDetail\":\"╬'Hesap Grup Detay'╩╩\",\"label_updateAccountDetail\":\"╬'Yatırım Hesap Detayı Güncelleme'╩╩\",\"label_updateAccountGroup\":\"╬'Hesap Grubu Güncelleme'╩╩\",\"label_savedGroupType\":\"╬'Kayıtlı Hesap Grup Türü ...'╩╩\",\"label_savedGroupName\":\"╬'Kayıtlı Hesap Grup Adı'╩╩\",\"label_savedGroupDesc\":\"╬'Kayıtlı Hesap Grup Açıklaması ...'╩╩\",\"label_accountGroup\":\"╬'Hesap Grup'╩╩\",\"label_customerSearch\":\"╬'Müşteri Ara'╩╩\",\"label_customerNameSurname\":\"╬'Müşteri Adı Soyadı'╩╩\",\"label_TCKN\":\"╬'TCKN'╩╩\",\"label_investmentAccountInfo\":\"╬'Hesap Bilgileri'╩╩\",\"label_accountGroupInfo\":\"╬'Hesap Grup Bilgileri'╩╩\",\"label_fxGroup\":\"╬'Fx Grubu'╩╩\",\"label_leverage\":\"╬'Kaldıraç'╩╩\",\"label_customerMainInfo\":\"╬'Hesap Sahibi Bilgileri'╩╩\"},\"en-US\":{\"label_CUSTOMER\":\"╬'Customer'╩╩\",\"label_PORTFOLIO\":\"╬'Portfolio'╩╩\",\"label_FUND\":\"╬'Fund'╩╩\",\"label_CUSTOM\":\"╬'Custom'╩╩\",\"label_FX\":\"╬'Fx'╩╩\",\"label_ACTIVE\":\"╬'Active'╩╩\",\"label_PASSIVE\":\"╬'Pasif'╩╩\",\"label_accountNumber\":\"╬'Account Number'╩╩\",\"label_tcknOrTaxNumber\":\"╬'TCKN/VKN'╩╩\",\"label_customerNumber\":\"╬'Customer Number'╩╩\",\"label_customerName\":\"╬'Customer Name'╩╩\",\"label_accountStatus\":\"╬'Account Status'╩╩\",\"label_accountType\":\"╬'Account Type'╩╩\",\"label_customerType\":\"╬'Customer Type'╩╩\",\"label_openAccountDate\":\"╬'Open Date'╩╩\",\"label_closeAccountDate\":\"╬'Close Date'╩╩\",\"label_investmentAdvisor\":\"╬'Investment Advisor'╩╩\",\"label_branch\":\"╬'Branch'╩╩\",\"label_subBranch\":\"╬'Sub Branch'╩╩\",\"label_agency\":\"╬'Agency'╩╩\",\"label_accountCustomerType\":\"╬'Account Customer Type'╩╩\",\"label_openAccountDateRange\":\"╬'Account Open Date Range'╩╩\",\"label_closeAccountDateRange\":\"╬'Account Close Date Range'╩╩\",\"label_noDataAvailable\":\"╬'No Data Available'╩╩\",\"label_listInvestmentAccount\":\"╬'List Investment Account'╩╩\",\"label_accountName\":\"╬'Account Name'╩╩\",\"label_branchCode\":\"╬'Branch Code'╩╩\",\"label_mpfType\":\"╬'Mpf Type'╩╩\",\"label_createInvestmentAccount\":\"╬'Create Investment Account'╩╩\",\"label_cancel\":\"╬'Cancel'╩╩\",\"label_save\":\"╬'Save'╩╩\",\"label_investmentAccountGroup\":\"╬'Investment Account Group'╩╩\",\"label_groupName\":\"╬'Account Group Name'╩╩\",\"label_groupDesc\":\"╬'Enter Account Group Description'╩╩\",\"label_groupType\":\"╬'Investment Account Group Type'╩╩\",\"label_list\":\"╬'List'╩╩\",\"label_detail\":\"╬'Detail'╩╩\",\"label_update\":\"╬'Update'╩╩\",\"label_excelExport\":\"╬'Export Excel'╩╩\",\"label_listAccountGroup\":\"╬'List Investment Account Group'╩╩\",\"label_selectGroupType\":\"╬'Select Group Type'╩╩\",\"label_selectGroupStatus\":\"╬'Select Group Status'╩╩\",\"label_selectGroupName\":\"╬'Select Group Name'╩╩\",\"label_groupStatus\":\"╬'Account Group Status'╩╩\",\"label_clear\":\"╬'Clear'╩╩\",\"label_filter\":\"╬'Filter'╩╩\",\"label_resultList\":\"╬'Result List'╩╩\",\"label_accountDetail\":\"╬'Account Detail'╩╩\",\"label_lastProcessDate\":\"╬'Last Process Date'╩╩\",\"label_accountInfo\":\"╬'Account Information'╩╩\",\"label_customerInfo\":\"╬'Customer Information'╩╩\",\"label_closeAccount\":\"╬'Close Account'╩╩\",\"label_accountGroupDesc\":\"╬'Account Group Description'╩╩\",\"label_accountGroupType\":\"╬'Account Group Type Name'╩╩\",\"label_accountGroupName\":\"╬'Account Group Name'╩╩\",\"label_groupDetail\":\"╬'Account Group Detail'╩╩\",\"label_updateAccountDetail\":\"╬'Update Account Detail'╩╩\",\"label_updateAccountGroup\":\"╬'Update Account Group'╩╩\",\"label_savedGroupType\":\"╬'Saved Group Type'╩╩\",\"label_savedGroupName\":\"╬'Saved Group Name'╩╩\",\"label_savedGroupDesc\":\"╬'Saved Group Description'╩╩\",\"label_accountGroup\":\"╬'Account Group'╩╩\",\"label_customerSearch\":\"╬' Search Customer'╩╩\",\"label_customerNameSurname\":\"╬'Customer Name Surname'╩╩\",\"label_TCKN\":\"╬'TCKN'╩╩\",\"label_investmentAccountInfo\":\"╬'Account Information'╩╩\",\"label_accountGroupInfo\":\"╬'Account Group Information'╩╩\",\"label_fxGroup\":\"╬'Fx Group'╩╩\",\"label_leverage\":\"╬'Leverage'╩╩\",\"label_customerMainInfo\":\"╬'Main Customer Information'╩╩\"}}};\nexport default pjson",
		"format": "qjson"
	},
	"rootqjson": {
		"type": "path",
		"value": "static/qjsons/samplesFirstPage",
		"format": "qjson"
	},
	"localProxy": {
		"value": {
			"/services/processmanager": "http://localhost/processmanager",
			"/api/users": "https://reqres.in/api/users",
			"/api/usersError": "https://reqres.indd/api/users",
			"/services/demorequest": "https://reqres.in/api/users?page=2"
		},
		"type": "object"
	}
}
if (typeof exports === 'object' && typeof module === 'object'){
 	module.exports = settings;
}else{ 
	window['plateauUISettings'] = settings;
}