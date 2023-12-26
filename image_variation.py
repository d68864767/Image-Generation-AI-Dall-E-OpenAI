import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
api_key = os.getenv("OPENAI_API_KEY")

# Initialize OpenAI client
client = OpenAI(api_key)

def create_image_variation(image_path, n=1, size="1024x1024"):
    with open(image_path, "rb") as image_file:
        response = client.images.create_variation(
            image=image_file,
            n=n,
            size=size
        )
    return response.data[0].url

if __name__ == "__main__":
    image_url = create_image_variation("image_edit_original.png", n=2)
    print(image_url)
