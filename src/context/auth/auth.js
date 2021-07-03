import React, {useContext} from 'react';
import {LoginContext} from './settings.js';
import {When} from 'react-if';

function Auth(props) {

  const userContext = useContext(LoginContext);
  console.log('props.capability', props.capability);
  const canDoThing = props.capability ? userContext.can(props.capability) : true ;
  const okToRender = userContext.loggedIn && canDoThing;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )

}

export default Auth;
