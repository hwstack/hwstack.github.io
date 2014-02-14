    function gen(){
        var date = prompt('When is this due?', tomorrow);
        var task = prompt('What is the task?');
        var key = prompt('For which class?');
        
        if(!key) {
 			alert('Woops!  :I  Class must be specified!');
 			return;
 		}
 		key = (key.substring(0,1) == "#" || key.substring(0,1) == "<" ? key : "#"+key);
 		
        var code = '<div class='+key+'><span class="date">'+date+'</span>&nbsp;<span class="class">'+key+'</span><br /><span class="task">'+task+'</span></div>';
        var foo = prompt('Copy & Paste into Doc:', code);
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////
	
	var chatStepPass = "hwstack"
	
	var isViewSubsOn = new Boolean();
	
	function openChatStep(){
		
		console.log("Password --- " + chatStepPass)
		window.open("https://chatstep.com/#hwstack");
		
	}

	
	console.log("Stop screwing around in the console. We know who you are.");

	
	
	var mySubsKey = "DONT-USE-THIS-KEY-PLEASE-NEVER-DO-NEVER-OPPLSNERF";
	var mySubs = [];
	mySubs = $.jStorage.get(mySubsKey);
	
	//mySubs = (mySubs ? [] : ["hohoho"])
	
//	<div class="mathk">
//	<span class="date">2/12/14</span>&nbsp;<span class="class">#MathKramer</span><br />
//	<span class="task">- 14.3 Practice (all)<br />- Chapter 12 Mid-Chapter Test (obviously <i>all</i>)</span>
//	</div>
	
	function task(key, tag, task, date){
		
		if(tag.substring(0,1) == "#"){
			console.log("good tag");
		}else{
			tag = "#" + tag;
		}
		
		$(" /// ").append(
		
		'<div class="' + key + '">' + 
		'<span class="date">' + date + '<span&nbsp;<span class="class">' + tag + '</span><br />' +
		'<span class="task">' + task + '</span>' +
		'</div>'
		
		);
		
	}
	
	///////////////////////////////////////////////////////////////////////////////

	function addSub( key ){
		if( $.inArray(key, mySubs)==-1 ){
			mySubs.push(key);
		}
		$.jStorage.set(mySubsKey, mySubs);
	}
	
	function delSub( key ){
		if(key=="all"){
			mySubs = [];
		}else{
			remove(mySubs, key);
		}
		
		$.jStorage.set(mySubsKey, mySubs);
	}
	
	function remove(arr, what){
    		var found = arr.indexOf(what);

    		while (found !== -1) {
    			arr.splice(found, 1);
			    found = arr.indexOf(what);
    		}
	}
	
	function viewSubs( v ){
		$("div").css("display","none");
		$("hr").css("display","none");
		
		if(v){
			for(i=0; i<mySubs.length; i++){
				showClass( mySubs[i] );
			}
			$("#sub-view").attr("href","javascript:viewSubs(false)");
			$("#sub-view .link-title").html("reset view");
		}else{
			resetShowClass();
			$("#sub-view").attr("href","javascript:viewSubs(true)");
			$("#sub-view .link-title").html("just subs");
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	
	function initBoxes(){
		$("input[type=checkbox]").prop("checked",false);
		
		if($.inArray("humv",mySubs)>-1){
			$("#humv-box").prop("checked",true);
		}
		if($.inArray("humc",mySubs)>-1){
			$("#humc-box").prop("checked",true);
		}
		if($.inArray("span",mySubs)>-1){
			$("#span-box").prop("checked",true);
		}
		if($.inArray("mathk",mySubs)>-1){
			$("#mathk-box").prop("checked",true);
		}
		if($.inArray("mathcw",mySubs)>-1){
			$("#mathcw-box").prop("checked",true);
		}
		if($.inArray("sci",mySubs)>-1){
			$("#sci-box").prop("checked",true);
		}
		if($.inArray("lat",mySubs)>-1){
			$("#lat-box").prop("checked",true);
		}
		if($.inArray("mun",mySubs)>-1){
			$("#mun-box").prop("checked",true);
		}
	}
	
	$("#humv-box").click(function(){
		if(this.checked){
			addSub("humv");
		}else{
			delSub("humv");
		}
	});
	$("#humc-box").click(function(){
		if(this.checked){
			addSub("humc");
		}else{
			delSub("humc");
		}
	});
	$("#span-box").click(function(){
		if(this.checked){
			addSub("span");
		}else{
			delSub("span");
		}
	});
	$("#mathk-box").click(function(){
		if(this.checked){
			addSub("mathk");
		}else{
			delSub("mathk");
		}
	});
	$("#mathcw-box").click(function(){
		if(this.checked){
			addSub("mathcw");
		}else{
			delSub("mathcw");
		}
	});
	$("#sci-box").click(function(){
		if(this.checked){
			addSub("sci");
		}else{
			delSub("sci");
		}
	});
	$("#lat-box").click(function(){
		if(this.checked){
			addSub("lat");
		}else{
			delSub("lat");
		}
	});
	$("#mun-box").click(function(){
		if(this.checked){
			addSub("mun");
		}else{
			delSub("mun");
		}
	});
	
	/*
  humv	#4B8AE3
  humc	#4343E6
  span	#EB3921
  mathk #C321EB
  mathcw #369E19
  sci 	#EB9721
  lat	#8A8A8A
  mun	#282828
  	*/
	
	//////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////

	function showClass( key ){
		if(key == "mathk"){
			$("div.mathk").css("display","");
		}
		if(key == "mathcw"){
			$("div.mathcw").css("display","");
		}
		if(key == "humv"){
			$("div.humv").css("display","");
		}
		if(key == "humc"){
			$("div.humc").css("display","");
		}
		if(key == "span"){
			$("div.span").css("display","");
		}
		if(key == "lat"){
			$("div.lat").css("display","");
		}
		if(key == "sci"){
			$("div.sci").css("display","");
		}
	}

	function showJustClass( key ){
		$("div").css("display","none");
		$("hr").css("display","none");
		
		if(key == "mathk"){
			$("div.mathk").css("display","");
			return;
		}else if(key == "mathcw"){
			$("div.mathcw").css("display","");
			return;
		}else if(key == "humv"){
			$("div.humv").css("display","");
			return;
		}else if(key == "humc"){
			$("div.humc").css("display","");
			return;
		}else if(key == "span"){
			$("div.span").css("display","");
			return;
		}else if(key == "lat"){
			$("div.lat").css("display","");
			return;
		}else if(key == "sci"){
			$("div.sci").css("display","");
			return;
		}
	}
	
	function resetShowClass(){
		$("div").css("display","");
		$("hr").css("display","");
	}
	
	function popout(){
		var popout = window.open("http://hwstack.github.io/?w=100","hwStack","width=570,height=750");
	}
	
	var today, tomorrow, todayDDay;
	var listener = new window.keypress.Listener();
	
	function bodyOnload(){
		checkForArgs();
		updateLayout();
		
		today = moment().format("M/D/YY");
		todayDDay = moment().format("M/DD/YY");
		
		tomorrow = todayDDay.replace( todayDDay.substr(2,2), ( Number(today.substr(2,2))+1 ).toString() );
		$("#date").attr("placeholder", tomorrow);
		
		reDraw();
		specificView( getQueryVariable("v") );
		
		colorize();
		
		initBoxes();
		
		listener.counting_combo("control shift c", function(e, count) {
			showChat("hwstack");
		});
		
		listener.counting_combo("command shift c", function(e, count) {
			showChat("hwstack");
		});
		
		listener.counting_combo("control shift h", function(e, count) {
			showChat("humStack");
		});

	}
	
	jQuery.fn.exists = function(){return this.length>0;}
	
	$(window).resize(function(){
		updateLayout();
	});
	
	function updateLayout(){
		if ($(window).width() <= 1308){	
			$( ".link-title" ).css( "display", "none" );
			$( "#ribbon" ).css( "display", "none" );
		}else{
			$( ".link-title" ).css( "display", "" );
			$( "#ribbon" ).css( "display", "" );
		}
		
		if($(window).width() <= 1543){
			if( !($(".js-br").exists()) ){ $("#boxes").before("<br class='js-br' />"); }
		}else{
			$(".js-br").remove();
		}
		
		var wrapperWidth = (getQueryVariable("w") ? getQueryVariable("w") : 60)+"%";
		$("#wrapper").css("width", wrapperWidth);
	}
	
	///////////////////////////////////////////////////////////////////////////////
	
	$.expr[":"].contains = $.expr.createPseudo(function(arg){
    	return function( elem ) {
        	return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});
	
	function add(){
		var key = $("#key").val();
		var task = $("#task").val();
		var date = $("#date").val();
		
		if(!key){
			alert("Woops!  :I  Class must be specified!");
			$("#key").focus();
			return;
		}
		
		$("#key").val('');
		$("#task").val('');
		$("#date").val('');
		
		key = (key.substring(0,1) == "#" || key.substring(0,1) == "<" ? key : "#"+key);
		
		$.jStorage.set(key, task+"@"+date);
		reDraw();
		$("#key").focus();
	}
	
	function argsAdd( key, task, date ){
		key = unescape(key);
		key = (key.substring(0,1) == "#" || key.substring(0,1) == "<" ? key : "#"+key);
		
		task = unescape(task);
		date = unescape(date);
		
		$.jStorage.set(key, task+"@"+date);
		reDraw();
	}

	function flush_data(){
		var delKey;
		for(i=0; i<$.jStorage.index().length; i++){
			//makes sure not to delete any of mySubs
			delKey = $.jStorage.index()[i]!=mySubsKey ? $.jStorage.index()[i] : "cookies fo you";
			$.jStorage.deleteKey( delKey );
		}
		reDraw();
	}

	function delTask( key ){
		$.jStorage.deleteKey( key.toString() );
		reDraw();
	}
	
	function editTask ( key ){
		$("#key").val( key );
		var val = $.jStorage.get(key).split("@");
		$("#task").val( val[0] );
		$("#date").val( val[1] );
		$("#task").focus();
	}

	function reDraw(){
		var key, task, date, row, delHref, editHref, valArray;

		//clears old list before drawing new one
		$("#tasks").empty();
	
		for(i=0; i<($.jStorage.index().length); i++){
			key = $.jStorage.index()[i];
			if(key!=mySubsKey){
				val = $.jStorage.get(key).toString().split("@");
				task = unescape( val[0] );
				date = unescape( val[1] );
			
				delHref = "javascript:delTask('"+key+"')";
				editHref = "javascript:editTask('"+key+"')";
				$row = $( "<tr><td colspan='3' class='mystack-entry'><span>"+date+"</span>&nbsp;<span class='class'>"+key+"</span><br /><span class='task'>"+task+"</span></td><td><a href="+'"'+delHref+'"'+"><i class='fa fa-check-square-o'></i></a><br /><a href="+'"'+editHref+'"'+"><i class='fa fa-edit'></i></a></td></tr>" );
			
				$( "#tasks" ).prepend( $row );
			}
		}
		
		colorize();
	}
	
	function clearInputs(){
		$("#key").val('');
		$("#task").val('');
		$("#date").val('');
	}
	
	$("#task, #key, #date").keypress(function(e){
  		if(e.which==13){
  			add();
  			return false;
  		}
	});
	
	////////////////////////////////////////////////////////////////////////
	
	function colorize(){
		//colors entry tags
		$( "span:contains('#humv')" ).css( "color", "#4B8AE3" );
		$( "span:contains('#humc')" ).css( "color", "#4343E6" );
		$( "span:contains('#span')" ).css( "color", "#EB3921" );
		$( "span:contains('#mathk')" ).css( "color", "#C321EB" );
		$( "span:contains('#mathc')" ).css( "color", "#369E19" );
		$( "span:contains('#sci')" ).css( "color", "#EB9721" );
		$( "span:contains('#lat')" ).css( "color", "#8A8A8A" );
		$( "span:contains('#mun')" ).css( "color", "#282828");
		
		//colors task tags 
		$( ".class:contains('#humv')" ).css( "color", "#4B8AE3" );
		$( ".class:contains('#humc')" ).css( "color", "#4343E6" );
		$( ".class:contains('#span')" ).css( "color", "#EB3921" );
		$( ".class:contains('#mathk')" ).css( "color", "#C321EB" );
		$( ".class:contains('#mathc')" ).css( "color", "#369E19" );
		$( ".class:contains('#sci')" ).css( "color", "#EB9721" );
		$( ".class:contains('#lat')" ).css( "color", "#8A8A8A" );
		$( ".class:contains('#mun')" ).css( "color", "#282828");
		
		//colors entries due today
		$("div:contains("+today+")").css("background-color","#EBD754");
		//colors tasks due today
		$("td[id!=mystack-wrapper]:contains("+today+")").css("background-color","#EBD754");

		$("div:contains("+todayDDay+")").css("background-color","#EBD754");
		$("td[id!=mystack-wrapper]:contains("+todayDDay+")").css("background-color","#EBD754");
		
		//colors entries due tomorrow
		$("div:contains("+tomorrow+")").css("background-color","#A7DE7A");
		//colors tasks due tomorrow
		$("td[id!=mystack-wrapper]:contains("+tomorrow+")").css("background-color","#A7DE7A");
		
		$("#thestack-wrapper").css("background-color","#DDDDDD");
	}
	
	////////////////////////////////////////////////////////////////////////
	
	$.fn.outerHTML = function(){
		// IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
		return (!this.length) ? this : (this[0].outerHTML || (
		function(el){
			var div = document.createElement('div');
			div.appendChild(el.cloneNode(true));
			var contents = div.innerHTML;
			div = null;
			return contents;
		})(this[0]));
	};
	
	$("div").click(function(){
		var key = $(this).find(".class").html();
		var task = $(this).find(".task").html();
		var date = $(this).find(".date").html();
		
		var val = task+"@"+date;
		
		$.jStorage.set( key, val );
		reDraw();
	});
	
	function specificView( type ){
		if(type=="tS"){ //just theStack
			$( "#thestack-wrapper" ).css( "display", "" );
			$( "#mystack-wrapper" ).css( "display", "none" );
			
			if( getQueryVariable("r") != "no" ) {
				$( "#sel-view-tS" ).replaceWith( "<a style='position:relative;bottom:12px;' href='http://hwstack.github.io/'><i class='fa fa-arrow-left'></i>&nbsp;return to main view</a><br />" );
			} else {
				$("#sel-view-tS").css("display", "none");
			}

		}else if(type=="mS"){ //just myStack
			$( "#thestack-wrapper" ).css( "display", "none" );
			$( "#mystack-wrapper" ).css( "display", "" );
			
			if( getQueryVariable("r") != "no" ) {
				$( "#sel-view-mS" ).replaceWith( "<a style='position:relative;bottom:12px;' href='http://hwstack.github.io/'><i class='fa fa-arrow-left'></i>&nbsp;return to main view</a><br />" );
			} else {
    			$("#sel-view-mS").css("display", "none");
			}
		}
	}
	
	function resetView(){
		$( "#thestack-wrapper" ).css( "display", "" );
		$( "#mystack-wrapper" ).css( "display", "" );
	}
	
	function checkForArgs() {
		var k = getQueryVariable('k');
		var t = getQueryVariable('t');
		var d = getQueryVariable('d');
		if((k && t) && d){
			argsAdd(k, t, d);
			
			var state = {
				"yoloCuzICan": true
			};
			history.pushState(state, "hwStack", "http://hwstack.github.io/");
		}
		
		var c = getQueryVariable('chat');
		if(c){ showChat(c); }
	}
	
	function getQueryVariable( variable ){
		var query = window.location.search.substring(1);
		var vars = query.split("+");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	}
	
	function showChat( channel ){
		$("body").replaceWith('<div id="tlkio" data-channel="'+channel+'" data-theme="https://rawgithub.com/hwstack/hwstack.github.io/master/chatStyle.css" style="width:100%;height:100%;"></div>');
		
		var target_element	= document.getElementById('tlkio'),
		custom_css_path		= target_element.getAttribute('data-theme'),
		channel_name		= target_element.getAttribute('data-channel'),
		iframe				= document.createElement('iframe');
		
		var iframe_src = 'http://embed.tlk.io/' + channel_name;
		iframe_src += ('?custom_css_path=' + custom_css_path);
		
		iframe.setAttribute('src', iframe_src);
		iframe.setAttribute('width', '100%');
		iframe.setAttribute('height', '100%');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('style', 'margin-bottom: -8px;');
		
		var current_style = target_element.getAttribute('style');
		target_element.setAttribute('style', 'overflow: auto; -webkit-overflow-scrolling: touch;' + current_style);
		
		target_element.appendChild(iframe);
	}
