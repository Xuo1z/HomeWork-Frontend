"use client"

import { useGetDataByCategory } from "@/app/api/api-hooks";
import { endpoints } from "./api/config";
import { Banner } from "./components/Banner/Banner";
import { CardsListContainer} from "@/app/components/CardsListContainer/CardsListContainer";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from "./components/Preloader/Preloader";


export default function Home() {
  
  const popularGames =  useGetDataByCategory(endpoints.games, "popular");
const newGames =  useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main">
      <Banner/>
      { popularGames && newGames ?  (
        <>
       <CardsListContainer id="popular" type="slider" title="Популярные" data={popularGames}/>
       <CardsListContainer id="new" type="list" title="Новинки" data={newGames}/>
       </>
      ):(
        <Preloader/>
      )}
      <Promo/>
    </main>
  );
}
