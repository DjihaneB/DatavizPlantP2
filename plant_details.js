// 'https://perenual.com/api/species/details/[ID]?key=[YOUR-API-KEY]'

let speciesDetail = document.getElementById('speciesDetail');

const getDetails = async () => {
     for (let i = 0; i <= 30; i++) { 
    let li = document.createElement('li');
    let requestString =

      `https://perenual.com/api/species/details/${i+1}?key=sk-huqj6424381e9dfbe381`;



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
