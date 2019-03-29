import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Button, Icon } from "semantic-ui-react";

// Presentational Component for Expense Detail
const Page = ({ currentExpense, goTo, deleteExpense }) => (
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
    <Button onClick={() => deleteExpense(currentExpense.id, "/expenses")}>
      <Icon name="delete" />
      Delete
    </Button>
  </Fragment>
);

// Props mapping
Page.propTypes = {
  currentExpense: PropTypes.shape({}).isRequired,
  goTo: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired
};

export default Page;
