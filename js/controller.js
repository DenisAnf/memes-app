import { Model } from "./model.js";
import { View } from "./view.js";
import { API } from "./api.js";

export class Controller {
   constructor() {
      this.model = new Model({
         onMemesLoaded: this.handleModelMemesLoaded,
         onNewMemeImage: this.handleModelMemeImageChanged,
         onChangeText: this.handleModelTextChanged,
      });

      this.view = new View({
         onMemeImageChanged: this.handleViewMemeImageChanged,
         onTextInput: this.handleViewTextInput,
         /*onMemeSave: this.handleViewMemeSave,*/
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

   handleViewMemeImageChanged = (url) => this.model.changeMemeImage(url);

   handleModelMemeImageChanged = (url, isErrorImageUrl) =>
      this.view.renderMemeImage(url, isErrorImageUrl);

   handleViewTextInput = (topText, bottomText) =>
      this.model.changeText(topText, bottomText);

   handleModelTextChanged = (topText, bottomText, isErrorText) =>
      this.view.renderText(topText, bottomText, isErrorText);

   /*handleViewMemeSave = (meme) => this.model.saveMeme(meme);*/
}
