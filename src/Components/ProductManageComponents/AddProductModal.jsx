import React from 'react';

export default function AddProductModal() {
  return (
    <div>
      <div
        className="modal"
        id="addproductModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img className="logo pr-2" src="icon/staff.png" />
                เพิ่มสินค้า
              </h5>
              <button type="button" className="btn-close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <p className="ml-3 mr-2">สินค้าและบริการ</p>
                <p className="mr-2">สต็อก</p>
                <p className="mr-2">ลูกค้า</p>
                <p className="mr-2">สาขา</p>
                <p className="mr-2">JOB</p>
                <p className="mr-2">การเงิน</p>
                <p className="mr-2">พนักงาน</p>
                <p className="mr-2">ภาพรวมร้าน</p>
              </div>
              <div className="col row">
                <div>
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
                  <button className="btn btn-icon">
                    <img className="modal-icon" src="icon/chart1-4.png" />
                  </button>
                </div>
              </div>
              <br />
              <hr />
              <div className="row">
                <div className="col-md-12" align="left">
                  <label className="font-weight">รายละเอียดสินค้า</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 mt-2">
                  <label>ประเภทสินค้า</label>
                </div>
                <div className="col-md-3 modal-margin-right">
                  <select className="form-control">
                    <option>ขาย</option>
                    <option>ใช้งาน</option>
                    <option>ขายและใช้งาน</option>
                  </select>
                </div>
                <div className="col-md-2 mt-2">
                  <label>การรับประกัน</label>
                </div>
                <div className="col-md-3 modal-margin-right">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ระบุตัวเลข"
                  />
                </div>
                <div className="col-md-2 mt-2">
                  <select className="form-control">
                    <option>วัน</option>
                    <option>เดือน</option>
                    <option>ปี</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2 mt-2">
                  <label>หมวดหมู่</label>
                </div>
                <div className="col-md-3 modal-margin-right">
                  <select className="form-control">
                    <option>น้ำยา</option>
                  </select>
                </div>
                <div className="col-md-2 mt-2">
                  <label>ราคา</label>
                </div>
                <div className="col-md-3 modal-margin-right">
                  <input className="form-control" type="text" />
                </div>
                <div className="col-md-2 modal-margin-right mt-2">
                  <label>บาท</label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2 mt-2">
                  <label>ชื่อสินค้า</label>
                </div>
                <div className="col-md-4 modal-margin-right">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <br />
              <hr />
              <div className="row">
                <div className="col-md-12" align="left">
                  <label className="font-weight">ข้อมูลการสั่ง</label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <label>หน่วยซื้อ</label>
                </div>
                <div className="col-md-3 modal-margin-right">
                  <select className="form-control">
                    <option>แกลอน</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label>หน่วยขาย</label>
                </div>
                <div className="col-md-3 modal-margin-right">
                  <select className="form-control">
                    <option>กรัม</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <label className="font-weight">แจ้งเตือนจำนวนสินค้า</label>
                </div>
                <div className="col-md-2">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2 mt-2">
                  <label>จุดสั่งซื้อ</label>
                </div>
                <div className="col-md-2">
                  <input className="form-control" type="text" />
                </div>
                <div className="col-md-2 mt-2">
                  <label>จุดต่ำสุด</label>
                </div>
                <div className="col-md-2">
                  <select className="form-control">
                    <option>1</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2 mt-2">
                  <label>จำนวนโอนหน้าร้าน</label>
                </div>
                <div className="col-md-3">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn-modal mr-4"
                    align="center"
                    data-toggle="modal"
                    data-target="#userModal"
                    data-dismiss="modal"
                  >
                    <img src="icon/flat-style-circle-save_icon-icons 4.png" />{' '}
                    บันทึก
                  </button>
                  <button className="btn-modal">
                    <img src="icon/flat-style-circle-turn-on-off_icon-icons 2.png" />{' '}
                    ออก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
