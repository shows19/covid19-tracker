import { covidApi } from './covidApi'

export const globalData = async () => {
   try {
        const childUrl = `summary`;
        // destructuring retuned data to get only required info.
        // returning Date, Global Object, Contry wise object
        const { Date, Global: { TotalConfirmed, TotalDeaths, TotalRecovered }, Countries } = await covidApi({ childUrl });

        const data = {
            TotalConfirmed,
            TotalRecovered,
            TotalDeaths,
            Date,
            Countries,
            Error: false,
        };

        return data;
    } catch (error) {
        console.log("Error1: ",error);
        const initialData = {
            TotalConfirmed: 0,
            TotalRecovered: 0,
            TotalDeaths: 0,
            Date: '',
            Countries: [{Country:'', CountryCode:''}],
            Error: true,
        }
        return initialData;
   } 

}
