import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ArticleList from "./routes/ArticleList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ArticleList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
