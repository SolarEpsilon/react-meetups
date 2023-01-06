import { useState, useEffect } from "react";
// Import list of meetups from the appropraite file:
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // To have our data not have to run on an async/await, we can have a loading spinner run for our data, and then replace the loading spinner when our data has loaded up. In React, we can achieve this with React's useState, which returns two elements. First element (isLoading) is the current state snapshot, second element (setIsLoading) is a function for updating the state:
  const [isLoading, setIsLoading] = useState(true);

  // Set loaded meetups to an empty array initially. We will override with our data from the user later:
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect is React's native solution to prevent infinite loops. It allows you to run some code under certain conditions:
  useEffect(() => {
    // Start loading data:
    setIsLoading(true);
    // Get data from external database:
    fetch(
      "https://react-getting-started-38eda-default-rtdb.firebaseio.com/meetups.json"
    )
      // Return data in json format (unpack it, effectively):
      .then((response) => {
        return response.json();
      })
      // Store each value of data in a new "meetup" variable:
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        // Add meetup to loaded meetups:
        setLoadedMeetups(meetups);
      })
      // If error with uplpading, run simple error in console:
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // If loading is active, add "loading" to DOM:
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // Return "AllMeetups" page:
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
