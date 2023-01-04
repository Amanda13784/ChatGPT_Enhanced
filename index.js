//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
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const configuration = new Configuration({
    organization: "org-gXs5dqO0nR3DlsrhD3HFiSdG",
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);

//create a simple express api that calls the function above

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000

app.post('/', async (req, res) => {
        const { message } = req.body;
        console.log(message)
       const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: 0.5,
        });
        //console.log(response.data.choices[0].text);
        res.json({
            message: response.data.choices[0].text

        });
    });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});