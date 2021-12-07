import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  CustomInput,
} from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Select, { components } from 'react-select';
import TabsIcon from '../Components/layout/TabsIcon';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';

import $ from 'jquery';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Cookies from 'js-cookie';
library.add(faCaretDown);
var image = '';
var fileData = [];
var fileName = [];
export default function EditUser(props) {
  const history = useHistory();

  const [stateid, setStateid] = useState({ id: props.id });
  const [stateEditUserModal, setStateEditUserModal] = useState({
    EditUserModal: false,
  });
  const [statedisabled, setStatedisabled] = useState({ disabled: true });
  const [stategender, setStategender] = useState({ gender: 'ชาย' });
  const [stateprefix, setStateprefix] = useState({ prefix: '1' });
  const [stateprovince, setStateprovince] = useState({ province: '' });
  const [stateprovinceData, setStateprovinceData] = useState({
    provinceData: '',
  });
  const [statedistrict, setStatedistrict] = useState({ district: '' });
  const [statedistrictData, setStatedistrictData] = useState({
    districtData: '',
  });
  const [statesubDistrict, setStatesubDistrict] = useState({ subDistrict: '' });
  const [statesubDistrictData, setStatesubDistrictData] = useState({
    subDistrictData: '',
  });
  const [statezipcode, setStatezipcode] = useState({ zipcode: '' });
  const [statedepartment, setStatedepartment] = useState({ department: '' });
  const [statedepartmentData, setStatedepartmentData] = useState({
    departmentData: '',
  });
  const [statedepartmentId, setStatedepartmentId] = useState({
    departmentId: null,
  });
  const [statecheckValid, setStatecheckValid] = useState({ checkValid: false });
  const [stateemailInvalid, setStateemailInvalid] = useState({
    emailInvalid: false,
  });
  const [stateusernameExist, setStateusernameExist] = useState({
    usernameExist: false,
  });
  const [statephoneToLong, setStatephoneToLong] = useState({
    phoneToLong: false,
  });
  const [statecitizenIdToLong, setStatecitizenIdToLong] = useState({
    citizenIdToLong: false,
  });
  const [statepasswordNotMatch, setStatepasswordNotMatch] = useState({
    passwordNotMatch: false,
  });
  const [stateemailIsUsed, setStateemailIsUsed] = useState({
    emailIsUsed: false,
  });
  const [stateuser, setStateuser] = useState({ user: null });
  const [statedata, setStatedata] = useState({ data: null });
  const [statebranch, setStatebranch] = useState({ branch: props.branch });
  const [statebranchSelect, setStatebranchSelect] = useState({
    branchSelect: null,
  });
  const [stateoldBranchSelect, setStateoldBranchSelect] = useState({
    oldBranchSelect: null,
  });
  const [statebirthDate, setStatebirthDate] = useState({ birthDate: null });
  const [statestartDate, setStatestartDate] = useState({ startDate: null });
  const [stateendDate, setStateendDate] = useState({ endDate: null });
  const [statephone, setStatephone] = useState({ phone: '' });
  const [statecitizenId, setStatecitizenId] = useState({ citizenId: '' });
  const [stateactive, setStateactive] = useState({ active: null });
  const [statepatternPass, setStatepatternPass] = useState({ patternPass: '' });
  const [statepatternConfirmPass, setStatepatternConfirmPass] = useState({
    patternConfirmPass: '',
  });
  const [statedocument, setStatedocument] = useState({ document: '' });
  const selectProvince = React.createRef();
  const selectDistrict = React.createRef();
  const selectSubDistrict = React.createRef();
  const prefixValue = { นาย: '1', นาง: '2', นางสาว: '3' };

  const provinceChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    this.selectDistrict.current.select.clearValue();
    this.selectSubDistrict.current.select.clearValue();
    setStatedistrictData({ districtData: null });
    setStatesubDistrictData({ subDistrictData: null });
    setStatezipcode({ zipcode: null });
    $('#_postcode').val('');
    if (newValue) {
      axios.get('api/address/get/amphure/' + newValue.value).then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        let data = res.data.map((doc) => {
          return { value: doc.id, label: doc.name_th };
        });
        setStatedistrictData({ districtData: data });
      });
    }
    setStateprovince({ province: newValue ? newValue.value : '' });
    console.groupEnd();
  };

  const districtChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    this.selectSubDistrict.current.select.clearValue();
    setStatedistrict({ district: null });
    setStatezipcode({ zipcode: null });
    setStatesubDistrictData({ subDistrictData: null });
    $('#_postcode').val('');
    if (newValue) {
      axios.get('api/address/get/district/' + newValue.value).then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        let data = res.data.map((doc) => {
          return { value: doc.id, label: doc.name_th };
        });
        let code = res.data.map((doc) => {
          return { districtId: doc.id, code: doc.zip_code };
        });
        setStatesubDistrictData({ subDistrictData: data });
        setStatezipcode({ zipcode: code });
      });
    }
    setStatedistrict({ district: newValue ? newValue.value : '' });
    console.groupEnd();
  };

  const subDistrictChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    $('#_postcode').val('');
    if (newValue) {
      statezipcode.zipcode.forEach((zipcode) => {
        if (zipcode.districtId === newValue.value) {
          $('#_postcode').val(zipcode.code);
        }
      });
    }
    setStatesubDistrict({ subDistrict: newValue ? newValue.value : '' });
    console.groupEnd();
  };

  const departmentChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // this.setState({ departmentValue: newValue ? newValue.value : '' })
    console.groupEnd();
  };

  const departmentInputChange = (inputValue, actionMeta) => {
    console.groupEnd();
  };

  const EditProfile = async () => {
    let valid = true;
    setStatecheckValid({ checkValid: true });
    $('#_edit_user_modal')
      .find('.css-yk16xz-control')
      .each((key, data) => {
        // if (key === 2 && !this.state.departmentId) {
        //   $(data).css('border-color', 'red');
        // } else if (key === 2) {
        //   $(data).css('border-color', '');
        // }
        if (key === 1 && !statebranchSelect.branchSelect) {
          valid = false;
          $(data).css('border-color', 'red');
        } else if (key === 1) {
          $(data).css('border-color', '');
        }
        if (key === 3 && !stateprovince.province) {
          valid = false;
          $(data).css('border-color', 'red');
        } else if (key === 3) {
          $(data).css('border-color', '');
        }
        if (key === 4 && !statedistrict.district) {
          valid = false;
          $(data).css('border-color', 'red');
        } else if (key === 4) {
          $(data).css('border-color', '');
        }
        if (key === 5 && !statesubDistrict.subDistrict) {
          valid = false;
          $(data).css('border-color', 'red');
        } else if (key === 5) {
          $(data).css('border-color', '');
        }
      });
    let disLength = $('#_edit_user_modal').find('.css-1fhf3k1-control').length;
    $('#_edit_user_modal')
      .find('.css-1fhf3k1-control')
      .each((key, data) => {
        if (disLength === 2) {
          if (key === 0 && !statedistrict.district) {
            valid = false;
            $(data).css('border-color', 'red');
          } else if (key === 0) {
            $(data).css('border-color', '');
          }
          if (key === 1 && !statesubDistrict.subDistrict) {
            valid = false;
            $(data).css('border-color', 'red');
          } else if (key === 1) {
            $(data).css('border-color', '');
          }
        } else if (disLength === 0) {
          if (key === 0 && !statesubDistrict.subDistrict) {
            valid = false;
            $(data).css('border-color', 'red');
          } else if (key === 1) {
            $(data).css('border-color', '');
          }
        }
      });
    if ($('#_first_name').val()) {
      $('#_first_name').removeClass('is-invalid');
    } else {
      valid = false;
      $('#_first_name').addClass('is-invalid');
    }
    if ($('#_nick_name').val()) {
      $('#_nick_name').removeClass('is-invalid');
    } else {
      valid = false;
      $('#_nick_name').addClass('is-invalid');
    }
    // if (this.state.birthDate) {
    //   $('#_birthdate').removeClass('is-invalid');
    // } else {
    //   valid = false;
    //   $('#_birthdate').addClass('is-invalid');
    // }
    if (statestartDate.startDate) {
      $('#_start_date').removeClass('is-invalid');
    } else {
      valid = false;
      $('#_start_date').addClass('is-invalid');
    }
    // if (this.state.endDate) {
    //   $('#_end_date').removeClass('is-invalid');
    // } else {
    //   valid = false;
    //   $('#_end_date').addClass('is-invalid');
    // }
    if ($('#_ad').val()) {
      $('#_ad').removeClass('is-invalid');
    } else {
      valid = false;
      $('#_ad').addClass('is-invalid');
    }
    if ($('#_postcode').val()) {
      $('#_postcode').removeClass('is-invalid');
    } else {
      valid = false;
      $('#_postcode').addClass('is-invalid');
    }
    if ($('#_phone_employere').val()) {
      if ($('#_phone_employere').val().length > 8) {
        $('#_phone_employere').removeClass('is-invalid');
        setStatephoneToLong({ phoneToLong: false });
      } else {
        valid = false;
        $('#_phone_employere').addClass('is-invalid');
        setStatephoneToLong({ phoneToLong: true });
      }
    } else {
      valid = false;
      $('#_phone_employere').addClass('is-invalid');
    }
    if ($('#_citizen_id').val()) {
      if ($('#_citizen_id').val().length < 14) {
        $('#_citizen_id').removeClass('is-invalid');
        setStatecitizenIdToLong({ citizenIdToLong: false });
      } else {
        valid = false;
        $('#_citizen_id').addClass('is-invalid');
        setStatecitizenIdToLong({ citizenIdToLong: true });
      }
    } else {
      valid = false;
      $('#_citizen_id').addClass('is-invalid');
    }
    if ($('#_email').val()) {
      if (!$('#_email').val().includes('@')) {
        valid = false;
        setStateemailInvalid({ emailInvalid: true });
        setStateemailIsUsed({ emailIsUsed: false });
        $('#_email').addClass('is-invalid');
      } else {
        let res = await axios.get(
          'api/user/email/check/' + $('#_email').val() + '/' + statedata.data.id
        );
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        if (res.data.error) {
          valid = false;
          $('#_email').addClass('is-invalid');
          setStateemailInvalid({ emailInvalid: false });
          setStateemailIsUsed({ emailIsUsed: true });
        } else {
          setStateemailInvalid({ emailInvalid: false });
          setStateemailIsUsed({ emailIsUsed: false });
          $('#_email').removeClass('is-invalid');
        }
      }
    } else {
      setStateemailInvalid({ emailInvalid: false });
      setStateemailIsUsed({ emailIsUsed: false });
      $('#_email').removeClass('is-invalid');
    }
    if (statedisabled.disabled === false) {
      if ($('#_username').val()) {
        let res = await axios.get(
          'api/permission/user/check/' +
            $('#_username').val() +
            '/' +
            props.id +
            '/employee'
        );
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        if (res.data.error) {
          valid = false;
          $('#_username').addClass('is-invalid');
          setStateusernameExist({ usernameExist: true });
        } else {
          setStateusernameExist({ usernameExist: false });
          $('#_username').removeClass('is-invalid');
        }
      } else {
        valid = false;
        $('#_username').addClass('is-invalid');
      }
      if ($('#_password_user').val() === $('#_repassword_user').val()) {
        setStatepasswordNotMatch({ passwordNotMatch: false });
        $('#_password_user').removeClass('is-invalid');
        $('#_repassword_user').removeClass('is-invalid');
      } else {
        setStatepasswordNotMatch({ passwordNotMatch: true });
        valid = false;
        $('#_password_user').addClass('is-invalid');
        $('#_repassword_user').addClass('is-invalid');
      }
      if (
        $('#_password_user').val() &&
        $('#_password_user').val() === $('#_repassword_user').val()
      ) {
        $('#_password_user').removeClass('is-invalid');
      } else {
        valid = false;
        $('#_password_user').addClass('is-invalid');
      }
      if (
        $('#_repassword_user').val() &&
        $('#_password_user').val() === $('#_repassword_user').val()
      ) {
        $('#_repassword_user').removeClass('is-invalid');
      } else {
        valid = false;
        $('#_repassword_user').addClass('is-invalid');
      }
    } else {
      setStateusernameExist({ usernameExist: false });
      $('#_username').removeClass('is-invalid');
      $('#_password_user').removeClass('is-invalid');
      $('#_repassword_user').removeClass('is-invalid');
    }
    if (valid) {
      if (stateuser.user) {
        if (props.myId === stateuser.user.id) {
          if (!stateactive.active) {
            if (
              window.confirm(
                'เมื่อคุณปิดการใช้งานตัวเอง คุณต้องออกจากระบบทันที คุณต้องการจะทำต่อใช่หรือไม่'
              )
            ) {
              editApi(true, stateoldBranchSelect.oldBranchSelect);
            }
          } else {
            if (
              stateoldBranchSelect.oldBranchSelect === 1 &&
              statebranchSelect.branchSelect !== 1
            ) {
              if (
                window.confirm(
                  'เมื่อคุณเปลี่ยนให้ตนเองกลายเป็นพนักงาน คุณจะต้องเข้าสู่ระบบใหม่ คุณต้องการใช้หรือไม่'
                )
              ) {
                editApi(true);
              }
            } else {
              editApi(false);
            }
          }
        } else {
          editApi(false);
        }
      } else {
        editApi(false);
      }
    }
  };

  const editApi = (refresh, oldBranch = null) => {
    axios
      .post('api/user/edit/' + props.id, {
        active: stateactive.active,
        userId: props.id,
        prefix: stateprefix.prefix,
        firstName: $('#_first_name').val(),
        nickname: $('#_nick_name').val(),
        gender: stategender.gender,
        birthdate: statebirthDate.birthDate
          ? statebirthDate.birthDate.toISOString()
          : null,
        department: statedepartmentId.departmentId,
        beginDate: statestartDate.startDate.toISOString(),
        endDate: stateendDate.endDate
          ? stateendDate.endDate.toISOString()
          : null,
        address: $('#_ad')[0].value,
        province: stateprovince.province,
        district: statedistrict.district,
        subDistrict: statesubDistrict.subDistrict,
        postcode: $('#_postcode').val(),
        phone: $('#_phone_employere').val(),
        citizenId: $('#_citizen_id').val(),
        email: $('#_email').val(),
        note: $('#_note').val(),
        file: fileData,
        fileName: fileName,
        imageFile: image,
        motto: $('#_slogan').val(),
        // department: this.state.departmentValue,
        username: $('#_username').val(),
        password: $('#_password_user').val(),
        branch: oldBranch ? oldBranch : statebranchSelect.branchSelect,
      })
      .then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        if (res.data.split('<b>Warning</b>').length > 1) {
          alert(res.data);
        } else {
          $('#_password_user').val('');
          $('#_repassword_user').val('');
          setStateEditUserModal({
            EditUserModal: false,
          });
          disableIcon(true);
          props.onChangeUpdate(true);
          if (refresh) {
            Cookies.remove('token');
            window.location.reload();
          }
        }
      });
  };

  const handleChange = () => {
    setStatedisabled({ disabled: !statedisabled.disabled });
    // $('#_employee_name').val('');
    $('#_password_employee').val('');
    $('#_repassword_employee').val('');
    setStateusernameExist({ usernameExist: false });
    $('#_employee_name').removeClass('is-invalid');
    $('#_password_employee').removeClass('is-invalid');
    $('#_repassword_employee').removeClass('is-invalid');
  };

  const ChangeSex = (data) => {
    switch (data.value) {
      case '1':
        setStategender({ gender: 'ชาย' });
        setStateprefix({ prefix: '1' });
        break;
      case '2':
        setStategender({ gender: 'หญิง' });
        setStateprefix({ prefix: '2' });
        break;
      case '3':
        setStategender({ gender: 'หญิง' });
        setStateprefix({ prefix: '3' });
        break;
    }
  };

  const openEditUserModal = () => {
    axios.get('api/department/getall').then((res) => {
      if (res.data === 'refresh another is login') {
        window.location.reload();
      }
      let data = res.data.map((doc) => {
        return { value: doc.id, label: doc.name };
      });
      setStatedepartmentData({ departmentData: data });
      axios.get('api/address/get/province').then((res) => {
        if (res.data === 'refresh another is login') {
          window.location.reload();
        }
        let data = res.data.map((doc) => {
          return { value: doc.id, label: doc.name_th };
        });
        setStateprovinceData({ provinceData: data });
        axios.get('api/user/get/user/' + props.id).then(async (res) => {
          if (res.data === 'refresh another is login') {
            window.location.reload();
          }
          let address = res.data[1].address.split('\\/+');
          let provinceId = stateprovinceData.provinceData.filter(
            (doc) => doc.label === address[3]
          )[0].value;
          let district = await axios.get(
            'api/address/get/amphure/' + provinceId
          );
          if (district.data === 'refresh another is login') {
            window.location.reload();
          }
          district = district.data.map((doc) => {
            return { value: doc.id, label: doc.name_th };
          });
          let districtId = district.filter((doc) => doc.label === address[2])[0]
            .value;
          let subDistrict = await axios.get(
            'api/address/get/district/' + districtId
          );
          if (subDistrict.data === 'refresh another is login') {
            window.location.reload();
          }
          let code = [];
          subDistrict = subDistrict.data.map((doc) => {
            code.push({ districtId: doc.id, code: doc.zip_code });
            return { value: doc.id, label: doc.name_th };
          });
          let subDistrictId = subDistrict.filter(
            (doc) => doc.label === address[1]
          )[0].value;
          let departId = statedepartmentData.departmentData.filter(
            (doc) => parseInt(doc.value) === res.data[1].department_id
          );

          setStateactive({ active: res.data[0] ? res.data[0].active : 1 });
          setStateuser({ user: res.data[0] });
          setStatedata({ data: res.data[1] });
          setStatephone({ phone: res.data[1].phone });
          setStatecitizenId({ citizenId: res.data[1].citizen_id });
          setStatebirthDate({
            birthDate: res.data[1]
              ? res.data[1].birthdate
                ? new Date(res.data[1].birthdate)
                : null
              : null,
          });
          setStatestartDate({
            startDate: res.data[1] ? new Date(res.data[1].start_date) : null,
          });
          setStateendDate({
            endDate: res.data[1]
              ? res.data[1].end_date
                ? new Date(res.data[1].end_date)
                : null
              : null,
          });
          setStatebranchSelect({
            branchSelect: res.data[1].branch ? res.data[1].branch.id : null,
          });
          setStateoldBranchSelect({
            oldBranchSelect: res.data[1].branch ? res.data[1].branch.id : null,
          });

          setStategender({ gender: res.data[1].gender });
          setStateprefix({ prefix: prefixValue[res.data[1].prefix] });

          setStatedocument({ document: res.data[2] });
          setStatedistrictData({ districtData: district });

          setStatesubDistrictData({ subDistrictData: subDistrict });
          setStateprovince({ province: provinceId });
          setStatedistrict({ district: districtId });
          setStatesubDistrict({ subDistrict: subDistrictId });

          setStatezipcode({ zipcode: code });
          setStatedisabled({ disabled: true });
          setStatecheckValid({ checkValid: false });
          setStateemailInvalid({ emailInvalid: false });

          setStateusernameExist({ usernameExist: false });
          setStatephoneToLong({ phoneToLong: false });
          setStatecitizenIdToLong({ citizenIdToLong: false });
          setStatepasswordNotMatch({ passwordNotMatch: false });
          setStatedepartmentId({
            departmentId: departId.length > 0 ? departId[0].value : null,
          });
        });
      });
    });

    setStateEditUserModal({
      EditUserModal: !stateEditUserModal.EditUserModal,
    });
    disableIcon(stateEditUserModal.EditUserModal);
  };

  const selectFile = () => {
    $('.file').trigger('click');
  };

  const changeFile = (e) => {
    e.preventDefault();
    fileData = [];
    let name = '';
    Object.keys(e.target.files).forEach((doc, key) => {
      let reader = new FileReader();
      name += e.target.files[doc].name + ', ';
      fileName = fileName.concat(e.target.files[doc].name);
      reader.onloadend = function () {
        fileData = fileData.concat(reader.result);
      };
      reader.readAsDataURL(e.target.files[doc]);
      if (key === Object.keys(e.target.files).length - 1) {
        $('.file-name').val(name);
      }
    });
  };
  const selectProFile = () => {
    $('.profile').trigger('click');
  };

  const changeProFile = (e) => {
    e.preventDefault();
    $('.profile-name').val(e.target.files[0].name);
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = function () {
      image = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const disableIcon = (status) => {
    if (!status) {
      $('#_user_main').addClass('hidden');
    } else {
      $('#_user_main').removeClass('hidden');
    }
  };

  const nametitles = [
    { value: '1', label: 'นาย' },
    { value: '2', label: 'นาง' },
    { value: '3', label: 'นางสาว' },
  ];

  const navTextMenu = (type) => {
    setStateEditUserModal({
      EditUserModal: false,
    });
  };

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

  function close() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container>
        <div className="edituser">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src="icon/user.png" />
                  User &#62; รายชื่อผู้ใช้ระบบ &#62; แก้ผู้ใช้งาน
                </h5>
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
              <div className="modal-body">
                <Col style={{ padding: 0 }}>
                  <div className="d-none d-lg-flex flex-wrap mb-4">
                    <TabsIcon
                      selectTabsLink={(type) => this.navTextMenu(type)}
                      location={'user'}
                    />
                  </div>
                </Col>
                <Col style={{ padding: 0 }}>
                  <div className="box-typecar box-bottom">
                    <div className="star-platinum">ข้อมูลส่วนตัว</div>
                    <div className="row mt-4 mx-0 form-information">
                      <div className="info-col col-lg-1">
                        <Label>คำนำหน้าชื่อ</Label>
                      </div>
                      <div className="info-col col-lg-1">
                        <Select
                          options={nametitles}
                          value={
                            stateprefix.prefix
                              ? nametitles.filter((doc) => {
                                  return stateprefix.prefix === doc.value;
                                })
                              : null
                          }
                          isClearable={false}
                          isSearchable={false}
                          onChange={(data) => ChangeSex(data)}
                          className="select-style"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>ชื่อ-นามสกุล</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Input
                          className="input-style"
                          maxLength="101"
                          defaultValue={
                            statedata.data
                              ? statedata.data.first_name +
                                (statedata.data.last_name !== 'no lastname'
                                  ? ' ' + statedata.data.last_name
                                  : '')
                              : null
                          }
                          id="_first_name"
                          height="100%"
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>ชื่อเล่น</Label>
                      </div>
                      <div className="info-col col-lg-1">
                        <Input
                          className="input-style"
                          maxLength="10"
                          defaultValue={
                            statedata.data ? statedata.data.nickname : null
                          }
                          id="_nick_name"
                          height="100%"
                        />
                      </div>
                      <div className="info-col box-gender col-lg-1">
                        <Label>เพศ</Label>
                        <div className="gender-color d-none d-lg-block">
                          {stategender.gender}
                        </div>
                      </div>
                      <div className="info-col col-12 d-block d-lg-none">
                        <Input
                          className="input-stype"
                          value={stategender.gender}
                          disabled
                        />
                      </div>
                      <div className="info-col col-lg-2">
                        <Label>วัน/เดือน/ปีเกิด</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <DatePicker
                          dateFormat="dd/MM/yyyy"
                          selected={statebirthDate.birthDate}
                          onChange={(date) =>
                            setStatebirthDate({ birthDate: date })
                          }
                          id="_birthdate"
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="input-style form-control"
                        />

                        {/* <Input className="input-style" defaultValue={this.state.data ? this.state.data.birthdate : null} id="_birthdate" type="date" height="100%" /> */}
                      </div>
                    </div>
                    <div className="row mx-0 form-information">
                      <div className="info-col col-lg-1">
                        <Label>สาขา</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Select
                          options={props.branch}
                          isClearable
                          onChange={(data) => {
                            setStatebranchSelect({
                              branchSelect: data ? data.value : null,
                            });
                          }}
                          value={
                            props.branch
                              ? props.branch.filter(
                                  (doc) =>
                                    doc.value === statebranchSelect.branchSelect
                                )[0]
                              : null
                          }
                          placeholder=""
                          isDisabled={
                            statedata.data
                              ? statedata.data.type === 'แอดมิน'
                                ? true
                                : false
                              : false
                          }
                          className="select-style"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>แผนก</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Select
                          isClearable={false}
                          onChange={(data) => {
                            setStatedepartmentId({
                              departmentId: data ? data.value : null,
                            });
                          }}
                          options={statedepartmentData.departmentData}
                          value={
                            statedata.data && statedepartmentData.departmentData
                              ? statedepartmentData.departmentData.filter(
                                  (doc) =>
                                    parseInt(doc.value) ===
                                    parseInt(statedepartmentId.departmentId)
                                )[0]
                              : null
                          }
                          placeholder=""
                          className="select-style"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label className="pt-0">วันที่เริ่มต้นทำงาน</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <DatePicker
                          selected={statestartDate.startDate}
                          onChange={(date) =>
                            setStatestartDate({ startDate: date })
                          }
                          selectsStart
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          startDate={statestartDate.startDate}
                          endDate={stateendDate.endDate}
                          maxDate={stateendDate.endDate}
                          id="_start_date"
                          className="input-style form-control"
                          dateFormat="dd/MM/yyyy"
                        />

                        {/* <Input className="input-style" id="_start_date" defaultValue={this.state.data ? this.state.data.start_date : null} type="date" height="100%" /> */}
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>วันสิ้นสุดงาน</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <DatePicker
                          selected={stateendDate.endDate}
                          onChange={(date) =>
                            setStateendDate({ endDate: date })
                          }
                          selectsEnd
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          startDate={statestartDate.startDate}
                          endDate={stateendDate.endDate}
                          minDate={statestartDate.startDate}
                          id="_end_date"
                          className="input-style form-control"
                          dateFormat="dd/MM/yyyy"
                        />

                        {/* <Input className="input-style" id="_end_date" defaultValue={this.state.data ? this.state.data.end_date : null} type="date" height="100%" /> */}
                      </div>
                    </div>
                    <div className="row mx-0 form-information">
                      <div className="info-col col-lg-1">
                        <Label>ที่อยู่</Label>
                      </div>
                      <div className="info-col col-lg-11">
                        <Input
                          className="input-style"
                          id="_ad"
                          defaultValue={
                            statedata.data
                              ? statedata.data.address.split('\\/+')[0]
                              : null
                          }
                          height="100%"
                        />
                      </div>
                    </div>
                    <div className="row mx-0 form-information">
                      <div className="info-col col-lg-1">
                        <Label>จังหวัด</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Select
                          input={{ color: 'red', backgroundColor: 'red' }}
                          isClearable
                          onChange={provinceChange}
                          // onChange={(data) => {  }}
                          // onInputChange={this.provinceInputChange}
                          ref={selectProvince}
                          value={
                            statedata.data && stateprovinceData.provinceData
                              ? stateprovinceData.provinceData.filter(
                                  (doc) => doc.value === stateprovince.province
                                )[0]
                              : null
                          }
                          options={stateprovinceData.provinceData}
                          placeholder=""
                          className="select-style"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>อำเภอ</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Select
                          isClearable
                          isDisabled={
                            statedistrictData.districtData ? false : true
                          }
                          onChange={districtChange}
                          // onChange={(data) => {  }}
                          // onInputChange={this.districtInputChange}
                          value={
                            statedata.data && statedistrictData.districtData
                              ? statedistrictData.districtData.filter(
                                  (doc) => doc.value === statedistrict.district
                                )[0]
                              : null
                          }
                          ref={selectDistrict}
                          options={statedistrictData.districtData}
                          placeholder=""
                          className="select-style"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>ตำบล</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Select
                          isClearable
                          isDisabled={
                            statesubDistrictData.subDistrictData ? false : true
                          }
                          onChange={subDistrictChange}
                          // onChange={(data) => {  }}
                          // onInputChange={this.subDistrictInputChange}
                          value={
                            statedata.data &&
                            statesubDistrictData.subDistrictData
                              ? statesubDistrictData.subDistrictData.filter(
                                  (doc) =>
                                    doc.value === statesubDistrict.subDistrict
                                )[0]
                              : null
                          }
                          ref={selectSubDistrict}
                          options={statesubDistrictData.subDistrictData}
                          placeholder=""
                          className="select-style"
                          components={{ DropdownIndicator }}
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>รหัสไปรษณีย์</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Input
                          className="input-style"
                          id="_postcode"
                          defaultValue={
                            statedata.data ? statedata.data.postcode : null
                          }
                          height="100%"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="row mx-0 form-information">
                      <div className="info-col col-lg-1">
                        <Label>เบอร์โทรศัพท์</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Input
                          value={statephone.phone}
                          onChange={(event) =>
                            setStatephone({
                              phone: event.target.value.replace(/\D/, ''),
                            })
                          }
                          className="input-style"
                          minLength="9"
                          maxLength="13"
                          id="_phone_employere"
                          height="100%"
                        />
                        {statephoneToLong.phoneToLong ? (
                          <div className="text-danger text-left">
                            เบอร์โทรศัพท์ควรมีอย่างน้อย 9 ตัว
                          </div>
                        ) : null}
                      </div>
                      <div className="info-col col-lg-2">
                        <Label>เลขบัตรประชาชน</Label>
                      </div>
                      <div className="info-col col-lg-2">
                        <Input
                          value={statecitizenId.citizenId}
                          onChange={(event) =>
                            setStatecitizenId({
                              citizenId: event.target.value.replace(
                                /[^a-zA-Z0-9\n\r]+/g,
                                ''
                              ),
                            })
                          }
                          className="input-style"
                          maxLength="13"
                          id="_citizen_id"
                          height="100%"
                        />
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>คติประจำใจ</Label>
                      </div>
                      <div className="info-col col-lg-4">
                        <Input
                          className="input-style"
                          id="_slogan"
                          height="100%"
                          defaultValue={
                            statedata.data ? statedata.data.motto : null
                          }
                        />
                      </div>
                    </div>
                    <div className="row mx-0 form-information ">
                      <div className="info-col col-lg-1">
                        <Label>E-mail</Label>
                      </div>
                      <div className="info-col col-lg-5">
                        <Input
                          className="input-style"
                          id="_email"
                          defaultValue={
                            statedata.data ? statedata.data.email : null
                          }
                          height="100%"
                        />
                        {stateemailInvalid.emailInvalid ? (
                          <div className="text-danger text-left">
                            รูปแบบอีเมลจำเป็นต้องมี @
                          </div>
                        ) : null}
                        {stateemailIsUsed.emailIsUsed ? (
                          <div className="text-danger text-left">
                            อีเมลถูกใช้งานแล้ว
                          </div>
                        ) : null}
                      </div>
                      <div className="info-col col-lg-1">
                        <Label>หมายเหตุ</Label>
                      </div>
                      <div className="info-col col-lg-5">
                        <Input
                          className="input-style"
                          id="_note"
                          defaultValue={
                            statedata.data ? statedata.data.note : null
                          }
                          height="100%"
                        />
                      </div>
                    </div>
                    <div className="row mx-0 form-information">
                      <div className="info-col col-12 col-lg-1">
                        <Label>อัพโหลดไฟล์</Label>
                      </div>
                      <div className="info-col col-12 col-lg-6">
                        <div className="form-group">
                          <input
                            id="_file"
                            type="file"
                            name="img[]"
                            className="file"
                            multiple
                            onChange={(e) => this.changeFile(e)}
                          />
                          <div className="input-group mb-3">
                            <input
                              id="_file_name"
                              type="text"
                              className="form-control file-name mb-3 mb-lg-0"
                              disabled
                              placeholder="อัพโหลดไฟล์"
                              aria-label="Upload File"
                              defaultValue={
                                statedocument.document
                                  ? statedocument.document
                                      .map((doc, key) => {
                                        if (key > 0) {
                                          return doc.name;
                                        }
                                      })
                                      .join(',')
                                      .substring(1)
                                  : null
                              }
                            />
                            <div className="input-group-append mx-lg-3">
                              <button
                                className="browse input-group-text btn justify-content-center"
                                onClick={() => this.selectFile()}
                              >
                                เลือกไฟล์
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <CustomInput className="custom-file text-left"
                    multiple
                    id="_file"
                    label={
                      this.state.document ? this.state.document.map((doc, key) => {
                        if (key > 0) {
                          return doc.image.split('<and>tag')[0];
                        }
                      }).join(',').substring(1) : null
                    }
                    placeholder="input"
                    onChange={this.FileGet}
                    type="file"
                    height="100%" /> */}
                      </div>
                      <div className="info-col col-12 d-block d-lg-none">
                        <Label>อัพโหลดรูปโปรไฟล์</Label>
                      </div>
                      <div className="info-col col-12 col-lg-5">
                        <div className="form-group">
                          <input
                            id="_image_file"
                            type="file"
                            name="img[]"
                            className="profile"
                            onChange={(e) => changeProFile(e)}
                          />
                          <div className="input-group mb-3">
                            <input
                              id="_profile_file"
                              type="text"
                              className="form-control profile-name mb-3 mb-lg-0"
                              disabled
                              placeholder="อัพโหลดรูปโปรไฟล์"
                              aria-label="Upload File"
                            />
                            <div className="input-group-append ml-lg-3">
                              <button
                                className="browse input-group-text btn justify-content-center"
                                onClick={() => selectProFile()}
                              >
                                เลือกรูปโปรไฟล์
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <CustomInput className="custom-img-file text-left" id="_image_file" onChange={this.ImageGet} type="file" height="100%" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="row my-2 d-flex">
                    <div className="align-left mt-2 text-head">
                      <Label className="font-head">Account</Label>
                    </div>
                    <div className="col-6 col-lg-1">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={stateactive.active ?? false}
                          onChange={(data) =>
                            setStateactive({ active: !stateactive.active })
                          }
                        />
                        <span className="slider round" width="50px"></span>
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <Button
                        className="browse input-group-text btn justify-content-center"
                        onClick={() => handleChange()}
                      >
                        แก้ไขผู้ใช้งาน
                      </Button>
                    </div>
                  </div>
                  <div className="row align-account align-items-start">
                    {/* <div className="col-lg-1 text-add">
                            </div> */}
                    <div className="col-12 col-lg-1 text-add">
                      <Label>ชื่อผู้ใช้</Label>
                    </div>
                    <div className="col-12 col-lg-2">
                      <Input
                        className="input-style"
                        id="_username"
                        height="100%"
                        defaultValue={
                          stateuser.user ? stateuser.user.username : ''
                        }
                        disabled={statedisabled.disabled ? 'disabled' : ''}
                      ></Input>
                      {stateusernameExist.usernameExist ? (
                        <div className="text-danger">มี username นี้แล้ว</div>
                      ) : null}
                    </div>
                    <div className="col-lg-1 text-add text-select">
                      <Label>รหัสผ่าน</Label>
                    </div>
                    <div className="col-12 col-lg-2">
                      <Input
                        className="input-style"
                        id="_password_user"
                        type="password"
                        height="100%"
                        disabled={statedisabled.disabled ? 'disabled' : ''}
                        value={statepatternPass.patternPass}
                        onChange={(event) =>
                          setStatepatternPass({
                            patternPass: event.target.value.replace(
                              /[^a-zA-Z0-9\n\r!"#$%^&*()_+=\-?/.,<>:;@'{}|]+/g,
                              ''
                            ),
                          })
                        }
                      />
                      {statepasswordNotMatch.passwordNotMatch ? (
                        <div className="text-danger">รหัสผ่านไม่ตรงกัน</div>
                      ) : null}
                    </div>
                    <div className="col-12 col-lg-1 text-add">
                      <Label>ยืนยันรหัสผ่าน</Label>
                    </div>
                    <div className="col-12 col-lg-2">
                      <Input
                        className="input-style"
                        id="_repassword_user"
                        type="password"
                        height="100%"
                        disabled={statedisabled.disabled ? 'disabled' : ''}
                        value={statepatternConfirmPass.patternConfirmPass}
                        onChange={(event) =>
                          setStatepatternConfirmPass({
                            patternConfirmPass: event.target.value.replace(
                              /[^a-zA-Z0-9\n\r!"#$%^&*()_+=\-?/.,<>:;@'{}|]+/g,
                              ''
                            ),
                          })
                        }
                      />
                      {statepasswordNotMatch.passwordNotMatch ? (
                        <div className="text-danger">รหัสผ่านไม่ตรงกัน</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row mt-4 align-account">
                    <div className="col-12">
                      <Button
                        onClick={() => EditProfile()}
                        className="custom-btn-add m-auto px-5"
                      >
                        <img
                          src="icon/system_restore-2 1.png"
                          className="d-none d-lg-flex mr-3"
                        />
                        <img
                          src="icon/flat-style-circle-save_icon-icons 4.png"
                          className="d-flex d-lg-none"
                        />{' '}
                        บันทึก
                      </Button>
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
