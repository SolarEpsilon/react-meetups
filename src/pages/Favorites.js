import { useContext } from "react";
// FavoritesContext is the stored meetups created by the user:
import FavoritesContext from "../store/favorites-context";
// Import list of meetups from the appropraite file:
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  // Connect to context in our favorites.context file. From this, we can get our favorites array:
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  // If no favorites, display "no favorites" message. Otherwise, display favorites:
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You don't have any favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  // Return "Favorites" page:
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
