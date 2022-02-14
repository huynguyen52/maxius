import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from "../../Common/Header/Header";
import { RoutesString } from "../../Modules/routesString";
import pages from "./pages";

const RenderHeader = (isHeader: Boolean, history: any) => {
  let active = false;
  if (!isHeader) {
    return <Header headerActive={active} />;
  }
};

function RoutesWrapper() {
  const history = useHistory();

  const isHistoryCheck = () => {
    if (history.location.pathname.toLowerCase() !== RoutesString.PageNotFound) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {RenderHeader(isHistoryCheck(), history)}
      <Switch>
        {pages.map((item) => {
          return (
            <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
          );
        })}
        <Redirect to={RoutesString.PageNotFound} />
      </Switch>

    </>
  );
}

export default RoutesWrapper;