$(function() {
	
	/*************  主菜单  start     ****************************/	
	//输入法
	$("#srfdata").click(function() {
		var flag = $("#srfdataol").hasClass('onChoos');
		if (flag) {
			$("#srfdataol").removeClass('onChoos');
			$(this).removeClass('hover');
		} else {
			$("#srfdataol").addClass('onChoos');
			$(this).addClass('hover');
		}
	});
	
	//输入法渠道数据
	$("#qddata").click(function() {
		var flag = $("#qddataol").hasClass('onChoos');
		if (flag) {
			$("#qddataol").removeClass('onChoos');
		} else {
			$("#qddataol").addClass('onChoos');
		}
	});
	
	//迷你页
	$("#minidata").click(function() {
		var flag = $("#minidataol").hasClass('onChoos');
		if (flag) {
			$("#minidataol").removeClass('onChoos');
		} else {
			$("#minidataol").addClass('onChoos');
		}
	});
	
	//看图王
	$("#kantudata").click(function() {
		var flag = $("#kantudataol").hasClass('onChoos');
		if (flag) {
			$("#kantudataol").removeClass('onChoos');
		} else {
			$("#kantudataol").addClass('onChoos');
		}
	});
	
	//趣压
	$("#quyadata").click(function() {
		var flag = $("#quyadataol").hasClass('onChoos');
		if (flag) {
			$("#quyadataol").removeClass('onChoos');
		} else {
			$("#quyadataol").addClass('onChoos');
		}
	});
	
	//火绒
	$("#huorongdata").click(function() {
		var flag = $("#huorongdataol").hasClass('onChoos');
		if (flag) {
			$("#huorongdataol").removeClass('onChoos');
		} else {
			$("#huorongdataol").addClass('onChoos');
		}
	});
	
	//日历
	$("#rilidata").click(function() {
		var flag = $("#rilidataol").hasClass('onChoos');
		if (flag) {
			$("#rilidataol").removeClass('onChoos');
		} else {
			$("#rilidataol").addClass('onChoos');
		}
	});
	
	//东方头条
	$("#toutiaodata").click(function() {
		var flag = $("#toutiaodataol").hasClass('onChoos');
		if (flag) {
			$("#toutiaodataol").removeClass('onChoos');
		} else {
			$("#toutiaodataol").addClass('onChoos');
		}
	});
	
	
	//东方头条PC端
	$("#toutiaopc").click(function() {
		var flag = $("#toutiaopcol").hasClass('onChoos');
		if (flag) {
			$("#toutiaopcol").removeClass('onChoos');
		} else {
			$("#toutiaopcol").addClass('onChoos');
		}
	});
	
	//东方头条特色站 
	$("#pctese").click(function() {
		var flag = $("#pcarmyol").hasClass('onChoos');
		if (flag) {
			$("#pcarmyol").removeClass('onChoos');
		} else {
			$("#pcarmyol").addClass('onChoos');
		}
	});
	
	//苹果助手
	$("#pingguozhushou").click(function() {
		var flag = $("#pingguodataol").hasClass('onChoos');
		if (flag) {
			$("#pingguodataol").removeClass('onChoos');
		} else {
			$("#pingguodataol").addClass('onChoos');
		}
	});
	
	//上海嵩恒
	$("#upload").click(function(){
		var flag=$("#uploaddataol").hasClass('onChoos');
		if(flag){
			$("#uploaddataol").removeClass('onChoos');
		}else{
			$("#uploaddataol").addClass('onChoos');
		}
	});
	
	
	//m021统计
	$("#myselfadincome").click(function() {
		var flag = $("#myselfadol").hasClass('onChoos');
		if (flag) {
			$("#myselfadol").removeClass('onChoos');
		} else {
			$("#myselfadol").addClass('onChoos');
		}
	});
	
	
	//爬虫监控
	$("#crawler").click(function() {
		var flag = $("#crawlerol").hasClass('onChoos');
		if (flag) {
			$("#crawlerol").removeClass('onChoos');
		} else {
			$("#crawlerol").addClass('onChoos');
		}
	});
	//广告统计
	$("#adpt").click(function() {
		var flag = $("#adptol").hasClass('onChoos');
		if (flag) {
			$("#adptol").removeClass('onChoos');
		} else {
			$("#adptol").addClass('onChoos');
		}
	});
	 
/*************  主菜单  end     ****************************/	

	
	//输入法数据 --基础统计数据
	$("#basicdata_li").click(function() {
		removeclass();
		$("#basicdata").addClass('hover');
		$("#iframepage").attr('src','data/datalist');
	});
	//输入法数据-----版本统计数据
	$("#softverdata_li").click(function() {
		removeclass();
		$("#softverdata").addClass('hover');
		$("#iframepage").attr('src','data/dataverlist');
	});
	//输入法数据-----输入法竞品数据
	$("#srfjinpin_li").click(function() {
		removeclass();
		$("#srfjinpin").addClass('hover');
		$("#iframepage").attr('src','loading/loadin?redirect=imelist/detail');
	});
	//输入法数据-----软件竞品数据
	$("#rjjinpin_li").click(function() {
		removeclass();
		$("#rjjinpin").addClass('hover');
		$("#iframepage").attr('src','jingpin/jp');
	});
	//输入法数据-----逍遥笔外部接口
	$("#writeonline_li").click(function() {
		removeclass();
		$("#writeonline").addClass('hover');
		$("#iframepage").attr('src','write/actuser');
	});
	//输入法数据-----捆绑数据
	$("#binddata_li").click(function(){
		removeclass();
		$("#binddata").addClass('hover');
		$("#iframepage").attr('src','shurubinddata/binddata');
		
	});
	//输入法数据-----捆绑数据展示位
	$("#showlocation_li").click(function(){
		removeclass();
		$("#showlocation").addClass('hover');
		$("#iframepage").attr('src','shurushowlocation/showlocation');
		
	});
	 //输入法数据-----当日捆绑实时数据
	$("#currentdaybinddata_li").click(function(){
		removeclass();
		$("#currentdaybinddata").addClass('hover');
		$("#iframepage").attr('src','shurubinddata/currentdaybinddata');
		
	});
	
	//输入法---------默认浏览器数据
	$("#browser_li").click(function(){
		removeclass();
		$("#browser").addClass('hover');
		$("#iframepage").attr('src','browserdata/browser');
		
	});
	
	
	
	//输入法渠道数据------输入法渠道质量分析
	$("#srfqd_quality_li").click(function() {
		removeclass();
		$("#srfqd_quality").addClass('hover');
		$("#iframepage").attr('src','loading/loadin?redirect=online_qu/quality');
	});
	//输入法渠道数据------输入法所有渠道数据
	$("#srfqd_all_li").click(function() {
		removeclass();
		$("#srfqd_all").addClass('hover');
		$("#iframepage").attr('src','online/onlinelist');
	});
	//输入法渠道数据------输入法李鑫渠道数据
	$("#srfqd_lx_li").click(function() {
		removeclass();
		$("#srfqd_lx").addClass('hover');
		$("#iframepage").attr('src','online/onlinelist_lixin');
	});
	//输入法渠道数据------输入法7654渠道数据
	$("#srfqd_7654_li").click(function() {
		removeclass();
		$("#srfqd_7654").addClass('hover');
		$("#iframepage").attr('src','online/onlinelist_7654');
	});
	//输入法渠道数据------软件竞品渠道数据
	$("#softjp_li").click(function() {
		removeclass();
		$("#softjp").addClass('hover');
		$("#iframepage").attr('src','loading/loadin?redirect=jingpin/jpqd');
	});
	//输入法渠道数据------当日渠道版本数据
	$("#srfdaydata_li").click(function() {
		removeclass();
		$("#srfdaydata").addClass('hover');
		$("#iframepage").attr('src','online/onlinedaydataqd');
	});
	
	
	
	//迷你页统计----基础数据
	$("#minidata_base_li").click(function() {
		removeclass();
		$("#minidata_base").addClass('hover');
		$("#iframepage").attr('src','minibase/base');
	});
	//迷你页统计----栏位点击
	$("#minidata_lanwei_li").click(function() {
		removeclass();
		$("#minidata_lanwei").addClass('hover');
		$("#iframepage").attr('src','minititle/titleclick');
	});
	//迷你页统计----具体位置点击数据
	$("#minidata_pos_li").click(function() {
		removeclass();
		$("#minidata_pos").addClass('hover');
		$("#iframepage").attr('src','minipos/pos');
	});
	//迷你页统计-----URL点击排序
	$("#minidata_url_li").click(function() {
		removeclass();
		$("#minidata_url").addClass('hover');
		$("#iframepage").attr('src','minirank/rank');
	});
	//迷你页统计 -----迷你页数据实时监控
	$("#minidata_map_li").click(function() {
		removeclass();
		$("#minidata_map").addClass('hover');
		$("#iframepage").attr('src','minimap/map');
	});
	
	
	
	
	//看图王---基础统计数据
	$("#kantu_base_li").click(function() {
		removeclass();
		$("#kantu_base").addClass('hover');
		$("#iframepage").attr('src','kantu/base');
	});
	//看图王-----看图所有渠道数据
	$("#ktqd_li").click(function() {
		removeclass();
		$("#ktqd").addClass('hover');
		$("#iframepage").attr('src','kantu/detail');
	});
	
	
	
	
	//趣压---基础数据
	$("#qybase_li").click(function() {
		removeclass();
		$("#qybase").addClass('hover');
		$("#iframepage").attr('src','quyabase/baselist');
	});
	$("#qyuser_li").click(function() {
		removeclass();
		$("#qyuser").addClass('hover');
		$("#iframepage").attr('src','quyauser/userlist');
	});
	//快压-----快压所有渠道数据
	$("#qyqid_li").click(function() {
		removeclass();
		$("#qyqid").addClass('hover');
		$("#iframepage").attr('src','quyaqid/qidlist');
	});
	//快压-----快压渠道质量数据
	$("#qyactive_li").click(function() {
		removeclass();
		$("#qyactive").addClass('hover');
		$("#iframepage").attr('src','quyaqid/activelist');
	});
	
	//快压------整体数据
	$("#kybase_li").click(function(){
		removeclass();
		$("#kybase").addClass('hover');
		$("#iframepage").attr('src','kuaiyabase/baselist');
	});
	//快压-------新用户数据
	$("#kynewuser_li").click(function(){
		removeclass();
		$("#kynewuser").addClass('hover');
		$("#iframepage").attr('src','kuaiyanewuser/newuserdata');
		
	});
	//快压-----免费渠道数据
	$("#kyfreechannels_li").click(function(){
		removeclass();
		$("#kyfreechannels").addClass('hover');
		$("#iframepage").attr('src','kuaiyafreechannel/freechanneldata');
	});
	//快压------付费渠道数据
	$("#kypremiumuser_li").click(function(){
		removeclass();
		$("#kypremiumuser").addClass('hover');
		$("#iframepage").attr('src','kuaiyapremiumuser/premiumuserdata');
	});
	//快压-----版本数据
	$("#kyversiondata_li").click(function(){
		removeclass();
		$("#kyversiondata").addClass('hover');
		$("#iframepage").attr('src','kuaiyaversiondata/versiondata');
	});
	//快压----捆绑数据
	$("#kybinddata_li").click(function(){
		removeclass();
		$("#kybinddata").addClass('hover');
		$("#iframepage").attr('src','kuaiyabinddata/binddata');
	});
	//快压-----用户点击数据
	$("#kyclickdata_li").click(function(){
		removeclass();
		$("#kyclickdata").addClass('hover');
		$("#iframepage").attr('src','kuaiyaclickdata/clickdata');
	});
	//快压----捆绑数据展示位
	$("#kyshowlocation_li").click(function(){
		removeclass();
		$("#kyshowlocation").addClass('hover');
		$("#iframepage").attr('src','kuaiyashowlocation/showlocation');
	});
	//快压----MD5数据
	$("#kymd5code_li").click(function(){
		removeclass();
		$("#kymd5code").addClass('hover');
		$("#iframepage").attr('src','kuaiyamd5code/getmd5code');
	});
	//快压----大渠道数据
	$("#kybigchannel_li").click(function(){
		removeclass();
		$("#kybigchannel").addClass('hover');
		$("#iframepage").attr('src','kuaiyachannel/bigchannel');
	});
	//快压----换量渠道数据
	$("#kyexchange_li").click(function(){
		removeclass();
		$("#kyexchange").addClass('hover');
		$("#iframepage").attr('src','kuaiyaexchange/exchangedata');
		
	});
	//快压----竞品数据
	$("#kyjp_li").click(function(){
		removeclass();
		$("#kyjp").addClass('hover');
		$("#iframepage").attr('src','kuaiyajingpin/kyjp');
	});
	//快压----快压用户卸载数据
	$("#kyuninstalldata_li").click(function(){
		removeclass();
		$("#kyuninstalldata").addClass('hover');
		$("#iframepage").attr('src','kuaiyauninstalldata/uninstalldata');
	});
	//快压----快压占比分析数据
	$("#kyurlratedata_li").click(function(){
		removeclass();
		$("#kyurlratedata").addClass('hover');
		$("#iframepage").attr('src','kuaiyaurlratedata/urlratedata');
	});
	//快压----用户分布数据
	$("#kyuserfb_li").click(function(){
		removeclass();
		$("#kyuserfb").addClass('hover');
		$("#iframepage").attr('src','kuaiyabase/userfbdata');
	});
	
	
	
	
	
	//火绒-----软件重合度
	$("#huorongbase_li").click(function() {
		removeclass();
		$("#huorongbase").addClass('hover');
		$("#iframepage").attr('src','huorong/base');
	});
	
	
	
	
	//日历----基础统计数据
	$("#rili_base_li").click(function() {
		removeclass();
		$("#rili_base").addClass('hover');
		$("#iframepage").attr('src','rili/base');
	});
	//日历---日历所有渠道数据
	$("#riliqd_li").click(function() {
		removeclass();
		$("#riliqd").addClass('hover');
		$("#iframepage").attr('src','rili/detail');
	});
	
	//日历----竞品数据
	$("#rili_softjp_li").click(function() {
		removeclass();
		$("#rili_softjp").addClass('hover');
		$("#iframepage").attr('src','rilisoftjp/softjp');
	});
	//日历----竞品渠道数据
	$("#rili_jpqd_li").click(function() {
		removeclass();
		$("#rili_jpqd").addClass('hover');
		$("#iframepage").attr('src','rilisoftjp/jpqd');
	});
	
	
	
	
	
	//东方头条 ---H5实时统计数据
	$("#toutiao_base_li").click(function() {
		removeclass();
		$("#toutiao_base").addClass('hover');
		$("#iframepage").attr('src','wapdata/datalist');
	});
	//东方头条 ---H5每日数据详情
	$("#toutiao_day_li").click(function() {
		removeclass();
		$("#toutiao_day").addClass('hover');
		$("#iframepage").attr('src','wapdata/wapday');
	});
	//东方头条 ---H5每日数据统计 
	$("#toutiao_perday_li").click(function() {
		removeclass();
		$("#toutiao_perday").addClass('hover');
		$("#iframepage").attr('src','wapdata/wapday2');
	});
	//东方头条 ---H5每日渠道数据
	$("#toutiao_det_li").click(function(){
		removeclass();
		$("#toutiao_det").addClass('hover');
		$("#iframepage").attr('src','wapdata/detail');
		
	});
	//东方头条 ---H5终端数据
	$("#dfttzd_li").click(function(){
		removeclass();
		$("#dfttzd").addClass('hover');
		$("#iframepage").attr('src','dfttzz/zdzlqd');
	});
	//东方头条 ---H5渠道推荐数据
	$("#qdrecommend_li").click(function(){
		removeclass();
		$("#qdrecommend").addClass('hover');
		$("#iframepage").attr('src','waprecommend/recommenddatagk');
	});
	//东方头条 ---H5每日信息流统计
	$("#wapstreamdata_li").click(function(){
		removeclass();
		$("#wapstreamdata").addClass('hover');
		$("#iframepage").attr('src','wapstreamdata/streamdata');
	});
	//东方头条 ---H5每日新信息流统计
	$("#wapnewstreamdata_li").click(function(){
		removeclass();
		$("#wapnewstreamdata").addClass('hover');
		$("#iframepage").attr('src','wapnewstreamdata/newstreamdata');
	});
	//东方头条 ---H5今日渠道数据
	$("#qdrealtimedata_li").click(function(){
		removeclass();
		$("#qdrealtimedata").addClass('hover');
		$("#iframepage").attr('src','wapdata/qdrealtimedata');
	});
	//东方头条 ---H5内页APP推广统计
	$("#h5apptg_li").click(function(){
		removeclass();
		$("#h5apptg").addClass('hover');
		$("#iframepage").attr('src','h5apptg/h5apptgzt');
	});
	//东方头条 ---App分享量数据
	$("#newssharecount_li").click(function(){
		removeclass();
		$("#newssharecount").addClass('hover');
		$("#iframepage").attr('src','newsshare/newcount');
	});
	//东方头条 ---App阅读量数据
	$("#newsshareread_li").click(function(){
		removeclass();
		$("#newsshareread").addClass('hover');
		//$("#iframepage").attr('src','newsshare/readcount');
		$("#iframepage").attr('src','newsshare/appnewssharead');
	});
	//东方头条----App基础数据
	$("#appbasedata_li").click(function(){
		removeclass();
		$("#appbasedata").addClass('hover');
		$("#iframepage").attr('src','appbasedata/appdata');
	});
	//东方头条----App分享和阅读数据
	$("#shareandread_li").click(function(){
		removeclass();
		$("#shareandread").addClass('hover');
		$("#iframepage").attr('src','shareandread/showshareandread');
	});
	//东方头条----App账号分享阅读
	$("#accountshareandread_li").click(function(){
		removeclass();
		$("#accountshareandread").addClass('hover');
		$("#iframepage").attr('src','shareandread/accountshowshareandread');
	});
	//东方头条----App每日活跃数据
	$("#apprest_li").click(function(){
		removeclass();
		$("#apprest").addClass('hover');
		$("#iframepage").attr('src','appbasedata/apprestdata');
	});
	//东方头条----App每日渠道版本统计
	$("#appdayqd_li").click(function(){
		removeclass();
		$("#appdayqd").addClass('hover');
		$("#iframepage").attr('src','appbasedata/appdayqd');
	});
	//东方头头---App积分监控统计
	$("#appscore_li").click(function(){
		removeclass();
		$("#appscore").addClass('hover');
		$("#iframepage").attr('src','appscoredata/scoredata');
	});
	//东方头头----App精准推送数据
	$("#apppush_li").click(function(){
		removeclass();
		$("#apppush").addClass('hover');
		$("#iframepage").attr('src','apppushdata/pushdata');
	});
	//东方头条---App按钮统计
	$("#appbutton_li").click(function(){
		removeclass();
		$("#appbutton").addClass('hover');
		$("#iframepage").attr('src','appbuttondata/pushall');
	});
	//东方头条---视频每日数据统计
	$("#videodata_li").click(function(){
		removeclass();
		$("#videodata").addClass('hover');
		$("#iframepage").attr('src','appbasedata/videoday');
	});
	//东方头条---视频每日渠道统计
	$("#videoqid_li").click(function(){
		removeclass();
		$("#videoqid").addClass('hover');
		$("#iframepage").attr('src','appbasedata/videodayqid');
	});
	//东方头条---新闻审核监控
	$("#newscheck_li").click(function(){
		removeclass();
		$("#newscheck").addClass('hover');
		$("#iframepage").attr('src','newscheck/newscheck');
	});
	//东方头条---视频实时热点100
	$("#videotop_li").click(function(){
		removeclass();
		$("#videotop").addClass('hover');
		$("#iframepage").attr('src','realtime/video');
	});
	//东方头条---H5渠道地域分布
	$("#waparea_li").click(function(){
		removeclass();
		$("#waparea").addClass('hover');
		$("#iframepage").attr('src','waparea/base');
	});
	//东方头条---安卓机型分布
	$("#androidfb_li").click(function(){
		removeclass();
		$("#androidfb").addClass('hover');
		$("#iframepage").attr('src','appbasedata/brand');
	});
	
	
	
	
	//东方头条PC端-----PC每日数据详情
	$("#pcdaydet_li").click(function(){
		removeclass();
		$("#pcdaydet").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdaydet');
	});
	//东方头条PC端-----PC每日实时数据
	$("#pcdaybasic_li").click(function(){
		removeclass();
		$("#pcdaybasic").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdaybasic');
	});
	//东方头条PC端-----PC每日数据统计
	$("#pcdaygather_li").click(function(){
		removeclass();
		$("#pcdaygather").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdaygather');
	});
	//东方头条PC端-----PC每日数据统计
	$("#pcdayqd_li").click(function(){
		removeclass();
		$("#pcdayqd").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdayqd');
	});
	//东方头条PC端-----PC信息流统计
	$("#pcstreamdata_li").click(function(){
		removeclass();
		$("#pcstreamdata").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcstreampvdata');
	});
	//东方头条PC端-----PC终端数据
	$("#pcclientdata_li").click(function(){
		removeclass();
		$("#pcclientdata").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcclientdata');
	});
	//东方头条PC端-----PC今日渠道数据
	$("#pcqlrealtimedata_li").click(function(){
		removeclass();
		$("#pcqlrealtimedata").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcqdrealtimedata');
	});
	//东方头条PC端-----PC渠道地域数据
	$("#pcareadata_li").click(function(){
		removeclass();
		$("#pcareadata").addClass('hover');
		$("#iframepage").attr('src','pcarea/base');
	});
	
	
	
	//东方头条特色站----军事每日实时数据
	$("#pcarmydaybasic_li").click(function(){
		removeclass();
		$("#pcarmydaybasic").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydaybasic');
	});
	//东方头条特色站----军事每日数据详情
	$("#pcarmydaydet_li").click(function(){
		removeclass();
		$("#pcarmydaydet").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydaydet');
	});
	//东方头条特色站----军事每日数据统计
	$("#pcarmydaygather_li").click(function(){
		removeclass();
		$("#pcarmydaygather").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydaygather');
	});
	//东方头条特色站----军事每日数据统计
	$("#pcarmydayqd_li").click(function(){
		removeclass();
		$("#pcarmydayqd").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydayqd');
	});
	//东方头条特色站----军事终端数据
	$("#pcarmyclientdata_li").click(function(){
		removeclass();
		$("#pcarmyclientdata").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmyclientdata');
	});
	//东方头条特色站----猎奇每日实时数据
	$("#pclieqidaybasic_li").click(function(){
		removeclass();
		$("#pclieqidaybasic").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidaybasic');
	});
	//东方头条特色站----猎奇每日数据详情
	$("#pclieqidaydet_li").click(function(){
		removeclass();
		$("#pclieqidaydet").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidaydet');
	});
	//东方头条特色站----猎奇每日数据统计
	$("#pclieqidaygather_li").click(function(){
		removeclass();
		$("#pclieqidaygather").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidaygather');
	});
	//东方头条特色站----猎奇每日渠道统计
	$("#pclieqidayqd_li").click(function(){
		removeclass();
		$("#pclieqidayqd").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidayqd');
	});
	//东方头条特色站----猎奇终端数据
	$("#pclieqiclientdata_li").click(function(){
		removeclass();
		$("#pclieqiclientdata").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqiclientdata');
	});
	//东方头条特色站----北青网每日数据详情
	$("#beiqingdata_li").click(function(){
		removeclass();
		$("#beiqingdata").addClass('hover');
		$("#iframepage").attr('src','pcbeiqing/dailydata');
	});
	

	
	
	//苹果助手----基础数据统计
	$("#pingguo_base_li").click(function(){
		removeclass();
		$("#pingguo_base").addClass('hover');
		$("#iframepage").attr('src','pingguo/base');
	});
	//苹果助手----苹果所有渠道数据
	$("#pingguoqd_li").click(function(){
		removeclass();
		$("#pingguoqd").addClass('hover');
		$("#iframepage").attr('src','pingguo/detail');
	});
	//苹果助手--渠道汇总数据
	$("#pgqdhuizong_li").click(function(){
		removeclass();
		$("#pgqdhuizong").addClass('hover');
		$("#iframepage").attr('src','pingguo/qdhuizongnew');
	});
	//苹果助手--App应用下载统计
	$("#pgqdownloadlist_li").click(function(){
		removeclass();
		$("#pgqdownloadlist").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgqdownloadlist');
	});
	//苹果助手--App应用下载量排行
	$("#pgqdownloadtop_li").click(function(){
		removeclass();
		$("#pgqdownloadtop").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgqdownloadtop');
		
	});
	//苹果助手--H5用户留存率
	$("#pgqdtoday_li").click(function(){
		removeclass();
		$("#pgqdtoday").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgqdtoday');
		
	});
	//苹果助手--H5基础数据统计
	$("#baseH5_li").click(function(){
		removeclass();
		$("#baseh5").addClass('hover');
		$("#iframepage").attr('src','pingguo/baseh5');
		
	});
	//苹果助手--其他H5统计
	$("#pgother_li").click(function(){
		removeclass();
		$("#pgother").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgother');
		
	});
	
	
	
	
	//上海嵩恒------西游网盟数据
	$("#csvupload_li").click(function(){
		removeclass();
		$("#csvupload").addClass('hover');
		$("#iframepage").attr('src','uploadfile/xiyou_push_month');
		
	});
	//上海嵩恒------H5收入统计
	$("#wapincomedata_li").click(function(){
		removeclass();
		$("#wapincomedata").addClass('hover');
		$("#iframepage").attr('src','income/wapincomedata');
	});
	//上海嵩恒------PC收入统计
	$("#pcincomedata_li").click(function(){
		removeclass();
		$("#pcincomedata").addClass('hover');
		$("#iframepage").attr('src','income/pcincomedata');
	});
	//上海嵩恒------H5广告展示率统计
	$("#h5adshow_li").click(function(){
		removeclass();
		$("#h5adshow").addClass('hover');
		$("#iframepage").attr('src','ad/h5adshow');
	});
	
	
	
	
	//m021统计----m021渠道收入统计
	$("#wapincomem021data_li").click(function(){
		removeclass();
		$("#wapincomem021data").addClass('hover');
		$("#iframepage").attr('src','income/wapincomem021data');
	});
	//m021统计----wps 导航统计
	$("#wpsdhdata_li").click(function(){
		removeclass();
		$("#wpsdhdata").addClass('hover');
		$("#iframepage").attr('src','wpsm/wpsdh');
	});
	//m021统计----m021导航统计
	$("#m021dhdata_li").click(function(){
		removeclass();
		$("#m021dhdata").addClass('hover');
		$("#iframepage").attr('src','wpsm/m021dh');
	});
	
	
	
	//爬虫监控 ----爬虫监控统计
	$("#crawlerdata_li").click(function(){
		removeclass();
		$("#crawlerdata").addClass('hover');
		$("#iframepage").attr('src','crawlerdata/base');
	});
	
	//广告平台 ----广告平台统计
	$("#adptcount_li").click(function(){
		removeclass();
		$("#adptcount").addClass('hover');
		$("#iframepage").attr('src','adpt/todaydata');
	});
	
	

});


