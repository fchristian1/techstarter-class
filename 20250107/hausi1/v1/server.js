import express from "express"
import cors from "cors"
import fs from "fs"

const logfilename = "log.txt";
const logfilepath = `./${logfilename}`;
if (!fs.existsSync(logfilepath)) {
    fs.writeFileSync(logfilepath, "");
}

const logInbount = (req, res, next) => {
    const requestid = crypto.randomUUID().replace(/-/g, "");
    req.requestid = requestid;
    req.requesttime = new Date().toISOString();
    fs.writeFileSync(logfilepath, `---> ${new Date().toISOString()} - ${req.requestid} - ${req.method} ${req.url} \n`, { flag: "a" });
    next();
}

const logOutbound = (req, res) => {
    const milliseconds = new Date().getTime() - new Date(req.requesttime).getTime();
    fs.writeFileSync(logfilepath, `<--- ${new Date().toISOString()} - ${req.requestid} - ${req.method} ${req.url} ${res.statusCode} - (${milliseconds}ms)\n`, { flag: "a" });
};

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.text());

app.use(logInbount);
app.get("/", (req, res) => {
    res.send("Hello World");
    logOutbound(req, res);
});
app.get("/math", (req, res) => {

    const query = req.query;
    const a = parseInt(query.a);
    const b = parseInt(query.b);
    const operator = query.operator;
    let result;
    if (operator === "add") {
        result = a + b;
    } else if (operator === "subtract") {
        result = a - b;
    } else if (operator === "multiply") {
        result = a * b;
    } else if (operator === "divide") {
        if (a === 0 || b === 0) {
            res.status(500).send("Cannot divide by zero");
            logOutbound(req, res);
            return;
        }
        result = a / b;
    }
    res.send(result.toString());
    logOutbound(req, res);
});
app.get("/test500", (req, res) => {
    res.status(500).send("Internal server error");
    logOutbound(req, res);
});


app.all("*", (req, res) => {
    res.status(404).send("Page not found");
    logOutbound(req, res);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});