//趣压基础数据_折线图
function quya_userdata_zhexian(num) {
	Highcharts
			.data({
				csv : document.getElementById('tsv').innerHTML,
				itemDelimiter : '\t',
				parsed : function(columns) {
					var brands1 = {}, brandsData1 = [], brands2 = {}, brandsData2 = [], brands3 = {}, brandsData3 = [], brands4 = {}, brandsData4 = [], brands5 = {}, brandsData5 = [], brands6 = {}, brandsData6 = [], brands7 = {}, brandsData7 = [], brands8 = {}, brandsData8 = [],  brandsDataLast = [], footName = "";

					$.each(columns[0], function(i, name) {
						var brand;
						if (i > 0) {
							brand = name;
							// Create the main data
							for (var j = 1; j <= 8; j++) {
								if (!eval("brands" + j)[brand]) {
									var col = columns[j][i];
									if (!col) {
										col = Number("0");
									}
									eval("brands" + j)[brand] = col;
								} else {
									var col = columns[j][i];
									if (!col) {
										col = Number("0");
									}
									eval("brands" + j)[brand] += col;
								}
							}
						}
					});

					for (var j = 1; j <= 8; j++) {
						$.each(eval("brands" + j), function(name, y) {
							eval("brandsData" + j).push({
								name : name,
								y : y
							});
						});
					}
					if (num == 1) {
						brandsDataLast = brandsData1;
						footName = "当日新安装用户量";
					} else if (num == 2) {
						brandsDataLast = brandsData2;
						footName = "当日新用户卸载量";
					} else if (num == 3) {
						brandsDataLast = brandsData3;
						footName = "当日新用户启动量";
					} else if (num == 4) {
						brandsDataLast = brandsData4;
						footName = "当日老用户启动量";
					} else if (num == 5) {
						brandsDataLast = brandsData5;
						footName = "当日老用户卸载率";
					} else if (num == 6) {
						brandsDataLast = brandsData6;
						footName = "次日活跃用户";
					} else if (num == 7) {
						brandsDataLast = brandsData7;
						footName = "7日活跃用户";
					}else if (num == 8) {
						brandsDataLast = brandsData8;
						footName = "14日活跃用户";
					}
					// Create the chart
					$('#container')
							.highcharts(
									{
										chart : {
											type : 'line'
										},
										credits : {
											enabled : false
										},
										title : {
											text : ''
										},
										xAxis : {
											categories : brands1
										// [brandsData1[0].name]
										},
										yAxis : {
											// 控制从y轴从零开始
											minPadding : 0,
											startOnTick : false,
											title : {
												text : ''
											}
										},
										tooltip : {
											enabled : false,
											formatter : function() {
												return '<b>' + this.series.name
														+ '</b><br/>' + this.x
														+ ': ' + this.y + '';
											}
										},
										plotOptions : {
											line : {
												dataLabels : {
													enabled : true,
													formatter : function() {
														return '<font style="font-size:10px;">'
																+ this.y
																+ '</font>';
													}
												},
												enableMouseTracking : false
											}
										},
										series : [ {
											name : footName,
											data : brandsDataLast,
											color : '#50A7F9',
											lineWidth : 4,
											marker : {
												radius : 4,
												fillColor : 'white',
												lineWidth : 3,
												lineColor : '#50A7F9'
											}
										} ]
									});
				}
			});
}

//趣压基础数据_折线图
function qyadetin(num) {
	Highcharts
			.data({
				csv : document.getElementById('tsv').innerHTML,
				itemDelimiter : '\t',
				parsed : function(columns) {
					var brands1 = {}, brandsData1 = [], brands2 = {}, brandsData2 = [], brands3 = {}, brandsData3 = [], brands4 = {}, brandsData4 = [], brands5 = {}, brandsData5 = [], brands6 = {}, brandsData6 = [], brands7 = {}, brandsData7 = [], brands8 = {}, brandsData8 = [],  brandsDataLast = [], footName = "";

					$.each(columns[0], function(i, name) {
						var brand;
						if (i > 0) {
							brand = name;
							// Create the main data
							for (var j = 1; j <= 8; j++) {
								if (!eval("brands" + j)[brand]) {
									var col = columns[j][i];
									if (!col) {
										col = Number("0");
									}
									eval("brands" + j)[brand] = col;
								} else {
									var col = columns[j][i];
									if (!col) {
										col = Number("0");
									}
									eval("brands" + j)[brand] += col;
								}
							}
						}
					});

					for (var j = 1; j <= 8; j++) {
						$.each(eval("brands" + j), function(name, y) {
							eval("brandsData" + j).push({
								name : name,
								y : y
							});
						});
					}
					if (num == 1) {
						brandsDataLast = brandsData1;
						footName = "当日启动快压量";
					} else if (num == 2) {
						brandsDataLast = brandsData2;
						footName = "当日安装并启动量";
					} else if (num == 3) {
						brandsDataLast = brandsData3;
						footName = "当日安装量";
					} else if (num == 4) {
						brandsDataLast = brandsData4;
						footName = "次日启动快压量";
					} else if (num == 5) {
						brandsDataLast = brandsData5;
						footName = "7日启动快压量";
					} else if (num == 6) {
						brandsDataLast = brandsData6;
						footName = "14日启动快压量";
					} else if (num == 7) {
						brandsDataLast = brandsData7;
						footName = "30日启动快压量";
					}else if (num == 8) {
						brandsDataLast = brandsData8;
						footName = "7日后首次启动用户总量";
					}
					// Create the chart
					$('#container01')
							.highcharts(
									{
										chart : {
											type : 'line'
										},
										credits : {
											enabled : false
										},
										title : {
											text : ''
										},
										xAxis : {
											categories : brands1
										// [brandsData1[0].name]
										},
										yAxis : {
											// 控制从y轴从零开始
											minPadding : 0,
											startOnTick : false,
											title : {
												text : ''
											}
										},
										tooltip : {
											enabled : false,
											formatter : function() {
												return '<b>' + this.series.name
														+ '</b><br/>' + this.x
														+ ': ' + this.y + '';
											}
										},
										plotOptions : {
											line : {
												dataLabels : {
													enabled : true,
													formatter : function() {
														return '<font style="font-size:10px;">'
																+ this.y
																+ '</font>';
													}
												},
												enableMouseTracking : false
											}
										},
										series : [ {
											name : footName,
											data : brandsDataLast,
											color : '#50A7F9',
											lineWidth : 4,
											marker : {
												radius : 4,
												fillColor : 'white',
												lineWidth : 3,
												lineColor : '#50A7F9'
											}
										} ]
									});
				}
			});
}