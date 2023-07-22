const Card = ({ resImg, resName, resContent }) => {
    return (
      <div className="qo-card">
        <div className="qo-card-sec">
          <img className="qo-card-img" src={resImg} />
          <p>{resName}</p>
          <p className="qo-content">{resContent}</p>
          <div className="qo-order-action">
            {/* <a class  Name="qo-order-btn">Order</a> */}
            <button class="button-27" role="button">
              Order
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Card;