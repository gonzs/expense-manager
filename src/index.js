import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./reducers/index";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ExpensesList from "./components/ExpensesList";
import ExpenseDetail from "./components/ExpenseDetail";
import { fetchAllExpenses } from "./actions";

store.dispatch(fetchAllExpenses());

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/expenses/:itemId" component={ExpenseDetail} />
        <Route path="/expenses" component={ExpensesList} />
        <Redirect from="" to="/expenses" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
