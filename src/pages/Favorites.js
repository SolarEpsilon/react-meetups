import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  // Connect to context in our favorites.context file. From this, we can get our favorites array:
  const favoritesCtx = useContext(FavoritesContext);

  // Helper variable to display a message if there are no favorites, and if there are favorites, display those instead of a message:
  let content;

  // If no favorites, display message. If favorites, display those:
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You don't have any favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
