define("UsrPage_rn37pfm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pqrfofq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_1ge9auw",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_1ge9auw"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ax0hooj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_azonwuq",
					"labelPosition": "auto",
					"control": "$LookupAttribute_azonwuq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_9d0s7o0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9d0s7o0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ax0hooj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_r302x45",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_4nptxki",
					"labelPosition": "auto",
					"control": "$LookupAttribute_4nptxki",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_sd2ohq5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_sd2ohq5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_r302x45",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_blbxr2o",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_6cezgae",
					"labelPosition": "auto",
					"control": "$StringAttribute_6cezgae"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"DateTimeAttribute_1ge9auw": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
					}
				},
				"LookupAttribute_4nptxki": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustomer"
					}
				},
				"LookupAttribute_azonwuq": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrEmployeeContact"
					}
				},
				"StringAttribute_6cezgae": {
					"modelConfig": {
						"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrRealtyVisitFreedomUIDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrRealtyVisitFreedomUI"
					}
				}
			},
			"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});