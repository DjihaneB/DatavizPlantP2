

// let speciesList = document.getElementById('speciesList');
// const getSpeciesList = async () => {
//   let requestString = 'https://perenual.com/api/species-list?page=1&key=sk-LzN664244f20610d3385';
//   let data = await fetch(requestString);
//   let response = await data.json();

//   response.data.forEach((species, index) => {
//     let li = document.createElement('li');
//     li.style.position = 'relative'; // Ajout d'une position relative au li pour pouvoir positionner le bouton en bas

//     let img = document.createElement('img');
//     img.src = species.default_image.original_url;
//     img.alt = `Image de l'espèce ${species.common_name}`;
//     li.appendChild(img);

//     let h2 = document.createElement('h2');
//     h2.textContent = species.common_name;
//     li.appendChild(h2);

//     let p1 = document.createElement('p');
//     p1.textContent = `Nom scientifique : ${species.scientific_name}`;
//     li.appendChild(p1);

//     let p2 = document.createElement('p');
//     p2.textContent = `Autre nom : ${species.other_name}`;
//     li.appendChild(p2);

//     let p3 = document.createElement('p');
//     p3.textContent = `Cycle : ${species.cycle}`;
//     li.appendChild(p3);

//     let p4 = document.createElement('p');
//     p4.textContent = `Arrosage : ${species.watering}`;
//     li.appendChild(p4);

//     let p5 = document.createElement('p');
//     p5.textContent = `Lumière du soleil : ${species.sunlight}`;
//     li.appendChild(p5);

//     let button = document.createElement('button');
//     button.textContent = "Afficher plus d'informations";
//     button.value = index
//     li.appendChild(button);
//     button.addEventListener('click', (event) => {
//       console.log(event.target.value)
//       console.log(response.data[event.target.value])
//       document.getElementById('info').classList.remove('d-none')

//       let pa = document.createElement('p')
//       pa.innerHTML = response.data[event.target.value].cycle

//       document.getElementById('info').appendChild(pa)
     
    

//     });
//     speciesList.appendChild(li);
//   })
// }

// document.getElementById('close').addEventListener('click', (e) => {
//   document.getElementById('info').classList.add('d-none')
// })
// getSpeciesList();


//////////////////////////////////////////////////////////////////////////////////


// let speciesList = document.getElementById('speciesList');
// const getSpeciesList = async () => {
//   let requestString = 'https://perenual.com/api/species-list?page=1&key=sk-SwgX6424a9fa1d97d379';
//   let data = await fetch(requestString);
//   let response = await data.json();

//   response.data.forEach((species, index) => {
//     let li = document.createElement('li');
//     li.style.position = 'relative'; // Ajout d'une position relative au li pour pouvoir positionner le bouton en bas

//     let img = document.createElement('img');
//     img.src = species.default_image.original_url;
//     img.alt = `Image de l'espèce ${species.common_name}`;
//     li.appendChild(img);

//     let h2 = document.createElement('h2');
//     h2.textContent = species.common_name;
//     li.appendChild(h2);

//     let button = document.createElement('button');
//     button.textContent = "Afficher plus d'informations";
//     button.value = index;
//     li.appendChild(button);

//     button.addEventListener('click', (event) => {
//       let list = document.createElement('ul');
//       list.classList.add('species-details');

//       let closeBtn = document.createElement('button');
//       closeBtn.textContent = "Fermer";
//       closeBtn.classList.add('close-btn');
//       closeBtn.addEventListener('click', (event) => {
//         list.remove();
//       });

//       let cycleLi = document.createElement('li');
//       cycleLi.innerHTML = `<strong>Cycle:</strong> ${species.cycle}`;
//       list.appendChild(cycleLi);

//       let wateringLi = document.createElement('li');
//       wateringLi.innerHTML = `<strong>Arrosage:</strong> ${species.watering}`;
//       list.appendChild(wateringLi);

