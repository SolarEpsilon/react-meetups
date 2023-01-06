import { Route } from "react-router-dom";

// Import site pages:
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
// Import React Switch function, which allows for different page navigation:
import { Switch } from "react-router-dom";
// Import layout:
import Layout from "./components/layout/Layout";

// Container function that holds our React code, specifically pages. We add in the Routing API to set URLs to our React "pages":
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
