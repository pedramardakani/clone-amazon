"""The main API configuration file.

Some values will be taken from environment variables.
It is OK to hard-code the rest."""

import os


class BaseConfig:
    HOST_IP = os.environ.get("HOST_IP", "localhost")

    api_metadata = {
        "title": "Madagascar",
        "version": os.environ.get("API_VERSION", "dev"),
        "description": "An e-commerce website API similar to amazon, built on FastAPI, and ArangoDB.",
        "contact":  {
            "name": "Pedram Ashofteh-Ardakani",
            "email": "pedramardakani@pm.me",
            "url": "https://pedramardakani.wordpress.com"
        },
        "license_info": {
            "name": "GNU General Public License Version 3.0 or later",
            "url": "https://www.gnu.org/licenses/"
        }
    }


class DevelopmentConfig(BaseConfig):
    pass


class ProductionConfig(BaseConfig):
    pass


class TestingConfig(BaseConfig):
    pass


def get_settings():
    match os.environ.get("API_CONFIG", "development").lower():
        case "development":
            return DevelopmentConfig()
        case "production":
            return ProductionConfig()
        case "testing":
            return TestingConfig()
    raise ValueError("This line of code should not execute.")


settings = get_settings()
