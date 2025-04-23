import Parse from "parse"
import Env from "../../../environments";
import axios from 'axios'

export const uploadImageWithId = ({scrapbookId, image}) => {
  const ScrapbookImage = Parse.Object.extend("ScrapbookImage");
  const newScrapbookImage = new ScrapbookImage();

  const Scrapbook = Parse.Object.extend("Scrapbook");
  const ScrapbookPointer = new Scrapbook();
  ScrapbookPointer.id = scrapbookId;

  const parseFile = new Parse.File(image.name, image);

  newScrapbookImage.set("name", image.name);
  newScrapbookImage.set("image", parseFile);
  newScrapbookImage.set("scrapbookId", ScrapbookPointer);

  return newScrapbookImage.save().then((res) => {
    console.log(res)
    return res;
  })
}

export const unsplashApi = async ({searchInput}) => {
  try {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: searchInput,
        page: 1,
        per_page: 20
      },
      headers: {
        Authorization: `Client-ID ${Env.UNSPLASH_ACCESS_KEY}`
      }
    });

    return res.data.results;
  } catch (error) {
    console.error("Unsplash API error:", error);
    return [];
  }
}