import { Screenshot } from "../class/Screenshot.js";

export async function readItems() {
  const myHeaders = new Headers();

  const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };
  let newItems = [];
  let response = await fetch("/api/screenshots", myInit);
  if (response.ok) {
    let screenshots = await response.json();
    await screenshots.forEach((element) => {
      newItems.push(
        new Screenshot(
          element._id,
          element.author,
          element.description,
          element.image
        )
      );
    });

    if (newItems) return newItems;
    else console.log("Erreur pendant le chargement des images");
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
