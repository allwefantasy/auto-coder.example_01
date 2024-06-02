from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# 允许所有域名访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

items = []

class Item(BaseModel):
    name: str
    content: str

@app.post("/api/add_item")
def add_item(item: Item):
    items.append(item)
    return {"message": "Item added successfully"}

@app.get("/api/get_items")
def get_items():
    return items