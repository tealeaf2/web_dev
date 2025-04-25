import Parse from "parse";

export const createNewDesign = ({
  name,
  width,
  height
}) => {
  const w = width || 2100;
  const h = height || 1500;

  const Scrapbook = Parse.Object.extend("Scrapbook");
  const newScrapbook = new Scrapbook();
  const currentUser = Parse.User.current();

  const intWidth = parseInt(w);
  const intHeight = parseInt(h);

  newScrapbook.set("name", name)
  newScrapbook.set("width", intWidth)
  newScrapbook.set("height", intHeight)
  newScrapbook.set("userId", currentUser)

  return newScrapbook.save().then((result) => {
    return result;
  }).catch((e) => {
    console.error(e);
  });
}

export const getDesignById = ({ designId }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);
  return query.get(designId).then((result) => {
    return result;
  });
}

export const getDesignsByUser = ({ userID }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);
  
  const userPointer = new Parse.User();
  userPointer.id = userID;

  query.equalTo("userId", userPointer);
  
  return query.find()
    .then((results) => {
      return results;
    })
    .catch((error) => {
      console.error("Error fetching designs by user:", error);
      throw error;
    });
};