import Parse from "parse";

export const saveDesign = ({ blob, objectId, design }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);

  return query.get(objectId)
    .then((scrapbook) => {
      scrapbook.set("jsonTemplate", design);

      if (blob) {
        const imageFile = new Parse.File("preview.png", blob);
        scrapbook.set("imagePreview", imageFile);
      }

      return scrapbook.save();
    })
    .then((updatedScrapbook) => {
      return updatedScrapbook;
    })
    .catch((error) => {
      console.error("Failed to update design:", error);
      throw error;
    });
};
export const updateName = ({ name, id }) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);

  return query.get(id)
    .then((scrapbook) => {
      scrapbook.set("name", name);
      return scrapbook.save();
    })
    .catch((error) => {
      console.error("Error updating name:", error);
      throw new Error("Failed to update the scrapbook name.");
    });
};

export const updateDimensions = ({ width, height, id}) => {
  const Scrapbook = Parse.Object.extend("Scrapbook");
  const query = new Parse.Query(Scrapbook);

  return query.get(id).then((scrapbook) => {
    scrapbook.set("width", width);
    scrapbook.set("height", height);
    return scrapbook.save();
  })
  .catch((err) => {
    console.error(err);
  })
}