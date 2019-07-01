const express = require("express");
const mc = require("./controllers/messages_controller");
const app = express();
const messagesBaseUrl = "/api/messages";
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
