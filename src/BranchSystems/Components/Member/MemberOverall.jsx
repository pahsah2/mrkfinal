import React from 'react';
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Table,
} from 'reactstrap';
import { Container } from 'react-bootstrap';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Select from 'react-select';

export default function MemberOverall() {
  const header = {
    fontWeight: '700',
    fontSize: '25px',
  };
  const name = {
    fontWeight: '700',
    fontSize: '18px',
    float: 'right',
  };
  const topic = {
    fontWeight: '700',
    fontSize: '18px',
  };
  const detail = {
    marginRight: '1rem',
    fontSize: '18px',
  };

  return (
    <>
      <div>
        <br />
        <div style={{ margin: '0 8rem' }}>
          <div className="row d-flex justify-content-start">
            <div className="col-md">
              <Label style={header}>ยอดใช้บริการ</Label>
            </div>
            <div className="col-md">
              <Label style={name}>คุณ นภาวรรณ ยั่งยืน</Label>
            </div>
          </div>

          <div className="row my-5 justify-content-center">
            <div className="col-md-4">
              <div className="card-body">Chart</div>
            </div>
            <div className="col-md-4">
              <div className="card-body">Chart</div>
            </div>
            <div className="col-md-4">
              <div className="card-body">Chart</div>
            </div>
          </div>
          <div className="row mb-5 justify-content-start">
            <div className="col-md-4">
              <div className="card-body">Chart</div>
            </div>
            <div className="col-md-4">
              <div className="card-body">Chart</div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-2">
              <Label style={topic}>สาขาที่สมัคร</Label>
            </div>
            <div className="col-md">
              <Label style={detail}>สวนดอก</Label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <Label style={topic}>ถูกแนะนำโดย</Label>
            </div>
            <div className="col-md">
              <Label style={detail}>คุณ นภาวรรณ</Label>
              <Label style={detail}>ยั่งยืน</Label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
