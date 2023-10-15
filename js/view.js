export class View {
   constructor({ onMemeImageChanged }) {
      this.memesSelectNode = document.getElementById("memesSelect");
      this.labelTopNode = document.getElementById("labelTop");
      this.labelBottomNode = document.getElementById("labelBottom");

      this.memeImageNode = document.getElementById("memeImage");
      this.memelabelTopNode = document.getElementById("memeLabelTop");
      this.memelabelTopNode = document.getElementById("memeLabelBottom");

      this.onMemeImageChanged = onMemeImageChanged;

      this.memesSelectNode.addEventListener("change", this._handleMemeSelect);
   }

   renderMemesOptionToSelect(memes) {
      memes.forEach((element) => {
         this.memesSelectNode.innerHTML += `
				<option value="${element.url}">${element.name}</option>
			`;
      });
   }

   renderMemeImage(url) {
      this.memeImageNode.src = url;
   }

   _handleMemeSelect = () => {
      let memeImageUrl =
         this.memesSelectNode.options[this.memesSelectNode.selectedIndex].value;
      this.onMemeImageChanged(memeImageUrl);
   };
}
