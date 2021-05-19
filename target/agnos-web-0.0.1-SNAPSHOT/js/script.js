/**
 * IDs for the input and the output component/node of the Cytoscape graph
 */
const componentIdInput = "input";
const componentIdOutput = "output";

/**
 * Keys for JSON config
 */
const keyNameId = "id";
const keyNamePipelineType = "pipelineType";
const keyNameComponents = "components";
const keyNameStartComponents = "startComponents";
const keyNameEndComponents = "endComponents";
const keyNameConnections = "connections";

/**
 * Experiment task types
 */
const TaskType = {
		MD: "MD",
		CG: "CG",
		ED: "ED",
		MD_CG: "MD_CG",
		CG_ED: "CG_ED",
		FULL: "FULL"
};

/**
 * Basic linker pipeline configuration with CG and ED
 */
var basicPipelineConfigExampleA = {
		"id" : 1,
		"pipelineType" : "complex",
		"components" : {
				"md": [
					{id: "MD1", value: "Babelfy"}
				],
				"cg": [
					{id: "CG1", value: "DBpediaSpotlight"}
				],
				"cg_ed": [],
				"ed": [
					{id: "ED1", value: "Babelfy"}
				],
				"combiner": [],
				"splitter": []
		},
		"connections": [
			{source: "MD1", target: "CG1"},
			{source: "CG1", target: "ED1"}
		],
		"startComponents": [
			"MD1"
		],
		"endComponents": [
			"ED1"
		]
	};

/**
 * Basic linker pipeline configuration with combined CG_ED
 */
var basicPipelineConfigExampleB = {
		"id" : 1,
		"pipelineType" : "complex",
		"components" : {
				"md": [
					{id: "MD1", value: "Babelfy"}
				],
				"cg": [],
				"cg_ed": [
					{id: "CG_ED1", value: "Babelfy"}
				],
				"ed": [],
				"combiner": [],
				"splitter": []
		},
		"connections": [
			{source: "MD1", target: "CG_ED1"}
		],
		"startComponents": [
			"MD1"
		],
		"endComponents": [
			"CG_ED1"
		]
	};

/**
 * Simple example of a linker pipeline configuration
 */
var simplePipelineConfigExample = {
		"id" : 1,
		"pipelineType" : "complex",
		"components" : {
				"md": [
					{id: "MD1", value: "Babelfy"}
				],
				"cg": [
					{id: "CG1", value: "DBpediaSpotlight"}
				],
				"cg_ed": [],
				"ed": [
					{id: "ED1", value: "Babelfy"}
				],
				"combiner": [
					{id: "TR1", value: "WIKIDATA_TO_DBPEDIA"}
				],
				"splitter": []
		},
		"connections": [
			{source: "MD1", target: "CG1"},
			{source: "CG1", target: "ED1"},
			{source: "ED1", target: "TR1"}
		],
		"startComponents": [
			"MD1"
		],
		"endComponents": [
			"TR1"
		]
	};

/**
 * Complex example of a linker pipeline configuration (with separated CG and ED)
 */
var complexPipelineConfigExampleA = {
		"id" : 1,
		"pipelineType" : "complex",
		"components" : {
				"md": [
					{id: "MD1", value: "Babelfy"},
					{id: "MD2", value: "DBpediaSpotlight"},
					{id: "MD3", value: "AIDA"}
				],
				"cg": [
					{id: "CG1", value: "Babelfy"}
				],
				"cg_ed": [],
				"ed": [
					{id: "ED1", value: "Babelfy"}
				],
				"combiner": [
					{id: "CO1", value: "Union"}
				],
				"splitter": [
					{id: "SP1", value: 3}
				]
		},
		"connections": [
			{source: "SP1", target: "MD1"},
			{source: "SP1", target: "MD2"},
			{source: "SP1", target: "MD3"},
			{source: "MD1", target: "CO1"},
			{source: "MD2", target: "CO1"},
			{source: "MD3", target: "CO1"},
			{source: "CO1", target: "CG1"},
			{source: "CG1", target: "ED1"}
		],
		"startComponents": [
			"SP1"
		],
		"endComponents": [
			"ED1"
		]
	};

var complexPipelineSplitterForMd = {
	    "id": 1,
	    "pipelineType": "complex",
	    "components": {
	        "md": [
	            {
	                "id": "MD1",
	                "value": "Babelfy"
	            },
	            {
	            	"id": "MD2",
	            	"value": "DBpediaSpotlight"
	            }
	        ],
	        "cg": [],
	        "cg_ed": [
	            {
	                "id": "CG_ED1",
	                "value": "Babelfy"
	            }
	        ],
	        "ed": [],
	        "combiner": [
		        {
		        	"id": "CO1",
		        	"value": "union"
		        }
	        ],
	        "splitter": [
	        	{
	        		"id": "SP1",
	        		"value": "copy"
	        	}
	        ]
	    },
	    "connections": [
	        {
	            "source": "SP1",
	            "target": "MD1"
	        },
	        {
	            "source": "SP1",
	            "target": "MD2"
	        },
	        {
	            "source": "MD1",
	            "target": "CO1"
	        },
	        {
	            "source": "MD2",
	            "target": "CO1"
	        },
	        {
	            "source": "CO1",
	            "target": "CG_ED1"
	        }
	    ],
	    "startComponents": [
	        "SP1"
	    ],
	    "endComponents": [
	        "CG_ED1"
	    ]
	};

