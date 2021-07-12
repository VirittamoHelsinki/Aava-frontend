/** 
*
* Checks the param and if it matches then returns it.
* @param {string} fetchaddress    parameter for checking.
* @return {string} fetchaddress   when parameter matches, then outputs the found one.
*
*/

export default 
    function getParameterFetch(fetchaddress) {
        return {
            dashboard: "dashboard", usermanagement: "usermanagement", presentation: "presentation",
            technology: "technology", employee: "employee", project: "project",
            attachment: "attachment", user: "user", projectdeveloper: "projectdeveloper",
            createproject: "createproject", createprojectdeveloper: "createprojectdeveloper",
            employeeforpresentation: "employeeforpresentation"
        }[fetchaddress]
    }