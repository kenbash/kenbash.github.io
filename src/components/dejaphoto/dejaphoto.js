import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import dejaphoto_signin_img from "../../assets/images/dejaphoto_signin.png";
import dejaphoto_img from "../../assets/images/thumbnail_dejaphoto.png";
import dejaphoto_lockscreen_img from "../../assets/images/dejaphoto_lockscreen.png";
import dejaphoto_alt_img from "../../assets/images/dejaphoto_alt.png";
import dejaphoto_friendslist_img from "../../assets/images/dejaphoto_friendslist.png";
import dejaphoto_settings_img from "../../assets/images/dejaphoto_settings.png";
import dejaphoto_albums_img from "../../assets/images/dejaphoto_albums.png";

class DejaPhoto extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="DejaPhoto">
        <Header title="DejaPhoto" />
        <main className="writeup">
          <div className="container">
            <h2 className="writeup-top">Introduction</h2>

            <p>
              This was a 6 man project developed for the Software Engineering
              class at UC San Diego. Our goal was to create an Android app
              following a customer's specifications. The customer wanted an app
              that would allow users to reminisce on past times by viewing
              photos that remind them of their current time/place as their phone
              background. They later expanded on this by adding the ability to
              share photos with friends and create a form of social network for
              photo sharing. I will explain these features more in detail below.
            </p>

            <p>
              <b>Source available on request</b>
            </p>

            <h2>Features</h2>

            <h3>Log In</h3>
            <img alt="Log In" src={dejaphoto_signin_img} />
            <p>
              An account system is used to manage user data. Upon launching the
              app the user is greeted with the above log in screen. If an
              account has been logged in before on that phone, the account will
              automatically sign in on launch.
            </p>

            <h3>Home Screen</h3>
            <img alt="Home Screen" src={dejaphoto_img} />
            <p>
              Here is the main screen of the app. At the top we can see buttons
              to access a friends list and settings. In the center we see a
              picture which has been uploaded to Deja Photo, which I will
              explain below. If you swipe up on the homescreen, it will open the
              default camera app and put any photos taken in Deja Photo.
            </p>

            <p>
              Swiping left or right will let you look at other photos that are
              part of Deja Photo, as well as their associated information at the
              bottom. At the very bottom we can see a text field giving the
              location the photo was taken, determined automatically or set as a
              custom value, as well as the release, sharing, and karma buttons
              that will be explained later.
            </p>

            <h3>Wallpaper Changer</h3>
            <img alt="Lock Screen" src={dejaphoto_lockscreen_img} />
            <p>
              Upon exiting the app, the user's phone's wallpaper will change to
              the image that was open. From there, a background service will run
              that will change the photo at a set interval or after moving 500
              feet. The next photo that will be chosen is determined by an
              algorithm that uses configurable options including location, time
              of day, karma, and more. This is where the name Deja Photo comes
              from, as the photos will remind you of past events relative to the
              present.
            </p>

            <h3>Photo Options</h3>
            <img alt="Alternate Photo" src={dejaphoto_alt_img} />
            <p>
              Here is another photo in Deja Photo. In this, the three buttons
              seen in the previous photo are in different states.{" "}
            </p>

            <p>
              The <b>release</b> button has been pressed and now shows an undo
              symbol. The release button removes photos from the wallpaper
              cycle, and later deletes them from Deja Photo if it is not undone.
            </p>

            <p>
              The <b>sharing</b> button has been pressed and now indicates that
              the photo is blocked from sharing. This prevents friends from
              seeing that photo, and can be toggled by pressing again.
            </p>

            <p>
              The <b>karma</b> button has not been pressed and is greyed out
              with a 0 counter. When pressed, the photo will increase in karma
              value, and the counter will update for all users that have that
              photo.
            </p>

            <p>
              Additionally, the location field is set to its default value of
              Unknown Location. By tapping the field, the user can change the
              location name for all users with that photo.
            </p>

            <h3>Friends</h3>
            <img alt="Friends List" src={dejaphoto_friendslist_img} />
            <p>
              This page gives a list of the user's friends to share photos with.
              Friends can be added/removed using their account email at the top.
              When two users are both on each others' friends lists, they will
              be able to see each other's photos if sharing is enabled.
            </p>

            <h3>Settings</h3>
            <img alt="Settings" src={dejaphoto_settings_img} />
            <p>
              In the settings menu we first see the Choose Photo button, which
              is used to upload new photos to Deja Photo. From there, we can see
              various options to enable/disable which photos to see in Deja
              Photo. The user can also choose to disable their sharing
              completely.
            </p>

            <p>
              Next are the options for the wallpaper cycle that will run in the
              background. The user can select the length of the interval between
              photos, as well as which values to consider in the algorithm to
              determine the next photo.
            </p>

            <img alt="Upload Photo" src={dejaphoto_albums_img} />
            <p>
              After selecting to choose a photo, this screen will open using the
              phone's default album application. After selecting a photo to add,
              the photo will be uploaded to a Firebase database along with their
              other user data. The user's friends' photos are also downloaded
              from the database to a separate album. All of these photos are
              viewable from the main screen.
            </p>

            <h2>How to Run</h2>

            <p>
              Clone the repository into Android Studio to run the app in your
              choice of emulator or mobile phone.{" "}
            </p>

            <p>
              We could build an apk of our project, but we decided not to
              because this was only meant to be a private class project.
            </p>

            <Link className="writeup-home-link" to="/">
              <p>Return Home</p>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default DejaPhoto;
