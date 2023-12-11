function dechiffrer(input) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mot = "";
    let position = 0;
  
    //Nou met code chifre a nan yon tablo
    let tableau = input.split(" ");
  
    for (let i = 0; i < tableau.length; i++) {
      let charactere, deplacement, start;
      
      //Nou bay karakte a siy lan < oswa >
      charactere = tableau[i][0];

      //Si tout fwa chif deplasman ta dwe genyen 2 karakte tankou >13J
    if(tableau[i].length == 4){
        //N ap pran chen komanse nan indic 1 an rive nan 3(Men l pap pran 3)
        deplacement = parseInt(tableau[i].slice(1,3));
        //Nou ba start denye indice lan
        start = tableau[i][3];
    }else{
        deplacement = parseInt(tableau[i][1]);
        start = tableau[i][2];
    }

    //Kondisyon si siy lan > oswa li <
      let direction;
      if (charactere === ">") {
        direction = 1;
      } else {
        direction = -1;
      }
  
      //Kondisyon pou kote l ap komanse konte a
      if (start === "") {
        position = 0;
      } else {
        position = alphabet.indexOf(start);
      }
  
      if (direction === -1 && position === 0) {
        position = alphabet.length;
      }
  
      //Si direksyon an pozitif
      if (direction === 1) {
        position += deplacement; // Déplacement vers la droite
      } 
      else {    //Sinon
        position -= deplacement; // Déplacement vers la gauche
      }

      // Kalkil nouvo pozizyon an an fonksyon pozisyon a
         let nouvellePosition = (position + alphabet.length) % alphabet.length;

        // N ap ajoute let la a chak fwa
        mot += alphabet[nouvellePosition];
    }
  
    return mot;
  }
  

  //Test
  console.log(dechiffrer(">5K <0Y <3W <3K <6U <3Q")); // "PYTHON"
  console.log(dechiffrer("<14P <1V <1H >4O")); // "BUGS"
  console.log(dechiffrer("<1T >7H >3C <5Y >13J <2C <5W >4A")); // "SOFTWARE"
  console.log(dechiffrer(">3A >0A <1U <10K >1A <9J <0S <16U")); // "DATABASE"
  