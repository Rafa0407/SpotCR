import React from "react";

import { Switch, Route } from "react-router-dom";

import HomeComponent from "../modules/home.component";
import SignInComponent from "../modules/authentication/signin/signin.component";
import SignUpComponent from "../modules/authentication/signup/signup.component";
import SpotComponent from "../modules/spots/spot/spot.component";
import SpotsComponent from "../modules/spots/spots/spots.component";
import EditProfileComponent from "../modules/users/edit-profile/edit-profile.component";
import UserComponent from "../modules/users/user/user.component";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ HomeComponent } />
      <Route exact path='/signup' component={ SignUpComponent } />
      <Route exact path='/signin' component={ SignInComponent } />
      <Route exact path='/spot' component={ SpotComponent } />
      <Route exact path='/spots' component={ SpotsComponent } />
      <Route exact path='/edit-profile' component={ EditProfileComponent } />
      <Route exact path='/profile' component={ UserComponent } />
    </Switch>
  </main>
)

export default Main;
