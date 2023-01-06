import { useContext } from "react";
// Card is what holds the elements of each meetup, like image and text:
import Card from "../ui/Card";
// Import CSS from our CSS file. "classes" is a JS object with the CSS classes as proprteries of it:
import classes from "./MeetupItem.module.css";
// FavoritesContext is meetups marked as favorites by the user:
import FavoritesContext from "../../store/favorites-context";

// MeetupItem renders each meetup, and checks if the meetup is favorited or not (if it is, it marks the meetup as favorited):
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  // Toggle if a meetup is favorited or not:
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      // Re-create meetup item and pass it as an arguement to the addFavorites function, which triggers the addFavoriteHandler, whch updates the state and adds this item to the favorite array:
      favoritesCtx.addFavorite({
        id: props.id,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  // Render meetup:
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
