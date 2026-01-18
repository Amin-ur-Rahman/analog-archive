import { connectDB } from "@/lib/connectDB";

export async function GET() {
  const client = await connectDB();
  const db = client.db("analog-archive");
  const items = await db.collection("items").find().toArray();
  return Response.json(items);
}
