import apiBase from './apiBase'

export const covidApi = async ( {childUrl} ) => {
    
    // it will append base url to the child url
    // baseUrl= https://api.covid19api.com/
    // childUrl = summary/
    // result = https://api.covid19api.com/summary

    let result='';

    // apibase using axios
    await apiBase.get(`${childUrl}`)
    .then( res => {
        result = res.data;
        //console.log("Result: ",result);
    })
    .catch(res => {
        //result = res;
        console.log("Result: ",res);
    });

    return result;
}
