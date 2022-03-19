import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./DemoCoponent/DemoFunctionComponent";
import { DemoClassComponent } from "./DemoCoponent/DemoClassComponent";
import BaiTapLayout from "./BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import HandlingEvent from "./HandlingEvent/HandlingEvent";
import DieuKien from "./DieuKien/DieuKien";
import BaiTapChonMauXe from "./BaiTapChonMauXe/BaiTapChonMauXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import Props from "./Props/Props";
import { dataProps } from "./Props/data";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import "antd/dist/antd.css";
import BaiTapGioHang from "./BaiTapGioHang/BaiTapGioHang";
import DemoMiniRedux from "./DemoMiniRedux/DemoMiniRedux";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
function App() {
  return (
    <div className="">
      {/* <DemoClassComponent />

      <DemoFunctionComponent /> */}

      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvent /> */}
      {/* <DieuKien /> */}
      {/* <BaiTapChonMauXe /> */}

      {/* <RenderWithMap /> */}
      {/* <Props dsdt={dataProps} /> */}
      {/* <LiftingStateUp /> */}
      {/* <BaiTapGioHang /> */}
      {/* <DemoMiniRedux /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
