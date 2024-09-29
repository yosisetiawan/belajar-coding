// const btnElement = document.getElementById('btn')

// btnElement.addEventListener('click', triggerBtn)

// function triggerBtn(){
//     btnElement.innerHTML = "Text Sesudah"

//     const paragraph = document.createElement('p')
//     paragraph.textContent = "<strong>Halo Jawca</strong>"

//     document.body.append(paragraph)
// }

const countElement = document.getElementById('count')

const btnMengurangi = document.getElementById('kurang-angka')
const btnTambah = document.getElementById('tambah-angka')

btnTambah.addEventListener('click', function (){
   // Ambil Data Saat ini
    let currentNumber = countElement.textContent

    // Kalkulasi Data Saat ini ditambah 1
    /**
     * Penambahan = +
     * Pengurangan = -
     * Perkalian = *
     * pembagian = /
     */
    // Proses Kalkulasi
    currentNumber = parseInt(currentNumber) * 2

     // Ubah Angka yang sudah di kalkulasi dengan hasil penambahan
    countElement.innerText = currentNumber 
})