var complexPipelineSplitterForCgEd = {
	    "id": 1,
	    "pipelineType": "complex",
	    "components": {
	        "md": [
	            {
	                "id": "MD1",
	                "value": "Babelfy"
	            }
	        ],
	        "cg": [],
	        "cg_ed": [
	            {
	                "id": "CG_ED1",
	                "value": "Babelfy"
	            },
	            {
	                "id": "CG_ED2",
	                "value": "DBpediaSpotlight"
	            }
	        ],
	        "ed": [],
	        "combiner": [
		        {
		        	"id": "CO1",
		        	"value": "union"
		        }
	        ],
	        "splitter": [
	        	{
	        		"id": "SP1",
	        		"value": "copy"
	        	}
	        ]
	    },
	    "connections": [
	        {
	            "source": "MD1",
	            "target": "SP1"
	        },
	        {
	            "source": "SP1",
	            "target": "CG_ED1"
	        },
	        {
	            "source": "SP1",
	            "target": "CG_ED2"
	        },
	        {
	            "source": "CG_ED1",
	            "target": "CO1"
	        },
	        {
	            "source": "CG_ED2",
	            "target": "CO1"
	        }
	    ],
	    "startComponents": [
	        "MD1"
	    ],
	    "endComponents": [
	        "CO1"
	    ]
	};

/**
 * Complex example of a linker pipeline configuration (with combined CG and ED)
 */
var complexPipelineConfigExampleB = {
		"id" : 1,
		"pipelineType" : "complex",
		"components" : {
				"md": [
					{id: "MD1", value: "Babelfy"},
					{id: "MD2", value: "DBpediaSpotlight"},
					{id: "MD3", value: "AIDA"}
				],
				"cg": [],
				"cg_ed": [
					{id: "CG_ED1", value: "Babelfy"}
				],
				"ed": [],
				"combiner": [
					{id: "CO1", value: "Union"}
				],
				"splitter": [
					{id: "SP1", value: "3"}
				]
		},
		"connections": [
			{source: "SP1", target: "MD1"},
			{source: "SP1", target: "MD2"},
			{source: "SP1", target: "MD3"},
			{source: "MD1", target: "CO1"},
			{source: "MD2", target: "CO1"},
			{source: "MD3", target: "CO1"},
			{source: "CO1", target: "CG_ED1"},
		],
		"startComponents": [
			"SP1"
		],
		"endComponents": [
			"CG_ED1"
		]
	};


/**
 * Maps the names of the node types (e.g. mention detector, splitter) to their ID
 * abbreviation (e.g. MD, SP)
 */
var typeNameToTypeIdMap = {
		"md" : "MD",
		"cg" : "CG",
		"ed" : "ED",
		"cg_ed" : "CG_ED",
		"combiner" : "CO",
		"splitter" : "SP",
		"translator" : "TR",
		"filter" : "FI"
};

var typeIdToTypeNameMap = {
		"MD" : "md",
		"CG" : "cg",
		"ED" : "ed",
		"CG_ED" : "cg_ed",
		"CO" : "combiner",
		"SP" : "splitter",
		"TR" : "translator",
		"FI" : "filter"
};

var typeNameToTypeStringMap = {
		"md" : "Mention Detector",
		"cg" : "Candidate Generator",
		"cg_ed" : "Candidate Generator Disambiguator (combined)",
		"ed" : "Entity Disambiguator",
		"combiner" : "Combiner",
		"splitter" : "Splitter",
		"translator" : "Translator",
		"filter" : "Filter"
};

var linkingComponentTypes = [
	"md",
	"cg",
	"cg_ed",
	"ed"
];

var interComponentProcessorTypes = [
	"combiner",
	"splitter",
	"translator",
	"filter"
];

/**
 * Defines colors for the component types
 */
var typeToColorMap = {
		"input": "black",
		"output" : "black",
		"md" : "#9ccc65",
		"cg" : "#9ccc65",
		"ed" : "#9ccc65",
		"cg_ed" : "#9ccc65",
		"splitter" : "#fbc02d",
		"combiner" : "#fbc02d",
		"translator" : "grey",
		"filter" : "grey",
		"default" : "yellow"
};

/**
 * Cytoscape layout configuration
 */
var cyLayoutConfig = {
		name: 'klay',
		klay: {
			spacing: 50
		},
		nodeDimensionsIncludeLabels: true,
		padding: 20
		//padding: 40
	};



