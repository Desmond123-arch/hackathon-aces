const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const LOST_ITEMS_FILE = "./lost_items.json";
const FOUND_ITEMS_FILE = "./found_items.json";
const USERS_FILE = "./users.json";

const transporter = nodemailer.createTransport({
    service: "gmail", // or another email provider like Yahoo, Outlook, etc.
    auth: {
        user: "andyansong82@gmail.com", // replace with your email
        pass: "your-email-password", // replace with your email password or an app-specific password if 2FA is enabled
    },
});
app.post("/sendemail", (req, res) => {
    const lostItem = req.body;
    lostItem.status = "lost";
    lost_items.push(lostItem);
    saveData(LOST_ITEMS_FILE, lost_items);
    res.json({ message: "Lost item added successfully" });
});

// Helper function to load data from JSON file
const loadData = (file) => {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file);
        return JSON.parse(data);
    }
    return [];
};

// Helper function to save data to JSON file
const saveData = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// Load initial data
const lost_items = loadData(LOST_ITEMS_FILE);
const foundItems = loadData(FOUND_ITEMS_FILE);
const users = loadData(USERS_FILE);

// Lost items endpoints
app.post("/lost-items", (req, res) => {
    const lostItem = req.body;
    lostItem.status = "lost";
    lost_items.push(lostItem);
    saveData(LOST_ITEMS_FILE, lost_items);
    res.json({ message: "Lost item added successfully" });
});

app.put("/lost-items/:id", (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    const index = lost_items.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
        lost_items[index] = { ...lost_items[index], ...updatedItem };
        saveData(LOST_ITEMS_FILE, lost_items);
        res.json({ message: "Lost item updated successfully" });
    } else {
        res.status(404).json({ message: "Lost item not found" });
    }
});

app.delete("/lost-items/:id", (req, res) => {
    const { id } = req.params;
    const index = lost_items.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
        lost_items.splice(index, 1);
        saveData(LOST_ITEMS_FILE, lost_items);
        res.json({ message: "Lost item deleted successfully" });
    } else {
        res.status(404).json({ message: "Lost item not found" });
    }
});
app.get("/lost-items", (req, res) => {
    res.json(lost_items);
});
app.get("/lost-items/search/:name", (req, res) => {
    const { name } = req.query;
    const searchResults = lost_items.filter(
        (item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(searchResults);
});


// Found items endpoints
app.get("/found-items/search/:name", (req, res) => {
    const { name } = req.query;
    const searchResults = foundItems.filter(
        (item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(searchResults);
});
app.get("/found-items", (req, res) => {
    res.json(foundItems);
});
app.post("/found-items", (req, res) => {
    const foundItem = req.body;
    foundItem.status = "found";
    foundItems.push(foundItem);
    saveData(FOUND_ITEMS_FILE, foundItems);
    res.json({ message: "Found item added successfully" });
});

app.put("/found-items/:id", (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    const index = foundItems.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
        foundItems[index] = { ...foundItems[index], ...updatedItem };
        saveData(FOUND_ITEMS_FILE, foundItems);
        res.json({ message: "Found item updated successfully" });
    } else {
        res.status(404).json({ message: "Found item not found" });
    }
});

app.delete("/found-items/:id", (req, res) => {
    const { id } = req.params;
    const index = foundItems.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
        foundItems.splice(index, 1);
        saveData(FOUND_ITEMS_FILE, foundItems);
        res.json({ message: "Found item deleted successfully" });
    } else {
        res.status(404).json({ message: "Found item not found" });
    }
});

// User signup
app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (users.some((user) => user.reference === username)) {
        res.status(409).json({ message: "Username already exists" });
    } else {
        users.push({ reference: username, password });
        saveData(USERS_FILE, users);
        res.json({ message: "Signup successful" });
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.reference === username && user.password === password);
    if (user) {
        res.json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
