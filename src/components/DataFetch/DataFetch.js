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
                dashboard: "127.0.0.1:8000/dashboard", usermanagement: "127.0.0.1:8000/usermanagement", presentation: "127.0.0.1:8000/presentation",
                technology: "127.0.0.1:8000/technology", employee: "127.0.0.1:8000/employee", project: "127.0.0.1:8000/project",
                attachment: "127.0.0.1:8000/attachment", user: "127.0.0.1:8000/user", projectdeveloper: "127.0.0.1:8000/projectdeveloper",
                createproject: "127.0.0.1:8000/createproject", createprojectdeveloper: "127.0.0.1:8000/createprojectdeveloper",
                employeeforpresentation: "127.0.0.1:8000/employeeforpresentation"
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