function setup() {
	$('#experimentType').multiselect();
	$('#matching').multiselect();
	$('#datasets').multiselect();
	$('#knowledgeBases').multiselect();
	
	var linkerIndex = 1;
	
	var pipelineConfigs = {};
	var pipelineCyGraphs = {};

	$("#addStandardLinker").on("click", function () {
		hideGlobalErrorMessage();
		var newRow = $('<div class="standard-linker card col-md-12 text-center" linker-id="' + linkerIndex + '">');
		var cols = buildStandardLinkerConfigHtml(linkerIndex);
		newRow.append(cols);
		$("#linker").append(newRow);
		
		fillLinkerDropdown(newRow, ".dropdown-linker");

		$(".my-remove").on("click", function (event) {
			$(this).closest(".standard-linker").remove();
		});

		linkerIndex += 1;
	});

	$("#addSimplePipeline").on("click", function () {
		hideGlobalErrorMessage();
		var newRow = $('<div class="custom-linker card col-md-12 text-center" linker-id="' + linkerIndex + '">');
		var cols = buildSimplePipelineConfigHtml(linkerIndex);
		newRow.append(cols);
		$("#linker").append(newRow);

		fillLinkerDropdown(newRow, ".dropdown-linker-md", "md");
		fillLinkerDropdown(newRow, ".dropdown-linker-cg-ed", "cg_ed");

		$(".my-remove").on("click", function (event) {
			$(this).closest(".custom-linker").remove();
		});
		
		linkerIndex += 1;
	});

	$("#addComplexPipeline").on("click", function () {
		hideGlobalErrorMessage();
		var newRow = $('<div class="complex-pipeline card col-md-12 text-center" linker-id="' + linkerIndex + '">');
		var cols = buildComplexPipelineConfigHtml(linkerIndex);
		newRow.append(cols);
		$("#linker").append(newRow);

		// var pipelineConfig = Object.assign({}, pipelineConfigDefault); // shallow copy
		// var pipelineConfig = $.extend(true, {}, pipelineConfigDefault); // deep copy
		var pipelineConfig = $.extend(true, {}, complexPipelineSplitterForCgEd); // deep copy
		pipelineConfig.id = linkerIndex;
		
		// Cytoscape
		var pipelineGraph = generatePipelineGraph(pipelineConfig);
		var divId = "cy" + linkerIndex;
		var cy = cytoscape({
			container: document.getElementById(divId),
			elements: pipelineGraph,
			layout: cyLayoutConfig,
			style: [{
				selector: 'node',
				style: {
					'background-color': function(ele){ return getComponentColor(ele.data('type')) },
					'label': 'data(label)',
					'text-wrap': 'wrap',
					'text-valign': 'bottom',
					'text-margin-y': '5px',
				}
			},
			{
				selector: 'edge',
				style: {
					'curve-style': 'bezier',
					'target-arrow-shape': 'triangle'
				}
			},
			{
				selector: 'node:selected',
				style: {
					'background-color': "red",
				}
			}]
		});
		
		cy.on('tap', function(event){
			if (event.target === cy){
				// ignore tap on background
				hideComponentDetailsView(pipelineConfig.id);
			} else if (event.target.isEdge()) {
				// ignore tap on edge
				hideComponentDetailsView(pipelineConfig.id);
			} else {
				var componentId = event.target.data('id');
				var componentType = event.target.data('type');
				if (componentId == componentIdInput || componentId == componentIdOutput) {
					// ignore tap on start or end node
					hideComponentDetailsView(pipelineConfig.id);
				} else {
					showComponentDetails(pipelineConfig, cy, componentId, componentType);
					showComponentDetailsView(pipelineConfig.id);
				}
			}
		});
		
		fillAddComponentDropdown(pipelineConfig, cy);
		
		pipelineConfigs[linkerIndex] = pipelineConfig;
		pipelineCyGraphs[linkerIndex] = cy;

		$(".my-remove").on("click", function (event) {
			var pipelineDiv = $(this).closest(".complex-pipeline");
			var pipelineId = parseInt(pipelineDiv.attr('linker-id'));
			pipelineDiv.remove();
			delete pipelineConfigs[pipelineId];
			delete pipelineCyGraphs[pipelineId];
			console.log("Removed complex pipeline " + pipelineId);
		});

		linkerIndex += 1;
	});
	
	
	$('#submit').click( function() {
		hideAllErrorMessages();
		taskType = $('#experimentType option:selected').val();
		matching = $('#matching option:selected').val();
		
		var linkerConfigs = [];
		
		// add standard linkers
		$('.standard-linker').each(function(index, linker) {
			var linkerId = parseInt($(linker).attr('linker-id'));
			var linkerName = $(linker).find('select.dropdown-linker option:selected').val();
			linkerConfig = {
					'id' : linkerId,
					'pipelineType' : 'standard',
					'linker' : linkerName};
			linkerConfigs.push(linkerConfig);
		});
		
		// add linker pipeline
		$('.custom-linker').each(function(index, linker) {
			var linkerId = parseInt($(linker).attr('linker-id'));
			var mentionDetector= $(linker).find('select.dropdown-linker-md option:selected').val();
			var candidateGeneratorDisambiguator = $(this).find('select.dropdown-linker-cg-ed option:selected').val();
			linkerConfig = {
					'id' : linkerId,
					'pipelineType' : 'custom',
					'mentionDetector' : mentionDetector,
					'candidateGeneratorDisambiguator' : candidateGeneratorDisambiguator};
			linkerConfigs.push(linkerConfig);
		});

		// add complex pipeline
//		$('.complex-pipeline').each(function(index, pipeline) {
		$.each(pipelineConfigs, function(index, pipelineConfig) {
			//var linkerConfig = generatePipelineConfigJson(pipelineConfig);
			var linkerConfig = pipelineConfig;
			linkerConfigs.push(linkerConfig);
		});

		datasets = []
		$('#datasets option:selected').each(function() {
			datasets.push($(this).val());
		});
		
		inputText = $('#inputText').val();
		
		knowledgeBases = []
		$('#knowledgeBases option:selected').each(function() {
			knowledgeBases.push($(this).val());
		});
		
		data = {};
		data.taskType = taskType;
		data.matching = matching;
		data.linkerConfigs = linkerConfigs;
		data.datasets = datasets;
		data.inputText = inputText;
		data.knowledgeBases = knowledgeBases;
		
		$.ajax({
			type : "POST",
			url: "execute",
			data : { 'experimentData' : JSON.stringify(data) },
			success : function(data) {
				//document.getElementById("result").innerHTML = JSON.stringify(data, undefined, 2);
//				console.log(data);
				var noErrors = true;
				$.each(data, function(index, result) {
					if (!result.succeeded) {
						showErrorMessage(result.taskId, result.errorMessage);
						noErrors = false;
					}
				});

				if (noErrors) {
					var win = window.open("result", '_blank');
				}
			}
		});

	});
	
}


