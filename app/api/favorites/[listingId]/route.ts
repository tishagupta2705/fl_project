import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface IPrisma {
  listingId?: string;
}

// POST: Add to favorites
export async function POST(request: Request, { params }: { params: IPrisma }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
      return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds.push(listingId);

    const user = await prisma.user.update({
      where: { id: currentUser.id },
      data: { favoriteIds },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error in POST /favorites:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE: Remove from favorites
export async function DELETE(request: Request, { params }: { params: IPrisma }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
      return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];
    favoriteIds = favoriteIds.filter((id) => id !== listingId);

    const user = await prisma.user.update({
      where: { id: currentUser.id },
      data: { favoriteIds },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error in DELETE /favorites:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

