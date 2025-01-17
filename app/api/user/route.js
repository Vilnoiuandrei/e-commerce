import clientPromise from "../../_lib/mongoDB";
import { auth } from "../../_lib/auth";

export async function GET() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return Response.json(
      { error: "Please log in" },
      {
        status: 401,
      }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("opal");
    const email = session.user.email;
    const user = await db.collection("users").findOne({ email });

    return Response.json(
      {
        email: user.email,
        createdAt: user.createdAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
