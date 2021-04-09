import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
const app = express();

import MongoClient from "mongodb";

const PORT = process.env.SERVER_PORT;
const DB_URI = process.env.SECRET_DB_URI;
//const DB = "reactDB;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Establihs DB connection
mongoose.connect(DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  connectTimeoutMS: 1000,
});

const connection = mongoose.connect(DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  connectTimeoutMS: 1000,
});

const liveDB = mongoose.connection;

// Event listeners
liveDB.once("open", () =>
  console.log(
    ` ---- *** ..... loading ..... connected to database ! ..... 200 success .... *** ----`
  )
);
// email
import nodemailer from "nodemailer";

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(" ... # Nodemailer transporter working.");
  }
});

// sending mail route
app.post("/api/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.messageHtml;
  console.log("message is : ", message);
  console.log("posting ... ");

  var mail = {
    from: "China Delight",
    to: `chinadelightnoreply@gmail.com, ${email}`,
    cc: `${process.env.CHINA_DELIGHT_EMAIL}`,
    subject: `China Delight Order for ${name}`,
    html: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

// menu item schemas & models

let appetizerSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  priceSm: String,
  priceLg: String,
  reviews: Object,
  rating: Number,
});
const Appetizer = mongoose.model("Appetizer", appetizerSchema);

let soupSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  priceSm: String,
  priceLg: String,
  reviews: Object,
  rating: Number,
});
const Soup = mongoose.model("Soup", soupSchema);

let dinnerSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  priceSm: String,
  priceLg: String,
  reviews: Object,
  rating: Number,
});
const Dinner = mongoose.model("Dinner", dinnerSchema);

// customer order schema and model

let orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  pickUpOption: String,
  pickUpTime: String,
  cart: Array,
  orderReqs: String,
  total: Number,
  timePlaced: String,
  estimatedTime: String,
});
const Order = mongoose.model("Order", orderSchema);

// app.get("/api/people", (req, res) => {
//   itemModel.find({}, { __v: 0 }, (err, docs) => {
//     if (!err) {
//       res.json(docs);
//     } else {
//       res.status(400).json({ error: err });
//     }
//   });
// });

// Routes

// read all our order documents
app.get("/api/orders", async (req, res) => {
  await Order.find({}, { __v: 0 }, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(400).json({ error: err });
    }
  });
});

// to add an order
app.post("/api/order/add", async (req, res) => {
  let order = new Order({ ...req.body });
  await order.save((err, result) => {
    if (!err) {
      delete result._doc.__v;
      res.json(result._doc);
      console.log("order added to the database");
    } else {
      res.status(400).json({ error: err });
    }
  });
});

// to read our appetizer collection to loop thru on front end
app.get("/api/appetizers", async (req, res) => {
  await Appetizer.find({}, { __v: 0 }, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(400).json({ error: err });
    }
  });
});

app.get("/api/soups", async (req, res) => {
  await Soup.find({}, { __v: 0 }, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(400).json({ error: err });
    }
  });
});

app.get("/api/dinners", async (req, res) => {
  await Dinner.find({}, { __v: 0 }, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(400).json({ error: err });
    }
  });
});

app.get("/:name", (req, res) => {
  MongoClient.connect(DB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testChina");
    dbo.collection("testApps").findOne(
      {
        name: req.params.name,
      },
      function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      }
    );
  });
});

// fetch our matching order

app.get("/api/:orderID", async (req, res) => {
  await Order.find({ _id: req.params.orderID }, { __v: 0 }, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(400).json({ error: err });
    }
  });
});

app.listen(PORT, () => {
  console.log(
    app.get("env").toUpperCase() + " Server started on port: ... " + PORT
  );
});
