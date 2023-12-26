const OpenAI = require('openai');
const fs = require('fs');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const image = fs.readFileSync('sunlit_lounge.png');
const mask = fs.readFileSync('mask.png');

async function main() {
    try {
        const response = await openai.images.edit({
            model: "dall-e-2",
            image: image,
            mask: mask,
            prompt: "A sunlit indoor lounge area with a pool containing a flamingo",
            n: 1,
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
