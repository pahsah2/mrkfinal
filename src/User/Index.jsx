import React, { useState } from 'react';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import {
  Table,
  Button,
  Label,
  Input,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';
import Select, { components } from 'react-select';
import { Pagination } from 'react-laravel-paginex';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCaretDown, faSearch);

export default function Index() {
  const [stateemployeeModal, setStateemployeeModal] = useState({
    employeeModal: false,
  });
  const [statedata, setStatedata] = useState({ data: null });
  const [statepageNum, setStatepageNum] = useState({ pageNum: 'all' });
  const [stateoptions, setStateoptions] = useState({
    options: {
      buttonIcons: true,
      numberClass: 'page-link paginate-color',
      prevButtonIcon: 'fa fa-caret-left',
      nextButtonIcon: 'fa fa-caret-right',
    },
  });
  const [statedepartment, setStatedepartment] = useState({ department: [] });
  const [statedepartmentValue, setStatedepartmentValue] = useState({
    departmentValue: 'not selected',
  });
  const [statebranchValue, setStatebranchValue] = useState({
    branchValue: 'not selected',
  });
  const [statesearchValue, setStatesearchValue] = useState({
    searchValue: 'not search',
  });
  const [statebranch, setStatebranch] = useState({ branch: null });

  const history = useHistory();
  function close() {
    let path = `/`;
    history.push(path);
  }

  const selectDepartment = React.createRef();
  const selectBranch = React.createRef();
  function getDaysDiff(startDate = new Date(), endDate = new Date()) {
    if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

    let timeDiff = endDate - startDate;
    let timeDiffInDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    return timeDiffInDays;
  }

  function getMonthsDiff(startDate = new Date(), endDate = new Date()) {
    let monthsOfFullYears = this.getYearsDiff(startDate, endDate) * 12;
    let months = monthsOfFullYears;
    // the variable below is not necessary, but I kept it for understanding of code
    // we can use "startDate" instead of it
    let yearsAfterStart = new Date(
      startDate.getFullYear() + this.getYearsDiff(startDate, endDate),
      startDate.getMonth(),
      startDate.getDate()
    );
    let isDayAhead = endDate.getDate() >= yearsAfterStart.getDate();

    if (startDate.getMonth() == endDate.getMonth() && !isDayAhead) {
      months = 11;
      return months;
    }

    if (endDate.getMonth() >= yearsAfterStart.getMonth()) {
      let diff = endDate.getMonth() - yearsAfterStart.getMonth();
      months += isDayAhead ? diff : diff - 1;
    } else {
      months += isDayAhead
        ? 12 - (startDate.getMonth() - endDate.getMonth())
        : 12 - (startDate.getMonth() - endDate.getMonth()) - 1;
    }

    return months;
  }

  function getYearsDiff(startDate = new Date(), endDate = new Date()) {
    if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

    let yearB4End = new Date(
      endDate.getFullYear() - 1,
      endDate.getMonth(),
      endDate.getDate()
    );
    let year = 0;
    year =
      yearB4End > startDate
        ? yearB4End.getFullYear() - startDate.getFullYear()
        : 0;
    let yearsAfterStart = new Date(
      startDate.getFullYear() + year + 1,
      startDate.getMonth(),
      startDate.getDate()
    );

    if (endDate >= yearsAfterStart) year++;

    return year;
  }

  function calExactTimeDiff(firstDate, secondDate) {
    if (firstDate > secondDate)
      [firstDate, secondDate] = [secondDate, firstDate];

    let monthDiff = 0;
    let isDayAhead = secondDate.getDate() >= firstDate.getDate();

    if (secondDate.getMonth() >= firstDate.getMonth()) {
      let diff = secondDate.getMonth() - firstDate.getMonth();
      monthDiff += isDayAhead ? diff : diff - 1;
    } else {
      monthDiff += isDayAhead
        ? 12 - (firstDate.getMonth() - secondDate.getMonth())
        : 12 - (firstDate.getMonth() - secondDate.getMonth()) - 1;
    }

    let dayDiff = 0;

    if (isDayAhead) {
      dayDiff = secondDate.getDate() - firstDate.getDate();
    } else {
      let b4EndDate = new Date(
        secondDate.getFullYear(),
        secondDate.getMonth() - 1,
        firstDate.getDate()
      );
      dayDiff = this.getDaysDiff(b4EndDate, secondDate);
    }

    if (firstDate.getMonth() == secondDate.getMonth() && !isDayAhead)
      monthDiff = 11;

    let exactTimeDiffUnits = {
      yrs: this.getYearsDiff(firstDate, secondDate),
      mths: monthDiff,
      dys: dayDiff,
    };

    return `${
      exactTimeDiffUnits.yrs > 0 ? exactTimeDiffUnits.yrs + ' ปี ' : ''
    }  ${
      exactTimeDiffUnits.mths > 0 ? exactTimeDiffUnits.mths + ' เดือน ' : ''
    }  ${exactTimeDiffUnits.dys > 0 ? exactTimeDiffUnits.dys + ' วัน ' : ''} `;
  }

  const SetActive = async (data, id, key) => {
    if (id === this.props.myId) {
      if (
        window.confirm(
          'เมื่อคุณปิดการใช้งานตัวเอง คุณต้องออกจากระบบทันที คุณต้องการจะทำต่อใช่หรือไม่'
        )
      ) {
        if (data.target.value != 'on') {
          $('#_sl_open' + key).css('color', 'red');
        } else {
          $('#_sl_open' + key).css('color', 'green');
        }
        axios
          .post('/api/permission/set/active/' + id, {
            status: data.target.value === 'on' ? true : false,
          })
          .then((res) => {
            if (res.data === 'refresh another is login') {
              window.location.reload();
            }
            Cookies.remove('token');
            window.location.reload();
          });
      } else {
        if (data.target.value != 'on') {
          $('#_sl_open' + key).val('on');
        } else {
          $('#_sl_open' + key).val('off');
        }
      }
    } else {
      if (data.target.value != 'on') {
        $('#_sl_open' + key).css('color', 'red');
      } else {
        $('#_sl_open' + key).css('color', 'green');
      }
      let res = await axios.post('/api/permission/set/active/' + id, {
        status: data.target.value === 'on' ? true : false,
      });
      if (res.data === 'refresh another is login') {
        window.location.reload();
      }
    }
  };

  function onClear() {
    setStatedepartmentValue({
      departmentValue: 'not selected',
    });
    setStatebranchValue({
      branchValue: 'not selected',
    });
    setStatesearchValue({
      searchValue: 'not search',
    });
    axios
      .get(
        'api/user/get/data/' +
          statepageNum.pageNum +
          '/not selected/not selected/not search'
      )
      .then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        const result = res.data;
        this.setState({ data: result });
      });
  }

  //   function resetData() {
  //     this.setState({ data: null });
  //     axios
  //       .get(
  //         'api/user/get/data/' +
  //           this.state.pageNum +
  //           '/' +
  //           this.state.departmentValue +
  //           '/' +
  //           this.state.branchValue +
  //           '/' +
  //           this.state.searchValue
  //       )
  //       .then((res) => {
  //         if (res.data === 'refresh another is login') {
  //           window.location.reload();
  //         }
  //         this.setState({ data: null });
  //         const result = res.data;
  //         this.setState({ data: result });
  //         this.state.data.forEach((doc, key) => {
  //           const status = doc.user ? doc.user.active : null;
  //           if (status == 1) {
  //             $('#_sl_open' + key).css('color', '#1E972A');
  //           } else {
  //             $('#_sl_open' + key).css('color', '#971E1E');
  //           }
  //         });
  //       });
  //     this.props.resetName(true);
  //   }

  function SearchData() {
    axios
      .get(
        'api/user/get/data/' +
          statepageNum.pageNum +
          '/' +
          statedepartmentValue.departmentValue +
          '/' +
          statebranchValue.branchValue +
          '/' +
          (statesearchValue.searchValue !== ''
            ? statesearchValue.searchValue
            : 'not search')
      )
      .then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        const result = res.data;
        this.setState({ data: result });
      });
  }
  const getData = (data) => {
    axios
      .get(
        'api/user/get/data/' +
          statepageNum.pageNum +
          '/' +
          statedepartmentValue.departmentValue +
          '/' +
          statebranchValue.branchValue +
          '/' +
          statesearchValue.searchValue +
          '?page=' +
          data.page
      )
      .then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        const result = res.data;
        // console.log(result);
        this.setState({ data: result });
      });
  };

  function SetNumberPerPage(data) {
    axios
      .get(
        'api/user/get/data/' +
          data.value +
          '/' +
          statedepartmentValue.departmentValue +
          '/' +
          statebranchValue.branchValue +
          '/' +
          statesearchValue.searchValue +
          '?page=1'
      )
      .then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        const result = res.data;
        this.setState({ data: result, pageNum: data.value });
      });
  }

  function changeColor() {
    var current = $('#_sl_open').val();
    if (current != 'on') {
      $('#_sl_open').css('color', '#971E1E');
    } else {
      $('#_sl_open').css('color', '#1E972A');
    }
  }
  const onOffStyle = {
    border: 'none',
  };

  const optionTable = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];

  const CaretDownIcon = () => {
    return <FontAwesomeIcon icon="caret-down" />;
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };
  return (
    <>
      <NavbarTop />
      <Container>
        <div className="user">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="icon/management.png"
                  alt=""
                  className="d-none d-lg-block"
                />
                <img src="icon/user.png" alt="" className="d-block d-lg-none" />
                User{' '}
                <span className="d-none d-lg-block ml-1">
                  &#62; รายชื่อผู้ใช้ระบบ
                </span>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <Col
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <button className="btn btn-icon">
                    <img
                      className="modal-icon"
                      src="icon/address_book_home.png"
                    />
                  </button>
                  <button className="btn btn-icon">
                    <img className="modal-icon" src="icon/appwizard_list.png" />
                  </button>
                  <button className="btn btn-icon mr-2">
                    <img
                      className="modal-icon"
                      src="icon/directory_open_file_mydocs_cool-1.png"
                    />
                  </button>
                  <button className="btn btn-icon">
                    <img
                      className="modal-icon"
                      src="icon/directory_closed-4.png"
                    />
                  </button>
                  <button className="btn btn-icon">
                    <img className="modal-icon" src="icon/management.png" />
                  </button>
                  <button className="btn btn-icon mr-2">
                    <img className="modal-icon" src="icon/briefcase-4.png" />
                  </button>
                  <button className="btn btn-icon">
                    <img className="modal-icon" src="icon/message_file-0.png" />
                  </button>
                  <button className="btn btn-icon">
                    <img className="modal-icon" src="icon/users_key-4.png" />
                  </button>
                  <button className="btn btn-icon mr-2">
                    <img
                      className="modal-icon"
                      src="icon/network_normal_two_pcs-4.png"
                    />
                  </button>
                  <button className="btn btn-icon mr-2">
                    <img className="modal-icon" src="icon/chart1-4.png" />
                  </button>

                  <Link to="/usercreate">
                    <Button className="up-user">
                      <p>เพิ่มรายชื่อ</p>
                    </Button>
                  </Link>
                </Col>
                <br />
                <div className="box-typecar mt-lg-4">
                  <Col className="justify-content-start">
                    <div className="row align-items-center input-body">
                      <div
                        className="col-12 col-lg-4 mb-2 mb-lg-0"
                        style={{ padding: 0 }}
                      >
                        <div className="search-box">
                          <Input
                            className="search-btn-top"
                            value={
                              statesearchValue.searchValue === 'not search'
                                ? ''
                                : statesearchValue.searchValue
                            }
                            placeholder="ค้นหาด้วยชื่อ,เบอร์โทร"
                            height="100%"
                            onChange={(data) => {
                              setStatesearchValue({
                                searchValue: data.target.value,
                              });
                            }}
                          ></Input>
                          <FontAwesomeIcon icon="search" />
                        </div>
                      </div>
                      <div className="col-6 col-lg-2">
                        <Select
                          options={statedepartment.department}
                          // defaultValue={{ value: 'not selected', label: 'แผนก' }}
                          placeholder="แผนก"
                          isClearable
                          isSearchable={false}
                          ref={selectDepartment}
                          onChange={(data) => {
                            this.setState({
                              departmentValue: data
                                ? data.value
                                : 'not selected',
                            });
                          }}
                          className="select-list"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="col-6 col-lg-2">
                        <Select
                          options={statebranch.branch}
                          isClearable
                          isSearchable={false}
                          placeholder="สาขา"
                          ref={selectBranch}
                          onChange={(data) => {
                            setStatebranchValue({
                              branchValue: data ? data.value : 'not selected',
                            });
                          }}
                          className="select-list"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                        <div className="group-reverse d-lg-flex">
                          <div className="row">
                            <div className="col-6 pr-2 col-lg-12">
                              <Button
                                className="btn-tabs-search add-list"
                                onClick={() => onClear()}
                              >
                                <img
                                  src="icon/undo_icon.png"
                                  alt=""
                                  className="mr-2 align-bottom d-block d-lg-none"
                                  width="30"
                                />
                                คืนค่า
                              </Button>
                            </div>
                            <div className="col-6 pl-2 d-block d-lg-none">
                              {/* <AddUserModal
                                openTabsModal={(type) => this.navTextMenu(type)}
                                branch={this.state.branch}
                                department={this.state.department}
                                onChangeUpdate={() => this.resetData()}
                              /> */}
                            </div>
                          </div>
                          <Button
                            className="btn-tabs-search add-list button-search"
                            onClick={() => SearchData()}
                          >
                            <img
                              src="icon/iconfinder-search.png"
                              alt=""
                              className="mr-2 align-bottom d-block d-lg-none"
                              width="30"
                            />
                            ค้นหา{' '}
                            <img
                              src="icon/magnifying_glass_4-1 2.png"
                              alt=""
                              className="d-none d-lg-block ml-2"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <Table responsive className="custom-table text-nowrap mt-4">
                      <thead>
                        <tr className="text-center">
                          <th>ชื่อพนักงาน</th>
                          <th>สาขา</th>
                          <th>แผนก</th>
                          <th>ระยะเวลาทำงาน</th>
                          <th>สถานะ</th>
                          <th>เข้าใช้งานล่าสุด</th>
                          <th>Active</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="table-custom">
                        {statedata.data !== null
                          ? (statepageNum.pageNum === 'all'
                              ? statedata.data
                              : statedata.data.data
                            ).map((doc, key) => {
                              let lastLogin = null;
                              if (doc.user) {
                                if (doc.user.last_login_at) {
                                  lastLogin = new Date(doc.user.last_login_at);
                                  lastLogin =
                                    (lastLogin.getDate() > 9
                                      ? lastLogin.getDate()
                                      : '0' + lastLogin.getDate()) +
                                    '/' +
                                    (lastLogin.getMonth() > 9
                                      ? lastLogin.getMonth()
                                      : '0' + lastLogin.getMonth()) +
                                    '/' +
                                    lastLogin.getFullYear() +
                                    ' ' +
                                    (lastLogin.getHours() > 9
                                      ? lastLogin.getHours()
                                      : '0' + lastLogin.getHours()) +
                                    ':' +
                                    (lastLogin.getMinutes() > 9
                                      ? lastLogin.getMinutes()
                                      : '' + lastLogin.getMinutes());
                                }
                              }
                              const dateStart = new Date(doc.start_date);
                              const dateToDay = new Date();
                              let dateEnd = null;
                              if (doc.end_date) {
                                dateEnd = new Date(doc.end_date);
                                var status = 'ลาออก';
                              } else {
                                var status =
                                  dateToDay.getTime() - dateStart.getTime() > 0
                                    ? 'พนักงาน'
                                    : 'ยังไม่เริ่มงาน';
                              }
                              return (
                                <tr
                                  id={doc.id}
                                  key={'tr' + doc.id}
                                  className="text-center"
                                >
                                  <td>
                                    {doc.first_name}{' '}
                                    {doc.last_name !== 'no lastname'
                                      ? doc.last_name
                                      : null}
                                  </td>
                                  <td>{doc.branch ? doc.branch.name : ''}</td>
                                  <td>
                                    {doc.department ? doc.department.name : ''}
                                  </td>
                                  <td className="text-center">
                                    {status !== 'ยังไม่เริ่มงาน'
                                      ? this.calExactTimeDiff(
                                          dateStart,
                                          dateToDay.getTime() <
                                            (doc.end_date === '1970-01-02'
                                              ? dateEnd.getTime()
                                              : 0)
                                            ? dateEnd
                                            : dateToDay
                                        )
                                      : ''}
                                  </td>
                                  <td className="text-center">{status}</td>
                                  {doc.user ? (
                                    <>
                                      <td>{doc.user ? lastLogin : null}</td>
                                      <td>
                                        <select
                                          id={'_sl_open' + key}
                                          className="select-status"
                                          style={onOffStyle}
                                          defaultValue={
                                            doc.user.active ? 'on' : 'off'
                                          }
                                          onChange={(data) => {
                                            SetActive(data, doc.user.id, key);
                                          }}
                                        >
                                          <option value="on">เปิด</option>
                                          <option value="off">ปิด</option>
                                        </select>
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <td></td>
                                      <td></td>
                                    </>
                                  )}
                                  <td>
                                    {/* <EditUserModal
                                      myId={this.props.myId}
                                      openTabsModal={(type) =>
                                        this.navTextMenu(type)
                                      }
                                      branch={this.state.branch}
                                      data={this.state.data}
                                      id={doc.id}
                                      onChangeUpdate={() => this.resetData()}
                                    /> */}
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </Table>
                  </Col>
                </div>
                <Col>
                  <div className="set-paginate">
                    <div className="box-select-table d-none d-lg-flex">
                      <span className="box-select-text">แสดง</span>
                      <Select
                        options={optionTable}
                        defaultValue={optionTable[0]}
                        isClearable={false}
                        isSearchable={false}
                        onChange={(data) => SetNumberPerPage(data)}
                        className="select-list"
                        components={{ DropdownIndicator }}
                      />
                      <span className="box-select-text">รายการ</span>
                    </div>
                    <div className="box-paginate">
                      {statedata.data !== null &&
                      statepageNum.pageNum !== 'all' ? (
                        <Pagination
                          changePage={getData}
                          data={statedata.data}
                          options={stateoptions.options}
                        />
                      ) : null}
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
