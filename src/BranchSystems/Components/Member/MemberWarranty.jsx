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
import { Container, Row, Col } from 'react-bootstrap';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Select from 'react-select';

export default function MemberWarranty() {
  const optionsBrand = [{ value: 'default', label: 'ยี่ห้อรถ' }];

  const optionsModel = [{ value: 'default', label: 'รุ่นรถ' }];
  const optionsPage = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];
  return (
    <div>
      <br />
      <div className="row align-items-center">
        <div className="col-md-4 pr-0">
          <Input
            placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
            height="100%"
          ></Input>
        </div>
        <div className="col-md-2 px-0 ml-1">
          <Select
            options={optionsBrand}
            isSearchable={false}
            defaultValue={optionsBrand[0]}
            className="mr-1 align-bottom"
            height="100%"
          />
        </div>
        <div className="col-md-2 px-0">
          <Select
            options={optionsModel}
            isSearchable={false}
            defaultValue={optionsModel[0]}
            className="mr-1 align-bottom"
            height="100%"
          />
        </div>

        <Button className="btn-block">
          ค้นหา <img src="icon/magnifying_glass_4-1 2.png" alt="" />
        </Button>

        <Button
          className="btn-block return-button"
          style={{ padding: 0, margin: 0 }}
        >
          คืนค่า
        </Button>
      </div>
      <Table responsive className="table-custom text-nowrap mt-4">
        <thead>
          <tr>
            <th>ยี่ห้อ</th>
            <th>รุ่น</th>
            <th>ทะเบียน</th>
            <th>สี</th>
            <th>การรับประกันสินค้า</th>
            <th>เลขที่บิล</th>
            <th>การรับประกัน</th>
            <th>สถานะ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <img src="icon/iconfinder-eye-4341288_120560 2.png" />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="set-paginate">
        <div className="box-select-table">
          <span className="box-select-text">แสดง</span>
          <Select
            options={optionsPage}
            defaultValue={optionsPage[0]}
            isClearable={false}
            isSearchable={false}
            className="select-list"
          />
          <span className="box-select-text">รายการ</span>
        </div>
        <div className="box-paginate">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
