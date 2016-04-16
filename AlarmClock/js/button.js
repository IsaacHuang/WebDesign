$("#canvas").click(function(){
	$("#canvas").hide();
	$("#ZoomIn").hide();
	$("#ZoomOut").hide();
	$("#alarm_set").show();
	$("#hour").show();
	$("#minute").show();
	$("#second").show();
	$("#setup").show();
	$("#alarm_list").show();
	drawClock_alarm();
});
$("#alarm_set").click(function(){
	$("#alarm_set").hide();
	$("#hour").hide();
	$("#minute").hide();
	$("#second").hide();
	$("#setup").hide();
	$("#alarm_list").hide();
	$("#canvas").show();
	$("#ZoomIn").show();
	$("#ZoomOut").show();
});

$("#ZoomIn").click(function(){
	//document.write("放大");
	var height = $("#canvas").height()*2;
	var width = $("#canvas").width()*2;
	if (height < height_device * 0.8 || width < width_device * 0.8) {
		$("#canvas").height(height);
		$("#canvas").width(width);	
	}
});
$("#ZoomOut").click(function(){
	//document.write("縮小");
	var height = $("#canvas").height()*0.5;
	var width = $("#canvas").width()*0.5;
	if (height < 50) {
		height = 50;
		width = height * 2;
	}
	$("#canvas").height(height);
	$("#canvas").width(width);
});

$("#hour").click(function(){
	hour_set++;
	Initialize();
	drawClock_alarmSet();
	//hour=hour%12;
    //hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    //drawHand_alarm(AlarmCtx, hour, AlarmRad*0.5, AlarmRad*0.07);
});

$("#minute").click(function(){
	minute_set++;
	Initialize();
	drawClock_alarmSet();
});

$("#second").click(function(){
	second_set++;
	Initialize();
	drawClock_alarmSet();
});
$("#setup").click(function() {
	Setalarm();
});