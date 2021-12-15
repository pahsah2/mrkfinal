import React from 'react';
import {
  Table,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { Container } from 'react-bootstrap';

import Select from 'react-select';
import $ from 'jquery';
export default function AddCarInfo() {
  function openAddCarInfoModal() {
    this.setState({
      addCarInfoModal: !this.state.addCarInfoModal,
    });
    this.disableIcon(this.state.addCarInfoModal);
  }

  function disableIcon(status) {
    if (!status) {
      $('.dash-icon').addClass('hidden');
      //   $('#_member_show_info').parents
      $('#_member_show_info').addClass('hidden');
    } else {
      $('.dash-icon').removeClass('hidden');
      $('#_member_show_info').removeClass('hidden');
    }
  }
  const pointButton = {
    cursor: 'pointer',
  };
  const closeBtn = (
    <button
      type="button"
      className="close"
      aria-label="Close"
      onClick={this.openAddCarInfoModal.bind(this)}
    >
      <img src="icon/close-icon.png" alt="" width="15" height="16" />
    </button>
  );

  const options = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];

  return (
    <>
      <img
        src="icon/address_book_pad 3.png"
        onClick={this.openAddCarInfoModal.bind(this)}
        style={pointButton}
      />

      <Modal
        className="custom-modal"
        isOpen={this.state.addCarInfoModal}
        toggle={this.openAddCarInfoModal.bind(this)}
        backdrop={false}
        keyboard={false}
        scrollable={true}
        size="xl"
      >
        <ModalHeader
          toggle={this.openAddCarInfoModal.bind(this)}
          close={closeBtn}
        >
          <img src="icon/management.png" alt="" /> ลูกค้า &#62; สร้างข้อมูลรถ
        </ModalHeader>
        <ModalBody>
          <div className="tabs-text mb-4">
            <a href="#">สินค้าและบริการ</a>
            <a href="#">สต็อก</a>
            <a href="#">ลูกค้า</a>
            <a href="#">สาขา</a>
            <a href="#">JOB</a>
            <a href="#">การเงิน</a>
            <a href="#">พนักงาน</a>
            <a href="#">ภาพรวมร้าน</a>
          </div>
          <div className="tabs-icon mb-4">
            <Button>
              <img src="icon/address_book_home.png" alt="" />
            </Button>
            <Button>
              <img src="icon/appwizard_list.png" alt="" />
            </Button>
            <Button>
              <img src="icon/directory_open_file_mydocs_cool-1.png" alt="" />
            </Button>
            <Button>
              <img src="icon/directory_closed-4.png" alt="" />
            </Button>
            <Button>
              <img src="icon/management.png" alt="" />
            </Button>
            <Button>
              <img src="icon/briefcase-4.png" alt="" />
            </Button>
            <Button>
              <img src="icon/message_file-0.png" alt="" />
            </Button>
            <Button>
              <img src="icon/users_key-4.png" alt="" />
            </Button>
            <Button>
              <img src="icon/network_normal_two_pcs-4.png" alt="" />
            </Button>
            <Button>
              <img src="icon/chart1-4.png" alt="" />
            </Button>
          </div>
          <div className="box-typecar">
            <div className="row align-items-center mb-3">
              <div className="col-md-4 pr-0">
                <Input placeholder="ชื่อประเภท" height="100%"></Input>
              </div>
              <div className="col-md-2 pl-1 py-0">
                <Button>
                  <img
                    src="icon/file_blue_grad_paint-0 2.png"
                    alt=""
                    className="mr-2 align-bottom"
                    width="30"
                  />
                  เพิ่มรายการ
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Table responsive className="custom-table">
                  <thead>
                    <tr>
                      <th colSpan="2">ประเภท</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>รถเก๋ง</td>
                      <td>
                        <a href="#">
                          <img
                            src="icon/address_book_pad 3.png"
                            alt=""
                            width="25"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>รถกระบะ</td>
                      <td>
                        <a href="#">
                          <img
                            src="icon/address_book_pad 3.png"
                            alt=""
                            width="25"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
