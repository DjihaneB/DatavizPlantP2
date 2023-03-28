// let nameS = document.getElementById('nameS')
// let name = document.getElementById('name')
// let image = document.getElementById("image")
// const img = async() => {

//     let requestString =`https://perenual.com/api/species-list?page=1&key=sk-p3P66421ed478287c306`;

//     let data = await fetch (requestString);
//     console.log(data);

//     let response = await data.json();
//     console.log(response)

//     image.src=response.data[2].default_image.original_url
//     name.textContent = `${response.data[1].common_name}`
//     nameS.textContent = `${response.data[1].scientific_name
//     }`

// };
// img()


let speciesList = document.getElementById('speciesList');

      const getSpeciesList = async () => {
        let requestString =
          'https://perenual.com/api/species-list?page=1&key=sk-Jeg26422c2062a39f369';

        let data = await fetch(requestString);
        let response = await data.json();

        response.data.forEach((species) => {
          let li = document.createElement('li');
          let img = document.createElement('img');
        //   if (species.default_image && species.default_image.original_url ==species.id[2]){
        //     img.src = "image.png";
        //   } else{
        //   img.src = species.default_image.original_url;
        // }
/// alternative : ?
        img.src = species.default_image.original_url;
        if (species.id==2) {
            img.src == species.default_image.original_url
        }
       else if (species.default_image.original_url == 'https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg'){
            img.src = "image.png"
        } 
        


          img.alt = `Image de l'espèce ${species.common_name}`;
          li.appendChild(img);

          let h2 = document.createElement('h2');
          h2.textContent = species.common_name;
          li.appendChild(h2);

          let p1 = document.createElement('p');
          p1.textContent = `Nom scientifique : ${species.scientific_name}`;
          li.appendChild(p1);

          let p2 = document.createElement('p');
          p2.textContent = `Autre nom : ${species.other_name}`;
          li.appendChild(p2);

          let p3 = document.createElement('p');
          p3.textContent = `Cycle : ${species.cycle}`;
          li.appendChild(p3);

          let p4 = document.createElement('p');
          p4.textContent = `Arrosage : ${species.watering}`;
          li.appendChild(p4);

          let p5 = document.createElement('p');
          p5.textContent = `Lumière du soleil : ${species.sunlight}`;
          li.appendChild(p5);

        //   let p6 = document.createElement('p');
        //   p6.textContent = `Espèce : ${species.species}`;
        //   li.appendChild(p6);

          speciesList.appendChild(li);
        });
      };

      getSpeciesList();