function showComponentDetails(pipelineConfig, cy, componentId, componentType) {
	var component = pipelineConfig[keyNameComponents][componentType].find(x => x.id == componentId);
	
	var detailsView = getComponentDetailsViewDiv(pipelineConfig.id);
	detailsView.find("h5").text(typeNameToTypeStringMap[componentType]);
	detailsView.find("p").text(componentId);
	
	// show dropdowns for value, dependency and target selection
	fillComponentValueDropdown(pipelineConfig, cy, componentId, componentType, component.value);
	fillComponentDependenciesDropdown(pipelineConfig, cy, componentId);
	fillComponentTargetsDropdown(pipelineConfig, cy, componentId);
	
	// update delete button
	detailsView.find(".btn-delete-component").off("click").click(function() {
		deleteComponent(pipelineConfig, cy, componentId);
	});
}

function getComponentDependencies(pipelineConfig, componentId) {
	var dependencies = [];
	$.each(pipelineConfig[keyNameConnections], function(index, connection) {
		if (connection.target == componentId) {
			dependencies.push(connection.source);
		}
	});
	if (pipelineConfig[keyNameStartComponents].indexOf(componentId) > -1) {
		dependencies.push(componentIdInput);
	}
	return dependencies;
}

function getComponentTargets(pipelineConfig, componentId) {
	var targets = [];
	$.each(pipelineConfig[keyNameConnections], function(index, connection) {
		if (connection.source == componentId) {
			targets.push(connection.target);
		}
	});
	if (pipelineConfig[keyNameEndComponents].indexOf(componentId) > -1) {
		targets.push(componentIdOutput);
	}
	return targets;
}

/**
 * Return possible component values (i.e. linkers for MD, CG, CG_ED, ED, and various values for the
 * inter-component processors (ICP))
 */
function getPossibleComponentValues(pipelineConfig, componentType, callback) {
	var possibleValues = [];
	if (isLinkingComponent(componentType)) {
		getLinkers(componentType, callback);
	} else if (isInterComponentProcessor(componentType)) {
		getICPs(componentType, callback);
	}
	return possibleValues;
}


function getLinkers(taskType, callback) {
	var url = "linkers"
	if (typeof taskType !== undefined) {
		url += "?taskType=" + taskType;
	}
	$.ajax({
		type : "GET",
		url: url,
		success : function(data) {
			callback(data);
		},
		error : function() {}
	});
}

function getICPs(icpType, callback) {
	var url = "icps"
	if (typeof icpType !== undefined) {
		url += "?icpType=" + icpType;
	}
	$.ajax({
		type : "GET",
		url: url,
		success : function(data) {
			callback(data);
		},
		error : function() {}
	});
}


/**
 * Return possible component dependencies for dropdown selection
 */ 
function getPossibleComponentDependencies(pipelineConfig, componentId) {
	var possibleDependencies = [];
	possibleDependencies.push(componentIdInput);
	// TODO filter to valid ones
	$.each(pipelineConfig[keyNameComponents], function(key, componentList) {
		$.each(componentList, function(index, component) {
			if (component.id != componentId) {
				possibleDependencies.push(component.id);
			}
		});
	});
	return possibleDependencies;
}

/**
 * Return possible component targets for dropdown selection
 */ 
function getPossibleComponentTargets(pipelineConfig, componentId) {
	var possibleTargets =[];
	// TODO filter to valid ones
	$.each(pipelineConfig[keyNameComponents], function(key, componentList) {
		$.each(componentList, function(index, component) {
			if (component.id != componentId) {
				possibleTargets.push(component.id);
			}
		});
	});
	possibleTargets.push(componentIdOutput);
	return possibleTargets;
}

/**
 * Generates the HTML of the dropdown menu for adding new components to a complex pipeline
 */
function fillAddComponentDropdown(pipelineConfig, cy) {
	var pipelineDiv = getPipelineDiv(pipelineConfig.id);
	var dropdown = pipelineDiv.find(".dropdown-add-component > div");
	dropdown.empty();
	
	// components
	$.each(linkingComponentTypes, function(i, nodeType) {
		dropdown.append($("<a></a>").attr("class", "dropdown-item").attr("href", "#")
				.attr("data-type", nodeType).text(typeNameToTypeStringMap[nodeType]));
	});
	
	dropdown.append($("<div></div>").attr("class", "dropdown-divider"));
	
	// inter-component processors
	$.each(interComponentProcessorTypes, function(i, nodeType) {
		dropdown.append($("<a></a>").attr("class", "dropdown-item").attr("href", "#")
				.attr("data-type", nodeType).text(typeNameToTypeStringMap[nodeType]));
	});
	
	// event handler
	var dropdownElements = pipelineDiv.find(".dropdown-add-component > div > a");
	dropdownElements.off("click");
	dropdownElements.on("click", function() {
		var componentType = $(this).data("type");
		var componentId = getFreeComponentId(pipelineConfig, componentType);
		var componentValue = getComponentDefault(componentType);
		addComponent(pipelineConfig, cy, componentId, componentType, componentValue);
	});
}

/**
 * Generates the HTML of the dropdown menu for choosing the value of a component of a complex
 * pipeline
 */
function fillComponentValueDropdown(pipelineConfig, cy, componentId, componentType, componentValue) {
	getPossibleComponentValues(pipelineConfig, componentType, function(possibleComponentValues) {
		var dropdown = getPipelineDiv(pipelineConfig.id).find(".dropdown-component-value");
		dropdown.empty();
		$.each(possibleComponentValues, function(index, entry) {
			var option = $("<option></option>").attr("value", entry).text(entry);
			dropdown.append(option);
		});
		dropdown.val(componentValue);
		dropdown.multiselect('rebuild');
		dropdown.off("change"); // remove old event handler
		dropdown.change(function() {
			var value = $(this).val();
			setComponentValue(pipelineConfig, cy, componentId, componentType, value);
		});
	});
}

