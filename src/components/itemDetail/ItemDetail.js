const itemDetail = ({detail}) => {
    console.log(detail)
  return ( <div style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        padding: "20px", 
        flexDirection: "column"
    }}
    >
        <img src={detail.img} alt={detail.name} width="200px"/>
        <h2>{detail.name}</h2>
        <h3>{detail.price}</h3>
        <h3>Description: {detail.description}</h3>
        <h3>Quality: {detail.quality}</h3>
        <h3>Stock: {detail.stock}</h3>
    </div>
  );
};

export default itemDetail
