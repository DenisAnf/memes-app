export class View {
   constructor({ onMemeImageChanged, onTextInput, onMemeSave }) {
      this.memesSelectNode = document.getElementById("memesSelect");
      this.labelTopNode = document.getElementById("labelTop");
      this.labelBottomNode = document.getElementById("labelBottom");
      this.errorNode = document.getElementById("error");

      this.memeImageNode = document.getElementById("memeImage");
      this.memeLabelTopNode = document.getElementById("memeLabelTop");
      this.memeLabelBottomNode = document.getElementById("memeLabelBottom");

      this.memeSaveBtn = document.getElementById("memeSaveBtn");
      this.meme = document.getElementById("meme");

      this.onMemeImageChanged = onMemeImageChanged;
      this.onTextInput = onTextInput;
      /*this.onMemeSave = onMemeSave;*/

      this.memesSelectNode.addEventListener("change", this._handleMemeSelect);
      this.labelTopNode.addEventListener("input", this._handleMemeInputText);
      this.labelBottomNode.addEventListener("input", this._handleMemeInputText);
      /*this.memeSaveBtn.addEventListener("click", this._handleMemeSave);*/
   }

   renderMemesOptionToSelect(memes, isErrorLoadMemes) {
      if (isErrorLoadMemes) {
         this.errorNode.innerText =
            "Ошибка загрузки мемов из API, обновите страницу";
         return;
      }
      memes.forEach((element) => {
         this.memesSelectNode.innerHTML += `
				<option value="${element.url}">${element.name}</option>
			`;
      });
   }

   renderMemeImage(url, isErrorImageUrl) {
      if (isErrorImageUrl) {
         this.errorNode.innerText =
            "Картинка для мема отсутствует, выберите другой";
         return;
      }

      this.memeImageNode.src = url;
   }

   renderText(topText, bottomText, isErrorText) {
      if (isErrorText) {
         this.errorNode.innerText =
            "Длинна текста в каждом поле не должна превышать 50 символов";
         return;
      }

      this.errorNode.innerText = "";
      this.memeLabelTopNode.innerText = topText;
      this.memeLabelBottomNode.innerText = bottomText;
   }

   _handleMemeSelect = () => {
      let memeImageUrl =
         this.memesSelectNode.options[this.memesSelectNode.selectedIndex].value;
      this.onMemeImageChanged(memeImageUrl);
   };

   _handleMemeInputText = () => {
      let topText = this.labelTopNode.value;
      let bottomText = this.labelBottomNode.value;

      this.onTextInput(topText, bottomText);
   };

   /*_handleMemeSave = () => {
      let meme = this.meme;

      let memeImageUrl =
         this.memesSelectNode.options[this.memesSelectNode.selectedIndex].value;

      // Создайте новый Image элемент для загрузки изображения
      const memeImage = new Image();
      memeImage.src = memeImageUrl; // Замените URL на ваш внешний ресурс

      // Ожидайте загрузки изображения
      memeImage.onload = function () {
         console.log(memeImage);
         html2canvas(meme).then(function (canvas) {
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "Новый мем.jpg";
            link.href = canvas.toDataURL("image/png");
            link.target = "_blank";
            link.click();
         });
      };

      this.onMemeSave(meme); //!вариант связи
   };*/
}
