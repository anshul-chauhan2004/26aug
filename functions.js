// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
    var current = new Date(); // Get the current date and time
    var seconds = Math.floor((current - date) / 1000); // Calculate the difference in seconds

    var days = Math.floor(seconds / (3600 * 24)); // Calculate the number of days
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600); // Calculate the number of hours
    seconds = seconds % 3600;

    var minutes = Math.floor(seconds / 60); // Calculate the number of minutes
    seconds = seconds % 60; // Remaining seconds

    // Formatting to add leading zeros if needed
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span> Seconds <span class=\"digit\">" + seconds + "</span>"; 
    $("#clock").html(result);

    var text = "HAPPY 3RD YEAR ANNIVERSARY TO YOU BHAVV! 🥰 ";
    $("#message-box").html(text);
}

