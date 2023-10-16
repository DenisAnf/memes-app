export class Model {
   constructor({ onMemesLoaded, onNewMemeImage }) {
      this.memes = [];
      this.isErrorLoadMemes = false;
      this.isErrorImageUrl = false;
      this.isErrorText = false;
      this.onMemesLoaded = onMemesLoaded;
      this.onNewMemeImage = onNewMemeImage;
   }

   setMemes(memes) {
      if (!Array.isArray(memes)) {
         this.isErrorLoadMemes = true;
      }

      this.memes = memes;

      this.onMemesLoaded(this.memes, this.isErrorLoadMemes);
   }

   changeMemeImage(url) {
      if (url === "") {
      }
      this.onNewMemeImage(url);
   }
}
