import { useHistory } from "react-router-dom";

// Import function that handles creating new meetups:
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // React's useHistory hook allows us to manipulate the browser history in the DOM:
  const history = useHistory();

  // Get meetup data and turn it into a string to upload it:
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-38eda-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
