//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

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const configuration = new Configuration({
    organization: "org-gXs5dqO0nR3DlsrhD3HFiSdG",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

//create a simple express api that calls the function above
//add body-parser and corrs to express
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post('/', async (req, res) => {
    const { message } = req.body;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: 0.5,
        });
        res.json({
            message: response.data.choices[0].text,
        });
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });
