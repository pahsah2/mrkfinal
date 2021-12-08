import React, { useState } from 'react';
import { Button, Dropdown, Form, Grid, Icon } from 'semantic-ui-react';
import { Formik, FieldArray } from 'formik';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

const mainField = [
  { key: 'fruit', text: 'fruit', value: 'fruit' },
  { key: 'color', text: 'color', value: 'color' },
  { key: 'taste', text: 'taste', value: 'taste' },
];

const operation = [
  { key: 'is ', text: 'is ', value: 'is ' },
  { key: 'is not ', text: 'is not ', value: 'is not ' },
];
const options = [
  { key: 'apple', text: 'apple', value: 'apple' },
  { key: 'yellow', text: 'yellow', value: 'yellow' },
  { key: 'sweet', text: 'sweet', value: 'sweet' },
];

const initialValues = {
  mainField: '',
  operation: '',
  value: [],
};

const DropDownWithHooks = () => {
  const [dropDownOptions, setDropDownOptions] = useState(options);

  const handleAddition = (e, { value }) => {
    setDropDownOptions((prevOptions) => [
      { text: value, value },
      ...prevOptions,
    ]);
  };

  return (
    <Formik
      initialValues={{ rows: [initialValues] }}
      onSubmit={(values) => {
        // transform the rows to add the condition key for each row object
        const output = values.rows.map((row, index) => {
          if (index === 0) {
            return { ...row, condition: 'if' };
          } else {
            return { ...row, condition: 'and' };
          }
        });

        console.log(output);
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit} className={'rulesetForm'}>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <FieldArray
            name="rows"
            render={({ push, remove }) => {
              return (
                values.rows.length > 0 &&
                values.rows.map((row, index) => {
                  return (
                    <Grid key={`mainfield-operation-value-${index}`}>
                      <Grid.Row className={'rulesetGrid fluid'}>
                        {index === 0 ? (
                          <p className="condition"> If</p>
                        ) : (
                          <p className="condition"> And</p>
                        )}

                        <Dropdown
                          name={`rows.${index}.mainField`}
                          className={'dropdown fieldDropdown'}
                          widths={2}
                          placeholder="Fruit"
                          fluid
                          selection
                          options={mainField}
                          value={row.mainField}
                          onChange={(e, { value }) =>
                            setFieldValue(`rows.${index}.mainField`, value)
                          }
                        />

                        <Dropdown
                          name={`rows.${index}.operation`}
                          className={'dropdown operationDropdown'}
                          widths={2}
                          placeholder="Operation"
                          fluid
                          selection
                          options={operation}
                          value={row.operation}
                          onChange={(e, { value }) =>
                            setFieldValue(`rows.${index}.operation`, value)
                          }
                        />
                        <Dropdown
                          name={`rows.${index}.value`}
                          className={'dropdown valueDropdown'}
                          widths={1}
                          placeholder="Value"
                          fluid
                          search
                          allowAdditions
                          selection
                          multiple
                          options={dropDownOptions}
                          value={row.value}
                          onAddItem={handleAddition}
                          onChange={(e, { value }) =>
                            setFieldValue(`rows.${index}.value`, value)
                          }
                        />

                        {values.rows.length - 1 === index && (
                          <Icon
                            className={'  plus icon plusIcon'}
                            onClick={() => push(initialValues)}
                          />
                        )}
                        {values.rows.length !== 1 && (
                          <Icon
                            className={'minus crossIcon'}
                            onClick={() => remove(index)}
                          />
                        )}
                      </Grid.Row>
                    </Grid>
                  );
                })
              );
            }}
          />
          <div>
            <div style={{ marginTop: '1rem' }}>
              <Button
                floated="right"
                type="submit"
                variant="contained"
                primary={true}
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DropDownWithHooks;

// Expected output:
// somethig similar to this, not exactly though...
// [
//   {
//   mainField: "color"
//   operation: "is"
//   value: "yellow"
//   condition: "if"
//   },
//   {
//     mainField: "fruit"
//     operation: "is not"
//     value: "apple"
//     condition: "and"
//   },
//   {
//       mainField: "color"
//       operation: "is"
//       value:"sweet"
//       condition: "and"
//   },
// ]
// condition will be "if" for first row and "and" for all other rows
//Thanks a lot for your help. Thanks a ton
