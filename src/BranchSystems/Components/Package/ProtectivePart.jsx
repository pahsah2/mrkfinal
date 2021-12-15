import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Switch } from 'antd';
import Search from '../../assets/icon/search.png';
import Add_member from '../../assets/icon/add_menu.png';
export default function ProtectivePart() {
  const [service, setService] = useState('');
  const [allsearch, setAllsearch] = useState('');

  const handleSelectService = (e) => setService(e);
  const handleSearch = (e) => {};
  const [statusService, setStatusService] = useState(false);
  const checked = false;

  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };
  return (
    <div className="div-tab-all ">
      <br />
      <table className="table table-responsive">
        <thead className="t-header-package">
          <tr>
            <th>
              <div className="input-dropdown-package">
                <Form.Control
                  type="text"
                  placeholder="บริการ"
                  // defaultValue={statepage[0]}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  disabled
                ></Form.Control>
                <Col
                  className="d-flex justify-content-end set-dropdown"
                  style={{ padding: 0 }}
                >
                  <Dropdown onSelect={handleSelectService} className="dropdown">
                    <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                      {/* {value} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                      <Dropdown.Item eventKey="เคลือบคริสตัล">
                        เคลือบคริสตัล
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="เคลือบเซรามิก">
                        เคลือบเซรามิก
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </th>
            <th>
              <div className="div-input-search">
                <Form.Control
                  type="text"
                  placeholder="ทั้งหมด"
                  // defaultValue={statepage[0]}
                  value={allsearch}
                  onChange={(e) => setAllsearch(e.target.value)}
                  className="input-search"
                ></Form.Control>
              </div>
            </th>
            <th>
              <Button type="button" className="button">
                <img src={Search} className="icon-button" /> &nbsp; ค้นหา
              </Button>
            </th>
            <th>
              <Link to="/package/add-protective-part">
                <Button type="button" className="button">
                  <img src={Add_member} className="icon-button" /> &nbsp;
                  เพิ่มรายการ
                </Button>
              </Link>
            </th>
          </tr>
        </thead>
      </table>
      <table className="table table-responsive table-wash-part">
        <thead>
          <tr className="t-header-package">
            <th>ราคา/ขนาดรถ</th>
            <th>กระโปรงหน้า</th>
            <th>กระโปรงหลัง</th>
            <th>ประตูหน้า</th>
            <th>ประตูหลัง</th>
            <th>กันชน</th>
            <th>หลังคา</th>
            <th>แก้ม</th>
            <th>บริการเปิด/ปิด</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="t-body-package">
          <tr>
            <td>ราคากลาง</td>
            <td>180 </td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/delete-button.png" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180 </td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/delete-button.png" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180 </td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/delete-button.png" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180 </td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/delete-button.png" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180 </td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/delete-button.png" />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180 </td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src="icon/delete-button.png" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
