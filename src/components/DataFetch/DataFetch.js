/**
* 
* Function hook that returns fetched data
* @component
* @author   Sanjiv Rana
* @param    {string} url    basic parameter for url checker 
* @param    {props} setStatus   setter variable for useState, to get fetching status
* @returns  {promise} 200   bundled up promise of fetched get in json and status of fetch
*           {promise} else  just send status that something is wrong.
*
*/

// @ts-check

import { config } from './DataFetch.config';
import getParameterFetch from './ParameterFetch';

export default
    async function DataFetch(url, {setStatus}) {
        setStatus("Pulling data");

        const getData = await fetch(!config.baseUrl ? getParameterFetch(url) : `${config.baseUrl}/${getParameterFetch(url)}` );
        const resultsData = await getData.json();
        if (getData.status === 200) {
            setStatus("Data has arrived succesfully");
            return { resultsData, setStatus };
        } else {
            setStatus("Something went wrong")
            return { setStatus };
        }
    };