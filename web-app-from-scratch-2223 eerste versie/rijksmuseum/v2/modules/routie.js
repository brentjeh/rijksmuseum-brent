import { getData } from "./getData.js";
import { filterImages } from "./filterImages.js";

export function router() {
    routie({
        '': () => {
          getData();
        },
        'search/:id': id => {
          filterImages(id);
        }
      })
}