"use client"

import { endpoints } from "@/app/api/config";
import { CardsList } from "@/app/components/CardsListContainer/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/app/api/api-hooks";

export default function New() {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
      <main className="main-inner">
        {tdsGames ? (
          <CardsList id="tds" title="TDS" data={tdsGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }