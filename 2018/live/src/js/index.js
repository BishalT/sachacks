// scss
import 'animate.css';
import '../scss/index.scss';

const btns = document.querySelectorAll('.btn-click');
const map_overlay_button = document.querySelectorAll('.btn-map');


btns.forEach(function(elem) {
		elem.addEventListener("click", function() {
			switch_active(elem)
		});
});

function switch_active(btn){
    var btn_num = Number(btn.classList[0].substr(-1));
    tb_switch_active(btn,document.querySelector(".tb-" + btn_num));
    (btn_num == 1 || btn_num == 3 ?
        tb_switch_inactive(document.querySelector('.btn-' + (btn_num + 1)),document.querySelector('.tb-' + (btn_num + 1))) :
        tb_switch_inactive(document.querySelector('.btn-' + (btn_num - 1)),document.querySelector('.tb-' + (btn_num - 1))));
}

function tb_switch_active(btn, table){
    table.classList.add("tb-active");
    table.classList.remove("tb-inactive");
    btn.classList.add("btn-active");
    btn.classList.remove("btn-inactive");
}
function tb_switch_inactive(btn, table){
    table.classList.add("tb-inactive");
    table.classList.remove("tb-active");
    btn.classList.add("btn-inactive");
    btn.classList.remove("btn-active");
}

map_overlay_button.forEach(function(elem) {
	elem.addEventListener("click", function() {
		var map_overlay = document.getElementById("map_overlay");
		if (map_overlay.style.display == "none"){
			map_overlay.style.display = "flex";
		}
		else {
			map_overlay.style.display = "none";
		}
	});
});

function timer(date)
{
    var end = new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').childNodes[0].nodeValue = (days < 10 ? "0"+days : days);
        document.getElementById('hours').childNodes[0].nodeValue = (hours < 10 ? "0"+hours : hours);
        document.getElementById('min').childNodes[0].nodeValue = (minutes < 10 ? "0"+minutes : minutes);
        document.getElementById('sec').childNodes[0].nodeValue = (seconds < 10 ? "0"+seconds : seconds);
    }

    if (document.getElementById('days')
            && document.getElementById('hours')
            && document.getElementById('min')
            && document.getElementById('sec')) {
        timer = setInterval(showRemaining, 1000);
    }
}

$(document).ready(function() {
    var hackEnd = '11/18/2018 11:00:00 AM';
    timer(hackEnd);
});
