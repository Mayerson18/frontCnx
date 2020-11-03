import ItemDetailOData from "./itemDetailOData";

const DetailOData = ({ odata }) => {
  if (!odata) {
    return <></>;
  }
  const email =
    odata.emails && odata.emails.length > 0 ? odata.emails.join(",") : "";
  return (
    <div className="col-8">
      <div className="tab-content" id="nav-tabContent">
        <ItemDetailOData title="Nombre" text={odata.firstName} />
        <ItemDetailOData title="Apellido" text={odata.lastName} />
        <ItemDetailOData title="Edad" text={odata.age} />
        <ItemDetailOData title="Genero" text={odata.gender} />
        <ItemDetailOData title="Correos" text={email} />
      </div>
    </div>
  );
};

export default DetailOData;
