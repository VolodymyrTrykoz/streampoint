import {useReducer} from "react";
import { reducer, initialState } from "../../store/store";
import CustomCard from "./CustomCard";

const CardWrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cards = state.filter(el => !el.isDeleted);

  const disableDelete = state.length <= 1;
  return(
    <div className="container">
      {
        cards.map((card) => (
          <CustomCard
            key={card.id}
            card={card}
            dispatch={dispatch}
            disableDelete={disableDelete}
          />
        ))
      }
    </div>
  )
}

export default CardWrapper;
