import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Form, Button } from 'react-bootstrap';

import Select, { components } from 'react-select';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import Search from '../../assets/icon/search.png';
import Add_member from '../../assets/icon/add_menu.png';
import Delete from '../../assets/icon/delete.png';
import Write from '../../assets/icon/add-staff.png';
export default function WashPart() {
  const [service, setService] = useState([{ value: '', label: '' }]);
  const [allsearch, setAllsearch] = useState('');

  const handleSearch = (e) => {};
  const [statusService, setStatusService] = useState(false);
  const checked = false;

  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };

  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  const optionService = [
    { value: ' บริการทำความสะอาดรถ', label: 'บริการทำความสะอาดรถ' },
    {
      value: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
      label: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
    },
    { value: 'เหมาบริการ + เคลือบ Wax', label: 'เหมาบริการ + เคลือบ Wax' },
    { value: 'แพคเกจล้างรถ + เคลือบ Wax', label: 'แพคเกจล้างรถ + เคลือบ Wax' },
    {
      value: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
      label: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
    },
  ];
  return (
    <div className="div-tab-all ">
      <br />
      <table className="table table-responsive">
        <thead className="t-header-package">
          <tr>
            <th>
              <Select
                options={optionService}
                defaultValue={optionService[0]}
                placeholder=""
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetService(data)}
                className="select-list"
              />
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
              <Link to="/package/add-wash-part">
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
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>TRUCK CAB</th>
            <th>SUV</th>
            <th>TRUCK 4 DOOR </th>
            <th>XL</th>
            <th>VANS</th>
            <th>บริการเปิด/ปิด</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="t-body-package">
          <tr>
            <td>ราคากลาง</td>
            <td>180</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>550</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Write} />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Delete} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>550</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Write} />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Delete} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>550</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Write} />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Delete} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>550</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Write} />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Delete} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>550</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Write} />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Delete} />
              </Button>
            </td>
          </tr>
          <tr>
            <td>ราคากลาง</td>
            <td>180</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>250</td>
            <td>250</td>
            <td>300</td>
            <td>550</td>
            <td>
              <Switch onClick={statusServiceToggler} />
              {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Write} />
              </Button>
            </td>
            <td>
              <Button type="" className="button-package">
                <img src={Delete} />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
