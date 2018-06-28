window.addEventListener('load', function () {
    let dockTime = document.getElementById('dock-time');

    if(dockTime) {
		let updateHorloge = function () {
			let date = new Date();
			dockTime.innerText = date.getHours() + ':' + date.getMinutes();
		};

		updateHorloge();

		setInterval(updateHorloge, 10000);
    }
});
