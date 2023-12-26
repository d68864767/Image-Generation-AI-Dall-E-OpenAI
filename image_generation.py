import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
api_key = os.getenv("OPENAI_API_KEY")

# Initialize OpenAI client
client = OpenAI(api_key)

def generate_image(prompt, size="1024x1024", quality="standard", n=1):
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size=size,
        quality=quality,
        n=n,
    )

    return response.data[0].url

if __name__ == "__main__":
    prompt = "a white siamese cat"
    image_url = generate_image(prompt)
    print(f"Generated image URL: {image_url}")
