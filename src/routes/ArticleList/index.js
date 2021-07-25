import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import "./index.scss";

const ArticleList = () => {
  return (
    <div className="articleList">
      <Header />
      <ol className="articleList__items">
        <ArticleCard />
      </ol>
    </div>
  );
};

export default ArticleList;
