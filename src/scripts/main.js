import axios from 'axios';

const main = () => {
    const listSelector = document.querySelector("#list");

    const getListSurahData = () => {
        axios.get('https://equran.id/api/surat')
            .then((responseJson) => {
                renderListSurah(responseJson.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const renderListSurah = (items) => {
        listSelector.innerHTML = `<option value="0">Silakan Pilih Surah</option>`;
        items.forEach((item) => {
            listSelector.innerHTML += `
            <option value="${item.nomor}">${item.nama_latin}</option>
            `;
        });

        listSelector.addEventListener('change', (e) => {
            const inputUser = e.target.value;
            sendData(inputUser);
        });
    };

    const sendData = (result) => {
        document.querySelector("surah-item").data = result;
        document.querySelector("audio-item").data = result;
    };

    document.addEventListener("DOMContentLoaded", () => {
        listSelector.innerHTML = `<option>Loading...</option>`;
        getListSurahData();
    });
};

export default main;
