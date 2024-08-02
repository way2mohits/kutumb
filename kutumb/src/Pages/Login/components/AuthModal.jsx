import "../../../Styles/loginStyles.css";
import "../../../Styles/globalStyle.css";
import { useState } from "react";
import { postData } from "../../../network/apiFunctions";
import { useNavigate } from "react-router-dom";
export const AuthModal = ()=>{
    const navigate = useNavigate();
    const [credential,setCredential] = useState({username:"",otp:""});
    const handleChange = (event)=>{
        setCredential({...credential,[event.target.name]:event.target.value})
    }
    const login=async ()=>{
        const response = await postData("https://assignment.stage.crafto.app/login",credential);
        if(response=="Error"){
            alert("Error in login");
            return;
        }
        localStorage.setItem("token",response.token);
        navigate("/")
    }
    return <>
        <div className="authModalContainer">
            <div style={{ margin: "20% 0 0 15%" }}>
            <input type="text" placeholder="User Name" name="username" onChange={handleChange} value={credential.username} />
            <br />
            <input type="text" placeholder="OTP" name="otp" onChange={handleChange} vlaue={credential.otp}/>
            <br />
            <div
                className="primary-btn"
                style={{
                width: "30%",
                height: "2em",
                borderRadius: "10px",
                marginLeft: "28%",
                marginTop: "3%",
                }}
                onClick={login}
            >
                Login
            </div>
            </div>
        </div>
      </>
}