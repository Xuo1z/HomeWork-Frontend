"use client"

import { endpoints } from "@/app/api/config";
import { CardsList } from "../components/CardsListContainer/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/app/api/api-hooks";

export default function New() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
      <main className="main-inner">
        {pixelGames ? (
          <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }