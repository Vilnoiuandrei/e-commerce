import { auth } from "@/app/_lib/auth";
import clientPromise from "@/app/_lib/mongoDB";

export async function POST(req) {
  const session = await auth();

  if (!session) {
    return Response.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  const { id: productId } = await req.json();

  if (!productId) {
    return Response.json(
      { error: "Product ID is required" },
      {
        status: 400,
      }
    );
  }

  const client = await clientPromise;
  const db = client.db("opal");

  const result = await db.collection("users").updateOne(
    { email: session.user.email }, // Find the user by their email
    { $pull: { product: productId } } // Add the product ID to the array, ensuring no duplicates
  );

  if (result.modifiedCount === 0) {
    return Response.json(
      { error: "Failed to add product to user's list" },
      { status: 500 }
    );
  }

  return Response.json(
    { message: "Product added to user's list successfully" },
    { status: 200 }
  );
}
