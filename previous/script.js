/**
 * 
 */

function cobainExternal() {
    // 
    /**
     * prompt("INi yang akan muncul di layar")
     */

    // Data Awal
    var name = "How"
    // {
    // }

    console.log(name)

    // Perbarui/Peri
    name = "BIU"

    // LOCK DATA INI
    // Bertipe Immutable
    // Data yang tidak bisa di rubah menggunakan constanct
    {
        const stringName = "asfhasbfjhasbfjhabsfjhabsfjhasbf Iclik Boz" // bisa pake petik 1 '' atau petik ""
        const angka = 1234554;
        const boolean = true // TRUE or FALSE nilai 1 dan 0
        const nulled = null

        // console.log('Panggil Di dalam block =>', angka)
    }

    // console.log('Panggil Di luar block =>', angka)


    // Mutable Variabel menggunakan let 

    {
        let stringLet = "Bekasi"
        stringLet = "Bandung"

        console.log('Panggil Di dalam block =>', stringLet)
    }
    console.log('Panggil Di luar block =>', stringLet)
    console.log('JALAN')

    // alert(stringLet)
    // var number = prompt("Masukkan Angka")

    // if(number % 2 == 0){
    //     alert("Ini Angka Genap")
    // }else{
    //     alert("Angka Ganjil")
    // }
}