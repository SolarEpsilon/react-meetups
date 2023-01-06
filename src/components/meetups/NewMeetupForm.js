import { useRef } from "react";

// Card is what holds the elements of each meetup, like image and text:
import Card from "../ui/Card";

// Import CSS from our CSS file. "classes" is a JS object with the CSS classes as proprteries of it:
import classes from "./NewMeetupForm.module.css";

// Function that handles creating a new meetup:
function NewMeetupForm(props) {
  // Using React's "reference" concept, set the reference to the appropriate DOM elements to render the HTML. This is handled in AllMeetups.js:
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // Assign data entered to the meetup being created:
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // When user clicks button to add meetup, add the meetup data to the remote Firebase database:
    props.onAddMeetup(meetupData);
  }

  // Return HTML of the new meetup:
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
