from fastapi import APIRouter

router = APIRouter(prefix="/products",
                   tags=["Products"],
                   responses={404: {"description": "Not found"}})


@router.get("/")
async def get_products():
    return [{"name": "t-shirt"}, {"name": "pants"}]
