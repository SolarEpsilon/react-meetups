import { createContext, useState } from "react";

// A context is a JS object. "createContext" takes an arg, which is the initial val for the context. This can be any val, including an object:
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // The functions added below are just to make auto-completion run smoothly in our other files:
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// Function to manage the "My Favorites" section of the site:
export function FavoritesContextProvider(props) {
  // With "useState", we register different states we want to use in our app, and React will respond to different changes in that state and allow us to render a different output based on which state is active:
  const [userFavorites, setUserFavorites] = useState([]);

  // Function to add a meetup to favorites:
  function addFavoriteHandler(favoriteMeetup) {
    // Instead of just using concat, we create a function that React runs on our behalf to ensure that we work on the latest state snapshot. This is better than just running concat on its own:
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  // Function to remove a meetup from favorites:
  function removeFavoriteHandler(meetupId) {
    // If meetupId is NOT equal to the current id, we keep it. If it IS equal, we filter it out.
    // Basically, it selects every ID other than our favorite and puts it in the new array that we keep:
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  // Function to show meetup that is favorited (used in MeetupItem.js):
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  // To have access to our favorites states throughout our app, we add them to our context function (and import it into files that need it):
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  // Return the wrapped variable with props into the context we created (FavoritesContext):
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
