//mengambil data dari API
async function tombol() {
    for (let i = 1; i<37; i++) {
      const response = await
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
        method: "GET"
      })
      .then((res) => {
        return res.json();
      })
      .then ((data) => {
        //memvariabelkan data yang diambil
        const pokemon = {
          nomor : data.id,
          nama : data.name,
          gambar : data.sprites.front_default,
          tipe : data.types[0].type.name
        };
        console.log(pokemon.nama);

        //membuat kerangka dan mencetak
        let jenis = pokemon.tipe;
        document.getElementById("hasil")
        .insertAdjacentHTML
        ('beforeend', 
        `<div class= "kartu ${jenis}" >
        <p>${pokemon.nomor}: ${pokemon.nama}</p>
        <img src = "${pokemon.gambar}">
        <p>Type: ${pokemon.tipe}
        </div>`) 
        
      })

    }

  }
