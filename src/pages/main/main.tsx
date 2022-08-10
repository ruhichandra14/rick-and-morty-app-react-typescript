import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import Error from "../../components/common/error/error";
import CharacterList from "../characterList/characterList";
import CharacterDetail from "../characterDetail/characterDetail";
import Header from "../../components/common/header/header";
import PageNotFound from "../../components/common/notFound/notFound";
import "./main.css";

/*
 *  Main is the routing page, all routing logic lies here
*/

const queryClient = new QueryClient();
const MainContainer = () => {
  const ErrorFallBack = () => <Error />;

  return (
    <>
      <Header title="Rick and Morty" />
      <main className="main-container">
        <ErrorBoundary
          FallbackComponent={ErrorFallBack}
          onReset={() => window.location.reload()}
        >
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/characters/page/:pageId" element={<CharacterList />} />
              <Route path="/" element={<CharacterList />}/>
              <Route
                path="/characters/page/:pageId/character/:characterId"
                element={<CharacterDetail />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </QueryClientProvider>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default MainContainer;
