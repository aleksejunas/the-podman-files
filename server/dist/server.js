"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// const PORT = process.env || 4002;
const PORT = 4002;
// Error handling: Add a middleware for error handling
app.use((err, _req, res, _next) => {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
});
// Middleware (optional example)
app.use(express_1.default.json()); // Parse JSON request bodies
// Serve static files
app.use(express_1.default.static("public"));
// Custom API endpoints
app.post("/api/data", (req, res) => {
    const data = req.body;
    res.json({ message: "Data received!", data });
});
// Define a basic route
app.get("/", (_req, res) => {
    res.send("Hello, TypeScript with Exprezz!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
