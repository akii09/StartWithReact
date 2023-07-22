import CardContainer from "../components/CardContainer"

const Body = () => {
  return (
    <div className="qo-body qo-section qo-container">
      <div className="qo-body-search">
        <input className="qo-search" type="text" placeholder="Search here..." />
        <a className="qo-search-btn">Search</a>
      </div>
      <CardContainer />
    </div>
  );
};

export default Body;