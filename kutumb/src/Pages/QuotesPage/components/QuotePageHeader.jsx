import { useNavigate } from "react-router-dom";
import "../../../Styles/globalStyle.css"
export const QutoesPageHeader = ()=>{
    const navigate = useNavigate();
    return (<>
      <div className="header">
        <div
          className="primary-btn"
          style={{
            width: "10%",
            height: "65%",
            margin: "0.6% 0 0 1%"
          }}
          onClick={()=>navigate("/quoteCreation")}
        >
          Create Quotes +
        </div>
      </div>
      <div></div>
    </>);
}