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