import { NextResponse } from "next/server";
import { lireDisponibilitesShopify } from "@/lib/shopify";

export async function GET() {
  try {
    const disponibilites = await lireDisponibilitesShopify();
    return NextResponse.json({ configure: disponibilites !== null, disponibilites: disponibilites ?? {} });
  } catch {
    return NextResponse.json(
      { configure: true, disponibilites: {}, erreur: "Le stock n’a pas pu être vérifié." },
      { status: 502 }
    );
  }
}
