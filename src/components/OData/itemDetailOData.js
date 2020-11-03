const ItemDetailOData = ({ title, text }) => {
  if (!text) {
    return <></>;
  }
  return (
  <div
    className="tab-pane fade show active"
  >
    <strong>{title}:  </strong>
    {text}
  </div>
  );
};

export default ItemDetailOData;
