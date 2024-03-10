const { MongoClient } = require('mongodb');
import { NextResponse } from "next/server";

const uri = "mongodb://179.61.181.198:46753/";

const client = new MongoClient(uri);
const database = client.db("magnified");
const collection = database.collection("contacts");

export async function POST(req, res) {
    const data = await req.json();
    collection.insertOne(data);
    return NextResponse.json({message: "Request has been sent."});
}