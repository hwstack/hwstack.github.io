$( "span:contains('#HumVaughan')" ).css( "color", "#4B8AE3" );
$( "span:contains('#HumCadigan')" ).css( "color", "#4343E6" );
$( "span:contains('#Hum&nbsp;')" ).css( "color", "#1F39E0" );
$( "span:contains('#Span')" ).css( "color", "#EB3921" );
$( "span:contains('#MathKramer')" ).css( "color", "#C321EB" );
$( "span:contains('#MathCW')" ).css( "color", "#369E19" );
$( "span:contains('#Sci')" ).css( "color", "#EB9721" );
$( "span:contains('#Lat')" ).css( "color", "#8A8A8A" );
$( "span:contains('#MUN')" ).css( "color", "#282828");


//var toInsert = "<div class="entry"><span>" + dueDate + "</span>&nbsp;<span>" + classTag + "</span><br /><span>" + taskInfo + "</span></div>";
//$(".entry").before(toInsert);
//var win = window.open('about:blank','','height=400,width=400,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');


function add() {
	var key = $("#key").val();
	var task = $("#task").val();
	if(!key){
		alert("Error W00PS: Class must be specified!");
		$("#key").focus();
		return;
	}
	$.jStorage.set(key, task);
	reDraw();
}

function flush_data(){
	$.jStorage.flush();
	reDraw();
}

function reDraw(){
	var task = $("#task").val();
	var del = document.createElement("<a href="javascript:flush_data()">[x]</a>");

	//$("tr[class~=rida]").each(function(c){c.remove();});

	$( "<tr><td>" + task + "</td><td>" + del + "</td></tr>" ).insertAfter( "#tulemused" );
}
