const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const authRoute = require("./Routes/auth");
const usersRoute = require("./Routes/users");
const postsRoute = require("./Routes/posts");
const categoriesRoute = require("./Routes/categories");
const path = require("path");


// password: pN5kBEvGDh6GueRs

dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to Database..."));
}

// file uploading and saving process code:

// storing code:
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "Images");
  },
  filename: (req, file, callBack) => {
    callBack(null, req.body.name);
  },
});

// uploading code:
const upload = multer({ storage: storage });
app.post("/Server/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded :D ");
});

app.use("/Server/auth", authRoute);
app.use("/Server/users", usersRoute);
app.use("/Server/posts", postsRoute);
app.use("/Server/categories", categoriesRoute);

app.listen("5000", () => {
  console.log("server is started on port 5000");
});
