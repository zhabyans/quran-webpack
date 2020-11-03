class AudioItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set data(data) {
        this.renderAudio(data);
    }

    renderAudio(track) {
        const trackDigit = track.toString().length;
        let num = "";
        if (trackDigit == 1) {
            num = "00";
        } else if (trackDigit == 2) {
            num = "0";
        } else {
            num = "";
        }
        if (track == 0) {
            this.shadowDOM.innerHTML = "";
        } else {
            this.shadowDOM.innerHTML = "";
            this.shadowDOM.innerHTML += ` 
                <audio controls>
                <source src="http://server8.mp3quran.net/afs/${num}${track}.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
                             `;
        }
    }
}
customElements.define("audio-item", AudioItem);
