import { CardsSlider } from "../CardsSlider/CardsSlider";
import { CardsList } from "./CardsList";
import Styles from "./CardsListContainer.module.css";

export const CardsListContainer = (props) => {
console.log(props)
    return (
      <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
       {props.type === "slider" ? <CardsSlider data={props.data}/> : <CardsList data={props.data}/> }
    </section>
    );
};