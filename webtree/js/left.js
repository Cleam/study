$(function() {
	
	/*************  ���˵�  start     ****************************/	
	//���뷨
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
	
	//���뷨��������
	$("#qddata").click(function() {
		var flag = $("#qddataol").hasClass('onChoos');
		if (flag) {
			$("#qddataol").removeClass('onChoos');
		} else {
			$("#qddataol").addClass('onChoos');
		}
	});
	
	//����ҳ
	$("#minidata").click(function() {
		var flag = $("#minidataol").hasClass('onChoos');
		if (flag) {
			$("#minidataol").removeClass('onChoos');
		} else {
			$("#minidataol").addClass('onChoos');
		}
	});
	
	//��ͼ��
	$("#kantudata").click(function() {
		var flag = $("#kantudataol").hasClass('onChoos');
		if (flag) {
			$("#kantudataol").removeClass('onChoos');
		} else {
			$("#kantudataol").addClass('onChoos');
		}
	});
	
	//Ȥѹ
	$("#quyadata").click(function() {
		var flag = $("#quyadataol").hasClass('onChoos');
		if (flag) {
			$("#quyadataol").removeClass('onChoos');
		} else {
			$("#quyadataol").addClass('onChoos');
		}
	});
	
	//����
	$("#huorongdata").click(function() {
		var flag = $("#huorongdataol").hasClass('onChoos');
		if (flag) {
			$("#huorongdataol").removeClass('onChoos');
		} else {
			$("#huorongdataol").addClass('onChoos');
		}
	});
	
	//����
	$("#rilidata").click(function() {
		var flag = $("#rilidataol").hasClass('onChoos');
		if (flag) {
			$("#rilidataol").removeClass('onChoos');
		} else {
			$("#rilidataol").addClass('onChoos');
		}
	});
	
	//����ͷ��
	$("#toutiaodata").click(function() {
		var flag = $("#toutiaodataol").hasClass('onChoos');
		if (flag) {
			$("#toutiaodataol").removeClass('onChoos');
		} else {
			$("#toutiaodataol").addClass('onChoos');
		}
	});
	
	
	//����ͷ��PC��
	$("#toutiaopc").click(function() {
		var flag = $("#toutiaopcol").hasClass('onChoos');
		if (flag) {
			$("#toutiaopcol").removeClass('onChoos');
		} else {
			$("#toutiaopcol").addClass('onChoos');
		}
	});
	
	//����ͷ����ɫվ 
	$("#pctese").click(function() {
		var flag = $("#pcarmyol").hasClass('onChoos');
		if (flag) {
			$("#pcarmyol").removeClass('onChoos');
		} else {
			$("#pcarmyol").addClass('onChoos');
		}
	});
	
	//ƻ������
	$("#pingguozhushou").click(function() {
		var flag = $("#pingguodataol").hasClass('onChoos');
		if (flag) {
			$("#pingguodataol").removeClass('onChoos');
		} else {
			$("#pingguodataol").addClass('onChoos');
		}
	});
	
	//�Ϻ��Ժ�
	$("#upload").click(function(){
		var flag=$("#uploaddataol").hasClass('onChoos');
		if(flag){
			$("#uploaddataol").removeClass('onChoos');
		}else{
			$("#uploaddataol").addClass('onChoos');
		}
	});
	
	
	//m021ͳ��
	$("#myselfadincome").click(function() {
		var flag = $("#myselfadol").hasClass('onChoos');
		if (flag) {
			$("#myselfadol").removeClass('onChoos');
		} else {
			$("#myselfadol").addClass('onChoos');
		}
	});
	
	
	//������
	$("#crawler").click(function() {
		var flag = $("#crawlerol").hasClass('onChoos');
		if (flag) {
			$("#crawlerol").removeClass('onChoos');
		} else {
			$("#crawlerol").addClass('onChoos');
		}
	});
	//���ͳ��
	$("#adpt").click(function() {
		var flag = $("#adptol").hasClass('onChoos');
		if (flag) {
			$("#adptol").removeClass('onChoos');
		} else {
			$("#adptol").addClass('onChoos');
		}
	});
	 
/*************  ���˵�  end     ****************************/	

	
	//���뷨���� --����ͳ������
	$("#basicdata_li").click(function() {
		removeclass();
		$("#basicdata").addClass('hover');
		$("#iframepage").attr('src','data/datalist');
	});
	//���뷨����-----�汾ͳ������
	$("#softverdata_li").click(function() {
		removeclass();
		$("#softverdata").addClass('hover');
		$("#iframepage").attr('src','data/dataverlist');
	});
	//���뷨����-----���뷨��Ʒ����
	$("#srfjinpin_li").click(function() {
		removeclass();
		$("#srfjinpin").addClass('hover');
		$("#iframepage").attr('src','loading/loadin?redirect=imelist/detail');
	});
	//���뷨����-----�����Ʒ����
	$("#rjjinpin_li").click(function() {
		removeclass();
		$("#rjjinpin").addClass('hover');
		$("#iframepage").attr('src','jingpin/jp');
	});
	//���뷨����-----��ң���ⲿ�ӿ�
	$("#writeonline_li").click(function() {
		removeclass();
		$("#writeonline").addClass('hover');
		$("#iframepage").attr('src','write/actuser');
	});
	//���뷨����-----��������
	$("#binddata_li").click(function(){
		removeclass();
		$("#binddata").addClass('hover');
		$("#iframepage").attr('src','shurubinddata/binddata');
		
	});
	//���뷨����-----��������չʾλ
	$("#showlocation_li").click(function(){
		removeclass();
		$("#showlocation").addClass('hover');
		$("#iframepage").attr('src','shurushowlocation/showlocation');
		
	});
	 //���뷨����-----��������ʵʱ����
	$("#currentdaybinddata_li").click(function(){
		removeclass();
		$("#currentdaybinddata").addClass('hover');
		$("#iframepage").attr('src','shurubinddata/currentdaybinddata');
		
	});
	
	//���뷨---------Ĭ�����������
	$("#browser_li").click(function(){
		removeclass();
		$("#browser").addClass('hover');
		$("#iframepage").attr('src','browserdata/browser');
		
	});
	
	
	
	//���뷨��������------���뷨������������
	$("#srfqd_quality_li").click(function() {
		removeclass();
		$("#srfqd_quality").addClass('hover');
		$("#iframepage").attr('src','loading/loadin?redirect=online_qu/quality');
	});
	//���뷨��������------���뷨������������
	$("#srfqd_all_li").click(function() {
		removeclass();
		$("#srfqd_all").addClass('hover');
		$("#iframepage").attr('src','online/onlinelist');
	});
	//���뷨��������------���뷨������������
	$("#srfqd_lx_li").click(function() {
		removeclass();
		$("#srfqd_lx").addClass('hover');
		$("#iframepage").attr('src','online/onlinelist_lixin');
	});
	//���뷨��������------���뷨7654��������
	$("#srfqd_7654_li").click(function() {
		removeclass();
		$("#srfqd_7654").addClass('hover');
		$("#iframepage").attr('src','online/onlinelist_7654');
	});
	//���뷨��������------�����Ʒ��������
	$("#softjp_li").click(function() {
		removeclass();
		$("#softjp").addClass('hover');
		$("#iframepage").attr('src','loading/loadin?redirect=jingpin/jpqd');
	});
	//���뷨��������------���������汾����
	$("#srfdaydata_li").click(function() {
		removeclass();
		$("#srfdaydata").addClass('hover');
		$("#iframepage").attr('src','online/onlinedaydataqd');
	});
	
	
	
	//����ҳͳ��----��������
	$("#minidata_base_li").click(function() {
		removeclass();
		$("#minidata_base").addClass('hover');
		$("#iframepage").attr('src','minibase/base');
	});
	//����ҳͳ��----��λ���
	$("#minidata_lanwei_li").click(function() {
		removeclass();
		$("#minidata_lanwei").addClass('hover');
		$("#iframepage").attr('src','minititle/titleclick');
	});
	//����ҳͳ��----����λ�õ������
	$("#minidata_pos_li").click(function() {
		removeclass();
		$("#minidata_pos").addClass('hover');
		$("#iframepage").attr('src','minipos/pos');
	});
	//����ҳͳ��-----URL�������
	$("#minidata_url_li").click(function() {
		removeclass();
		$("#minidata_url").addClass('hover');
		$("#iframepage").attr('src','minirank/rank');
	});
	//����ҳͳ�� -----����ҳ����ʵʱ���
	$("#minidata_map_li").click(function() {
		removeclass();
		$("#minidata_map").addClass('hover');
		$("#iframepage").attr('src','minimap/map');
	});
	
	
	
	
	//��ͼ��---����ͳ������
	$("#kantu_base_li").click(function() {
		removeclass();
		$("#kantu_base").addClass('hover');
		$("#iframepage").attr('src','kantu/base');
	});
	//��ͼ��-----��ͼ������������
	$("#ktqd_li").click(function() {
		removeclass();
		$("#ktqd").addClass('hover');
		$("#iframepage").attr('src','kantu/detail');
	});
	
	
	
	
	//Ȥѹ---��������
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
	//��ѹ-----��ѹ������������
	$("#qyqid_li").click(function() {
		removeclass();
		$("#qyqid").addClass('hover');
		$("#iframepage").attr('src','quyaqid/qidlist');
	});
	//��ѹ-----��ѹ������������
	$("#qyactive_li").click(function() {
		removeclass();
		$("#qyactive").addClass('hover');
		$("#iframepage").attr('src','quyaqid/activelist');
	});
	
	//��ѹ------��������
	$("#kybase_li").click(function(){
		removeclass();
		$("#kybase").addClass('hover');
		$("#iframepage").attr('src','kuaiyabase/baselist');
	});
	//��ѹ-------���û�����
	$("#kynewuser_li").click(function(){
		removeclass();
		$("#kynewuser").addClass('hover');
		$("#iframepage").attr('src','kuaiyanewuser/newuserdata');
		
	});
	//��ѹ-----�����������
	$("#kyfreechannels_li").click(function(){
		removeclass();
		$("#kyfreechannels").addClass('hover');
		$("#iframepage").attr('src','kuaiyafreechannel/freechanneldata');
	});
	//��ѹ------������������
	$("#kypremiumuser_li").click(function(){
		removeclass();
		$("#kypremiumuser").addClass('hover');
		$("#iframepage").attr('src','kuaiyapremiumuser/premiumuserdata');
	});
	//��ѹ-----�汾����
	$("#kyversiondata_li").click(function(){
		removeclass();
		$("#kyversiondata").addClass('hover');
		$("#iframepage").attr('src','kuaiyaversiondata/versiondata');
	});
	//��ѹ----��������
	$("#kybinddata_li").click(function(){
		removeclass();
		$("#kybinddata").addClass('hover');
		$("#iframepage").attr('src','kuaiyabinddata/binddata');
	});
	//��ѹ-----�û��������
	$("#kyclickdata_li").click(function(){
		removeclass();
		$("#kyclickdata").addClass('hover');
		$("#iframepage").attr('src','kuaiyaclickdata/clickdata');
	});
	//��ѹ----��������չʾλ
	$("#kyshowlocation_li").click(function(){
		removeclass();
		$("#kyshowlocation").addClass('hover');
		$("#iframepage").attr('src','kuaiyashowlocation/showlocation');
	});
	//��ѹ----MD5����
	$("#kymd5code_li").click(function(){
		removeclass();
		$("#kymd5code").addClass('hover');
		$("#iframepage").attr('src','kuaiyamd5code/getmd5code');
	});
	//��ѹ----����������
	$("#kybigchannel_li").click(function(){
		removeclass();
		$("#kybigchannel").addClass('hover');
		$("#iframepage").attr('src','kuaiyachannel/bigchannel');
	});
	//��ѹ----������������
	$("#kyexchange_li").click(function(){
		removeclass();
		$("#kyexchange").addClass('hover');
		$("#iframepage").attr('src','kuaiyaexchange/exchangedata');
		
	});
	//��ѹ----��Ʒ����
	$("#kyjp_li").click(function(){
		removeclass();
		$("#kyjp").addClass('hover');
		$("#iframepage").attr('src','kuaiyajingpin/kyjp');
	});
	//��ѹ----��ѹ�û�ж������
	$("#kyuninstalldata_li").click(function(){
		removeclass();
		$("#kyuninstalldata").addClass('hover');
		$("#iframepage").attr('src','kuaiyauninstalldata/uninstalldata');
	});
	//��ѹ----��ѹռ�ȷ�������
	$("#kyurlratedata_li").click(function(){
		removeclass();
		$("#kyurlratedata").addClass('hover');
		$("#iframepage").attr('src','kuaiyaurlratedata/urlratedata');
	});
	//��ѹ----�û��ֲ�����
	$("#kyuserfb_li").click(function(){
		removeclass();
		$("#kyuserfb").addClass('hover');
		$("#iframepage").attr('src','kuaiyabase/userfbdata');
	});
	
	
	
	
	
	//����-----����غ϶�
	$("#huorongbase_li").click(function() {
		removeclass();
		$("#huorongbase").addClass('hover');
		$("#iframepage").attr('src','huorong/base');
	});
	
	
	
	
	//����----����ͳ������
	$("#rili_base_li").click(function() {
		removeclass();
		$("#rili_base").addClass('hover');
		$("#iframepage").attr('src','rili/base');
	});
	//����---����������������
	$("#riliqd_li").click(function() {
		removeclass();
		$("#riliqd").addClass('hover');
		$("#iframepage").attr('src','rili/detail');
	});
	
	//����----��Ʒ����
	$("#rili_softjp_li").click(function() {
		removeclass();
		$("#rili_softjp").addClass('hover');
		$("#iframepage").attr('src','rilisoftjp/softjp');
	});
	//����----��Ʒ��������
	$("#rili_jpqd_li").click(function() {
		removeclass();
		$("#rili_jpqd").addClass('hover');
		$("#iframepage").attr('src','rilisoftjp/jpqd');
	});
	
	
	
	
	
	//����ͷ�� ---H5ʵʱͳ������
	$("#toutiao_base_li").click(function() {
		removeclass();
		$("#toutiao_base").addClass('hover');
		$("#iframepage").attr('src','wapdata/datalist');
	});
	//����ͷ�� ---H5ÿ����������
	$("#toutiao_day_li").click(function() {
		removeclass();
		$("#toutiao_day").addClass('hover');
		$("#iframepage").attr('src','wapdata/wapday');
	});
	//����ͷ�� ---H5ÿ������ͳ�� 
	$("#toutiao_perday_li").click(function() {
		removeclass();
		$("#toutiao_perday").addClass('hover');
		$("#iframepage").attr('src','wapdata/wapday2');
	});
	//����ͷ�� ---H5ÿ����������
	$("#toutiao_det_li").click(function(){
		removeclass();
		$("#toutiao_det").addClass('hover');
		$("#iframepage").attr('src','wapdata/detail');
		
	});
	//����ͷ�� ---H5�ն�����
	$("#dfttzd_li").click(function(){
		removeclass();
		$("#dfttzd").addClass('hover');
		$("#iframepage").attr('src','dfttzz/zdzlqd');
	});
	//����ͷ�� ---H5�����Ƽ�����
	$("#qdrecommend_li").click(function(){
		removeclass();
		$("#qdrecommend").addClass('hover');
		$("#iframepage").attr('src','waprecommend/recommenddatagk');
	});
	//����ͷ�� ---H5ÿ����Ϣ��ͳ��
	$("#wapstreamdata_li").click(function(){
		removeclass();
		$("#wapstreamdata").addClass('hover');
		$("#iframepage").attr('src','wapstreamdata/streamdata');
	});
	//����ͷ�� ---H5ÿ������Ϣ��ͳ��
	$("#wapnewstreamdata_li").click(function(){
		removeclass();
		$("#wapnewstreamdata").addClass('hover');
		$("#iframepage").attr('src','wapnewstreamdata/newstreamdata');
	});
	//����ͷ�� ---H5������������
	$("#qdrealtimedata_li").click(function(){
		removeclass();
		$("#qdrealtimedata").addClass('hover');
		$("#iframepage").attr('src','wapdata/qdrealtimedata');
	});
	//����ͷ�� ---H5��ҳAPP�ƹ�ͳ��
	$("#h5apptg_li").click(function(){
		removeclass();
		$("#h5apptg").addClass('hover');
		$("#iframepage").attr('src','h5apptg/h5apptgzt');
	});
	//����ͷ�� ---App����������
	$("#newssharecount_li").click(function(){
		removeclass();
		$("#newssharecount").addClass('hover');
		$("#iframepage").attr('src','newsshare/newcount');
	});
	//����ͷ�� ---App�Ķ�������
	$("#newsshareread_li").click(function(){
		removeclass();
		$("#newsshareread").addClass('hover');
		//$("#iframepage").attr('src','newsshare/readcount');
		$("#iframepage").attr('src','newsshare/appnewssharead');
	});
	//����ͷ��----App��������
	$("#appbasedata_li").click(function(){
		removeclass();
		$("#appbasedata").addClass('hover');
		$("#iframepage").attr('src','appbasedata/appdata');
	});
	//����ͷ��----App������Ķ�����
	$("#shareandread_li").click(function(){
		removeclass();
		$("#shareandread").addClass('hover');
		$("#iframepage").attr('src','shareandread/showshareandread');
	});
	//����ͷ��----App�˺ŷ����Ķ�
	$("#accountshareandread_li").click(function(){
		removeclass();
		$("#accountshareandread").addClass('hover');
		$("#iframepage").attr('src','shareandread/accountshowshareandread');
	});
	//����ͷ��----Appÿ�ջ�Ծ����
	$("#apprest_li").click(function(){
		removeclass();
		$("#apprest").addClass('hover');
		$("#iframepage").attr('src','appbasedata/apprestdata');
	});
	//����ͷ��----Appÿ�������汾ͳ��
	$("#appdayqd_li").click(function(){
		removeclass();
		$("#appdayqd").addClass('hover');
		$("#iframepage").attr('src','appbasedata/appdayqd');
	});
	//����ͷͷ---App���ּ��ͳ��
	$("#appscore_li").click(function(){
		removeclass();
		$("#appscore").addClass('hover');
		$("#iframepage").attr('src','appscoredata/scoredata');
	});
	//����ͷͷ----App��׼��������
	$("#apppush_li").click(function(){
		removeclass();
		$("#apppush").addClass('hover');
		$("#iframepage").attr('src','apppushdata/pushdata');
	});
	//����ͷ��---App��ťͳ��
	$("#appbutton_li").click(function(){
		removeclass();
		$("#appbutton").addClass('hover');
		$("#iframepage").attr('src','appbuttondata/pushall');
	});
	//����ͷ��---��Ƶÿ������ͳ��
	$("#videodata_li").click(function(){
		removeclass();
		$("#videodata").addClass('hover');
		$("#iframepage").attr('src','appbasedata/videoday');
	});
	//����ͷ��---��Ƶÿ������ͳ��
	$("#videoqid_li").click(function(){
		removeclass();
		$("#videoqid").addClass('hover');
		$("#iframepage").attr('src','appbasedata/videodayqid');
	});
	//����ͷ��---������˼��
	$("#newscheck_li").click(function(){
		removeclass();
		$("#newscheck").addClass('hover');
		$("#iframepage").attr('src','newscheck/newscheck');
	});
	//����ͷ��---��Ƶʵʱ�ȵ�100
	$("#videotop_li").click(function(){
		removeclass();
		$("#videotop").addClass('hover');
		$("#iframepage").attr('src','realtime/video');
	});
	//����ͷ��---H5��������ֲ�
	$("#waparea_li").click(function(){
		removeclass();
		$("#waparea").addClass('hover');
		$("#iframepage").attr('src','waparea/base');
	});
	//����ͷ��---��׿���ͷֲ�
	$("#androidfb_li").click(function(){
		removeclass();
		$("#androidfb").addClass('hover');
		$("#iframepage").attr('src','appbasedata/brand');
	});
	
	
	
	
	//����ͷ��PC��-----PCÿ����������
	$("#pcdaydet_li").click(function(){
		removeclass();
		$("#pcdaydet").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdaydet');
	});
	//����ͷ��PC��-----PCÿ��ʵʱ����
	$("#pcdaybasic_li").click(function(){
		removeclass();
		$("#pcdaybasic").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdaybasic');
	});
	//����ͷ��PC��-----PCÿ������ͳ��
	$("#pcdaygather_li").click(function(){
		removeclass();
		$("#pcdaygather").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdaygather');
	});
	//����ͷ��PC��-----PCÿ������ͳ��
	$("#pcdayqd_li").click(function(){
		removeclass();
		$("#pcdayqd").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcdayqd');
	});
	//����ͷ��PC��-----PC��Ϣ��ͳ��
	$("#pcstreamdata_li").click(function(){
		removeclass();
		$("#pcstreamdata").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcstreampvdata');
	});
	//����ͷ��PC��-----PC�ն�����
	$("#pcclientdata_li").click(function(){
		removeclass();
		$("#pcclientdata").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcclientdata');
	});
	//����ͷ��PC��-----PC������������
	$("#pcqlrealtimedata_li").click(function(){
		removeclass();
		$("#pcqlrealtimedata").addClass('hover');
		$("#iframepage").attr('src','pcbasedata/pcqdrealtimedata');
	});
	//����ͷ��PC��-----PC������������
	$("#pcareadata_li").click(function(){
		removeclass();
		$("#pcareadata").addClass('hover');
		$("#iframepage").attr('src','pcarea/base');
	});
	
	
	
	//����ͷ����ɫվ----����ÿ��ʵʱ����
	$("#pcarmydaybasic_li").click(function(){
		removeclass();
		$("#pcarmydaybasic").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydaybasic');
	});
	//����ͷ����ɫվ----����ÿ����������
	$("#pcarmydaydet_li").click(function(){
		removeclass();
		$("#pcarmydaydet").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydaydet');
	});
	//����ͷ����ɫվ----����ÿ������ͳ��
	$("#pcarmydaygather_li").click(function(){
		removeclass();
		$("#pcarmydaygather").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydaygather');
	});
	//����ͷ����ɫվ----����ÿ������ͳ��
	$("#pcarmydayqd_li").click(function(){
		removeclass();
		$("#pcarmydayqd").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmydayqd');
	});
	//����ͷ����ɫվ----�����ն�����
	$("#pcarmyclientdata_li").click(function(){
		removeclass();
		$("#pcarmyclientdata").addClass('hover');
		$("#iframepage").attr('src','pcarmybasedata/pcarmyclientdata');
	});
	//����ͷ����ɫվ----����ÿ��ʵʱ����
	$("#pclieqidaybasic_li").click(function(){
		removeclass();
		$("#pclieqidaybasic").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidaybasic');
	});
	//����ͷ����ɫվ----����ÿ����������
	$("#pclieqidaydet_li").click(function(){
		removeclass();
		$("#pclieqidaydet").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidaydet');
	});
	//����ͷ����ɫվ----����ÿ������ͳ��
	$("#pclieqidaygather_li").click(function(){
		removeclass();
		$("#pclieqidaygather").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidaygather');
	});
	//����ͷ����ɫվ----����ÿ������ͳ��
	$("#pclieqidayqd_li").click(function(){
		removeclass();
		$("#pclieqidayqd").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqidayqd');
	});
	//����ͷ����ɫվ----�����ն�����
	$("#pclieqiclientdata_li").click(function(){
		removeclass();
		$("#pclieqiclientdata").addClass('hover');
		$("#iframepage").attr('src','pclieqibasedata/pclieqiclientdata');
	});
	//����ͷ����ɫվ----������ÿ����������
	$("#beiqingdata_li").click(function(){
		removeclass();
		$("#beiqingdata").addClass('hover');
		$("#iframepage").attr('src','pcbeiqing/dailydata');
	});
	

	
	
	//ƻ������----��������ͳ��
	$("#pingguo_base_li").click(function(){
		removeclass();
		$("#pingguo_base").addClass('hover');
		$("#iframepage").attr('src','pingguo/base');
	});
	//ƻ������----ƻ��������������
	$("#pingguoqd_li").click(function(){
		removeclass();
		$("#pingguoqd").addClass('hover');
		$("#iframepage").attr('src','pingguo/detail');
	});
	//ƻ������--������������
	$("#pgqdhuizong_li").click(function(){
		removeclass();
		$("#pgqdhuizong").addClass('hover');
		$("#iframepage").attr('src','pingguo/qdhuizongnew');
	});
	//ƻ������--AppӦ������ͳ��
	$("#pgqdownloadlist_li").click(function(){
		removeclass();
		$("#pgqdownloadlist").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgqdownloadlist');
	});
	//ƻ������--AppӦ������������
	$("#pgqdownloadtop_li").click(function(){
		removeclass();
		$("#pgqdownloadtop").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgqdownloadtop');
		
	});
	//ƻ������--H5�û�������
	$("#pgqdtoday_li").click(function(){
		removeclass();
		$("#pgqdtoday").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgqdtoday');
		
	});
	//ƻ������--H5��������ͳ��
	$("#baseH5_li").click(function(){
		removeclass();
		$("#baseh5").addClass('hover');
		$("#iframepage").attr('src','pingguo/baseh5');
		
	});
	//ƻ������--����H5ͳ��
	$("#pgother_li").click(function(){
		removeclass();
		$("#pgother").addClass('hover');
		$("#iframepage").attr('src','pingguo/pgother');
		
	});
	
	
	
	
	//�Ϻ��Ժ�------������������
	$("#csvupload_li").click(function(){
		removeclass();
		$("#csvupload").addClass('hover');
		$("#iframepage").attr('src','uploadfile/xiyou_push_month');
		
	});
	//�Ϻ��Ժ�------H5����ͳ��
	$("#wapincomedata_li").click(function(){
		removeclass();
		$("#wapincomedata").addClass('hover');
		$("#iframepage").attr('src','income/wapincomedata');
	});
	//�Ϻ��Ժ�------PC����ͳ��
	$("#pcincomedata_li").click(function(){
		removeclass();
		$("#pcincomedata").addClass('hover');
		$("#iframepage").attr('src','income/pcincomedata');
	});
	//�Ϻ��Ժ�------H5���չʾ��ͳ��
	$("#h5adshow_li").click(function(){
		removeclass();
		$("#h5adshow").addClass('hover');
		$("#iframepage").attr('src','ad/h5adshow');
	});
	
	
	
	
	//m021ͳ��----m021��������ͳ��
	$("#wapincomem021data_li").click(function(){
		removeclass();
		$("#wapincomem021data").addClass('hover');
		$("#iframepage").attr('src','income/wapincomem021data');
	});
	//m021ͳ��----wps ����ͳ��
	$("#wpsdhdata_li").click(function(){
		removeclass();
		$("#wpsdhdata").addClass('hover');
		$("#iframepage").attr('src','wpsm/wpsdh');
	});
	//m021ͳ��----m021����ͳ��
	$("#m021dhdata_li").click(function(){
		removeclass();
		$("#m021dhdata").addClass('hover');
		$("#iframepage").attr('src','wpsm/m021dh');
	});
	
	
	
	//������ ----������ͳ��
	$("#crawlerdata_li").click(function(){
		removeclass();
		$("#crawlerdata").addClass('hover');
		$("#iframepage").attr('src','crawlerdata/base');
	});
	
	//���ƽ̨ ----���ƽ̨ͳ��
	$("#adptcount_li").click(function(){
		removeclass();
		$("#adptcount").addClass('hover');
		$("#iframepage").attr('src','adpt/todaydata');
	});
	
	

});


