var firstIntDiff = parseInt(500000); //倒计时总秒数量
    var secondIntDiff = parseInt(5000); //倒计时总秒数量

    function timer(intDiff,idName) {
        window.setInterval(function() {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值     
            if (intDiff > 0) {
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $(idName+' .day_show').html(day + "天");
            $(idName+' .hour_show').html('<s id="h"></s>' + hour + '时');
            $(idName+' .minute_show').html('<s></s>' + minute + '分');
            $(idName+' .second_show').html('<s></s>' + second + '秒');
            intDiff--;
        }, 1000);
    }

    $(function() {
        timer(firstIntDiff,'#first');
        timer(secondIntDiff,'#second');
    });
    
$("#time .time1").click(function(){
	$("#time .time1").css({"background":"#ca0915"});
	$("#time .time2").css({"background":"#2E2E2E"});
	$("#time .time3").css({"background":"#2E2E2E"});
})
$("#time .time2").click(function(){
	$("#time .time2").css({"background":"#ca0915"});
	$("#time .time1").css({"background":"#2E2E2E"});
	$("#time .time3").css({"background":"#2E2E2E"});
})
$("#time .time3").click(function(){
	$("#time .time3").css({"background":"#ca0915"});
	$("#time .time1").css({"background":"#2E2E2E"});
	$("#time .time2").css({"background":"#2E2E2E"});
})

$("#time .time1").click(function(){
	$("#zt1").css({"display":"block"});
	$("#zt2").css({"display":"none"});
	$("#zt3").css({"display":"none"});
})
$("#time .time2").click(function(){
	$("#zt2").css({"display":"block"});
	$("#zt1").css({"display":"none"});
	$("#zt3").css({"display":"none"});
})
$("#time .time3").click(function(){
	$("#zt3").css({"display":"block"});
	$("#zt1").css({"display":"none"});
	$("#zt2").css({"display":"none"});
})

