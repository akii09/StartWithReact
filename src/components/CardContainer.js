import Card from "../components/Card"

const CardContainer = () => {
    return (
      <div className="qo-card-container qo-section">
        <div className="qo-row">
          <Card
            resName="Subway"
            resContent="Salads, Snacks, Desserts, Beverages"
            resImg="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"
          />
          <Card
            resName="Baskin Robbins - Ice Cream Desserts"
            resContent="Desserts, Ice Cream"
            resImg="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395"
          />
        </div>
      </div>
    );
  };

  export default CardContainer;