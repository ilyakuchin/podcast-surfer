import axios from "axios";

function getDescription(xmlDoc) {
  let descriptionText = xmlDoc.getElementsByTagName("description")[0].innerHTML;

  return descriptionText
    .split("")
    .slice(11, -5)
    .join("");
}

function getImage(xmlDoc) {
  let imageUrl = xmlDoc
    .getElementsByTagName("itunes:image")[0]
    .getAttribute("href");

  return imageUrl;
}

function getName(xmlDoc) {
  return xmlDoc
    .getElementsByTagName("itunes:name")[0]
    .innerHTML.split("")
    .slice(11, -5)
    .join("");
}

function getEpisodes(xmlDoc) {
  let items = xmlDoc.getElementsByTagName("item");
  return Array.from(items).map(item => {
    return {
      id: item
        .getElementsByTagName("guid")[0]
        .innerHTML.split("")
        .slice(11, -5)
        .join(""),
      name: item.getElementsByTagName("title")[0].innerHTML,
      description: item
        .getElementsByTagName("description")[0]
        .innerHTML.split("")
        .slice(11, -6)
        .join(""),
      image: item.getElementsByTagName("itunes:image")[0].getAttribute("href")
    };
  });
}

export default function getPodcast() {
  return axios
    .get("http://joeroganexp.joerogan.libsynpro.com/rss")
    .then(res => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(res.data, "text/html");
      getEpisodes(xmlDoc);

      return {
        name: getName(xmlDoc),
        description: getDescription(xmlDoc),
        image: getImage(xmlDoc),
        episodes: getEpisodes(xmlDoc)
      };
    });
}
