import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import address_book_home from '../../assets/icon/address_book_home.png';
import appwizard_list from '../../assets/icon/appwizard_list.png';
import directory_open_file_mydocs_cool_1 from '../../assets/icon/directory_open_file_mydocs_cool-1.png';
import directory_closed_4 from '../../assets/icon/directory_closed-4.png';
import management from '../../assets/icon/management.png';
import briefcase_4 from '../../assets/icon/briefcase-4.png';
import message_file_0 from '../../assets/icon/message_file-0.png';
import users_key_4 from '../../assets/icon/users_key-4.png';
import network_normal_two_pcs_4 from '../../assets/icon/network_normal_two_pcs-4.png';
import chart1_4 from '../../assets/icon/chart1-4.png';

export default function TabsIconSetBrandCar() {
  return (
    <Row className="g-0">
      <Col lg={12} className="d-flex justify-content-start">
        <div className="tabs-icon mb-4">
          <Button>
            <img src={address_book_home} alt="" />
          </Button>
          <Button>
            <img src={appwizard_list} alt="" />
          </Button>
          <Button>
            <img src={directory_open_file_mydocs_cool_1} alt="" />
          </Button>
          <Button>
            <img src={directory_closed_4} alt="" />
          </Button>
          <Button>
            <img src={management} alt="" />
          </Button>
          <Button>
            <img src={briefcase_4} alt="" />
          </Button>
          <Button>
            <img src={message_file_0} alt="" />
          </Button>
          <Button>
            <img src={users_key_4} alt="" />
          </Button>
          <Button>
            <img src={network_normal_two_pcs_4} alt="" />
          </Button>
          <Button>
            <img src={chart1_4} alt="" />
          </Button>
          <Button type="button" className="button-add-car">
            <p>เพิ่มรายการรถ</p>
          </Button>
        </div>
      </Col>
    </Row>
  );
}
