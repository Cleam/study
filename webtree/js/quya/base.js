//趣压基础数据_折线图
function quya_base_zhexian(num) {
	Highcharts
			.data({
				csv : document.getElementById('tsv').innerHTML,
				itemDelimiter : '\t',
				parsed : function(columns) {
					var brands1 = {}, brandsData1 = [], brands2 = {}, brandsData2 = [], brands3 = {}, brandsData3 = [], brands4 = {}, brandsData4 = [], brands5 = {}, brandsData5 = [], brands6 = {}, brandsData6 = [], brands7 = {}, brandsData7 = [], brands8 = {}, brandsData8 = [],  brands9= {}, brandsData9 = [], brands10 = {}, brandsData10 = [],brandsDataLast = [], footName = "";

					$.each(columns[0], function(i, name) {
						var brand;
						if (i > 0) {
							brand = name;
							// Create the main data
							for (var j = 1; j <= 10; j++) {
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

					for (var j = 1; j <= 10; j++) {
						$.each(eval("brands" + j), function(name, y) {
							eval("brandsData" + j).push({
								name : name,
								y : y
							});
						});
					}
					if (num == 1) {
						brandsDataLast = brandsData1;
						footName = "当日总安装量";
					} else if (num == 2) {
						brandsDataLast = brandsData2;
						footName = "当日安装量";
					} else if (num == 3) {
						brandsDataLast = brandsData3;
						footName = "当日服务启动量";
					} else if (num == 4) {
						brandsDataLast = brandsData4;
						footName = "当日软件启动量";
					} else if (num == 5) {
						brandsDataLast = brandsData5;
						footName = "当日安装并卸载量";
					} else if (num == 6) {
						brandsDataLast = brandsData6;
						footName = "当日安装并卸载率";
					} else if (num == 7) {
						brandsDataLast = brandsData7;
						footName = "当日总卸载量";
					} else if (num == 8) {
						brandsDataLast = brandsData8;
						footName = "7日活跃量";
					}else if (num == 9) {
						brandsDataLast = brandsData9;
						footName = "30日活跃量";
					}else if (num == 10) {
						brandsDataLast = brandsData10;
						footName = "当日有效量";
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
											enabled : true,
											formatter : function() {
												return '<b>' + this.series.name
														+ '</b><br/>: ' + this.y + '';
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
												enableMouseTracking : true
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
												lineWidth : 4,
												lineColor : '#50A7F9'
											}
										} ]
									});
				}
			});
}