import axios from 'axios';

// data api calls
// console.log("data#axios.get#localhost:9000 -> ", axios.get('http://localhost:9000/food'))

const dataFetch = async () => {
    let response = await axios.get('http://localhost:9000/food')
    try {
        // Testing our axios fetches
        // console.log("api#data#axios#response.data.data ->", response.data.data);
        // console.log("api#data#axios#response.data#map ->",
        // response.data.data.map(item => ({
        //     id: item.id,
        //     name: item.name_translations.fr
        // })));
        return response.data.data.map(item => ({
            id: item.id,
            name: item.name_translations.fr
        }))
    }
    catch(error) {
        console.log(error); // catches both errors
    };

    return response;
}

export const getData = () => dataFetch().then(response => {return response})