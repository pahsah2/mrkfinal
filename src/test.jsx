import React, { useState } from 'react';
import Student from './test1';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
} from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

import ReactTagInput from '@pathofdev/react-tag-input';
import { colourOptions, ColourOption } from './data.ts';

export default function Test() {
  const [studentsState, setStudentsState] = useState({
    students: [{ id: 1, name: 'Jeerawuth' }],
  });
  const deleteItemHandler = (deleteIndex) => {
    const data = [...studentsState.students];
    data.splice(deleteIndex, 1);
    setStudentsState({
      students: data,
    });
  };

  const [isDisabled, setDisabled] = useState(false);
  const [isClearable, setClearable] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isRtl, setRtl] = useState(false);
  const [isSearchable, setSearchable] = useState(true);
  const [phone, setPhone] = React.useState([]);

  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const animatedComponents = makeAnimated();

  const handleDelete = (i) => {
    this.setState({
      tags: this.state.tags.filter((tag, index) => index !== i),
    });
  };

  const handleChange =
    () =>
    (
      newValue: OnChangeValue<ColourOption, true>,
      actionMeta: ActionMeta<ColourOption>
    ) => {
      console.group('Value Changed');
      console.log(newValue);
      console.log(`action: ${actionMeta.action}`);
      console.groupEnd();
    };

  return (
    <>
      <Container fluid>
        <Select
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <p>{isSearchable}</p>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={colourOptions}
        />

        <ReactTagInput
          placeholder="กรุณากรอกเบอร์โทรศัพท์"
          editable={true}
          readOnly={false}
          removeOnBackspace={true}
          maxTags={2}
          tags={phone}
          onChange={(e) => setPhone(e)}
          className="input-tage"
          options={colourOptions}
        />

        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[colourOptions[4], colourOptions[5]]}
          isMulti
          onChange={(opt, meta) => console.log(opt, meta)}
          options={colourOptions}
        />

        <CreatableSelect
          isMulti
          onChange={handleChange}
          options={colourOptions}
        />

        <Form.Control id="formControlsFile" type="file" multiple label="File" />

        <div className="row">
          {studentsState.students.map((item, index) => {
            return (
              <div key={item.id} className="col-lg-3">
                <Student
                  data={item}
                  deleteStudent={deleteItemHandler.bind(this, index)}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
