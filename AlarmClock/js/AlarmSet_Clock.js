$("#alarm_set").css({"display":"none"});
$("#hour").css({"display":"none"});
$("#minute").css({"display":"none"});
$("#second").css({"display":"none"});
$("#setup").css({"display":"none"});
$("#alarm_list").css({"display":"none"});
var CanvasAlarm = document.getElementById("alarm_set");
var AlarmCtx = CanvasAlarm.getContext("2d");
var AlarmRad = CanvasAlarm.height / 2;
AlarmCtx.translate(AlarmRad, AlarmRad);
AlarmRad = AlarmRad * 0.9;
drawClock_alarm();
//setInterval(drawClock, 1000);
var hour_set;
var minute_set;
var second_set;
function Initialize() {
    if (second_set >= 60) {
        second_set = second_set % 60;
        minute_set = minute_set + 1;
    }
    if (minute_set >= 60) {
        minute_set = minute_set % 60;
        hour_set = hour_set + 1;
    }
    if (hour_set > 12) {
        hour_set = hour_set % 12;
    }
}
function drawClock_alarm() {
    AlarmCtx.arc(0, 0, AlarmRad, 0 , 2*Math.PI);
    AlarmCtx.fillStyle = "white";
    AlarmCtx.fill();
    drawFace_alarm(AlarmCtx,AlarmRad);
    drawNumbers_alarm(AlarmCtx, AlarmRad);
    drawTime_alarm(AlarmCtx, AlarmRad);
}
function drawClock_alarmSet(){
	AlarmCtx.arc(0, 0, AlarmRad, 0 , 2*Math.PI);
    AlarmCtx.fillStyle = "white";
    AlarmCtx.fill();
    drawFace_alarm(AlarmCtx,AlarmRad);
    drawNumbers_alarm(AlarmCtx, AlarmRad);
    drawTime_alarmSet(AlarmCtx, AlarmRad);
}
function drawFace_alarm(AlarmCtx, AlarmRad) {
    var grad;

    AlarmCtx.beginPath();
    AlarmCtx.arc(0, 0, AlarmRad, 0, 2*Math.PI);
    AlarmCtx.fillStyle = 'white';
    AlarmCtx.fill();

    grad = AlarmCtx.createRadialGradient(0,0,AlarmRad*0.95, 0,0,AlarmRad*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    AlarmCtx.strokeStyle = grad;
    AlarmCtx.lineWidth = AlarmRad*0.1;
    AlarmCtx.stroke();

    AlarmCtx.beginPath();
    AlarmCtx.arc(0, 0, AlarmRad*0.1, 0, 2*Math.PI);
    AlarmCtx.fillStyle = '#333';
    AlarmCtx.fill();
}
function drawNumbers_alarm(AlarmCtx, AlarmRad) {
    var ang;
    var num;
    AlarmCtx.font = AlarmRad*0.15 + "px arial";
    AlarmCtx.textBaseline="middle";
    AlarmCtx.textAlign="center";
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        AlarmCtx.rotate(ang);
        AlarmCtx.translate(0, -radius*0.85);
        AlarmCtx.rotate(-ang);
        AlarmCtx.fillText(num.toString(), 0, 0);
        AlarmCtx.rotate(ang);
        AlarmCtx.translate(0, radius*0.85);
        AlarmCtx.rotate(-ang);
    }
}
function drawTime_alarm(AlarmCtx, AlarmRad){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour_set = hour;
    minute_set = minute;
    second_set = second;
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand_alarm(AlarmCtx, hour, AlarmRad*0.5, AlarmRad*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand_alarm(AlarmCtx, minute, AlarmRad*0.8, AlarmRad*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand_alarm(AlarmCtx, second, AlarmRad*0.9, AlarmRad*0.02);
}
function drawTime_alarmSet(AlarmCtx,AlarmRad){
	var hour = hour_set;
	var minute = minute_set;
	var second = second_set;
	//hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand_alarm(AlarmCtx, hour, AlarmRad*0.5, AlarmRad*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand_alarm(AlarmCtx, minute, AlarmRad*0.8, AlarmRad*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand_alarm(AlarmCtx, second, AlarmRad*0.9, AlarmRad*0.02);
}

function drawHand_alarm(AlarmCtx, pos, length, width) {
    AlarmCtx.beginPath();
    AlarmCtx.lineWidth = width;
    AlarmCtx.lineCap = "round";
    AlarmCtx.moveTo(0,0);
    AlarmCtx.rotate(pos);
    AlarmCtx.lineTo(0, -length);
    AlarmCtx.stroke();
    AlarmCtx.rotate(-pos);
}