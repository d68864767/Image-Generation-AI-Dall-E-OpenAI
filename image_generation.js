const OpenAI = require('openai');
const fs = require('fs');
require('dotenv').config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generateImage() {
    const prompt = "a white siamese cat";
    const size = "1024x1024";
    const quality = "standard";
    const n = 1;

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            size: size,
            quality: quality,
            n: n
        });

        const imageUrl = response.data[0].url;
        console.log(imageUrl);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

generateImage();