/**
 * Fill the component dependency multiselect dropdown with possible dependencies and select the
 * currently active ones
 */
function fillComponentDependenciesDropdown(pipelineConfig, cy, componentId) {
	var componentDependencies = getComponentDependencies(pipelineConfig, componentId);
	var possibleComponentDependencies = getPossibleComponentDependencies(pipelineConfig, componentId);
	var dropdown = getPipelineDiv(pipelineConfig.id).find(".dropdown-component-dependencies");
	dropdown.empty();
	$.each(possibleComponentDependencies, function(index, entry) {
		var option = $("<option></option>").attr("value", entry).text(entry);
		if (componentDependencies.indexOf(entry) > -1) {
			option.prop("selected", "selected");
		}
		dropdown.append(option);
	});
	dropdown.multiselect('rebuild');
	dropdown.off("change"); // remove old event handler
	dropdown.change(function() {
		var value = $(this).val();
		setComponentDependencies(pipelineConfig, cy, componentId, value);
	});
}

/**
 * Fill the component target multiselect dropdown with possible targets and select the
 * currently active ones
 */
function fillComponentTargetsDropdown(pipelineConfig, cy, componentId) {
	var componentTargets = getComponentTargets(pipelineConfig, componentId);
	var possibleComponentTargets = getPossibleComponentTargets(pipelineConfig, componentId);
	var dropdown = getPipelineDiv(pipelineConfig.id).find(".dropdown-component-targets");
	dropdown.empty();
	$.each(possibleComponentTargets, function(index, entry) {
		var option = $("<option></option>").attr("value", entry).text(entry);
		if (componentTargets.indexOf(entry) > -1) {
			option.prop("selected", "selected");
		}
		dropdown.append(option);
	});
	dropdown.multiselect('rebuild');
	dropdown.off("change"); // remove old event handler
	dropdown.change(function() {
		var value = $(this).val();
		setComponentTargets(pipelineConfig, cy, componentId, value);
	});
}


/**
 * Add a new component
 */
function addComponent(pipelineConfig, cy, componentId, componentType, componentValue) {
	var component = {id: componentId, value: componentValue, new: true};
	var components = pipelineConfig[keyNameComponents][componentType];
	if (components == null) {
		pipelineConfig[keyNameComponents][componentType] = [];
		components = pipelineConfig[keyNameComponents][componentType];
	}
	components.push(component);
	console.log("Added node " + componentId);
	updatePipelineGraph(cy, pipelineConfig);
}

/**
 * Update the value of a component
 */
function setComponentValue(pipelineConfig, cy, componentId, componentType, componentValue) {
	var component = pipelineConfig[keyNameComponents][componentType].find(x => x.id === componentId);
	component.value = componentValue;
	updatePipelineGraph(cy, pipelineConfig);
}

/**
 * Update the dependencies of a component
 */
function setComponentDependencies(pipelineConfig, cy, componentId, componentDependencies) {
	// remove property "new"
	var componentType = getComponentTypeById(componentId);
	delete pipelineConfig[keyNameComponents][componentType].find(x => x.id == componentId).new;
	
	// delete all existing connections
	pipelineConfig[keyNameConnections] = pipelineConfig[keyNameConnections].filter(function(obj) {
		return obj.target != componentId;
	});
	
	// delete from start components
	pipelineConfig[keyNameStartComponents] = pipelineConfig[keyNameStartComponents].filter(function(obj) {
		return obj != componentId;
	});
	
	// add all new
	$.each(componentDependencies, function(index, componentDependency) {
		if (componentDependency === componentIdInput) {
			pipelineConfig[keyNameStartComponents].push(componentId);
		} else {
			var connection = {source: componentDependency, target: componentId};
			pipelineConfig[keyNameConnections].push(connection);
		}
	});
	
	updatePipelineGraph(cy, pipelineConfig);
	updatePipelineGraphLayout(cy);
}

/**
 * Update the targets of a component
 */
function setComponentTargets(pipelineConfig, cy, componentId, componentTargets) {
	// delete all existing connections
	pipelineConfig[keyNameConnections] = pipelineConfig[keyNameConnections].filter(function(obj) {
		return obj.source != componentId;
	});
	
	// delete from end components
	pipelineConfig[keyNameEndComponents] = pipelineConfig[keyNameEndComponents].filter(function(obj) {
		return obj != componentId;
	});
	
	// add all new
	$.each(componentTargets, function(index, componentTarget) {
		if (componentTarget === componentIdOutput) {
			pipelineConfig[keyNameEndComponents].push(componentId);
		} else {
			var connection = {source: componentId, target: componentTarget};
			pipelineConfig[keyNameConnections].push(connection);
		}
	});
	
	updatePipelineGraph(cy, pipelineConfig);
	updatePipelineGraphLayout(cy);
}

/**
 * Delete pipeline component and update Cytoscape graph
 */
function deleteComponent(pipelineConfig, cy, componentId) {
	var componentType = getComponentTypeById(componentId);
	
	// delete component
	var componentList = pipelineConfig[keyNameComponents][componentType];
	pipelineConfig[keyNameComponents][componentType] = componentList.filter(function(obj) {
		return obj.id != componentId;
	});
	
	// delete edges
	var connectionList = pipelineConfig[keyNameConnections];
	pipelineConfig[keyNameConnections] = connectionList.filter(function(obj) {
		return obj.source != componentId && obj.target !== componentId;
	});
	
	// delete from start and end components list
	$.each([keyNameStartComponents, keyNameEndComponents], function(index, listName) {
		var componentsList = pipelineConfig[listName];
		pipelineConfig[listName] = componentsList.filter(function(obj) {
			return obj != componentId;
		});
	});

	console.log("Deleted node " + componentId);
	updatePipelineGraph(cy, pipelineConfig);
	hideComponentDetailsView(pipelineConfig.id);
	hideAllErrorMessages();
}


