import { createFavorite, deleteFavorit } from "../../store/favorite/favoriteReducer";
import { RootStore, useAppDispatch, useAppSelector } from "../../store/store";
import { CardRenderType } from "../../types/types";
import { StyledWrapperCard } from "./StyledRenderCard.styled";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"

const catalogSelector = (state: RootStore) => {
  return state.catalog;
};

const favoriteSelector = (state: RootStore) => {
  return state.favorite;
};

export const defaultImg =
"https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png";

const RenderCard = ({
  id,
  make,
  model,
  year,
  img,
  rentalPrice,
  address,
  rentalCompany,
  mileage,
  type,
  accessories,
  buttonOnClick,
}: CardRenderType) => {
  const { catalogList } = useAppSelector(catalogSelector);
  const { favoriteList } = useAppSelector(favoriteSelector);
  const dispatch = useAppDispatch();

  const obJectIncluded = (id_: number) => {
    return favoriteList.some(({ id }) => id === id_)
};

const handleAddFavorite = (id_: number) => {
  const [data] = catalogList.filter(({ id }) => id === id_);
  dispatch(createFavorite(data));
};

const handleDeleteFavorite = (id: number) => {
  dispatch(deleteFavorit(id))
}

  const cityAndCountry = address.split(",").slice(1);

  let shortestString = accessories.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  }, accessories[0]);

  let firstTwoWords = shortestString.split(" ").slice(0, 1).join(" ");
  

  return (
    <StyledWrapperCard>
      { !obJectIncluded(id) ?
                <button className="favorite-button" onClick={() => {handleAddFavorite(id)}}
                  type="button">
                  <FaRegHeart size={24} color="white"/>
                </button> :
                <button className="favorite-button" onClick={() => {handleDeleteFavorite(id)}}
                type="button">
                <FaHeart size={24} color="rgb(52, 112, 255)"/>
              </button>
              }
      <img
        src={img ? img : defaultImg}
        alt={model}
        width={274}
        height={268}
        className="img"
      />
      <div className="title-wrapper">
        <ul className="list-car-title">
          <li>
            <p>{make}&nbsp;</p>
          </li>
          <li>
            <p>{year}</p>
          </li>
        </ul>
        <p>{rentalPrice}</p>
      </div>
      <ul className="list-desc-car">
        <div className="container-desc">
          <li className="item-desc-car">
            <p>{cityAndCountry[0]}</p>
          </li>
          <span className="vector"></span>
          <li className="item-desc-car">
            <p>{cityAndCountry[1]}</p>
          </li>
          <span className="vector"></span>
          <li className="item-desc-car">
            <p>{rentalCompany}</p>
          </li>
        </div>
        <div className="container-desc">
          <li className="item-desc-car">
            <p>{type}</p>
          </li>
          <span className="vector"></span>
          <li className="item-desc-car">
            <p>{model}</p>
          </li>
          <span className="vector"></span>
          <li className="item-desc-car">
            <p>{mileage}</p>
          </li>
          <span className="vector"></span>
          <li className="item-desc-car">
            <p>{firstTwoWords}</p>
          </li>
        </div>
      </ul>

      <button className="button" onClick={() => buttonOnClick(id)}>Learn more</button>
    </StyledWrapperCard>
  );
};

export default RenderCard;
