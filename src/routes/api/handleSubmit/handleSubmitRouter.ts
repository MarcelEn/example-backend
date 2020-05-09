import { Router } from "express";

const router = Router();

router.use((req, _res, next) => {
    req.setEncoding('utf8');
    req.body = '';
    req.on('data', (chunk) => {
        req.body += chunk;
    });
    req.on('end', () => {
        next();
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>
            Final page
        </title>
    </head>
    <body>
        <div id="navigation">
            <ul>
                <li>
                    Content 1
                </li>
                <li>
                    Content 2
                </li>
            </ul>
        </div>
        <div class="content">
            ${req.body.slice(5)}
        </div>
    </body>
</html>`);
});

export default router;