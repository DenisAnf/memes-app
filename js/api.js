export class API {
   constructor() {
      this.baseUrl = "https://api.imgflip.com";
   }

   fetchMemes() {
      return fetch(`${this.baseUrl}/get_memes`)
         .then((response) => response.json())
         .then((data) => data.data.memes);
   }
}
