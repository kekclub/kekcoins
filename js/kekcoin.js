// I am sorry for the spaghetti ;-;
//    -installgen2

var sites;
var coinid;

function loadFaucet() {
	if ($(this).attr("class") != "next") {
		coinid = $(this).attr("id");
		$(".rotator h2").text(coinid + ' faucets')
		$(this).css('transform', 'rotateY(180deg)')
	}

	// TODO: Store faucets as JSON and have custom timeouts for each
	if (coinid == "Dogecoin") {
		sites = ["http://testssidddng.fucfffkyou", "http://dogffe.dassdfkek.clubbbb", "https://gooossasdfsdddogle.com"];
	} else if (coinid == "Bitcoin") {
		sites = ["http://tessssnaaik.io", "http://topffff.kek.cluab", "http://duckfdffffuckgo.com", "http://disssaak.dick.dick"];
	} else if (coinid == "Litecoin"){
		sites = ["http://kekassddddsads.nicffeme/ddd", "http://depiaaaaaffffcs.kek"];
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
		$(".empty").css("opacity", "0");
		$(".rotator .embed").html("<iframe width='100%' height='400px' src='" + sites[site_id] + "'>");
	} else {
		current_site++;
		if (current_site > sites.length - 1) {
			$(".next").css("display", "none");
			$(".embed").css("display", "none");
			$(".empty").css("opacity", "1");
			return;
		};
		faucet(current_site);
	}
}

$(".coin img").click(loadFaucet)
$(".next").click(loadFaucet)