function removeclass(){
	//输入法数据
	$("#srfdataol").removeClass('onChoos');
	//输入法渠道数据
	$("#qddataol").removeClass('onChoos');
	//迷你页统计
	$("#minidataol").removeClass('onChoos');
	//看图王
	$("#kantudataol").removeClass('onChoos');
	//快压
	$("#quyadataol").removeClass('onChoos');
	//火绒
	$("#huorongdataol").removeClass('onChoos');
	//日历
	$("#rilidataol").removeClass('onChoos');
	//东方头条
	$("#toutiaodataol").removeClass('onChoos');
	//苹果助手
	$("#pingguodataol").removeClass('onChoos');
	//上海嵩恒
	$("#uploaddataol").removeClass('onChoos');
	//头条PC端
	$("#toutiaopcol").removeClass('onChoos');
	//头条特色站
	$("#pcarmyol").removeClass('onChoos');
	//爬虫监控
	$("#crawlerol").removeClass('onChoos');
	//m021统计
	$("#myselfadol").removeClass('onChoos');
	//广告平台
	$("#adptol").removeClass('onChoos');
	
	
	$("#basicdata").removeClass('hover');
	$("#softverdata").removeClass('hover');
	$("#srfjinpin").removeClass('hover');
	$("#rjjinpin").removeClass('hover');
	$("#writeonline").removeClass('hover');
	$("#srfqd_quality").removeClass('hover');
	$("#srfqd_all").removeClass('hover');
	$("#srfqd_lx").removeClass('hover');
	$("#srfqd_7654").removeClass('hover');
	$("#softjp").removeClass('hover');
	$("#binddata").removeClass('hover');
	$("#showlocation").removeClass('hover');
	$("#currentdaybinddata").removeClass('hover');
	$("#srfdaydata").removeClass('hover');
	$("#browser").removeClass('hover');
	
	$("#ktqd").removeClass('hover');
	$("#riliqd").removeClass('hover');
	$("#minidata_base").removeClass('hover');
	$("#minidata_lanwei").removeClass('hover');
	$("#minidata_pos").removeClass('hover');
	$("#minidata_url").removeClass('hover');
	$("#minidata_map").removeClass('hover');
	$("#kantu_base").removeClass('hover');
	$("#qybase").removeClass('hover');
	$("#qyuser").removeClass('hover');
	$("#qyqid").removeClass('hover');
	$("#qyactive").removeClass('hover');
	$("#kybase").removeClass('hover');
	$("#kynewuser").removeClass('hover');
	$("#kyfreechannels").removeClass('hover');
	$("#kypremiumuser").removeClass('hover');
	$("#kyversiondata").removeClass('hover');
	$("#kybinddata").removeClass('hover');
	$("#kyclickdata").removeClass('hover');
	$("#kyshowlocation").removeClass('hover');
	$("#kymd5code").removeClass('hover');
	$("#kybigchannel").removeClass('hover');
	$("#kyexchange").removeClass('hover');
	$("#kyjp").removeClass('hover');
	$("#kyuninstalldata").removeClass('hover');
	$("#kyurlratedata").removeClass('hover');
	$("#kyuserfb").removeClass('hover');
	
	$("#huorongbase").removeClass('hover');
	
	$("#rili_base").removeClass('hover');
	$("#rili_softjp").removeClass('hover');
	$("#rili_jpqd").removeClass('hover');
	$("#toutiao_base").removeClass('hover');
	$("#toutiao_day").removeClass('hover');
	$("#toutiao_perday").removeClass('hover');
	$("#toutiao_daycatory").removeClass('hover');
	$("#toutiao_det").removeClass('hover');
	$("#dfttzd").removeClass('hover');
	$("#newssharecount").removeClass('hover');
	$("#newsshareread").removeClass('hover');
	$("#appbasedata").removeClass('hover');
	$("#shareandread").removeClass('hover');
	$("#appdayqd").removeClass('hover');
	//H5渠道推荐数据
	$("#qdrecommend").removeClass('hover');
	//H5每日信息流统计
	$("#wapstreamdata").removeClass('hover');
	//H5每日新信息流统计
	$("#wapnewstreamdata").removeClass('hover');
	//H5实时渠道数据
	$("#qdrealtimedata").removeClass('hover');
	//app积分监控统计
	$("#appscore").removeClass('hover');
	//app精准推送数据
	$("#apppush").removeClass('hover');
	//app按钮统计
	$("#appbutton").removeClass('hover');
	//视频每日数据统计
	$("#videodata").removeClass('hover');
	//视频每日渠道统计
	$("#videoqid").removeClass('hover');
	//新闻审核监控
	$("#newscheck").removeClass('hover');
	//视频和美女实时TOP
	$("#videotop").removeClass('hover');
	//H5渠道地域分布
	$("#waparea").removeClass('hover');
	//H5内页APP推广统计
	$("#h5apptg").removeClass('hover');
	//安卓机型分布
	$("#androidfb").removeClass('hover');
	//pc端
	$("#pcdaybasic").removeClass('hover');
	$("#pcdaydet").removeClass('hover');
	$("#pcdaygather").removeClass('hover');
	$("#pcdayqd").removeClass('hover');
	$("#pcstreamdata").removeClass('hover');
	$("#pcclientdata").removeClass('hover');
	$("#pcqlrealtimedata").removeClass('hover');
	//pc渠道地域数据
	$("#pcareadata").removeClass('hover');
	//东方头条特色站--军事站
	$("#pcarmydaybasic").removeClass('hover');
	$("#pcarmydaydet").removeClass('hover');
	$("#pcarmydaygather").removeClass('hover');
	$("#pcarmydayqd").removeClass('hover');
	$("#pcarmyclientdata").removeClass('hover');
	//东方头条特色站--猎奇站
	$("#pclieqidaybasic").removeClass('hover');
	$("#pclieqidaydet").removeClass('hover');
	$("#pclieqidaygather").removeClass('hover');
	$("#pclieqidayqd").removeClass('hover');
	$("#pclieqiclientdata").removeClass('hover');
	//东方头条特色站--北青
	$("#beiqingdata").removeClass('hover');
	//苹果助手
	$("#pingguo_base").removeClass('hover');
	$("#pingguoqd").removeClass('hover');
	$("#baseh5").removeClass('hover');
	$("#accountshareandread").removeClass('hover');
	$("#apprest").removeClass('hover');
	$("#pgqdhuizong").removeClass('hover');
	$("#pgqdtoday").removeClass('hover');
	$("#pgqdownloadlist").removeClass('hover');
	$("#pgqdownloadtop").removeClass('hover');
	$("#pgother").removeClass('hover');
	
	//西游网盟
	$("#csvupload").removeClass('hover');
	$("#csvuploadfile").removeClass('hover');
	//H5收入统计
	$("#wapincomedata").removeClass('hover');
	//H5 m021广告收益统计
	$("#wapincomem021data").removeClass('hover');
	//H5广告展示率统计
	$("#h5adshow").removeClass('hover');
	//m021导航统计
	$("#m021dhdata").removeClass('hover');
    //wps导航统计
	$("#wpsdhdata").removeClass('hover');
	//PC收入统计
	$("#pcincomedata").removeClass('hover');
	
	//爬虫监控统计
	$("#crawlerdata").removeClass('hover');
	
	//广告平台统计
	$("#adptcount").removeClass('hover');
}  
