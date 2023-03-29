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


// let speciesList = document.getElementById('speciesList');

//       const getSpeciesList = async () => {
//         let requestString =
//           'https://perenual.com/api/species-list?page=1&key=sk-1iiW6422fd6045145374';

//         let data = await fetch(requestString);
//         let response = await data.json();
//         console.log(response)
//         response.data.forEach((species) => {
//           let li = document.createElement('li');
//           let img = document.createElement('img');
        
//           img.src = species.default_image.original_url;
//           if (species.id==2) {
//               img.src == species.default_image.original_url
//           }
//         else if (species.default_image.original_url == 'https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg'){
//               img.src = "image.png"
//           } 
        
//           img.alt = `Image de l'espèce ${species.common_name}`;
//           li.appendChild(img);

//           let h2 = document.createElement('h2');
//           h2.textContent = species.common_name;
//           li.appendChild(h2);

//           let p1 = document.createElement('p');
//           p1.textContent = `Nom scientifique : ${species.scientific_name}`;
//           li.appendChild(p1);

//           let p2 = document.createElement('p');
//           p2.textContent = `Autre nom : ${species.other_name}`;
//           li.appendChild(p2);

//           let p3 = document.createElement('p');
//           p3.textContent = `Cycle : ${species.cycle}`;
//           li.appendChild(p3);

//           let p4 = document.createElement('p');
//           p4.textContent = `Arrosage : ${species.watering}`;
//           li.appendChild(p4);

//           let p5 = document.createElement('p');
//           p5.textContent = `Lumière du soleil : ${species.sunlight}`;
//           li.appendChild(p5);

//           let imgF = document.createElement('img');
//           imgF.src = "arrow_forward_FILL0_wght400_GRAD0_opsz48.png";
//           li.appendChild(imgF);

//           speciesList.appendChild(li);
//         });
//       };
//       getSpeciesList();
/////////////////////////////////////////////////////////////////////////////////
// button.style.position = 'absolute';
// button.style.bottom = '10px'; // positionné en bas
// button.style.right = '50px'; // positionné à droite
// button.style.backgroundColor = '#468653'; // couleur de fond
// button.style.color = 'white'; // couleur du texte
// button.style.padding = '10px 15px'; // ajout de rembourrage
// button.style.border = 'none'; // suppression de la bordure
// button.style.borderRadius = '5px'; // ajout d'arrondi
// button.style.cursor = 'pointer'; // ajout d'un curseur
// button.addEventListener('mouseover', () => { // effet de survol
//   button.style.backgroundColor = '#b6ceba'; // changement de couleur de fond
// });
// button.addEventListener('mouseout', () => { // fin de l'effet de survol
//   button.style.backgroundColor = '#468653'; // réinitialisation de la couleur de fond
// });
////////////////////////////////////////////////////////////////////////////////////
// let arrow = document.createElement('span');
    // arrow.innerHTML = '&#8594;'; // Le code HTML de la flèche pointant vers la droite
    // arrow.style.marginLeft = '18px'; // Ajout de la marge à gauche
    // arrow.style.fontSize = '30px'; // Augmentation de la taille de police
    // li.appendChild(arrow);
///////////////////////////////////////////////////////////////////////////////////    

let speciesDetail = document.getElementById('speciesDetail');

const getDetails = async () => {
    for (let i = 0; i <= 1; i++) { 
    let li = document.createElement('li');

    let requestString =`https://perenual.com/api/species/details/${i+1}?key=sk-2dGy6424a98472811391`;

    let data = await fetch(requestString);
    let response = await data.json();
    console.log(response)

    // default_image, common_name, type, edible_fruit, medicinal_use, origin
    let img = document.createElement('img')
    img.src = response.default_image.original_url;
    li.appendChild(img)

    let h2 = document.createElement('h2');
    h2.textContent = response.common_name;
    li.appendChild(h2);

    let p = document.createElement('p');
    p.textContent = response.type;
    li.appendChild(p);

    let p2 = document.createElement('p');
    p2.textContent = `Fruit comestible : ${response.edible_fruit} `;
    li.appendChild(p2);
    
    let p3 = document.createElement('p');
    p3.textContent = response.medicinal_use;
    li.appendChild(p3);

    let p4 = document.createElement('p');
    p4.textContent = response.origin;
    li.appendChild(p4);
   
    speciesDetail.appendChild(li);
  }
};

getDetails()

let speciesList = document.getElementById('speciesList');
const getSpeciesList = async () => {

  let requestString = 'https://perenual.com/api/species-list?page=1&key=sk-2dGy6424a98472811391';



  let data = await fetch(requestString);
  let response = await data.json();

  response.data.forEach((species, index) => {
    let li = document.createElement('li');
    li.style.position = 'relative'; // Ajout d'une position relative au li pour pouvoir positionner le bouton en bas

    let img = document.createElement('img');
    img.src = species.default_image.original_url;
    img.alt = `Image de l'espèce ${species.common_name}`;
    li.appendChild(img);

    let h2 = document.createElement('h2');
    h2.textContent = species.common_name;
    li.appendChild(h2);

    // let p1 = document.createElement('p');
    // p1.textContent = `Nom scientifique : ${species.scientific_name}`;
    // li.appendChild(p1);

    // let p2 = document.createElement('p');
    // p2.textContent = `Autre nom : ${species.other_name}`;
    // li.appendChild(p2);

    // let p3 = document.createElement('p');
    // p3.textContent = `Cycle : ${species.cycle}`;
    // li.appendChild(p3);

    // let p4 = document.createElement('p');
    // p4.textContent = `Arrosage : ${species.watering}`;
    // li.appendChild(p4);

    // let p5 = document.createElement('p');
    // p5.textContent = `Lumière du soleil : ${species.sunlight}`;
    // li.appendChild(p5);


    let button = document.createElement('button');
    button.textContent = "Afficher plus d'informations";
    button.value = index
    li.appendChild(button);
    button.addEventListener('click', (event) => {
      console.log(event.target.value)
      console.log(response.data[event.target.value])
      const getInfo = document.getElementById('info')
      getInfo.classList.remove('d-none');

      let p1 = document.createElement('span');
      p1.id = "scientific_name";
      p1.innerHTML = `Nom scientique : ${response.data[event.target.value].scientific_name}`;
      getInfo.appendChild(p1);
      
      let p2 = document.createElement('span');
      p2.id = "other_name"
      p2.innerHTML = `Aussi appelé : ${response.data[event.target.value].other_name}`;
      getInfo.appendChild(p2);
  
      let p4 = document.createElement('span');
      p4.id = "watering"
      p4.textContent = `Arrosage conseillé : ${response.data[event.target.value].watering}`;
      getInfo.appendChild(p4);
  
      let p5 = document.createElement('span');
      p5.id = "sunlight"
      p5.textContent = `Exposition optimale : ${response.data[event.target.value].sunlight}`;
      getInfo.appendChild(p5);
      
      let p3 = document.createElement('span');
      p3.id = "cycle"
      p3.textContent = `Cycle de vie : ${response.data[event.target.value].cycle}`;
      getInfo.appendChild(p3);
      
      // let pa = document.getElementById("cycle")
      // pa.innerHTML = response.data[event.target.value].cycle
      // document.getElementById('info').appendChild(pa)
      
    

    });

    speciesList.appendChild(li);
  })
}

document.getElementById('close').addEventListener('click', (e) => {
  document.getElementById('info').classList.add('d-none')
})

getSpeciesList();

