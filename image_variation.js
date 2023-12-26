const fs = require('fs');
const OpenAI = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
    try {
        const image = fs.readFileSync("image_edit_original.png");
        const response = await openai.images.createVariation({
            model: "dall-e-2",
            image: image,
            n: 2,
            size: "1024x1024"
        });
        console.log(response.data[0].url);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

main();
