const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const LOST_ITEMS_FILE = "./lost_items.json";
const FOUND_ITEMS_FILE = "./found_items.json";
const USERS_FILE = "./users.json";

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

// Found items endpoints
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

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
