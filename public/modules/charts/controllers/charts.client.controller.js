'use strict';

// Charts controller
angular.module('charts').controller('ChartsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Charts', 
	function($scope, $stateParams, $location, Authentication, Charts ) {
		$scope.authentication = Authentication;
		$scope.directives = [{type: 'bulletChart', name: 'Bullet Chart'}, {type: 'cumulativeLineChart', name: 'Cumulative Line Chart'}, {type: 'discreteBarChart', name: 'DiscreteBar Chart'}, {type: 'donutChart', name: 'Donut Chart'}, {type: 'historicalBarChart', name: 'HistoricalBar Chart'}, {type: 'lineChart', name: 'Line Chart'}, {type: 'linePlusBarChart', name: 'Line + Bar Chart'}, {type: 'linePlusBarWithFocusChart', name: 'Line + Bar with Focus Chart'}, {type: 'lineWithFisheyeChart', name: 'Line with Fisheye Chart'}, {type: 'lineWithFocusChart', name: 'Line with Focus Chart'}, {type: 'multiBarChart', name: 'MultiBar Chart'}, {type: 'multiBarHorizontalChart', name: 'MultiBar Horizontal Chart'}, {type: 'multiChart', name: 'Multi Chart'}, {type: 'parallelCoordinates" selected="selected', name: 'Parallel Coordinates'}, {type: 'pieChart', name: 'Pie Chart'}, {type: 'scatterChart', name: 'Scatter Chart'}, {type: 'scatterPlusLineChart', name: 'Scatter + Line Chart'}, {type: 'sparklinePlus', name: 'SparkLine Chart'}, {type: 'stackedAreaChart', name: 'Stacked Area Chart'}];
		$scope.directive = {name : 'Select a chart type'};

		 /* Chart options */
        $scope.options = {
		    chart: {
		        type: 'discreteBarChart',
		        transitionDuration: 500,
		        showValues: true,
		        height: 450,
		        margin : {
		            top: 20,
		            right: 20,
		            bottom: 60,
		            left: 55
		        },
		        x: function(d){ return d.x; },
		        y: function(d){ return d.y; },
		        valueFormat: function(d){
		            return d3.format(',.4f')(d);
		        },
		        xAxis: {
		            axisLabel: 'X Axis',
		            axisLabelDistance: 3000
		        },
		        yAxis: {
		            axisLabel: 'Y Axis',
		            axisLabelDistance: 30
		        }
		    },
            title: {
                enable: true,
                html: 'Title for Line Chart'
            },
            subtitle: {
                enable: true,
                html: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: true,
                html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
		};

        /* Chart data */
        /*
		$scope.data = [{
    		key: 'Cumulative Return',
    		values: [
		        { 'x' : 1 , 'y' : -29.765957771107 },
		        { 'x' : 2 , 'y' : 0 },
		        { 'x' : 3 , 'y' : 32.807804682612 },
		        { 'x' : 4 , 'y' : 196.45946739256 },
		        { 'x' : 5 , 'y' : 0.19434030906893 },
		        { 'x' : 6 , 'y' : -98.079782601442 },
		        { 'x' : 7 , 'y' : -13.925743130903 },
		        { 'x' : 8 , 'y' : -5.1387322875705 }
		    ]}
		];
		*/
		$scope.data = [
		        { 'x' : 1 , 'y' : -29.765957771107 },
		        { 'x' : 2 , 'y' : 0 },
		        { 'x' : 3 , 'y' : 32.807804682612 },
		        { 'x' : 4 , 'y' : 196.45946739256 },
		        { 'x' : 5 , 'y' : 0.19434030906893 },
		        { 'x' : 6 , 'y' : -98.079782601442 },
		        { 'x' : 7 , 'y' : -13.925743130903 },
		        { 'x' : 8 , 'y' : -5.1387322875705 }
		];



/*
		//Random Data Generator 
        
		 //$scope.data = sinAndCos();

        function sinAndCos() {
            var sin = [],sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 100; i++) {
                sin.push({label: i, value: Math.sin(i/10)});
                sin2.push({label: i, value: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                cos.push({label: i, value: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
            }

            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                },
                {
                    values: sin2,
                    key: 'Another sine wave',
                    color: '#7777ff',
                    area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

*/
		// Create new Chart
		$scope.create = function() {
			// Create new Chart object
			var chart = new Charts (this.chart);

			console.log(JSON.stringify(chart));
				
			// Redirect after save
			chart.$save(function(response) {
				$location.path('charts/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Chart
		$scope.remove = function( chart ) {
			if ( chart ) { chart.$remove();

				for (var i in $scope.charts ) {
					if ($scope.charts [i] === chart ) {
						$scope.charts.splice(i, 1);
					}
				}
			} else {
				$scope.chart.$remove(function() {
					$location.path('charts');
				});
			}
		};

		// Update existing Chart
		$scope.update = function() {
			var chart = $scope.chart ;

			chart.$update(function() {
				$location.path('charts/' + chart._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Charts
		$scope.find = function() {
			$scope.charts = Charts.query();
		};

		// Find existing Chart
		$scope.findOne = function() {
			Charts.get({chartId: $stateParams.chartId}, function(chart) {
				chart.chart.x = function(d){ return d.x; };
				chart.chart.y = function(d){ return d.y; };
				chart.chart.valueFormat =  function(d){ return d3.format(',.4f')(d);};
			
				
				var i=0;
				while($scope.directives[i].type !== chart.chart.type) { i++; }

				$scope.directive = $scope.directives[i];
				$scope.chart = chart;
				//console.log(JSON.stringify(chart));
			});
		};


		$scope.dropdown = function(directive) {
			$scope.directive = directive;
			this.chart.chart.type = directive.type;
		};
	}
]);