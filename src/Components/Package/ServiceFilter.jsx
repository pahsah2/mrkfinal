import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Switch } from 'antd';
import Search from '../../assets/icon/search.png';
import Add_member from '../../assets/icon/add_menu.png';
import Select, { components } from 'react-select';
import Delete from '../../assets/icon/delete.png';
import Write from '../../assets/icon/add-staff.png';
export default function ServiceFilter() {
  const [service, setService] = useState('');
  const [allsearch, setAllsearch] = useState('');

  const handleSelectService = (e) => setService(e);
  const [statusService, setStatusService] = useState(false);

  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };

  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  const optionService = [
    { value: 'Dupont AUTO PPF เต็มคัน', label: 'Dupont AUTO PPF เต็มคัน' },
    {
      value: 'Dupont AUTO PPF ช่วงหน้ารถ',
      label: 'Dupont AUTO PPF ช่วงหน้ารถ',
    },
    {
      value: 'Autozkin MODEL SLIM เต็มคัน',
      label: 'Autozkin MODEL SLIM เต็มคัน',
    },
    {
      value: 'Autozkin MODEL SLIM ช่วงหน้ารถ',
      label: 'Autozkin MODEL SLIM ช่วงหน้ารถ',
    },
    {
      value: 'Autozkin ORGINAL PPF เต็มคัน',
      label: 'Autozkin ORGINAL PPF เต็มคัน',
    },
    {
      value: 'Autozkin ORGINAL PPF ช่วงหน้ารถ',
      label: 'Autozkin ORGINAL PPF ช่วงหน้ารถ',
    },
  ];
  return (
    <div className="div-tab-all ">
      <br />
       <div className="width-table">
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
              <Link to="/package/add-service-filter">
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
            <th>รับประกัน</th>
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
            <td>3 ปี</td>
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
            <td>3 ปี</td>
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
            <td>3 ปี</td>
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
            <td>3 ปี</td>
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
            <td>3 ปี</td>
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
            <td>3 ปี</td>
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
    </div>
  );
}
