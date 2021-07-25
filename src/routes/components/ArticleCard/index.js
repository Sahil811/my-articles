import "./index.scss";
import moment from "moment";

const ArticleCard = ({
  title = "",
  date,
  authour = "",
  abstract = "",
  image,
  link,
}) => {
  return (
    <li style={{ marginTop: "20px" }}>
      <a className="card" href={link}>
        <div className="card__left">
          <img className="card__image" src={image} alt="article" />
        </div>

        <div className="card__details">
          <h3 className="card__title">{`${title.substr(0, 60)}...`}</h3>
          <p className="card__abstract">{`${abstract.substr(0, 50)}...`}</p>
          <div className="card__footer">
            <div>{authour.substr(0, 30)}</div>
            <div>{moment(date).format("YYYY-MM-DD")}</div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ArticleCard;
