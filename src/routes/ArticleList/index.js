import { useQuery } from "react-query";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import "./index.scss";

const ArticleList = () => {
  const fetchArticles = async () => {
    const res = await fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=nKDWpJbD7sRHyZMrvK0e87W5UKVZWuPP"
    );

    return res.json();
  };

  const { data } = useQuery("articles", fetchArticles);
  console.log(data);

  return (
    <div className="articleList">
      <Header />
      <ol className="articleList__items">
        {data && data?.results?.length
          ? data?.results.map((el) => (
              <ArticleCard
                link={el.url}
                key={el.id}
                title={el.title}
                date={el.published_date}
                authour={el.byline}
                abstract={el.abstract}
                image={el?.media[0]["media-metadata"][0].url}
              />
            ))
          : "No Data"}
      </ol>
    </div>
  );
};

export default ArticleList;
