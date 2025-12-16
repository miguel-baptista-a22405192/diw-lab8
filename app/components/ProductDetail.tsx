"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductDetailProps {
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: { rate: number; count: number };
}

export default function ProductDetail({
  title,
  image,
  price,
  category,
  description,
  rating,
}: ProductDetailProps) {
  return (
    <Card className="bg-white/10 rounded-xl shadow max-w-xl mx-auto">
      <CardContent className="p-6 flex flex-col items-center gap-4">

        

        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="rounded-lg"
        />

        <h1 className="text-2xl font-bold text-center">{title}</h1>

       

        <p className="text-gray-300 text-sm">{category}</p>

        

        <p className="text-yellow-400 text-lg">
          ⭐ {rating.rate} ({rating.count} reviews)
        </p>

        

        <p className="text-green-400 text-2xl font-semibold">{price} €</p>

        <p className="text-sm text-gray-200 text-center mt-2">
          {description}
        </p>

        
        <Link href="/produtos">
          <Button className="mt-4" variant="secondary">
            Voltar
          </Button>
        </Link>

       
      </CardContent>
    </Card>
  );
}
