var audio = new Audio("audio/The_Legend_of_Edmund_Bilson.mp3")
audio.loop = true

function toggleAudio() {
	if (audio.currentTime == 0) {
		audio.play()
	}
	else if (audio.currentTime > 0 && audio.paused) {
		audio.play()
	}
	else if (audio.currentTime > 0 && !audio.paused) {
		audio.pause()
	}
}

$("#image").on("click", function() {
	toggleAudio()
})

toggleAudio()