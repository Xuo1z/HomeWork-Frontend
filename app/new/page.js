"use client"
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsList } from "../components/CardsListContainer/CardsList";
import { endpoints } from "@/app/api/config";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsList id="new" title="Новые" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }