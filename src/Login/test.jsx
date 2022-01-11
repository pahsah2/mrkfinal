import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { FormGroup, Button } from 'react-bootstrap';
import { Input, FormFeedback } from 'reactstrap';
import Cookies from 'js-cookie';
import '../assets/css2/css/login.css';

import $ from 'jquery';
export default function Index({ location, history }) {
  const [statenotFound, setStatenotFound] = useState({ notFound: false });
  const [stateuserNotFound, setStateuserNotFound] = useState({
    userNotFound: false,
  });
  const [statepasswordNotMatch, setStatepasswordNotMatch] = useState({
    passwordNotMatch: false,
  });
  const [statebranchNotActive, setStatebranchNotActive] = useState({
    branchNotActive: false,
  });
  const [statebranchNotOpen, setStatebranchNotOpen] = useState({
    branchNotOpen: false,
  });
  const [statenotActive, setStatenotActive] = useState({ notActive: false });
  const [stateresign, setStateresign] = useState({ resign: false });
  const [statenotWorking, setStatenotWorking] = useState({ notWorking: false });
  const [statepatternPass, setStatepatternPass] = useState('');
  const redirect = location.search
    ? location.search.split('=')[1]
    : '/dashboard';

  const LogIn = async () => {
    if ($('#_user').val() !== '') {
      axios
        .post('http://127.0.0.1:8000/api/permission/login', {
          username: $('#_user').val(),
          password: $('#_password').val(),
          // ip: data.ip,
        })
        .then((res) => {
          if (res.data.error) {
            if (res.data.error === 'not working') {
              setStatenotWorking({ notWorking: true });
            } else {
              setStatenotWorking({ notWorking: false });
            }
            if (res.data.error === 'resign') {
              setStateresign({ resign: true });
            } else {
              setStateresign({ resign: false });
            }
            if (res.data.error === 'not found') {
              setStateuserNotFound({ userNotFound: true });
              $('#_user').addClass('is-invalid');
            } else {
              setStateuserNotFound({ userNotFound: false });
              $('#_user').removeClass('is-invalid');
            }
            if (res.data.error === 'not active') {
              setStatenotActive({ notActive: true });
            } else {
              setStatenotActive({ notActive: false });
            }
            if (res.data.error === 'branch not active') {
              setStatebranchNotActive({ branchNotActive: true });
            } else {
              setStatebranchNotActive({ branchNotActive: false });
            }
            if (res.data.error === 'branch not open') {
              setStatebranchNotOpen({ branchNotOpen: true });
            } else {
              setStatebranchNotOpen({ branchNotOpen: false });
            }
            if (res.data.error === 'password not match') {
              $('#_password').addClass('is-invalid');
            } else {
              $('#_password').removeClass('is-invalid');
            }
          } else {
            document.removeEventListener('keydown', (e) => {
              HandleKeyDown(e);
            });
            Cookies.set('token', res.data.token, { expires: 1 });
            window.location.href = '/dashboard';
          }
        });
    } else {
      $('#_user').addClass('is-invalid');
    }
  };

  const HandleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if ($('#_user').val() !== '') {
        axios
          .post('http://127.0.0.1:8000/api/permission/login', {
            username: $('#_user').val(),
            password: $('#_password').val(),
            // ip: data.ip,
          })
          .then((res) => {
            if (res.data.error) {
              if (res.data.error === 'not working') {
                setStatenotWorking({ notWorking: true });
              } else {
                setStatenotWorking({ notWorking: false });
              }
              if (res.data.error === 'resign') {
                setStateresign({ resign: true });
              } else {
                setStateresign({ resign: false });
              }
              if (res.data.error === 'not found') {
                setStateuserNotFound({ userNotFound: true });
                $('#_user').addClass('is-invalid');
              } else {
                setStateuserNotFound({ userNotFound: false });
                $('#_user').removeClass('is-invalid');
              }
              if (res.data.error === 'not active') {
                setStatenotActive({ notActive: true });
              } else {
                setStatenotActive({ notActive: false });
              }
              if (res.data.error === 'branch not active') {
                setStatebranchNotActive({ branchNotActive: true });
              } else {
                setStatebranchNotActive({ branchNotActive: false });
              }
              if (res.data.error === 'branch not open') {
                setStatebranchNotOpen({ branchNotOpen: true });
              } else {
                setStatebranchNotOpen({ branchNotOpen: false });
              }
              if (res.data.error === 'password not match') {
                $('#_password').addClass('is-invalid');
              } else {
                $('#_password').removeClass('is-invalid');
              }
            } else {
              document.removeEventListener('keydown', (e) => {
                HandleKeyDown(e);
              });
              Cookies.set('token', res.data.token, { expires: 1 });
              window.location.href = '/dashboard';
            }
          });
      } else {
        $('#_user').addClass('is-invalid');
      }
    }
  };

  useEffect(() => {
    let token = Cookies.get('token');
    if (token) {
      history.push(redirect);
    }
    document.addEventListener('keydown', (e) => {
      HandleKeyDown(e);
    });
  }, []);
  return (
    <div className="box-login">
      <div className="card-content">
        <div className="card-header">
          <img className="logo pr-2" src="icon/management.png" alt="" /> Login
        </div>

        <div className="card-body text-center">
          <form>
            <div className="form-group">
              <div className="my-4">
                <img
                  max-width="350px"
                  width="100%"
                  heigh="195px"
                  src="icon/Mr.Kleane.png"
                />
              </div>
              <FormGroup className="mb-3">
                <Input
                  type="user"
                  id="_user"
                  className=" data-input"
                  placeholder="ชื่อผู้ใช้"
                ></Input>
                {stateuserNotFound ? (
                  <div
                    style={{ fontSize: 12 }}
                    className="mt-1 text-right text-danger pr-3"
                  >
                    ไม่พบ username นี้
                  </div>
                ) : null}
                {statenotActive ? (
                  <div
                    style={{ fontSize: 12 }}
                    className="mt-1 text-right text-danger pr-3"
                  >
                    username นี้ไม่สามารถใช้งานได้
                  </div>
                ) : null}
              </FormGroup>

              <FormGroup className="mb-4">
                <Input
                  type="password"
                  id="_password"
                  className="data-input"
                  placeholder="รหัสผ่าน"
                  onChange={(e) =>
                    setStatepatternPass({
                      patternPass: e.target.value.replace(
                        /[^a-zA-Z0-9\n\r!"#$%^&*()_+=\-?/.,<>:;@'{}|]+/g,
                        ''
                      ),
                    })
                  }
                ></Input>
                <FormFeedback
                  style={{ fontSize: 12 }}
                  className="text-right pr-3"
                >
                  รหัสผ่านไม่ถูกต้อง
                </FormFeedback>

                {statebranchNotActive ? (
                  <div
                    style={{ fontSize: 16 }}
                    className="mt-2 text-center text-danger pr-3"
                  >
                    สาขานี้ยังไม่เปิดบริการ
                  </div>
                ) : null}
                {statebranchNotOpen ? (
                  <div
                    style={{ fontSize: 16 }}
                    className="mt-2 text-center text-danger pr-3"
                  >
                    สาขานี้ยังไม่ถึงเวลาเปิดทำการ
                  </div>
                ) : null}
                {stateresign ? (
                  <div
                    style={{ fontSize: 16 }}
                    className="mt-2 text-center text-danger pr-3"
                  >
                    username นี้อยู่ในสถานะลาออก
                  </div>
                ) : null}
                {statenotWorking ? (
                  <div
                    style={{ fontSize: 16 }}
                    className="mt-2 text-center text-danger pr-3"
                  >
                    username นี้ยังไม่เริ่มทำงาน
                  </div>
                ) : null}
              </FormGroup>
              <Button onClick={() => LogIn()} className="btn-submit">
                เริ่มงาน
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
