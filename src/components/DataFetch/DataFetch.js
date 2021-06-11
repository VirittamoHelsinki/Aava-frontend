import React, { useState } from 'react';

/*
*
* @@ Datafetch
* - use props from parents 
* - checks which url prop parameter is provided
* - handles errors too!
*
*/

export default async
    function DataFetch(props) {
        function getParameterFetch(fetchaddress) {
            return {
                dashboard: "", usermanagement: "", presentation: "",
                technology: "", employee: "", project: "",
                attachment: "", user: "", projectdeveloper: "",
                createproject: "", createprojectdeveloper: "",
                employeeforpresentation: ""
            }[fetchaddress]
        }
        
        const [status, setStatus] = useState("idle");
        useEffect(() => {
            if (!props.url) return;
            const fetchData = async() => {
                setStatus("Pulling data");
                const getData = await fetch(`${getParameterFetch(props.url)}`);
                if (getData.response < "200" || getData.response >= "400") {
                    const errorMsg = "Error: There is something wrong with response.";
                    setStatus(errorMsg);
                    throw new Error(errorMsg);
                }
                const resultsData = await getData.json();
                setStatus("Data has arrived succesfully");
                return props.setData(resultsData);
            }
            return () => {
                fetchData()
            }
        }, [props.url])

        getParameterFetch(props.url)
        const sendData = props.data;
        return { sendData, status }
    };