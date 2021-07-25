import "./index.scss";
import moment from "moment";

const ArticleCard = ({
  title = "",
  date,
  authour = "",
  abstract = "",
  image,
}) => {
  return (
    <li className="card">
      <div className="card__left">
        <img className="card__image" src={image} alt="article-image" />
      </div>

      <div className="card__details">
        <h3 className="card__title">{`${title.substr(0, 60)}...`}</h3>
        <p className="card__abstract">{`${abstract.substr(0, 30)}...`}</p>
        <div className="card__footer">
          <div>{authour.substr(0, 30)}</div>
          <div>{moment(date).format("YYYY-MM-DD")}</div>
        </div>
      </div>
    </li>
  );
};

export default ArticleCard;
