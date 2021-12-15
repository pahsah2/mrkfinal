import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function CompanyB2BStatusLog() {
  return (
    <>
      <Container fluid className="set-height-order">
        <Row>
          <Col className="set-table" style={{ padding: 0 }}>
            <table className="table table-responsive table-wash-part ">
              <thead>
                <tr className="t-header-package">
                  <th className="text-left" style={{ width: '15%' }}>
                    วันที่
                  </th>
                  <th>เวลา</th>
                  <th>รายละเอียด</th>
                  <th className="text-left" style={{ width: '15%' }}>
                    สภานะ
                  </th>
                  <th>ผู้ทำรายการ</th>
                </tr>
              </thead>
              <tbody className="t-body-package ">
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>11:13</td>
                  <td>สร้างเอกสาร</td>
                  <td className="text-left">รอดำเนินการ </td>
                  <td>Admin 2</td>
                </tr>
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>11:50</td>
                  <td>เปลี่ยนสถานะ</td>
                  <td className="text-left">ดำเนินการ</td>
                  <td>สมชาย ใจดี</td>
                </tr>
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>12:30</td>
                  <td>สร้างเอกสาร</td>
                  <td className="text-left">เสร็จสิ้น</td>
                  <td>มิตร คงทน</td>
                </tr>
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>13:50</td>
                  <td>สร้างเอกสาร</td>
                  <td className="text-left">ยกเลิืก JOB</td>
                  <td>สุรศักดิ์ สวัสดี</td>
                </tr>
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>14:26</td>
                  <td>เปลี่ยนสถานะ</td>
                  <td className="text-left">ชำระแล้ว</td>
                  <td>สุรศักดิ์ สวัสดี</td>
                </tr>
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>15:10</td>
                  <td>สร้างเอกสาร</td>
                  <td className="text-left">ยกเลิกชำระ</td>
                  <td>สุรศักดิ์ สวัสดี</td>
                </tr>
                <tr>
                  <td className="text-left">11/06/2564</td>
                  <td>15:10</td>
                  <td>สร้างเอกสาร</td>
                  <td className="text-left">ยกเลิกชำระ</td>
                  <td>สุรศักดิ์ สวัสดี</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
