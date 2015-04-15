var sites;

$(".coin img").click(function() {
	var coinid = $(this).attr("id");
	$(".rotator h2").text(coinid + ' faucets')

	if (coinid == "Dogecoin") {
		sites = ["doge.doge.doge", "doge.kek.club", "https://gogle.com"];
	} else if (coinid == "Bitcoin") {
		sites = ["http://bitcoin.org", "http://top.kek.club", "http://duckduckgo.com"];
	} else {
		sites = ["http://kekasdasdasdasdads", "dasdads"];
	}

	$(this).css({
		'transform': 'rotateY(180deg)',
	})

	setTimeout(function() {
		$(".rotator").css({
			'transform': 'scale(1)',
		});
		$(".coin img").css({
			'display': 'none',
		});
	}, 200);

	faucet(0)
});

var current_site = 0;
function faucet(site_id) {
	site = sites[site_id];
	site = site.split('/')[2].replace('.', '');
	console.log(site);

	if (window.localStorage["timeout_" + site] == null || window.localStorage["timeout_" + site] < Date.now()) {
		console.log("reached faucet reset -- load again")
		window.localStorage["timeout_" + site] = Date.now() + (1000 * 60 * 60);
		$(".rotator .embed").html("<iframe src='" + sites[site_id] + "'>");
	} else {
		current_site++;
		if (current_site > sites.length - 1) return;
		faucet(current_site);
	}
}