//       let sunlightLi = document.createElement('li');
//       sunlightLi.innerHTML = `<strong>Lumière du soleil:</strong> ${species.sunlight}`;
//       list.appendChild(sunlightLi);

//       list.appendChild(closeBtn);
     
//       li.appendChild(list);
//     });
    
//     speciesList.appendChild(li);
//   });
// };

// getSpeciesList();

////////////////////////////////////////////////////


// let speciesList = document.getElementById('speciesList');
// const getSpeciesList = async () => {
//   let requestString = 'https://perenual.com/api/species-list?page=1&key=sk-Jeg26422c2062a39f369';
//   let data = await fetch(requestString);
//   let response = await data.json();

//   response.data.forEach((species, index) => {
//     let li = document.createElement('li');
//     li.style.position = 'relative'; // Ajout d'une position relative au li pour pouvoir positionner le bouton en bas

//     let img = document.createElement('img');
//     img.src = species.default_image.original_url;
//     img.alt = `Image de l'espèce ${species.common_name}`;
//     li.appendChild(img);

//     let h2 = document.createElement('h2');
//     h2.textContent = species.common_name;
//     li.appendChild(h2);

//     let button = document.createElement('button');
//     button.textContent = "Afficher plus d'informations";
//     button.value = index;
//     li.appendChild(button);

//     button.addEventListener('click', (event) => {
//       let list = document.createElement('ul');
//       list.classList.add('species-details');

//       let closeBtn = document.createElement('button');
//       closeBtn.textContent = "Fermer";
//       closeBtn.classList.add('close-btn');
//       closeBtn.addEventListener('click', (event) => {
//         list.remove();
//       });

//       let p1 = document.createElement('p');
//       p1.textContent = `Nom scientifique : ${species.scientific_name}`;
//       list.appendChild(p1);

//       let p2 = document.createElement('p');
//       p2.textContent = `Autre nom : ${species.other_name}`;
//       list.appendChild(p2);

//       let p3 = document.createElement('p');
//       p3.textContent = `Cycle : ${species.cycle}`;
//       list.appendChild(p3);

//       let p4 = document.createElement('p');
//       p4.textContent = `Arrosage : ${species.watering}`;
//       list.appendChild(p4);

//       let p5 = document.createElement('p');
//       p5.textContent = `Lumière du soleil : ${species.sunlight}`;
//       list.appendChild(p5);

//       list.appendChild(closeBtn);

//       li.appendChild(list);
//     });

//     speciesList.appendChild(li);
//   });
// };

// getSpeciesList();

/////////////////////////////////////


let speciesList = document.getElementById('speciesList');
const getSpeciesList = async () => {
  let requestString = 'https://perenual.com/api/species-list?page=1&key=sk-Jeg26422c2062a39f369';
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

    let button = document.createElement('button');
    button.textContent = "Détails";
    button.value = index;
    li.appendChild(button);

    button.addEventListener('click', (event) => {
      let list = document.createElement('ul');
      list.classList.add('species-details');

      let closeBtn = document.createElement('button');
      closeBtn.textContent = "🌱 ➤  clicK";  //"Fermer"
      closeBtn.classList.add('close-btn');
      closeBtn.addEventListener('click', (event) => {
        list.remove();
      });

      let p1 = document.createElement('p');
      p1.textContent = `Nom scientifique : ${species.scientific_name}`;
      list.appendChild(p1);

      let p2 = document.createElement('p');
      p2.textContent = `Autre nom : ${species.other_name}`;
      list.appendChild(p2);

      let p3 = document.createElement('p');
      p3.textContent = `Cycle : ${species.cycle}`;
      list.appendChild(p3);

      let p4 = document.createElement('p');
      p4.textContent = `Arrosage : ${species.watering}`;
      list.appendChild(p4);

      let p5 = document.createElement('p');
      p5.textContent = `Lumière du soleil : ${species.sunlight}`;
      list.appendChild(p5);

      list.appendChild(closeBtn);

      li.appendChild(list);
    });

    speciesList.appendChild(li);
  });
};

getSpeciesList();



