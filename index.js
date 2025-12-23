const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const tracks = [
  { id: 1, title: "Sample Song", artist: "Local Artist", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }
];

app.get("/tracks", (req, res) => {
  res.json(tracks);
});

app.listen(5000, () => console.log("Backend running on 5000"));
