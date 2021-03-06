import express from "express";
import apiRouter from "./routes/api/apiRouter";

const PORT = process.env.PORT || 3000;

export default () => {
    const app = express();

    app.use(express.static("static"));

    app.use("/api", apiRouter);

    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
}