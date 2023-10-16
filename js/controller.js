import { Model } from "./model.js";
import { View } from "./view.js";
import { API } from "./api.js";

export class Controller {
   constructor() {
      this.model = new Model({
         onMemesLoaded: this.handleModelMemesLoaded,
         onNewMemeImage: this.handleViewMemeImageChanged,
      });

      this.view = new View({
         onMemeImageChanged: this.handleModelMemeImageChanged,
      });

      this.api = new API();
   }

   init() {
      this.api.fetchMemes().then((memes) => {
         this.model.setMemes(memes);
      });
   }

   handleModelMemesLoaded = (memes, isErrorLoadMemes) =>
      this.view.renderMemesOptionToSelect(memes, isErrorLoadMemes);

   handleModelMemeImageChanged = (url) => this.model.changeMemeImage(url);

   handleViewMemeImageChanged = (url) => this.view.renderMemeImage(url);
}
