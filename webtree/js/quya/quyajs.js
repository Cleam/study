	var today = new Date();
	var yesterday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24; //前一天
	var yesterday = new Date();
	yesterday.setTime(yesterday_milliseconds);
	var year1 = yesterday.getFullYear();
	var month1 = yesterday.getMonth() + 1;
	var day1 = yesterday.getDate();
	if (month1 < 10) {
		month1 = "0" + month1;
	}
	if (day1 < 10) {
		day1 = "0" + day1;
	}
	var time1 = year1 + "" + month1 + "" + day1;
	
	
	var today_start = new Date();
	var yesterday_milliseconds_start = today_start.getTime() - 10000 * 60 * 60 * 24; //前一天
	var yesterday_start = new Date();
	yesterday_start.setTime(yesterday_milliseconds_start);
	var year1_start = yesterday_start.getFullYear();
	var month1_start = yesterday_start.getMonth() + 1;
	var day1_start = yesterday_start.getDate();
	if (month1_start < 10) {
		month1_start = "0" + month1_start;
	}
	if (day1_start < 10) {
		day1_start = "0" + day1_start;
	}
	var time0 = year1_start + "" + month1_start + "" + day1_start;

	

	
	function quyabase(){
		location.href ="quyabase/baselist?orderby=dt"+"&startTime="+time0+"&endTime="+time1+"&descid=desc3&flag=0&timestatus=";
	}
	function quyauser(){
		location.href ="quyauser/userlist?orderby=dt"+"&startTime="+time0+"&endTime="+time1+"&descid=desc3&flag=0&timestatus=";
	}
	function quyaqid(){
		location.href ="quyaqid/qidlist?orderby=active"+"&startTime="+time1+"&descid=desc5&qid=-1zy";
	}
	
	