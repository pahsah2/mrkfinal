import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Pagination,
  Dropdown,
} from 'react-bootstrap';
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select';
import note_car from '../../assets/icon/note-car.png';
import add_menu from '../../assets/icon/add_menu.png';
export default function CarInfo(props) {
  const [allSerach, setAllSerach] = useState('');

  const selectSegment = useRef();
  const selectModel = useRef();
  const selectBrand = useRef();
  const selectlicenseplate = useRef();
  const selectPage = useRef();

  const [segment, setSegment] = useState([
    { value: 'dont know', label: 'ไม่รู้' },
  ]);
  const [statemodel, setStatemodel] = useState('');
  const [statebrand, setStatebrand] = useState('');
  const [licenseplate, setLicenseplate] = useState('');
  const [statepage, setStatepage] = useState();

  const [stateplateSearch, setStateplateSearch] = useState({
    plateSearch: 'not plate',
  });

  useEffect(() => {}, []);

  const handleSelectBrand = (e) => setStatebrand(e);
  const handleSelectlicenseplate = (e) => setLicenseplate(e);
  const handleSelectModel = (e) => setStatemodel(e);
  const handleSelectPage = (e) => setStatepage(e);
  const onClear = (e) => {
    setAllSerach('');
    // selectSegment.current.select.clearValue();
  };
  const search = () => {};

  return (
    <>
      <Container fluid className="carinfo">
        <Form>
          <Row className="justify-content-center">
            <Col lg={12} className="set-col-car-info" style={{ padding: 0 }}>
              <Col className="set-padding-search">
                <Form.Control
                  id="_input_search"
                  className="search-btn-top"
                  type="text"
                  placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
                  value={allSerach}
                  onChange={(e) => setAllSerach(e.target.value)}
                ></Form.Control>
              </Col>
              <Col>
                <Label className="search-label d-block d-lg-none">
                  ประเภทป้าย
                </Label>
               
              </Col>
              <Col>
                <Label className="search-label d-block d-lg-none">
                  ยี่ห้อรถ
                </Label>

                
              </Col>
              <Col>
                <Label className="search-label d-block d-lg-none">รุ่นรถ</Label>

                
              </Col>

              <Col style={{ padding: 0 }}>
                <Button
                  className="btn-block "
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => search()}
                >
                  ค้นหา <img src="icon/magnifying_glass_4-1 2.png" alt="" />
                </Button>
              </Col>
              <Col style={{ padding: 0 }}>
                <Button
                  className="btn-block "
                  style={{ padding: 0, margin: 0 }}
                >
                  <img src={add_menu} alt="" /> &nbsp; เพิ่มรายการ
                </Button>
              </Col>
            </Col>
          </Row>
        </Form>
        <Row>
          <Table responsive striped className="custom-table-info text-nowrap">
            <thead className="thead-custom">
              <tr className="text-center">
                <th>ทะเบียนรถ</th>
                <th>ประเภทป้าย</th>
                <th>ยี่ห้อ</th>
                <th>รุ่น</th>
                <th>รหัสรุ่นรถ</th>
                <th>สี</th>
                <th>ขนาดรถ</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-custom">
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>กด-252 เชียงใหม่</td>
                <td>ป้ายขาว</td>
                <td>Honda</td>
                <td>Civic - 1.8 el</td>
                <td>318iA</td>
                <td>ขาว</td>
                <td>S</td>
                <td>
                  <Button type="button" className="note-car-button">
                    <img src={note_car} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className="set-paginat">
          <div className="page-div" style={{ padding: 0 }}>
            <p>แสดง</p>
            <div className="input-dropdown">
              <Form.Control
                type="text"
                placeholder="ทั้งหมด"
                // defaultValue={statepage[0]}
                value={statepage}
                onChange={(e) => setStatepage(e.target.value)}
                disabled
              ></Form.Control>
              <Col
                className="d-flex justify-content-end set-dropdown"
                style={{ padding: 0 }}
              >
                <Dropdown onSelect={handleSelectPage} className="dropdown">
                  <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                    {/* {value} */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                    <Dropdown.Item eventKey="ทั้งหมด">ทั้งหมด</Dropdown.Item>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="15">15</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </div>
            <p>รายการ</p>
          </div>
          <div style={{ padding: 0 }}>
            <div className="box-paginate">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>

                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