function removeclass(){
	//���뷨����
	$("#srfdataol").removeClass('onChoos');
	//���뷨��������
	$("#qddataol").removeClass('onChoos');
	//����ҳͳ��
	$("#minidataol").removeClass('onChoos');
	//��ͼ��
	$("#kantudataol").removeClass('onChoos');
	//��ѹ
	$("#quyadataol").removeClass('onChoos');
	//����
	$("#huorongdataol").removeClass('onChoos');
	//����
	$("#rilidataol").removeClass('onChoos');
	//����ͷ��
	$("#toutiaodataol").removeClass('onChoos');
	//ƻ������
	$("#pingguodataol").removeClass('onChoos');
	//�Ϻ��Ժ�
	$("#uploaddataol").removeClass('onChoos');
	//ͷ��PC��
	$("#toutiaopcol").removeClass('onChoos');
	//ͷ����ɫվ
	$("#pcarmyol").removeClass('onChoos');
	//������
	$("#crawlerol").removeClass('onChoos');
	//m021ͳ��
	$("#myselfadol").removeClass('onChoos');
	//���ƽ̨
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
	//H5�����Ƽ�����
	$("#qdrecommend").removeClass('hover');
	//H5ÿ����Ϣ��ͳ��
	$("#wapstreamdata").removeClass('hover');
	//H5ÿ������Ϣ��ͳ��
	$("#wapnewstreamdata").removeClass('hover');
	//H5ʵʱ��������
	$("#qdrealtimedata").removeClass('hover');
	//app���ּ��ͳ��
	$("#appscore").removeClass('hover');
	//app��׼��������
	$("#apppush").removeClass('hover');
	//app��ťͳ��
	$("#appbutton").removeClass('hover');
	//��Ƶÿ������ͳ��
	$("#videodata").removeClass('hover');
	//��Ƶÿ������ͳ��
	$("#videoqid").removeClass('hover');
	//������˼��
	$("#newscheck").removeClass('hover');
	//��Ƶ����ŮʵʱTOP
	$("#videotop").removeClass('hover');
	//H5��������ֲ�
	$("#waparea").removeClass('hover');
	//H5��ҳAPP�ƹ�ͳ��
	$("#h5apptg").removeClass('hover');
	//��׿���ͷֲ�
	$("#androidfb").removeClass('hover');
	//pc��
	$("#pcdaybasic").removeClass('hover');
	$("#pcdaydet").removeClass('hover');
	$("#pcdaygather").removeClass('hover');
	$("#pcdayqd").removeClass('hover');
	$("#pcstreamdata").removeClass('hover');
	$("#pcclientdata").removeClass('hover');
	$("#pcqlrealtimedata").removeClass('hover');
	//pc������������
	$("#pcareadata").removeClass('hover');
	//����ͷ����ɫվ--����վ
	$("#pcarmydaybasic").removeClass('hover');
	$("#pcarmydaydet").removeClass('hover');
	$("#pcarmydaygather").removeClass('hover');
	$("#pcarmydayqd").removeClass('hover');
	$("#pcarmyclientdata").removeClass('hover');
	//����ͷ����ɫվ--����վ
	$("#pclieqidaybasic").removeClass('hover');
	$("#pclieqidaydet").removeClass('hover');
	$("#pclieqidaygather").removeClass('hover');
	$("#pclieqidayqd").removeClass('hover');
	$("#pclieqiclientdata").removeClass('hover');
	//����ͷ����ɫվ--����
	$("#beiqingdata").removeClass('hover');
	//ƻ������
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
	
	//��������
	$("#csvupload").removeClass('hover');
	$("#csvuploadfile").removeClass('hover');
	//H5����ͳ��
	$("#wapincomedata").removeClass('hover');
	//H5 m021�������ͳ��
	$("#wapincomem021data").removeClass('hover');
	//H5���չʾ��ͳ��
	$("#h5adshow").removeClass('hover');
	//m021����ͳ��
	$("#m021dhdata").removeClass('hover');
    //wps����ͳ��
	$("#wpsdhdata").removeClass('hover');
	//PC����ͳ��
	$("#pcincomedata").removeClass('hover');
	
	//������ͳ��
	$("#crawlerdata").removeClass('hover');
	
	//���ƽ̨ͳ��
	$("#adptcount").removeClass('hover');
}  
