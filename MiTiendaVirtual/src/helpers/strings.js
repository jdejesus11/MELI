export const getValuesFromQueryString = (queryString) => {
    if (!queryString || queryString.trim() === "")
        return;

    let queryValues = queryString.split("&")[0]
                                 .split("=");

    if (!queryValues || queryValues.length < 2)
        return;

    return queryValues[1];
}