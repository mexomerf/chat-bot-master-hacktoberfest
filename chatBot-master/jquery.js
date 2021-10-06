$(document).ready(function () {
	// Vue function call
	main()

	// Regular jQuery
	$('.icon').click(function () {
		$('.icon').toggleClass('act-icon');
	});
	$('#txt').keypress(function (e) {
		let keyCode = (e.keycode ? e.keycode : e.which);
		if (keyCode == 13) {
			let x = $('#txt').val();
			let y = analyse(x);
			if (x != "") {
				$('.content').append('<div class="sent"><div class="m">' + x + '</div></div>');
			}
			$('#txt').val('')
			$(".content").animate({ scrollTop: $('.content').prop("scrollHeight")}, 500);
			botStat.status = "typing..."
			if (y) {
				setTimeout(function () {				
					$('.content').append('<div class="recd"><div class="m">' + y + '</div></div>');
				}, 500)
			}
			botStat.status = "online"
			$(".content").animate({ scrollTop: $('.content').prop("scrollHeight")}, 1000);	
		}
	})
})
