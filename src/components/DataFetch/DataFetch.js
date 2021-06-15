/*
*
* @@ Datafetch
* - use props from parents 
* - checks which url prop parameter is provided
* - handles errors too!
*
*/

export default
    async function DataFetch(url, {setData, setStatus}) {
        // checks out if url parameter matches to anything and outputs it
        function getParameterFetch(fetchaddress) {
            return {
                dashboard: "", usermanagement: "", presentation: "",
                technology: "", employee: "", project: "",
                attachment: "", user: "", projectdeveloper: "",
                createproject: "", createprojectdeveloper: "",
                employeeforpresentation: ""
            }[fetchaddress]
        }
        
        setStatus("Pulling data");
        const getData = await fetch(getParameterFetch(url));
        const resultsData = await getData.json();
        if (getData.status === 200) {
            setStatus("Data has arrived succesfully");
            return setData(resultsData);
        } else {
            return;
        }
    };