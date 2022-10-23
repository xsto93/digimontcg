import axios from 'axios';

export const getDigimon  = async (form)  => {

    console.log('Busqueda de digimon', form)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      try {
          const resp = await axios.get("https://digimoncard.io/api-public/search.php?sort=name&sortdirection=asc" + getParameters(form), requestOptions);
          return resp?.data || [];
      } catch(err) {
        return [];
      }
}

export const getCollectedCardsFromDb = async () => {

    try{
        const resp = await axios.get("http://localhost:3100/cards");
        console.log(resp);
    }catch(err){
        console.error(err);
        return []
    }
}

const getParameters = (form) => {
    let params = "";

    if(form) {
        Object.keys(form).map(key => {
            switch(key) {
                case 'name': 
                    params += form[key] && form[key] !== "" ? `&n=${form[key]}` : "";
                    break;
                case 'number': 
                    params += form[key] && form[key] !== "" ? `&card=${form[key]}` : "";
                    break;
                case 'rarety': 
                    params += form[key] && form[key] !== "" ? `&rarety=${form[key]}` : "";
                    break;
                default: 
                    params += form[key] && form[key] !== "" ? `&${key}=${form[key]}` : "";
                    break;
            }

            return;
        })
    }

    return params;
} 