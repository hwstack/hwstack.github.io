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
	var del = $("<a href='javascript:flush_data()'>[x]</a>");

	$( "<tr><td>" + task + "</td><td>" + del + "</td></tr>" ).insertAfter( "#tulemused" );
}


//var toInsert = "<div class="entry"><span>" + dueDate + "</span>&nbsp;<span>" + classTag + "</span><br /><span>" + taskInfo + "</span></div>";
//$(".entry").before(toInsert);
//var win = window.open('about:blank','','height=400,width=400,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');
