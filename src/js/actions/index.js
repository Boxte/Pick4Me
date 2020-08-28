const witAiToken = process.env.REACT_APP_WIT_AI_TOKEN;

const config = {
    headers: { 'Authorization': `Bearer ${witAiToken}` }
};

const baseLink = "https://api.wit.ai/message";

export function getAnswerFrom(message) {
    fetch(`${baseLink}?q=${message}`, {
        method:'get',
        ...config
    }).then(response => response.json())
    .then(json => console.log(json));
}