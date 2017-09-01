---
layout: default
permalink: /projects/dejaphoto
title: Deja Photo
---
## Introduction

This was a 6 man project developed for the Software Engineering class at UC San Diego. Our goal was to create an Android app following
a customer's specifications. The customer wanted an app that would allow users to reminisce on past times by viewing photos that
remind them of their current time/place as their phone background. They later expanded on this by adding the ability to share photos
with friends and create a form of social network for photo sharing. I will explain these features more in detail below.  

**Source available on request**

## Features

### Log In
![Log In](/assets/images/dejaphoto_signin.png)  
An account system is used to manage user data. Upon launching the app the user is greeted with the above log in screen. If an account
has been logged in before on that phone, the account will automatically sign in on launch.

### Home Screen
![Home Screen](/assets/images/thumbnail_dejaphoto.png)  
Here is the main screen of the app. At the top we can see buttons to access a friends list and settings. In the center we see a picture
which has been uploaded to Deja Photo, which I will explain below. If you swipe up on the homescreen, it will open the default camera app 
and put any photos taken in Deja Photo.  

Swiping left or right will let you look at other photos that are part of Deja Photo, as well as their associated information at the bottom.
At the very bottom we can see a text field giving the location the photo was taken, determined automatically or set as a custom value, as 
well as the release, sharing, and karma buttons that will be explained later.

### Wallpaper Changer
![Lock Screen](/assets/images/dejaphoto_lockscreen.png)  
Upon exiting the app, the user's phone's wallpaper will change to the image that was open. From there, a background service will run that 
will change the photo at a set interval or after moving 500 feet. The next photo that will be chosen is determined by an algorithm that
uses configurable options including location, time of day, karma, and more. This is where the name Deja Photo comes from, as the photos
will remind you of past events relative to the present.

### Photo Options
![Alternate Photo](/assets/images/dejaphoto_alt.png)  
Here is another photo in Deja Photo. In this, the three buttons seen in the previous photo are in different states.   

The **release** button has been pressed and now shows an undo symbol. The release button removes photos from the wallpaper cycle, and later
deletes them from Deja Photo if it is not undone.  

The **sharing** button has been pressed and now indicates that the photo is blocked from sharing. This prevents friends from seeing that
photo, and can be toggled by pressing again.  

The **karma** button has not been pressed and is greyed out with a 0 counter. When pressed, the photo will increase in karma value, and
the counter will update for all users that have that photo.  

Additionally, the location field is set to its default value of Unknown Location. By tapping the field, the user can change the location
name for all users with that photo.

### Friends
![Friends List](/assets/images/dejaphoto_friendslist.png)  
This page gives a list of the user's friends to share photos with.

### Settings
![Settings](/assets/images/dejaphoto_settings.png)  
Explanation coming soon!

![Upload Photo](/assets/images/dejaphoto_albums.png)  
Uploads to a Firebase database.

## How to Run

Clone the repository into Android Studio to run the app in your choice of emulator or mobile phone.  

We could build an apk of our project, but we decided not to because this was only meant to be a private class project.
