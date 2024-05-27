"use client"

import { endpoints } from "@/app/api/config";
import { CardsList } from "../components/CardsListContainer/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/app/api/api-hooks";
export default function New() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (
      <main className="main-inner">
        {runnerGames ? (
          <CardsList id="runner" title="Раннеры" data={runnerGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }