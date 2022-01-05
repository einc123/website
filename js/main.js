
/* Discord Status thing made by itspolar.dev ok, thanks, cool, i know! */

function gS() {
	$.getJSON("https://api.lanyard.rest/v1/users/344910940401303553", data => {
		data = data.data;
		if (data.active_on_discord_mobile && !data.active_on_discord_desktop) {
			$("#online-status").html(`<span style="color: #CF6500">⬤</span> ON MOBILE`);
		} else if (data.active_on_discord_desktop) {
			$("#online-status").html(`<span style="color: #00760B">⬤</span> ONLINE`);
		} else {
			$("#online-status").html(`<span style="color: #760000">⬤</span> OFFLINE`);
		}
        
	});
}

gS();

setInterval(gS, 10000);