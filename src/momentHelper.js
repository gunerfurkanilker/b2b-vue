import moment from 'moment';

export const formattedDate = function(date,format = "")
{
    format;
    if(date == null || date == undefined || date == "")
        return "";
    let momentInstance = moment(date).locale("tr").format("DD MMMM YYYY");

    return momentInstance;
        
}

export const formattedDateTime = function(date,format = "")
{
    format;
    if(date == null || date == undefined || date == "")
        return "";
    let momentInstance = moment(date).locale("tr").format("DD MMMM YYYY HH:mm:ss");

    return momentInstance;
        
}



;