// I am sorry for the spaghetti ;-;
//    -installgen2

var sites;
var coinid;

// TODO: improve animations and make animations for returning home
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		$(".top").css('transform', 'none');
	}, 500);
	setTimeout(function() {
		$(".coin img").css('opacity', '1');
	}, 800);
	setTimeout(function() {
		$("footer").css('transform', 'none');
		$(".coin img").css('transition-duration', '0.3s');
	}, 950);
});

function loadFaucet() {
	if ($(this).attr("class") != "next") {
		coinid = $(this).attr("id");
		$(".rotator h2").text(coinid + ' faucets')
		$(this).css('transform', 'rotateY(180deg)')
	}

	// TODO: Store faucets as JSON and have custom timeouts for each
	if (coinid == "Dogecoin") {
		sites = ["http://dogetest111.test", "http://dogetest222.test", "http://dogetest333.test"];
	} else if (coinid == "Bitcoin") {
		sites = ["http://bittest111.test", "http://bittest222.test", "http://bittest333.test"];
	} else if (coinid == "Litecoin"){
		sites = ["http://litetest111.test", "http://litetest222.test", "http://litetest333.test"];
	}

	setTimeout(function() {
		$(".rotator").css('transform', 'scale(1)');
		$(".coin img").css('display', 'none');
	}, 250);

	faucet(0)
}

var current_site = 0;
function faucet(site_id) {
	site = sites[site_id];
	site = site.split('/')[2].replace('.', '');
	console.log(site);

	if (window.localStorage["timeout_" + site] == null || window.localStorage["timeout_" + site] < Date.now()) {
		window.localStorage["timeout_" + site] = Date.now() + (1000 * 60 * 60);
		$(".empty").css("display", "none");
		$(".rotator .embed").html("<iframe width='100%' height='400px' src='" + sites[site_id] + "'>");
	} else {
		current_site++;
		if (current_site > sites.length - 1) {
			$(".next").css("display", "none");
			$(".embed").css("display", "none");
			$(".empty").css("display", "block");
			return;
		};
		faucet(current_site);
	}
}

$(".coin img").click(loadFaucet)
$(".next").click(loadFaucet)