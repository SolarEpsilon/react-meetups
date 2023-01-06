// MeetupItem renders each meetup, and checks if the meetup is favorited or not (if it is, it marks the meetup as favorited):
import MeetupItem from "./MeetupItem";
// Import CSS from our CSS file. "classes" is a JS object with the CSS classes as proprteries of it:
import classes from "./MeetupList.module.css";

// Function that creates a list of meetups by mapping each meetup to the "props" custom attributes:
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
