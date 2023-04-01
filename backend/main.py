"""The RESTful Backend for the madagascar website, an e-commerce website clone of amazon.

2023 (C) Pedram Ashofteh-Ardakani <pedramardakani@pm.me>
"""

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
