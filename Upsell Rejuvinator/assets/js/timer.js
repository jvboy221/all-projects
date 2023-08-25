
$( document ).ready(function() {
    if (document.getElementById("countdown").innerHTML == 'Your Order Is Reserved For Ten Minutes <span class="ff-NimbusSan-Bol"> 10:00 </span>') {
        var timeleft = 60 * 10;
        var downloadTimer = setInterval(function function1(){
            var timer = timeleft, minutes, seconds;
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            //document.getElementById("countdown").innerHTML = "Your Order Is Reserved For Ten Minutes <span>" + minutes + ":" + seconds + "</span>";
            var countElem = document.getElementById("countdown");
            countElem.innerHTML = 'Your Order Is Reserved For Ten Minutes <span class="ff-NimbusSan-Bol"> '+  minutes + ':' + seconds  +' </span>';

            timeleft -= 1;
            var url = window.location.href;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "<span class='lost'>You have lost your place in line & discount has expired. <a href='"+ url +"'>Click here</a> to see if more inventory is still available for you today.</span>"
            }
        }, 1000);
        
    }
});