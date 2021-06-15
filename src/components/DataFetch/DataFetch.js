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
        const baseUrl = "127.0.0.1:8000";

        // checks out if url parameter matches to anything and outputs it
        function getParameterFetch(fetchaddress) {
            return {
                dashboard: "dashboard", usermanagement: "usermanagement", presentation: "presentation",
                technology: "technology", employee: "employee", project: "project",
                attachment: "attachment", user: "user", projectdeveloper: "projectdeveloper",
                createproject: "createproject", createprojectdeveloper: "createprojectdeveloper",
                employeeforpresentation: "employeeforpresentation"
            }[fetchaddress]
        }
        
        setStatus("Pulling data");
        const getData = await fetch(!baseUrl ? getParameterFetch(url) : `${baseUrl}/${getParameterFetch(url)}` );
        const resultsData = await getData.json();
        if (getData.status === 200) {
            setStatus("Data has arrived succesfully");
            return setData(resultsData);
        } else {
            return;
        }
    };