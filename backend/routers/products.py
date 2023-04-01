from fastapi import APIRouter

from assets import mock_data

router = APIRouter(prefix="/api/products",
                   tags=["Products"],
                   responses={404: {"description": "Not found"}})


@router.get("/")
async def get_products():
    return mock_data.products
