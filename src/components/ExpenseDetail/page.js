import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "semantic-ui-react";

const Page = ({ currentExpense, goTo }) => (
  <Fragment>
    {currentExpense ? (
      <Card
        header={currentExpense.text}
        meta={currentExpense.category}
        description={currentExpense.value}
      />
    ) : (
      <Card header="None" />
    )}
    <Button onClick={() => goTo("/expenses")}>Back</Button>
  </Fragment>
);

Page.propTypes = {
  currentExpense: PropTypes.shape({}).isRequired,
  goTo: PropTypes.func.isRequired
};

export default Page;
