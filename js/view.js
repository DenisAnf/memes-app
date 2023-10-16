export class View {
   constructor({ onMemeImageChanged }) {
      this.memesSelectNode = document.getElementById("memesSelect");
      this.labelTopNode = document.getElementById("labelTop");
      this.labelBottomNode = document.getElementById("labelBottom");
      this.errorNode = document.getElementById("error");

      this.memeImageNode = document.getElementById("memeImage");
      this.memelabelTopNode = document.getElementById("memeLabelTop");
      this.memelabelTopNode = document.getElementById("memeLabelBottom");

      this.onMemeImageChanged = onMemeImageChanged;

      this.memesSelectNode.addEventListener("change", this._handleMemeSelect);
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

   _handleMemeSelect = () => {
      let memeImageUrl =
         this.memesSelectNode.options[this.memesSelectNode.selectedIndex].value;
      this.onMemeImageChanged(memeImageUrl);
   };
}
