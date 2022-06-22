const loadingPoints = document.querySelector('.loading')

function loading() {
	const hihi = setInterval(() => {
		loadingPoints.innerHTML = '.'
		setTimeout(() => {
			loadingPoints.innerHTML = '..'
		}, 500)
		setTimeout(() => {
			loadingPoints.innerHTML = '...'
		}, 1000)
	}, 1500)

	setTimeout(() => {
		clearInterval(hihi)
	}, 4500)
}

function stopLoading() {
	loadingPoints.innerHTML = ''
}

setTimeout(() => {
	stopLoading()
}, 17000)

setTimeout(() => {
	loading()
}, 11000)
