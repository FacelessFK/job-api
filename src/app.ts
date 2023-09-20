import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

import express from "express";
const app = express();

// error handler

import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";

app.use(express.json());
// extra packages

// routes
app.get("/", (req, res) => {
    res.send("jobs api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async (): Promise<void> => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
