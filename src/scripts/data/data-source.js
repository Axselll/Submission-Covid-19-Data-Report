class DataSource {
  static searchCountry(keyword) {
    return (URL = fetch(
      `https://covid19.mathdro.id/api/countries/${keyword}/og`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Error fetching the image.");
        }
        return response.blob();
      })
      .then((imgBlob) => {
        const objectURL = webkitURL.createObjectURL(imgBlob);

        return Promise.resolve(objectURL);
      }));
  }
}

export default DataSource;
