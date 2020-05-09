import express from "express";

const PORT = process.env.PORT || 3000;

export default () => {
    const app = express();

    app.use((_req, res) => {
        res.send("Hello World");
    });

    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
}