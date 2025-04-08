const express = require("express");
const prometheusClient  = require("prom-client");

const PORT = 3000;
const app = express();

const register = new prometheusClient.Registry();

register.setDefaultLabels({
    app: 'express-server'
})

const collectDefaultMetrics = prometheusClient.collectDefaultMetrics;

collectDefaultMetrics({ register: register });


app.get('/', async(req, res) => {
    res.status(200).json({ data: "Response is good" });
})

app.get('/test', async(req, res) => {
    res.status(200).json({ data: "Test route is  good"});
})

app.get('/metrics', async(req, res) => {
    res.setHeader('Content-Type', prometheusClient.register.contentType);
    const metrics = await register.metrics();
    res.status(200).send(metrics);
})


app.listen(PORT, () => 
    console.log("Server is running...")
);