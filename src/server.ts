import { App } from "./app";
const PORT = process.env.PORT || 3000;


const app = new App().app.listen(PORT, () => {
    console.log("Hello!")
    console.log("listening on port " + PORT);
});