/**
 * Update the Cytoscape canvas and redraw the graph completely from global variable
 * <tt>pipelineConfig</tt>
 */
function updatePipelineGraph(cy, pipelineConfig) {
	var pipelineGraph = generatePipelineGraph(pipelineConfig);
	cy.json({ elements: pipelineGraph});
}

/**
 * Updates the layout of the Cytoscape graph
 */
function updatePipelineGraphLayout(cy) {
	cy.layout(cyLayoutConfig).run();
}

/** 
 * Generates the Cytoscape pipeline graph from the pipelineConfig
 */
function generatePipelineGraph(pipelineConfig) {
	
	var pipelineGraph = [];
	var edgeId = 1;
	
	// add start and end node
	pipelineGraph.push({data: {id: componentIdInput, type: "input", label: "Input"}});
	pipelineGraph.push({data: {id: componentIdOutput, type: "output", label: "Output"}});
	
	// read pipeline config and add nodes to the graph
	$.each(pipelineConfig[keyNameComponents], function(key, componentList) {
		$.each(componentList, function(index, component) {
			if (component.value == null) {
				var label = "<none>\n(" + component.id + ")"; // with brackets
				//var label = "<none>\n" + component.id;
			} else {
				var label = component.value + "\n(" + component.id + ")"; // with brackets
				//var label = component.value + "\n" + component.id;
			}
			var node = {data: {id: component.id, type: key, label: label}};
//			if (component.new) {
//				node.data.position = {x: 120, y: 120};
//			}
			pipelineGraph.push(node);
		});
	});
	
	// read pipeline config and add edges to the graph
	$.each(pipelineConfig[keyNameConnections], function(index, connection) {
		var edge = {data: {id: 'e' + edgeId, source: connection.source, target: connection.target}};
		pipelineGraph.push(edge);
		edgeId++;
	});
	
	// add connections to start node
	$.each(pipelineConfig[keyNameStartComponents], function(index, componentId) {
		var edge = {data : {id : 'e' + edgeId, source: componentIdInput, target: componentId}};
		pipelineGraph.push(edge);
		edgeId++;
	});
	
	// add connections to end node
	$.each(pipelineConfig[keyNameEndComponents], function(index, componentId) {
		var edge = {data : {id : 'e' + edgeId, source: componentId, target: componentIdOutput}};
		pipelineGraph.push(edge);
		edgeId++;
	});
	
	return pipelineGraph;
}

function generatePipelineConfigJson(pipelineConfig) {
	var pipelineConfig2 = {};
	// add ID and type
	//var linkerId = parseInt($(linker).attr('linker-id'));
	pipelineConfig2[keyNameId] = pipelineConfig[keyNameId];
	pipelineConfig2[keyNamePipelineType] = pipelineConfig[keyNamePipelineType];
	// add components
	$.each(Object.keys(typeNameToTypeStringMap), function(indexComponentType, componentType) {
		if (componentType in pipelineConfig[keyNameComponents]) {
			pipelineConfig2[componentType] = [];
			$.each(pipelineConfig[keyNameComponents][componentType], function(indexComponent, component) {
				var newComponent = {};
				newComponent[component[keyNameId]] = component["value"];
				pipelineConfig2[componentType].push(newComponent);
			});
		}
	});
	// add connections
	pipelineConfig2[keyNameConnections] = [];
	$.each(pipelineConfig[keyNameConnections], function(indexConnection, connection) {
		var newConnection = {};
		newConnection[connection["source"]] = connection["target"];
		pipelineConfig2[keyNameConnections].push(newConnection);
	});
	return pipelineConfig2;
}




/**
 * Returns the next free ID for a given node type
**/
function getFreeComponentId(pipelineConfig, componentType) {
	var typePrefix = typeNameToTypeIdMap[componentType];
	var components = pipelineConfig[keyNameComponents][componentType];
	if (components == null) {
		var freeIdNr = 1;
	} else {
//	var nodes = cy.$('node[id ^= "' + typePrefix + '"]');
		var lastId = 0;
		if (components.length > 0) {
			$.each(components, function(index, component) {
				//var idNr = parseInt(component.id.substring(2)); // assuming ID format XXnn, e.g. MD1, CG24, ED8
				var idNr = parseInt(component.id.substring(component.id.search(/\d/), component.id.length));
				if (idNr > lastId) {
					lastId = idNr;
				}
			});
		}
		var freeIdNr = lastId + 1;
	}
	var freeId = typePrefix + freeIdNr.toString();
	return freeId;
}

/**
 * Returns a default value for a given component type
 */
function getComponentDefault(componentType) {
//	return typeIdToDefaultValueMap[componentType];
	return null;
}

/**
 * Return Cytoscape node color for a given component type
 */
function getComponentColor(type) {
	var color = typeToColorMap[type];
	if (color == null) {
		console.log("No color defined for type '" + type + "'");
		color = typeToColorMap["default"];
	}
	return color;
}

/**
 * Get the type of an component by it's id (MD1 is type "md", SP3 is type "splitter")
 */
function getComponentTypeById(componentId) {
	return typeIdToTypeNameMap[componentId.substring(0, componentId.search(/\d/))];
}

