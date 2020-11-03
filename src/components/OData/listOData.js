import React, {
  useState
} from "react";
import DetailOData from "./detailOData";
import "./listOData.css";

const ListOData = ({ odata }) => {
  const [itemOData, setItemOData] = useState({});
  const classActive = (userName) => {
    return itemOData.userName === userName ? "active" : "";
  }
  if (!odata || odata.length < 1) {
    return <></>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            {
              odata.map((data, index) => {
                return <a
                  key={index}
                  data-toggle="list"
                  href={"#" + data.userName}
                  role="tab"
                  onClick={() => setItemOData(data) }
                  className={"list-group-item list-group-item-action " + classActive(data.userName)}
                >
                  {data.userName}
                </a>
              })
            }
          </div>
        </div>
        <DetailOData odata={itemOData} />
      </div>
    </div>
  );
};

export default ListOData;
