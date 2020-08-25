const baseLink = "https://api.wit.ai/message";

export function getAnswer() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
}