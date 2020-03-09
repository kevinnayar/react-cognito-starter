import * as React from 'react';
import { History } from 'history';
import { Route } from 'react-router';

import PrivateRoutesContainer from './containers/PrivateRoutesContainer/PrivateRoutesContainer';
import AuthContainer from './containers/AuthContainer/AuthContainer';
import LogoutContainer from './containers/LogoutContainer/LogoutContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';

function getAllowedPaths(): string[] {
  return [
    '/auth',
    '/terms-and-conditions',
  ];
}

export default (history: History<any>) => {
  return (
    <Route>
      <Route path="/auth" exact component={AuthContainer} />
      <Route path="/terms-and-conditions" exact component={TermsAndConditions} />

      <PrivateRoutesContainer redirectPath={history.location.pathname} allowedPaths={getAllowedPaths()}>
        <Route path="/logout" exact component={LogoutContainer} />
        <Route path="/app" exact component={HomeContainer} />
      </PrivateRoutesContainer>
    </Route>
  );
};


