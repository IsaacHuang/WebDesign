//增加表單的資料
var count=0;
function Setalarm(){
	//插入列
	$("table").append("<tr id="+count+"></tr>");
	//插入欄位
	var id="#"+count;
	if (count==0) {
		//插入數值
		$(id).append('<td id="hrs">'+hour_set+'</td>');
		$(id).append('<td id="min"">'+minute_set+'</td>');
		$(id).append('<td id="sec">'+second_set+'</td>');
	}else{
		$(id).append('<td id="hrs_'+count+'">'+hour_set+'</td>');
		$(id).append('<td id="min_'+count+'">'+minute_set+'</td>');
		$(id).append('<td id="sec_'+count+'">'+second_set+'</td>');

	}
	count++;
	/*console.log("count:"+count);
	console.log("hour_set:"+hour_set);
	console.log("minute_set:"+minute_set);
	console.log("second_set:"+second_set);*/
}
function alarm() {
	var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour = hour % 12;
    var alarm_hour ;
    var alarm_minute ; 
    var alarm_second ; 
    for (var i = 1; i <= count; i++) {
    	switch(i){
    		case 1 :
    			alarm_hour = document.getElementById('hrs').innerHTML;
    			alarm_minute = document.getElementById('min').innerHTML;
    			alarm_second = document.getElementById('sec').innerHTML;
    			break;
    		default:
    			for (var j = 0; j < 3; j++) {
    				switch (j){
    					case 0 :
    						alarm_hour = document.getElementById('alarm_list').rows[i].cells[j];
    						alarm_hour = alarm_hour.innerHTML;
    						break;
    					case 1 :
    						alarm_minute = document.getElementById('alarm_list').rows[i].cells[j];
    						alarm_minute = alarm_minute.innerHTML;
    						break;
    					case 2 :
    						alarm_second = document.getElementById('alarm_list').rows[i].cells[j];
    						alarm_second = alarm_second.innerHTML;
    						break;
    				}
    			}
    			break;
    	}
    	/*console.log("alarm_hour:"+alarm_hour);
    	console.log("alarm_minute:"+alarm_minute);
    	console.log("alarm_second:"+alarm_second);
    	console.log("hour:"+hour);
    	console.log("minute:"+minute);
    	console.log("second:"+second);*/
    	if (minute == alarm_minute) {
    		if (second >= alarm_second) {
    			if (hour == alarm_hour) {
    				//document.write(alarm_hour+":"+alarm_minute+":"+alarm_second);
    				window.alert("Alarm !"+hour+":"+minute+":"+second);
    			}
    		}
    	}
    }
}