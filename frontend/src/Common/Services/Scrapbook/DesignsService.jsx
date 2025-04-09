import Parse from "parse";

export const createNewDesign = ({
  name,
  width,
  height
}) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const newScrapbook = new Scrapbook();
  const currentUser = Parse.User.current();

  const intWidth = parseInt(width);
  const intHeight = parseInt(height);

  newScrapbook.set("name", name)
  newScrapbook.set("width", intWidth)
  newScrapbook.set("height", intHeight)
  newScrapbook.set("userId", currentUser)

  return newScrapbook.save().then((result) => {
    return result;
  }).catch((e) => {
    console.error(e)
  }
  );
}

export const getDesignById = ({ designId }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);
  return query.get(designId).then((result) => {
    return result;
  });
}

export const updateDesignById = () => {
}