import React from "react";
import { Form, Input, Button, Icon, Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const categoryOptions = [
  { key: "IN", value: "IN", text: "Income" },
  { key: "EX", value: "EX", text: "Expense" }
];

// Component for adding expenses
const AddExpense = ({ onSaveExpense }) => {
  let text;
  let value;
  let category;
  let categoryText;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!text.inputRef.value.trim()) return;

          if (value.inputRef.value < 0) return;

          categoryText = category.getSelectedItem().text;
          if (!categoryText.trim()) return;

          // action creator
          onSaveExpense(
            categoryText,
            text.inputRef.value,
            parseInt(value.inputRef.value)
          );
          text.inputRef.value = "";
          value.inputRef.value = "";
          category.clearValue();
        }}
      >
        <Dropdown
          search
          selection
          placeholder="Select category"
          options={categoryOptions}
          ref={node => {
            category = node;
          }}
        />
        <Input
          placeholder="Description..."
          ref={node => {
            text = node;
          }}
        />
        <Input
          type="number"
          step=".01"
          placeholder="Value..."
          ref={node => {
            value = node;
          }}
        />

        <Button type="submit">
          <Icon name="add" />
        </Button>
      </Form>
    </div>
  );
};

// Props Mapping
AddExpense.propTypes = {
  onSaveExpense: PropTypes.func.isRequired
};

export default AddExpense;
