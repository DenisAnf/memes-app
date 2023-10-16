export class API {
   constructor() {
      this.baseUrl = "https://api.imgflip.com";
   }

   async fetchMemes() {
      const response = await fetch(`${this.baseUrl}/get_memes`);
      if (!response.ok) {
         alert("Ошибка загрузки мемов из API, обновите страницу");
      }
      const data = await response.json();
      return data.data.memes;
   }
}
