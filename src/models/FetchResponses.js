
class FetchResponses {
  static processResponse(response) {
    if ((response.status >= 200 && response.status < 300) || response.status === 409) {
      const json_response = response.json();
      return Promise.resolve(json_response);
    } else {
      const json_response = response.json();
      return json_response.then(Promise.reject.bind(Promise));
    }
  }

  static succesResponse(response) {
    alert(response.detail);
  }

}

export default FetchResponses;