/**
 * Returns the pipeline HTML div of a given complex pipeline
 */
function getPipelineDiv(pipelineId) {
	return $("div[linker-id='" + pipelineId + "']");
}

/**
 * Returns the details view HTML div element of a given complex pipeline
 */
function getComponentDetailsViewDiv(pipelineId) {
	return getPipelineDiv(pipelineId).find("#detailsView");
}

/**
 * Show the component details view
 */
function showComponentDetailsView(pipelineId) {
	getComponentDetailsViewDiv(pipelineId).show();
}

/**
 * Hide the component details view
 */
function hideComponentDetailsView(pipelineId) {
	getComponentDetailsViewDiv(pipelineId).hide();
}

/**
 * Show error message when the pipeline of a task is not valid
 */
function showErrorMessage(pipelineId, errorMessage) {
	if (pipelineId == -1) {
		var errorDiv = $("#global-error-message");
	} else {
		var errorDiv = getPipelineDiv(pipelineId).find(".error-message");
	}
	errorDiv.children("div").html("<strong>Error:</strong> " + errorMessage);
	errorDiv.show();
}

/**
 * Hide all error messages
 */
function hideAllErrorMessages() {
	hideGlobalErrorMessage();
	$(".error-message").hide();
}

/**
 * Hide global error message
 */
function hideGlobalErrorMessage() {
	$("#global-error-message").hide();
}

/**
 * Check if <tt>type</tt> is a linking component
 */
function isLinkingComponent(type) {
	return linkingComponentTypes.indexOf(type) > -1;
}

/**
 * Check if <tt>type</tt> is a inter-component processor
 */
function isInterComponentProcessor(type) {
	return interComponentProcessorTypes.indexOf(type) > -1;
}



function fillLinkerDropdown(linkerBox, htmlClass, taskType) {
	getLinkers(taskType, function(linkers) {
		var dropdown = $(linkerBox).find(htmlClass);
		dropdown.empty();
		$.each(linkers, function(i, linker) {
			dropdown.append($("<option></option>")
					.attr("value", linker).text(linker));
		});
		dropdown.multiselect();
	});
}









// Results


function getLastResult() {
	$.ajax({
		type : "GET",
		url: "lastresult",
		success : function(data) {
			//document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);
			//console.log(data);
			buildResultHtml(data);
		}
	});
}

function showResult() {
	getLastResult();
}

function buildResultTitleHtml(experimentTaskResult) {
	var html = $("<h5>").addClass("card-title");
	
	var annotationPipelineConfig = experimentTaskResult["annotationPipelineConfig"];
	var pipelineType = annotationPipelineConfig[keyNamePipelineType];
	var linkerId = experimentTaskResult["taskId"];

	if (pipelineType == "standard") {
		var linkerName = annotationPipelineConfig["linker"];
		html.append(linkerId + ": " + linkerName);
	} else if (pipelineType == "custom") {
		var mentionDetector = annotationPipelineConfig["mentionDetector"];
		var candidateGeneratorDisambiguator = annotationPipelineConfig["candidateGeneratorDisambiguator"];
		html.append(linkerId + ": " + mentionDetector + " (MD) + " + candidateGeneratorDisambiguator + " (CG+ED)");
	} else {
		html.append(linkerId + ": Complex Pipeline");
	}
	
	return html;
}

function buildResultHtml(data) {
	var experimentToMentionMap = {}; // contains the spanToMentionMaps for different experiments required for the tooltips
	var experimentId = 0;
	
	data.forEach(function(experimentResult) {
		var experimentHtml = $("<div>").addClass("card").addClass("col-md-8");
		var cardBody = $("<div>").addClass("card-body");
		
		var taskType = experimentResult["taskType"];
		var doc = experimentResult["document"];
		var text = doc["text"];
		var mentions = doc["mentions"];
		var spanId = 0;
		var spanToMentionMap = {}; // e.g. {0: ["url0", "url1"], 1: ["url1", "url2"], 2: ["url3"], 3: []};
		var openSpans = []; // TODO delete?

		var cardText = $("<div>").addClass("card-text");
		var annotatedTextHtml = "<p>";
		// split by each character
		$.each(text.split(""), function(index, character) {
			// check for each mention
			$.each(mentions, function(i, mention) {
				var originalMention = mention["originalMention"];
				var mentionStartPos = mention["offset"];
				var mentionEndPos = mentionStartPos + originalMention.length;
				// does the mention start here?
				if (mentionStartPos == index) {
					if (taskType == TaskType.MD) {
						mention["disambiguated"] = false;
						var mentionHtmlClass = "mention";
					} else if (taskType == TaskType.CG || taskType == TaskType.MD_CG) {
						mention["disambiguated"] = false;
						var mentionHtmlClass = "mention possible-mention";
					} else if (taskType == TaskType.ED || taskType == TaskType.CG_ED || taskType == TaskType.FULL) {
						mention["disambiguated"] = true;
						var mentionHtmlClass = "mention disambiguated-mention";
					} else {
						console.log("Invalid tasktype: " + taskType);
					}
					// use of data-bracket possibly for URL, but would be text only, as the CSS-after-selector
					// can't contain HTML, only text
					annotatedTextHtml += '<span class="' + mentionHtmlClass + '" data-bracket="" span-id="' + spanId +
							'" experiment-id="' + experimentId + '">';
					openSpans.push(spanId);
					spanToMentionMap[spanId] = mention;
					spanId += 1;
				}
				// does the mention end here?
				if (mentionEndPos == index) {
					annotatedTextHtml += '</span>';
					delete openSpans[spanId];
				}
			});
			annotatedTextHtml += character;
		});
		annotatedTextHtml += "</p>";

		experimentToMentionMap[experimentId] = spanToMentionMap;
		experimentId++;
		
		cardText.append(annotatedTextHtml);
		var cardTitle = buildResultTitleHtml(experimentResult)
		cardBody.append(cardTitle);
		cardBody.append(cardText);
		experimentHtml.append(cardBody);		
		$("#result").append(experimentHtml);
	});

	// initialize tooltips
	$(document).uitooltip({
		items: ".possible-mention, .disambiguated-mention",
		show: null, // show immediately
		hide: {
			effect: ""
		},
		// make tooltips selectable/clickable (https://stackoverflow.com/a/15014759)
		close: function(event, ui) {
			ui.tooltip.hover(
					function () {
						$(this).stop(true).fadeTo(400, 1); 
						//.fadeIn("slow"); // doesn't work because of stop()
					},
					function () {
						$(this).fadeOut("400", function(){ $(this).remove(); })
					}
			);
		},
		content: function() {
			var spanId = $(this).attr("span-id");
			var experimentId = $(this).attr("experiment-id");
			var mention = experimentToMentionMap[experimentId][spanId];
			var html = $("<div>");
			if (mention["disambiguated"]) {
				//TODO Why don't they have an assignment?
				//var url = mention["assignment"]
				var url = mention["possibleAssignments"][0]["assignment"];
				html.append("<p><a href='" + url + "'>" + url + "</p>");
			} else {
				$.each(mention["possibleAssignments"], function(index, assignment) {
					var url = assignment["assignment"];
					html.append("<p><a href='" + url + "'>" + url + "</p>");
				});
			}
			return html;
		}
	});

	$("button.json-download").on("click", function(e) {
		$.ajax({
			type : "GET",
			url: "jsonresult",
			success : function(data) {
				var win = window.open("jsonresult", '_blank');
			}
		});
	});
}



