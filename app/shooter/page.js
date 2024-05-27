"use client"

import { endpoints } from "@/app/api/config";
import { CardsList } from "../components/CardsListContainer/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/app/api/api-hooks";

export default function New() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
      <main className="main-inner">
        {shooterGames ? (
          <CardsList id="shooter" title="Шутеры" data={shooterGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }