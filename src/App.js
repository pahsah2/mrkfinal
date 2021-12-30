import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Dashbroad from './Dashbroad/Index';
import Dashboard_data from './Dashbroad/Dashboard'
import Package from './Package/Index';
import ProductManage from './ProductManage/Index';
import Member from './Member/Index';
import MemberCreate from './Member/MemberCreate';
import MemberInformation from './Member/MemberInformation';
import JusticInformation from './Member/JuristicPersonInformation';
import Login from './Login/Index';
import User from './User/Index';
import UserCreate from './User/UserCreate';
import EditUser from './User/EditUser';
import login from './Login/Login';
import B2BCompany from './B2B/Index';
import DetailB2B from './B2B/DetailB2B';
import AddCar from './Member/AddCar';
import Service from './Service/Index';
import AddServiceMember from './Service/AddServiceMember';

import AddWashPart from './Package/AddWashPart';
import AddLightfilterPart from './Package/AddLightfilterPart';
import AddCoatPart from './Package/AddCoatPart';
import AddProtectivePart from './Package/AddProtectivePart';
import AddServiceFilter from './Package/AddServiceFilter';
import AddSpecialPackage from './Package/AddSpecialPackage';
import Staff from './Staff/Index';
import AddStaff from './Staff/AddStaff';
import EditStaff from './Staff/EditStaff';
import Management from './Management/Index';
import ManagementEdit from './Management/Edit';
import ManageMentDashBoard from './Management/Dashboard';
import Profile from './Profile/Index';
import Property from './Property/Index';
import DataProperty from './Property/DataProperty';
import AddStorageProperty from './Property/AddStorage';

import Stock from './Stock/Index';
import Stock_History from './Stock/History';
import Receipt_Order from './Stock/ReceiptOrder';
import RequestOrder from './Stock/RequestOrder/Index';
import RequestOrder_Branch from './Stock/RequestOrder/RequestOrderBranch';
import Request_Order_Middle_System from './Stock/RequestOrder/RequestOrderMiddleSystem';
import Admit from './Stock/Admit/Index';
import Datadmit from './Stock/Admit/Datadmit';
import CutStock from './Stock/CutStock';
import AdjustStock from './Stock/Adjust';
import PurchaseOrder from './Stock/PurchaseOrder/Index';
import DataPurchaseOrder from './Stock/PurchaseOrder/DataPurchaseOrder';

import Setting_TypeCars from './Setting/TypeCars';
import Setting_Division from './Setting/Division';
import Setting_CategoryAndService from './Setting/CategoryAndService';
import Setting_Segment from './Setting/Segment';
import Setting_Unit from './Setting/Unit';
import Setting_SetUp from './Setting/SetUp';
import Setting_BrandCar from './Setting/BrandCar';
import Setting_Bank from './Setting/Bank';
import Setting_Edit_Bank from './Setting/EditBank';
import Setting_Add_Level from './Setting/AddLevel';
import Setting_Edit_Bank2 from './Setting/EditBank2';
import Setting_Add_Car_Setting from './Setting/AddCarSetting';
import Setting_Edit_Car_Setting from './Setting/EditCarSetting';
import Test from './Setting/test';

import Job from './Job/Index';
import Job_Inside from './Job/Inside';
import Job_Order from './Job/Order';
import Job_Inside_Data from './Job/InsideData';
import Job_B2b_ShowRoom from './Job/CompanyB2BShowRoom';
import Job_B2b_Member from './Job/CompanyB2BMember';
import Job_B2B_Package from './Job/CompanyB2BPackage';
import Job_B2B_Order from './Job/CompanyB2BOrder';

import Bill from './Bill/Index';
import AcceptPayment from './Bill/AcceptPayment';
import Report from './Report/Index';
import Notification from './Notification/Index';
import Order_Discount from './Notification/Order';
import Appointment from './Appointment/Index';
import Appointment_ID from './Appointment/AppointmentByID';
import TestImage from './test';

// ///////// สาขา โฟลเดอร์ branch/////////////
import Profile_Branch from './BranchSystems/Profile/Index';
import Appointment_Branch from './BranchSystems/Appointment/Index';
import Appointment_ID_Branch from './BranchSystems/Appointment/AppointmentByID';
import User_Branch from './BranchSystems/User/Index';
import UserCreate_Branch from './BranchSystems/User/UserCreate';
import B2B_Branch from './BranchSystems/B2B/Index';
import B2B_Detail_Branch from './BranchSystems/B2B/DetailB2B';
import Member_branch from './BranchSystems/Member/Index';
import Member_add_Branch from './BranchSystems/Member/MemberCreate';
import Stock_Branch from './BranchSystems/Stock/Index';
import Stock_History_Branch from './BranchSystems/Stock/History';
import Stock_Adjust_Branch from './BranchSystems/Stock/Adjust';
import Stock_CutStock_Branch from './BranchSystems/Stock/CutStock';
import Stock_TransferStore_Branch from './BranchSystems/Stock/TransferStore';
import Stock_Recive_Branch from './BranchSystems/Stock/ReceiptOrder';
import Stock_OrderToStock_branch from './BranchSystems/Stock/OrderToStock/Index';
import Stock_OrderToStock_Data_Branch from './BranchSystems/Stock/OrderToStock/Data';
import Stock_Admit_Branch from './BranchSystems/Stock/Admit/Index';
import Stock_Admit_Data_Branch from './BranchSystems/Stock/Admit/Data';
function App() {
  return (
    <BrowserRouter basename="/mrklean/">
      <Switch>
        {/* <Route path="/" component={Login} /> */}
        {/* <Route path="/" component={login} /> */}
        <Route path="/" component={Dashbroad} exact />
        <Route path="/dashboard" component={Dashboard_data} />

        <Route path="/test" component={TestImage} />
        <Route path="/package" component={Package} exact />
        <Route path="/productmanage" component={ProductManage} />
        <Route path="/member" component={Member} exact />
        <Route path="/user" component={User} />
        <Route path="/usercreate" component={UserCreate} />
        <Route path="/edituser" component={EditUser} />
        <Route path="/member/information" component={MemberInformation} />
        <Route path="/member/addcar" component={AddCar} />
        <Route
          path="/member/justic-information"
          component={JusticInformation}
        />
        <Route path="/member/add" component={MemberCreate} />
        <Route path="/b2b" component={B2BCompany} exact />
        <Route path="/b2b/detail" component={DetailB2B} />
        <Route path="/package/add-wash-part" component={AddWashPart} />
        <Route
          path="/package/add-light-filter-part"
          component={AddLightfilterPart}
        />
        <Route path="/package/add-coat-part" component={AddCoatPart} />
        <Route
          path="/package/add-protective-part"
          component={AddProtectivePart}
        />
        <Route
          path="/package/add-service-filter"
          component={AddServiceFilter}
        />
        <Route
          path="/package/add-special-package"
          component={AddSpecialPackage}
        />
        <Route path="/service" component={Service} exact />
        <Route path="/service/add-member" component={AddServiceMember} />
        <Route path="/staff" component={Staff} exact />
        <Route path="/staff/add-staff" component={AddStaff} />
        <Route path="/staff/edit-staff" component={EditStaff} />
        <Route path="/management" component={Management} exact />
        <Route path="/management/edit" component={ManagementEdit} />
        <Route path="/management/dashboard" component={ManageMentDashBoard} />
        <Route path="/profile" component={Profile} />
        <Route path="/property" component={Property} exact />
        {/*    property  > :id */}
        <Route path="/property/data-property" component={DataProperty} />
        <Route path="/property/add-storage" component={AddStorageProperty} />
        <Route path="/stock" component={Stock} exact />
        <Route path="/stock/history" component={Stock_History} />
        <Route path="/stock/receipt-order" component={Receipt_Order} />
        <Route path="/stock/request-order" component={RequestOrder} />
        <Route
          path="/stock/request-order-branch"
          component={RequestOrder_Branch}
        />
        <Route
          path="/stock/request-order-middle-system"
          component={Request_Order_Middle_System}
        />
        <Route path="/stock/admit" component={Admit} />
        <Route path="/stock/data-admit" component={Datadmit} />
        <Route path="/stock/cut-stock" component={CutStock} />
        <Route path="/stock/adjust-stock" component={AdjustStock} />
        <Route path="/stock/purchase-order" component={PurchaseOrder} />
        <Route
          path="/stock/data-purchase-order"
          component={DataPurchaseOrder}
        />
        <Route path="/setting/type-cars" component={Setting_TypeCars} />
        <Route path="/setting/division" component={Setting_Division} />
        <Route
          path="/setting/category-and-service"
          component={Setting_CategoryAndService}
        />
        <Route path="/setting/segment" component={Setting_Segment} />
        <Route path="/setting/unit" component={Setting_Unit} />
        <Route path="/setting/setup" component={Setting_SetUp} />
        <Route path="/setting/brand-car" component={Setting_BrandCar} exact />
        <Route
          path="/setting/brand-car/add-car"
          component={Setting_Add_Car_Setting}
        />
        <Route
          path="/setting/brand-car/edit-car"
          component={Setting_Edit_Car_Setting}
        />
        <Route path="/setting/bank" component={Setting_Bank} exact />
        {/* dynamic component */}
        <Route path="/setting/bank/edit-bank" component={Setting_Edit_Bank} />
        <Route path="/setting/bank/edit-bank2" component={Setting_Edit_Bank2} />
        <Route path="/setting/add-level" component={Setting_Add_Level} />
        <Route path="/setting/test" component={Test} />
        <Route path="/job" component={Job} exact />
        <Route path="/job/inside-data" component={Job_Inside_Data} />
        <Route path="/job/inside-create" component={Job_Inside} />
        <Route path="/job/order" component={Job_Order} />
        <Route path="/job/company-b2b-show-room" component={Job_B2b_ShowRoom} />
        <Route path="/job/company-b2b-member" component={Job_B2b_Member} />
        <Route path="/job/company-b2b-package" component={Job_B2B_Package} />
        <Route path="/job/company-b2b-order" component={Job_B2B_Order} />
        <Route path="/bill" component={Bill} exact />
        <Route path="/bill/accept-payment" component={AcceptPayment} />
        <Route path="/report" component={Report} />
        <Route path="/notification" component={Notification} exact />
        <Route path="/notification/:id" component={Order_Discount} />
        <Route path="/appointment" component={Appointment} exact />
        <Route path="/appointment/:id" component={Appointment_ID} />
        {/* ///////// Branch สาขา */}
        <Route path="/branch/profile" component={Profile_Branch} />
        <Route
          path="/branch/appointment"
          component={Appointment_Branch}
          exact
        />
        <Route
          path="/branch/appointment/:id"
          component={Appointment_ID_Branch}
        />
        <Route path="/branch/user" component={User_Branch} exact />
        <Route path="/branch/user/add" component={UserCreate_Branch} />
        <Route path="/branch/b2b" component={B2B_Branch} exact />
        <Route path="/branch/b2b/detail" component={B2B_Detail_Branch} />
        <Route path="/branch/member" component={Member_branch} exact />
        <Route path="/branch/member/add" component={Member_add_Branch} />
        <Route path="/branch/stock" component={Stock_Branch} exact />
        <Route
          path="/branch/stock/receive"
          component={Stock_Recive_Branch}
          exact
        />
        <Route path="/branch/stock/adjust" component={Stock_Adjust_Branch} />
        <Route
          path="/branch/stock/transfer-store"
          component={Stock_TransferStore_Branch}
        />
        <Route
          path="/branch/stock/cutstock"
          component={Stock_CutStock_Branch}
        />
        <Route
          path="/branch/stock/receive/order-to-stock"
          component={Stock_OrderToStock_branch}
          exact
        />
        <Route
          path="/branch/stock/receive/admit"
          component={Stock_Admit_Branch}
          exact
        />
        <Route
          path="/branch/stock/receive/admit/:id"
          component={Stock_Admit_Data_Branch}
        />
        <Route
          path="/branch/stock/receive/order-to-stock/:id"
          component={Stock_OrderToStock_Data_Branch}
        />
        <Route path="/branch/stock/:id" component={Stock_History_Branch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