function buildStandardLinkerConfigHtml(linkerIndex) {
	var configHtml = $([
		'<div class="card-body">',
		'	<h5 class="card-title">' + linkerIndex + ': Standard Linker</h5>',
		'	<div class="card-text form-group row">',
		'		<div class="col-md-12">',
		'			<select class="dropdown-linker" name="linker">',
		'			</select>',
		'		</div>',
		'	</div>',
		'	<div class="form-group error-message" style="display: none; text-align: left;">',
		'		<div class="alert alert-danger"></div>',
		'	</div>',
		'	<div class="form-group">',
		'		<button class="btn btn-danger my-remove" type="button">Remove</button>',
		'	</div>',
		'</div>'
	].join("\n"));
	
	return configHtml;
}


function buildSimplePipelineConfigHtml(linkerIndex) {
	var configHtml = $([
		'<div class="card-body">',
		'	<h5 class="card-title">' + linkerIndex + ': Simple Pipeline</h5>',
		'	<div class="card-text form-group row">',
		'		<label class="col-md-4 control-label" for="linker-md">Mention Detection</label>',
		'		<div class="col-md-8">',
		'			<select class="dropdown-linker-md">',
		'			</select>',
		'		</div>',
		'	</div>',
		'	<div class="form-group row">',
		'		<label class="col-md-4 control-label" for="linker-cg-ed">Candidate Generation + Entity Disambiguation</label>',
		'		<div class="col-md-8">',
		'			<select class="dropdown-linker-cg-ed">',
		'			</select>',
		'		</div>',
		'	</div>',
		'	<div class="form-group error-message" style="display: none; text-align: left;">',
		'		<div class="alert alert-danger"></div>',
		'	</div>',
		'	<div class="form-group">',
		'		<button class="btn btn-danger my-remove" type="button">Remove</button>',
		'	</div>',
		'</div>'
	].join("\n"));

	return configHtml;
}


function buildComplexPipelineConfigHtml(linkerIndex) {
	var configHtml = $([
		'<div class="card-body">',
		'	<h5 class="card-title">' + linkerIndex + ': Complex Pipeline</h5>',
		'	<div class="form-group row">',
		'		<div id="graphView" class="col-8">',
		'			<div id="cy' + linkerIndex + '" class="my-cy"></div>',
		'		</div>',
		'		<div class="col-4">',
		'			<div id="detailsView" style="display: none; text-align: left">',
		'				<h5>Component</h5>',
		'				<div class="form-group">',
		'					<p>ID</p>',
		'				</div>',
		'				<div class="form-group">',
		'					<select class="dropdown-component-value"></select><br>',
		'				</div>',
		'				<div class="form-group">',
		'					<label>Sources</label>',
		'					<select class="dropdown-component-dependencies" multiple="multiple"></select><br>',
		'				</div>',
		'				<div class="form-group">',
		'					<label>Targets</label>',
		'					<select class="dropdown-component-targets" multiple="multiple"></select>',
		'				</div>',
		'				<div class="form-group" style="text-align: center">',
		'					<input type="button" class="btn btn-danger btn-delete-component" value="Delete">',
		'				</div>',
		'				<hr>',
		'			</div>',
		'			<div class="dropdown dropdown-add-component">',
		'				<button class="btn dropdown-toggle" type="button"',
		'					id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"',
		'					aria-expanded="false">Add component</button>',
		'				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>',
		'			</div>',
		'		</div>',
		'	</div>',
		'	<div class="form-group error-message" style="display: none; text-align: left;">',
		'		<div class="alert alert-danger"></div>',
		'	</div>',
		'	<div class="form-group">',
		'		<button class="btn btn-danger my-remove" type="button">Remove</button>',
		'	</div>',
		'</div>'
		].join("\n"));
	
	return configHtml;
}

