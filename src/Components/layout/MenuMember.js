import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  Button,
  Modal,
} from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/search.png';
import Return from '../../assets/icon/undo_icon.png';
import Increase from '../../assets/icon/add_menu.png';
import Select, { components } from 'react-select';
import Arrow from '../../assets/icon/arrow.png';
import Document from '../../assets/icon/document.png';
import PurchaseOrder from '../../assets/icon/order.png';
import MenuSend from '../../assets/icon/send-file.png';
export default function MenuMember() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [button_Search, setButton_Search] = useState('');
  const [division, setDivision] = useState([{ value: '', label: '' }]);
  const [branch, setBranch] = useState([{ value: '', label: '' }]);

  const [segment, setSegment] = useState('');

  const [statemodel, setModel] = useState('');
  const [statebrand, setBrand] = useState('');
  const [licenseplate, setLicenseplate] = useState('');

  const OptionSegment = [{ value: '', label: '' }];
  const OptionModel = [{ value: '', label: '' }];
  const OptionBrand = [{ value: '', label: '' }];
  const OptionLicenseplate = [{ value: '', label: '' }];

  function SetSegment(data) {
    setSegment([{ value: data.value, label: data.value }]);
  }
  function SetModel(data) {
    setModel([{ value: data.value, label: data.value }]);
  }
  function SetBrand(data) {
    setBrand([{ value: data.value, label: data.value }]);
  }
  function SetLicenseplate(data) {
    setLicenseplate([{ value: data.value, label: data.value }]);
  }

  const reset_value = () => {
    setSearch('');
  };
  const onSearch = () => {};
  return (
    <Row className="set-search-row">
      <Col xs={12} lg={4} className=" mt-2 mb-2">
        <Form.Control
          className=""
          type="text"
          placeholder="?????????????????????????????????????????????????????????,???????????????????????????"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Form.Control>
      </Col>
      <Col xs={12} lg={2} className="mt-2 mb-2">
        <Select
          options={OptionSegment}
          placeholder="Segment"
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetSegment(data)}
          className="select-list"
        />
      </Col>
      <Col xs={12} lg={2} className="mt-2 mb-2">
        <Select
          options={OptionModel}
          placeholder="????????????????????????"
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetModel(data)}
          className="select-list"
        />
      </Col>
      <Col xs={12} lg={2} className="mt-2 mb-2">
        <Select
          options={OptionBrand}
          placeholder="??????????????????"
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetBrand(data)}
          className="select-list"
        />
      </Col>
      <Col xs={12} lg={2} className="mt-2 mb-2">
        <Select
          options={OptionLicenseplate}
          placeholder="Segment"
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetLicenseplate(data)}
          className="select-list"
        />
      </Col>
      <Col xs={6} lg={2} className="mt-2 mb-2">
        <Button className="button-menu" onClick={reset_value}>
          ??????????????????
        </Button>
      </Col>
      <Col xs={6} lg={2} className="mt-2 mb-2">
        <Button
          className="button-menu "
          style={{ padding: 0, margin: 0 }}
          onClick={() => onSearch()}
        >
          ??????????????? &nbsp;
          <img src="icon/magnifying_glass_4-1 2.png" alt="" />
        </Button>
      </Col>

      <Col xs={12} className="mt-2 mb-2 d-sm-none">
        <Button className="button-menu ">
          <img src={Increase} alt="" /> &nbsp; ????????????????????????????????????
        </Button>
      </Col>
    </Row>
  );
}
