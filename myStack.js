function output(){
        		var date=document.getElementById('date').value;
        		var key=document.getElementById('class').value;
        		var task=document.getElementById('task').value;
        		document.getElementById('output').value="
        		
        			<div class='key'>
        				<span class='date'>"+date+"</span>&nbsp;<span class='class'>"+key+"</span><br />
        				<span class='task'>"+task+"</span></div>";
        	}