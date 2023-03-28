// 'https://perenual.com/api/species/details/[ID]?key=[YOUR-API-KEY]'

let speciesDetail = document.getElementById('speciesDetail');
const getDetails = async () => {

  //  for each element du tableau numid faire le fetch de l'api
  //  détails. puis à chaque réponse aficher la liste
  
  
    // let numId = []
   for (let i=0 ; i<=2 ; i++) 
    {
    let requestString =
      `https://perenual.com/api/species/details/${i+1}?key=sk-Jeg26422c2062a39f369`;
      
      
    
    let data = await fetch(requestString);
    let response = await data.json();
    console.log(response)
}

};

getDetails()