window.onload = function(){
    draw();
};

function draw() {
    document.write("<table><tr><td><input type='text' placeholder='due date' id='date'/></td><td rowspan='3'><textarea placeholder='output' rows='6' id='output'></textarea></td></tr><tr><td><input type='text' placeholder='class' id='class'/></td></tr><tr><td><textarea placeholder='task' id='task'></textarea></td></tr><tr><td colspan='2'><button onclick='output()'></button>");
}

function output(){
    var date=document.getElementById('date').value;
    var key=document.getElementById('class').value;
    var task=document.getElementById('task').value;
    document.getElementById('output').value="<div class='key'><span class='date'>"+date+"</span>&nbsp;<span class='class'>"+key+"</span><br /><span class='task'>"+task+"</span></div>";
}
