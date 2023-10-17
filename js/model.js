export class Model {
   constructor({ onMemesLoaded, onNewMemeImage, onChangeText }) {
      this.memes = [];
      this.isErrorLoadMemes = false;
      this.isErrorImageUrl = false;
      this.isErrorText = false;
      this.onMemesLoaded = onMemesLoaded;
      this.onNewMemeImage = onNewMemeImage;
      this.onChangeText = onChangeText;
   }

   setMemes(memes) {
      if (!Array.isArray(memes)) {
         this.isErrorLoadMemes = true;
      } else {
         this.memes = memes;
      }

      this.onMemesLoaded(this.memes, this.isErrorLoadMemes);
   }

   changeMemeImage(url) {
      if (url == "") {
         this.isErrorImageUrl = true;
      }
      this.onNewMemeImage(url, this.isErrorImageUrl);
   }

   changeText(topText, bottomText) {
      if (this._isValidateText(topText, bottomText)) {
         this.isErrorText = false;
      } else {
         this.isErrorText = true;
      }
      this.onChangeText(topText, bottomText, this.isErrorText);
   }

   _isValidateText(textOne, textTwo) {
      return textOne.length <= 50 && textTwo.length <= 50;
   }

   /*saveMeme = (meme) => {
      html2canvas(meme).then(function (canvas) {
         const link = document.createElement("a");
         document.body.appendChild(link);
         link.download = "Новый_мем_готов.jpg";
         link.href = canvas.toDataURL("image/png");
         link.target = "_blank";
         link.click();
      });
   };*/
}
