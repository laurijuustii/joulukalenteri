function saakoAvata(dateString, kuva) {
    var luukku = new Date(dateString);
    var tanaan = new Date();
    console.log(tanaan.getDate());
    console.log(kuva)
    
    console.log(luukku);
    console.log(tanaan);
    if (luukku <= tanaan) {
        console.log("ÄLÄ AVAA VIELÄ")
        document.getElementById(dateString).src =kuva;

    }
    else { console.log("Saa avata")};
    // tähän Date.now():lla muuttujaan talteen tämänhetkinen päivä
    // verrataan parametrin pvm:ää ja nykyistä pvm:ää
    // jos nykynen pvm on suurempi tai yht kuin parametripvm
    // saa avata

    //muuten ei saa

    //!!!!!!!!! vielä esim parametriksi string-muuttuja, jossa kuvan luukkukuvan nimi esim "luukku1.jpg", että saadaan oikea kuva oikeaan kohtaan
}
