class Controller {
   constructor() {
      this.api = new API();
   }

   init() {
      this.api.fetchMemes().then((memes) => console.log(memes));
   }
}
