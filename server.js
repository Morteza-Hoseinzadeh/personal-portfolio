const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const cors = require("cors");

const App = express();
const PORT = 5000;

// Enable CORS
App.use(cors({ origin: "http://localhost:5000", credentials: true }));

// Middleware to parse JSON bodies
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Use cookie-parser middleware
App.use(cookieParser());

// Session middleware configuration
App.use(
  session({
    secret: "yourSecretKey", // Change this to a strong secret
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Save new sessions even if they haven't been modified
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/Portfolio",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour session duration
      httpOnly: false, // Set to true if you want to prevent JavaScript access
      secure: false, // Set to true if using HTTPS
    },
  })
);

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose Schema for Messages
const MessageSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  email: String,
  message: String,
});
const Message = mongoose.model("Message", MessageSchema);

// POST route to handle form submission
App.post("/send-msg", async (req, res) => {
  try {
    const { first_name, last_name, phone_number, email, message } = req.body;

    // Save user data in session
    req.session.user = { first_name, last_name, email }; // Storing basic user info in session

    // Create a new Message instance and save it to the database
    const newMessage = new Message({
      first_name,
      last_name,
      phone_number,
      email,
      message,
    });

    await newMessage.save();

    // Send a response including a session check
    res.status(200).json({
      message: "Message sent successfully",
      payload: req.body,
    });
  } catch (error) {
    res.status(500).json({ message: "Sending message failed", error });
  }
});

// Fetch all messages
App.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving messages", error });
  }
});

// Fetch a single message by unique ID
App.get("/messages/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ message: "Message not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving message", error });
  }
});

// Fetch messages by first name
App.get("/messages/first_name/:first_name", async (req, res) => {
  try {
    const messages = await Message.find({ first_name: req.params.first_name });
    if (messages.length > 0) {
      res.status(200).json(messages);
    } else {
      res
        .status(404)
        .json({ message: "No messages found for this first name" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving messages", error });
  }
});

// ___________________________________________________________________

// Login route
App.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simulating user authentication (replace with real logic)
  if (username === "admin" && password === "admin") {
    req.session.user = { username }; // Store user info in session
    res
      .status(200)
      .json({ message: "Logged in successfully!", user: req.session.user });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

// Admin panel route
App.get("/admin-panel", (req, res) => {
  if (req.session.user) {
    res.status(200).json({
      message: `Welcome to the Admin Panel, ${req.session.user.username}!`,
    });
  } else {
    res.status(403).json({ message: "Access denied. Please log in first." });
  }
});

// Logout route
App.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out." });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully!" });
  });
});

// ___________________________________________________________________

App.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
