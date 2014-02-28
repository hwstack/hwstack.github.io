var bugreps = false;
    
    function gen(){
        var date = prompt('When is this due?', tomorrow);
        var task = prompt('What is the task?');
        var key = prompt('What class?');
        
        if(!key) {
 			alert('Whoops!  :I  Class must be specified!');
 			return;
 		}else if(!task){
 			alert('Whoops!  :I  Task must be specified!');
 			return;
 		}
 		key = (key.substring(0,1) == "#" || key.substring(0,1) == "<" ? key : "#"+key);
 		
        var code = '<div class='+key+'><span class="date">'+date+'</span>&nbsp;<span class="class">'+key+'</span><br /><span class="task">'+task+'</span></div>';
        var foo = prompt('Copy & Paste into Doc:', code);
    }

	var chatStepPass = "hwstack";
	var chatStepRoom = "hwstack";
	
	function openChatStep(){
		
		console.log("Password for room " + chatStepRoom +" is " + chatStepPass);
		window.open("https://chatstep.com/#hwstack");
		
	}
	
	console.log("Stop screwing around in the console. We know who you are.");
	
	var mySubsKey = "DONT-USE-THIS-KEY-PLEASE-NEVER-DO-NEVER-OPPLSNERF";
	
	var mySubs = [];
	mySubs = $.jStorage.get(mySubsKey);
	
	/*function task(key, tag, task, date){
		
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
		
	}*/

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
	
	
//  humv	#4B8AE3
//  humc	#4343E6
//  span	#00007F
//  mathk 	#C321EB
//  mathc	 #369E19
//  sci 	#EB9721
//  lat		#B20000
//  mun		#282828

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
		
		key = key.toLowerCase();
		
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
	
	var keyCombos, jason;
	
	function bodyOnload(){
		checkForArgs();
		updateLayout();
		
		today = moment().format("M/D/YY");
		todayDDay = moment().format("M/DD/YY");
		
		tomorrow = todayDDay.replace( todayDDay.substr(2,2), ( Number(today.substr(2,2))+1 ).toString() );
		$("#date").attr("placeholder", tomorrow);
		
		//$("#lastModified").attr("title", document.lastModified);
		//jQuery("abbr.timeago").timeago();
		
		reDraw();
		specificView( getQueryVariable("v") );
		
		colorize();
		
		initBoxes();
		
		var keyCombos;
		
		//listener.counting_combo("control shift c", function(e, count) {showChat("hwstack");});
		
		keyCombos = 'listener.counting_combo("control shift c", function(e, count) {showChat("hwstack");});listener.counting_combo("command shift c", function(e, count) {showChat("hwstack");});listener.counting_combo("control shift p", function(e, count) {showPrivateChat();});listener.counting_combo("command shift p", function(e, count) {showPrivateChat();});listener.counting_combo("control shift m", function(e, count) {showMailFeed();});'
		eval(keyCombos);
		
		listener.counting_combo("alt c", function(e, count) {openCmd();});
		
		stylizeText();
		
		//yucky + borked (wtf?) format
		/*var rD = new Date(document.lastModified);
		var h = (rD.getHours()>12 ? rD.getHours()-12 : rD.getHours());
		var hod = (rD.getHours()>12 ? "PM" : "AM");
		var d = rD.getMonth()+rD.getDate();
		$("#lastModified").text( h+":"+rD.getMinutes()+" "+hod+" on "+d);*/
		
		//$("*[class^=apprise]").remove();
		
		/*var jason =
		{	"name":"flare",
			"children":
			[
				{"name": "#HumVaughan", "size": $(".humv > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#HumCadigan", "size": $(".humc > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#Span", "size": $(".span > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#MathKramer", "size": $(".mathk > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#MathCW", "size": $(".mathcw > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#Sci", "size": $(".sci > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#Lat", "size": $(".lat > .date:contains("+tomorrow+")").parent().find(".task").length},
				{"name": "#MUN", "size": $(".mun > .date:contains("+tomorrow+")").parent().find(".task").length},
			]
		};*/
	
	jQuery.fn.exists = function(){return this.length>0;}
	
	$(window).resize(function(){
		if(!bugreps){updateLayout();}
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
	
	$.expr[":"].contains = $.expr.createPseudo(function(arg){
    	return function( elem ) {
        	return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});
	
	function showBugReps(){
		bugreps = true;
		$("#bugreports-wrapper").show();
		$("#wrapper").animate({width: "100%"}, 3000, function(){
			adjLayoutForBugReps();
		});
		$("#mystack-wrapper, #thestack-wrapper").animate({width: "10%"}, 100);
		$("#bugreports-wrapper").animate({width: "80%"}, 700);
		console.log("YOU HAVE AWOKEN THE BEAST!!!!!!");
		
		$("body").css("background","#999999 url(http://www.lisamylee.com/online%20portfolio/backgrounds/stars.gif) no-repeat fixed center");
		$("#tiny-header").fadeOut("fast");
	}
	
	function adjLayoutForBugReps(){
		$("body").css("background","#999999 url(http://www.lisamylee.com/online%20portfolio/backgrounds/stars.gif) no-repeat fixed center");
		$("#wrapper").animate({top: "0px"}, 100);
		$("#bugreports-wrapper").css("left","10%");
		$("#bugreports-wrapper").animate({top: "30px"}, 100);
		$("#mystack-wrapper, #thestack-wrapper").css("height", "710px");
		$("#thestack-wrapper").css("left", "0px");
		$("#mystack-wrapper").css("right", "0px");
		$("#mystack-wrapper, #thestack-wrapper").css("position", "absolute");
		$("td").empty();
		
		visualEffects();
	}
	
	function visualEffects(){
		$("body").attr("style","background: #D45D22");
		for(i=0; i<20; i++){
			$("#mystack-wrapper, #thestack-wrapper").effect("shake");
		}
		$("#mystack-wrapper, #thestack-wrapper").effect("bounce", null, 400, function(){
			landingCrew();
		});
		$("body").attr("style","background: #D45D22");
	}
	
	function landingCrew(){
		$("#wrapper").animate({width: "60%"}, 3000, function(){
			//next
		});
		$("#mystack-wrapper, #thestack-wrapper").animate({width: "30%"}, 100);
		$("#bugreports-wrapper").animate({width: "0px"}, 700);
	}
	/* borked :(
	$(".mystack-entry").dblclick(function(){
		if( $(this).attr("style").contains("line-through") ){
			$(this).attr("style","text-decoration: none");
		}
		if( $(this).attr("style").contains("none") ){
			$(this).attr("style","text-decoration: line-through");
		}
	});*/
	
	String.prototype.contains = function(s){return this.indexOf(s) != -1;}

	function add(){
		var key = $("#key").val();
		var task = $("#task").val();
		var date = $("#date").val();
		
		key = key.split("^")[0] + '<sup>' + key.split("^")[1] + '</sup>';
		
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
		
		$("#empty-img").remove();

		//clears old list before drawing new one
		$("#tasks").empty();
	
		for(i=0; i<($.jStorage.index().length); i++){
			key = $.jStorage.index()[i];
			if(key!=mySubsKey){
				val = $.jStorage.get(key).toString().split("@");
			
				task = unescape( val[0] );
				task = task.replace(/<a [^>]+>[^<]*<\/a>/, '');
				date = unescape( val[1] );
	
				delHref = "javascript:delTask('"+key+"')";
				editHref = "javascript:editTask('"+key+"')";
				$row = $( "<tr class='taskL'><td colspan='3' class='mystack-entry'><span>"+date+"</span>&nbsp;<span class='class'>"+key+"</span><br /><span class='task'>"+task+"</span></td><td><a href="+'"'+delHref+'"'+"><i class='fa fa-check-square-o'></i></a><br /><a href="+'"'+editHref+'"'+"><i class='fa fa-edit'></i></a></td></tr>" );
			
				$( "#tasks" ).prepend( $row );
			}
		}
		
		colorize();
		
		if( !($("#mystack-table:has(.taskL)").exists() ) ){
			$("#empty-img-sect").append("<table id='empty-img'><tr><td><img style='zoom:1;filter:alpha(opacity=50);opacity:0.5;' src='http://www.clker.com/cliparts/h/H/m/7/9/J/empty-shoe-box-md.png' /></td></tr></table>");
		}
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
	
	function colorize(){
		//colors entry tags
		$( "span:contains('#humv')" ).css( "color", "#4B8AE3" );
		$( "span:contains('#humc')" ).css( "color", "#4343E6" );
		$( "span:contains('#span')" ).css( "color", "#00007F" );
		$( "span:contains('#mathk')" ).css( "color", "#C321EB" );
		$( "span:contains('#mathc')" ).css( "color", "#369E19" );
		$( "span:contains('#sci')" ).css( "color", "#EB9721" );
		$( "span:contains('#lat')" ).css( "color", "#B20000" );
		$( "span:contains('#mun')" ).css( "color", "#282828");
		
		//colors task tags 
		$( ".class:contains('#humv')" ).css( "color", "#4B8AE3" );
		$( ".class:contains('#humc')" ).css( "color", "#4343E6" );
		$( ".class:contains('#span')" ).css( "color", "#00007F" );
		$( ".class:contains('#mathk')" ).css( "color", "#C321EB" );
		$( ".class:contains('#mathc')" ).css( "color", "#369E19" );
		$( ".class:contains('#sci')" ).css( "color", "#EB9721" );
		$( ".class:contains('#lat')" ).css( "color", "#B20000" );
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
	
	//.replaceText is not working for some reason... ?
	function stylizeText(){
		//$("body *").replaceText( /&/gi, '<b class="amp">' + '&' + '</b>' );
		$("#mystack-table").autoLinks();
	}
	
	$.fn.autoLinks = function() {
		this.each(function() {
			$(this).html(
				$(this).html()
					.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
					.replace(/(^|\s)#(\w+)/g,'$1<a href="javascript:showJustClass('+"'"+'$2'+"'"+')">#$2</a>')
					//.replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>')
			);
		});
		return $(this);
	}
	
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
	
	$("div").hover(
		function() {
			$(this).css("background-color","#D1D1D1");
		}, function() {
			$(this).css("background-color","");
			colorize();
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
		
		var pc = getQueryVariable('pc');
		if(pc){ showPrivateChat(); }
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
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	function openCmd(){
		
		//not working :(
		/*var boxOptions = {
			buttons: {
				confirm: {
					text: 'run',
					className: 'run-command-button',
					action: function(e) {
						runCmd(e.input);
						console.log(e.input);
						Apprise('close');
					}
				},
			},
			input: true,
		};
		
		Apprise('command', boxOptions);*/
		
		runCmd(prompt('Run Command...'));
	}
	
	function runCmd( c ){
		c = c.toString().toLowerCase();
		
		//command: chat [channel]
		if(c.substr(0,5)=='chat '){
			showChat(c.substr(5,696969));
			return;
		}else if(c.substr(0,4)=='chat'){
			showChat('hwstack');
			return;
		}else if(c.substr(0,11)=='pchat'){
			showPrivateChat();
			return;
		}else if(c=='totalrehab'){
			totalrehab();
		}else if(c=='showbugreps'){
			showBugReps();
		}else if(c.substring(0,5)=='echo '){
			alert(c.substring(5,696969));
		}else if(c=='hwstack'){
			return;
		}else if(c=='mytasks'){
			alert('Fool, that is soooooooooo january');
		}else if(c=='command'){
			alert("Yep, that's what this window processes. Might want to execute one.");
		}else if(c=='easteregg'){
			alert('Try running "showbugreps" in this command window.');
		}else if(c.substring(0,5)=='flush'){
			flush_data();
		}else{
			alert('"' + c + '"is not recognized as an internal or external command, operable program or batch file."');
		}
	}
	
	function showChat( channel ){
		$("#wrapper").fadeOut("fast",function(){/*Animation complete.*/});
		$("#tlkio").remove();
		$("#chatstep").remove();
		
		$("*[id$=-icon]").remove();
		$("head").append('<link rel="icon" id="chat-icon" type="image/png" href="http://tlk.io/images/favicon.png">');
		
		$("body").append('<div id="tlkio" data-channel="'+channel+'" data-theme="https://rawgithub.com/hwstack/hwstack.github.io/master/chatStyle.css" style="padding:0px;width:100%;height:100%;display:none;"></div>');
		
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
		target_element.setAttribute('style', 'overflow: none;-webkit-overflow-scrolling:touch;' + current_style);
	
		target_element.appendChild(iframe);
		
		$("#tlkio").fadeIn("fast",function(){/*Animation complete.*/});
		
		$("body").css("margin","0px");
		bodyOnload();
	}
	
	function showPrivateChat(){
		$("#wrapper").fadeOut("fast",function(){/*Animation complete.*/});
		$("#chatstep").remove();
		$("#tlkio").remove();
		
		$("*[id$=-icon]").remove();
		$("head").append('<link rel="icon" id="pchat-icon" type="image/png" href="https://chatstep.com/image/lock.png">');
		
		$("body").append('<div id="chatstep" style="padding:0px;width:100%;height:100%;display:none;"></table>');
		
		var target_element	= document.getElementById('chatstep'),
		iframe				= document.createElement('iframe');
		
		iframe.setAttribute('src', 'https://chatstep.com/');
		iframe.setAttribute('width', '100%');
		iframe.setAttribute('height', '100%');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('style', 'margin-bottom: -8px;');
		
		var current_style = target_element.getAttribute('style');
		target_element.setAttribute('style', 'overflow:none;-webkit-overflow-scrolling:touch;' + current_style);
		
		target_element.appendChild(iframe);
		$("#chatstep").fadeIn("fast",function(){/*Animation complete.*/});
		
		$("body").css("margin","0px");
		bodyOnload();
	}
	
	Element.prototype.prependChild = function(child) { this.insertBefore(child, this.firstChild); };
	
	function showMailFeed(){
		$("#wrapper").fadeOut("fast",function(){/*Animation complete.*/});
		$("#mail-feed").remove();
		
		$("*[id$=-icon]").remove();
		$("head").append('<link rel="icon" id="mail-feed-icon" type="image/png" href="https://mail.google.com/mail/u/0/images/favicon.ico">');
		$("body").append('<div id="mail-feed" style="padding:0px;width:100%;height:100%;display:none;"></div>');
		
		$.ajax({
			type: "GET",
			url: "https://mail.google.com/mail/u/1/feed/atom",
			dataType: "xml",
			success: function(xml) {
				$(xml).find('entry').each(function(){
					var title = $(this).find('title').text();
					var summary = $(this).find('summary').text();
					$("#mail-feed").append("<div class='mail-entry'><h3>"+title+"</h3><p>"+summary+"</p></div>");
				});
			}
		});
	}
	
	function initStatus(){
		$("#status").remove();
		$("body").append('<div id="status" data-theme="https://rawgithub.com/hwstack/hwstack.github.io/master/statusChatStyle.css" style="padding:0px;width:100%;height:100%;display:none;"></div>');
		
		var target_element	= document.getElementById('status'),
		custom_css_path		= target_element.getAttribute('data-theme'),
		iframe				= document.createElement('iframe');
		
		var iframe_src = 'http://embed.tlk.io/xFNwG5rILV';
		iframe_src += ('?custom_css_path=' + custom_css_path);
		
		iframe.setAttribute('src', iframe_src);
		iframe.setAttribute('width', '100%');
		iframe.setAttribute('height', '100%');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('style', 'margin-bottom: -8px;');
		
		var current_style = target_element.getAttribute('style');
		target_element.setAttribute('style', 'overflow: none;-webkit-overflow-scrolling:touch;' + current_style);
		
		target_element.appendChild(iframe);
		
		$("body").css("margin","0px");
		
		$("#status").show();
	}
	
	Array.prototype.move = function (old_index, new_index){
		if (new_index >= this.length) {
			var k = new_index - this.length;
			while ((k--) + 1) {
				this.push(undefined);
			}
		}
		this.splice(new_index, 0, this.splice(old_index, 1)[0]);
		return this; // for testing purposes
	};
	
	//WIP
	/*function moveTaskUp(key){
		//var index = $.jStorage.index().indexOf(key);
		val = $.jStorage.get(key).toString().split("@");
		task = unescape( val[0] );
		date = unescape( val[1] );
	}*/
