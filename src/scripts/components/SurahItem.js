class SurahItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set data(data) {
    if (data == 0) {
      this.shadowDOM.innerHTML = ``;
    } else {
      this._data = data;
      this.getItemSurahData(data);
    }
  }

  async getItemSurahData(num) {
    try {
      this.shadowDOM.innerHTML = `<h1>Loading...</h1>`;
      const response = await fetch(`https://equran.id/api/surat/${num}`);
      const responseJson = await response.json();
      this.renderItemSurah(responseJson);
    } catch (error) {
      console.log(error);
    }
  }

  renderItemSurah(surah) {
    this.shadowDOM.innerHTML = `
    <style>
    .circle {
      background: #81b214;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      color: #444;
      display: inline-block;
      font-weight: bold;
      line-height: 40px;
      margin-right: 5px;
      text-align: center;
      width: 40px;
      font-size:17px;
      margin-left:10px;
    }
    :host{
      direction: rtl;
      border: 1px solid #206a5d;
      border-radius:20px;
      background-color:#f1f1e8;
    }
    .text{
      color:#206a5d;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 30px;
      line-height: 55px;
    }
    .text-title{
      text-align:center;
      color:white;
      border-radius:20px;
      background-color:#206a5d;
      width:300px;
      padding:10px 0px;
      margin: 30px auto;
    }
    .centered-text{
      text-align:center;
      direction:ltr;
      margin:0px;
      color:#81b214;
      margin-bottom:20px;
      text-transform: uppercase;
    }
    </style>
    `;
    if (surah.status) {
      this.shadowDOM.innerHTML += ` <h2 class="text-title">Surah ${surah.nama_latin}</h2>`;
      this.shadowDOM.innerHTML += ` <h4 class="centered-text">${surah.tempat_turun} - ${surah.jumlah_ayat} Ayat</h4>`;

      surah.ayat.forEach((item) => {
        this.shadowDOM.innerHTML += `
      <span class="text">
      ${item.ar}
      </span> 
      <span class="circle">
      ${item.nomor}
      </span>
     `;
      });

      this.shadowDOM.innerHTML += `
    <div style="margin-bottom:30px"> </div>
    `;
    } else {
      this.shadowDOM.innerHTML = "";
    }
  }
}

customElements.define("surah-item", SurahItem);
