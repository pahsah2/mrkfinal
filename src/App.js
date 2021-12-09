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
import Profile from './Profile/Index';
import Property from './Property/Index';
import DataProperty from './Property/DataProperty';
import AddStorageProperty from './Property/AddStorage';

import Stock from './Stock/Index';
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

import TestImage from './test';
function App() {
  return (
    <BrowserRouter basename="/mrklean/">
      <Switch>
        {/* <Route path="/" component={Login} /> */}
        {/* <Route path="/" component={login} /> */}

        <Route path="/" component={Dashbroad} exact />
        <Route path="/test" component={TestImage} />
        <Route path="/package" component={Package} exact />
        <Route path="/productmanage" component={ProductManage} />
        <Route path="/member" component={Member} />
        <Route path="/user" component={User} />
        <Route path="/usercreate" component={UserCreate} />
        <Route path="/edituser" component={EditUser} />
        <Route path="/information" component={MemberInformation} />
        <Route path="/addcar" component={AddCar} />
        <Route path="/justic-information" component={JusticInformation} />
        <Route path="/membercreate" component={MemberCreate} />
        <Route path="/b2b" component={B2BCompany} />
        <Route path="/detail-b2b" component={DetailB2B} />
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
        <Route path="/profile" component={Profile} />
        <Route path="/property" component={Property} exact />
        {/*    property  > :id */}
        <Route path="/property/data-property" component={DataProperty} />

        <Route path="/property/add-storage" component={AddStorageProperty} />
        <Route path="/stock" component={Stock} exact />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
