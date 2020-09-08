import { ENTITY_ETHNCITY, ENTITY_LOCATION } from "../constants/ai-keywords";

const witAiToken = process.env.REACT_APP_WIT_AI_TOKEN;
const yelpApiToken = process.env.REACT_APP_YELP_BACKUP_API;

const config = {
  headers: { Authorization: `Bearer ${witAiToken}` },
};

const yelpConfig = {
  headers: { Authorization: `Bearer ${yelpApiToken}` },
};

const baseLink = "https://api.wit.ai/message";
const baseYelpLink = "https://api.yelp.com/v3/businesses/search?";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export const getAnswerFrom = async (message) => {
  const response = await fetch(`${baseLink}?q=${message}`, {
    method: "get",
    ...config,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return response;
};

export const getListOfRestaurants = async (details) => {
  const params = {
    term: `${details["foodType"]} restaurants`,
    limit: 25,
    location: `${details["location"]}`,
  };
  const url = corsAnywhere + baseYelpLink + new URLSearchParams(params);

  const response = await fetch(url, {
    method: "get",
    ...yelpConfig,
  })
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw Error(r.statusText);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export const readAiResponse = (response) => {
  const entity = response["entities"];

  var obj = {};
  if (entity.hasOwnProperty(ENTITY_ETHNCITY)) {
    const foodType = entity[ENTITY_ETHNCITY][0]["body"];
    obj["foodType"] = foodType;
  }
  if (entity.hasOwnProperty(ENTITY_LOCATION)) {
    const location = entity[ENTITY_LOCATION][0]["body"];
    obj["location"] = location;
  }
  return obj;
};

export const getRandomRestaurantOption = (list) => {
  var randomNumber = Math.floor(Math.random() * Math.floor(list.length));
  return list[randomNumber];
};
