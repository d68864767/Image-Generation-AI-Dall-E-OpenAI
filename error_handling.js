const OpenAI = require('openai');
const fs = require('fs');
require('dotenv').config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function handleErrors() {
    const image = fs.createReadStream("image.png");
    const n = 1;
    const size = "1024x1024";

    try {
        const response = await openai.images.createVariation({
            image: image,
            n: n,
            size: size
        });
        console.log(response.data.data[0].url);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

handleErrors();
