// Import CSS from our CSS file. "classes" is a JS object with the CSS classes as proprteries of it:
import classes from "./Card.module.css";

// Creates whole element for each meetup (including image, text, etc):
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
