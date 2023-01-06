import MainNavigation from "./MainNavigation";
// Import CSS from our CSS file. "classes" is a JS object with the CSS classes as proprteries of it:
import classes from "./Layout.module.css";

// Main page layout. Gets main navigation, then creates that HTML element using React:
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
// Return page layout for other files:
export default Layout;
