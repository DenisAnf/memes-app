export class Model {
   constructor({ onMemesLoaded, onNewMemeImage }) {
      this.memes = [];
      this.onMemesLoaded = onMemesLoaded;
      this.onNewMemeImage = onNewMemeImage;
   }

   setMemes(memes) {
      this.memes = memes;

      this.onMemesLoaded(this.memes);
   }

   changeMemeImage(url) {
      this.onNewMemeImage(url);
   }
}
