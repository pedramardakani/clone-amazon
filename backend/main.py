"""The RESTful Backend for the madagascar website, an e-commerce website clone of amazon.

2023 (C) Pedram Ashofteh-Ardakani <pedramardakani@pm.me>
"""

from fastapi import FastAPI

app = FastAPI(
    title="Madagascar",
    version="0.0.0",
    description="An e-commerce website API similar to amazon, built on FastAPI, and ArangoDB.",
    contact={
        "name": "Pedram Ashofteh-Ardakani",
        "email": "pedramardakani@pm.me",
        "url": "https://pedramardakani.wordpress.com"
    },
    license_info={
        "name": "GNU General Public License Version 3.0 or later",
        "url": "https://www.gnu.org/licenses/"
    }
)


@app.get("/")
async def root():
    return {"message": "Hello World!"}
