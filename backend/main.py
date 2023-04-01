"""The RESTful Backend for the madagascar website, an e-commerce website clone of amazon.

2023 (C) Pedram Ashofteh-Ardakani <pedramardakani@pm.me>
"""

from fastapi import FastAPI
from routers import products

# Custom scripts
from config import settings

# Main application and the metadata
app = FastAPI(**settings.api_metadata)

# Routers
app.include_router(products.router)


@app.get("/")
async def root():
    return {"message": "Hello World!"}
