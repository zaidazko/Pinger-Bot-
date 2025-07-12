import fetch from "node-fetch";
import cron from "node-cron";

const urls = [
    "PASTE_URL_HERE"
]

//Run this code every 5 minutes
cron.schedule("*/14 * * * *", async () => {
    const now = new Date().toLocaleString();
    console.log(`\n[${now}] pinging...`)

    for (const url of urls) {
        try {
            const res = await fetch(url)
            console.log(`${url} | status: ${res.status}`)
        } catch (err){
            console.log(`Error: ${err.message}`)
        }
    }
})

app.get("/ping", (req, res) => {
    res.send("pong")
})