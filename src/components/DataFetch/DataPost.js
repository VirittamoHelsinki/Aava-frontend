// @ts-check
/**
*
* Function hook that posts data
* @author   Sanjiv Rana
* @param    {string} url    basic parameter for url checker 
* @param    {props} setStatus   setter variable for useState, to get fetching status
* @param    {props} sentData   getter variable for useState, to get fetching status
* @returns  {promise} 200   bundled up promise of fetched get in json and status of fetch
* @returns  {promise} else  just send status that something is wrong.
*
*
* @example
* when you call this component from other "higher" component / page, then you have to make 
* useState with getter and setter "sentData". Practical example can be found from "/src/dialog/AddUser.js" dialog component.
*/
import { config } from './DataFetch.config';
import getParameterFetch from './ParameterFetch';

/**
 * TODO
 * Check if postData is empty before sending.
 */

export default
    async function DataPost(url, {setStatus, postData}) {
        setStatus("Posting data");

        const getData = await fetch(!config.baseUrl ? getParameterFetch(url) : `${config.baseUrl}/${getParameterFetch(url)}`,{
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const resultsData = await getData.json();
        if (getData.status === 200) {
            setStatus("Data has been sent succesfully");
            return { resultsData, setStatus };
        } else {
            setStatus("Something went wrong");
            return { setStatus };
        }
        
    };