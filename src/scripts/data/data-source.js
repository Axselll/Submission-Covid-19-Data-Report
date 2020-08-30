class DataSource {
    static searchCountry(keyword) {
        return URL = fetch(`https://covid19.mathdro.id/api/countries/${keyword}/og`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.country) {
                    return Promise.resolve(responseJson.country);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }
}

export default DataSource;