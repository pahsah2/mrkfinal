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
export default function LightfilterPart() {
  const [service, setService] = useState([{ value: '', label: '' }]);
  const [allsearch, setAllsearch] = useState('');

  const handleSelectService = (e) => setService(e);
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
    { value: '3M MODEL FX', label: '3M MODEL FX' },
    {
      value: ' Lamina MODEL POP',
      label: ' Lamina MODEL POP',
    },
    { value: 'Lamina MODEL APL/ARL/ANL', label: 'Lamina MODEL APL/ARL/ANL' },
    { value: 'Ceramic MODEL CS', label: 'Ceramic MODEL CS' },
    {
      value: ' Ceramic MODEL CS VIP/UV400',
      label: ' Ceramic MODEL CS VIP/UV400',
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
                  placeholder="?????????????????????"
                  // defaultValue={statepage[0]}
                  value={allsearch}
                  onChange={(e) => setAllsearch(e.target.value)}
                  className="input-search"
                ></Form.Control>
              </div>
            </th>
            <th>
              <Button type="button" className="button">
                <img src={Search} className="icon-button" /> &nbsp; ???????????????
              </Button>
            </th>
            <th>
              <Link to="/package/add-light-filter-part">
                <Button type="button" className="button">
                  <img src={Add_member} className="icon-button" /> &nbsp;
                  ?????????????????????????????????
                </Button>
              </Link>
            </th>
          </tr>
        </thead>
      </table>
      <table className="table table-responsive table-wash-part">
        <thead>
          <tr className="t-header-package">
            <th>????????????/??????????????????</th>
            <th>???????????????????????????</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>TRUCK CAB</th>
            <th>SUV</th>
            <th>TRUCK 4 DOOR </th>
            <th>XL</th>
            <th>VANS</th>
            <th>??????????????????????????????/?????????</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="t-body-package">
          <tr>
            <td>????????????????????????</td>
            <td>7 ??????</td>
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
            <td>????????????????????????</td>
            <td>7 ??????</td>
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
            <td>????????????????????????</td>
            <td>7 ??????</td>
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
            <td>????????????????????????</td>
            <td>7 ??????</td>
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
            <td>????????????????????????</td>
            <td>7 ??????</td>
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
            <td>????????????????????????</td>
            <td>7 ??????</td>
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
