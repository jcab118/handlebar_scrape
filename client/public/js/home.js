$(document).ready(function() {
	$.ajax({
		method: 'GET',
		url: '/api/scrape',
	}).then((res) => {
		console.log(res);
		var teamName = $("<h2>", {
			text: res[0].team,
		});

		var pointsPG = $("<h2>", {
			text: res[0].ppg,
		});

		var teamCounter = 0;

		$("#prev-button").hide();

		$("#next-button").click(function() {
			$("#team-info").empty();
			$("#prev-button").show();
			var teamStatsName = res[teamCounter].team;
			var ppgStats = res[teamCounter].ppg;
			teamCounter++;
	
			$("#team-info").append(teamStatsName + " - ").append(ppgStats);

			if (teamCounter < 1) {
				$('#prev-button').hide();
			} else {
				$('#prev-button').show();
			}

				if (teamCounter == (res.length -1)) { // eslint-disable-line
					$("#next-button").hide();
				} else {
					$("#next-button").show();
				}
		});

		$("#prev-button").click(function() {
			$("#team-info").empty();
			var teamStatsName = res[teamCounter].team;
			var ppgStats = res[teamCounter].ppg;
			teamCounter--;
		
			$("#team-info").append(teamStatsName + " - ").append(ppgStats);

			if (teamCounter < 1) {
				$('#prev-button').hide();
			} else {
				$('#prev-button').show();
			}

			if(teamCounter == (res.length - 1)) { // eslint-disable-line
				$('#next-button').hide();
			} else {
				$('#next-button').show();
			}
		});
	});
});