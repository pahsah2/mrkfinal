import React , {useState} from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  
  
} from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';


import ReactTagInput from '@pathofdev/react-tag-input';
import { colourOptions , ColourOption } from './data.ts';
import 'semantic-ui-css/semantic.min.css';
import { Form } from 'semantic-ui-react';



export default function Test() {
  const [isDisabled , setDisabled] = useState(false)
  const [isClearable , setClearable] = useState(true)
  const [isLoading , setLoading] = useState(false)
  const [isRtl , setRtl] = useState(false)
  const [isSearchable , setSearchable] = useState(true);
  const [phone, setPhone] = React.useState([]);

  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

const animatedComponents = makeAnimated();

   const handleDelete = (i) => {
    this.setState({
      tags: this.state.tags.filter((tag, index) => index !== i),
    });
  }

  const handleChange = () => (
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
  </Container>
    </>
  )
}
