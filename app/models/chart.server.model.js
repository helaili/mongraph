'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Chart Schema
 */
var ChartSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill chart name',
		trim: true
	},
	connectionURL: {
		type: String,
		required: 'Please fill connection URL',
		trim: true
	},
	collectionName: {
		type: String,
		required: 'Please fill collection name',
		trim: true
	},
	query: {
		type: String,
		required: 'Please fill query to execute',
		trim: true
	},
	transitionDuration: {
		type: Number,
		default: 500
	},
	showValues: {
		type: Boolean,
		default: true
	},
    height: {
		type: Number,
		default: 450
	},
    margin : {
        top: {
			type: Number,
			default: 20
		},
        right: {
			type: Number,
			default: 20
		},
        bottom: {
			type: Number,
			default: 60
		},
        left: {
			type: Number,
			default: 55
		}
    },
	chart: {
		type: {
			type: String,
			required: 'Please select visualization component',
			trim: true
		},
		height: {
			type: Number,
			default: 450
		},
		margin : {
			top: {
				type: Number,
				default: 20
			},
		    right: {
				type: Number,
				default: 20
			},
		    bottom: {
				type: Number,
				default: 60
			},
		    left: {
				type: Number,
				default: 55
			}
		},
		showValues: {
			type: Boolean,
			default: true
		},
		transitionDuration: {
			type: Number,
			default: 500
		},
		xAxis: {
		    axisLabel: {
				type: String,
				trim: true
			}
		},
		yAxis: {
			axisLabel: {
				type: String,
				trim: true
			},
		    axisLabelDistance: {
				type: Number,
				default: 30
			}	
		}
	},
	title: {
        enable: {
			type: Boolean,
			default : true
		},
        text: {
			type: String,
			trim: true
		},
        html: {
			type: String,
			trim: true
		},
        css: {
			type: String,
			trim: true
		}
    },
	subtitle: {
        enable: {
			type: Boolean,
			default : true
		},
        text: {
			type: String,
			trim: true
		},
        html: {
			type: String,
			trim: true
		},
        css: {
			type: String,
			trim: true
		}
    },
	caption: {
        enable: {
			type: Boolean,
			default : true
		},
        text: {
			type: String,
			trim: true
		},
        html: {
			type: String,
			trim: true
		},
        css: {
			type: String,
			trim: true
		}
    },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Chart', ChartSchema);