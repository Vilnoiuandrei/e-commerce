import { auth } from "@/app/_lib/auth";
import clientPromise from "@/app/_lib/mongoDB";

export async function GET() {
  const session = await auth();

  if (!session) {
    return Response.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  const client = await clientPromise;
  const db = client.db("opal");

  const user = await db.collection("users").findOne(
    { email: session.user.email }, // Find the user by their email
    { projection: { product: 1 } } // Only return the products array
  );

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ products: user.products || [] }, { status: 200 });
}
