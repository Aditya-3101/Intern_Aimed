import "./App.css";
import styled from "styled-components";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Parent = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const FormLayout = styled.div`
  width: 55%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 10px 40px 0px #00000029;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: min-content;
  }
`;

const DisplayImg = styled.img`
  width: 28%;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    width: 35%;
    object-fit: contain;
    margin: 8px;
  }
`;

const MiniForm = styled.div`
  width: 80%;
  height: 70%;

  @media screen and (max-width: 768px) {
    width: 98%;
    height: 80%;
  }
`;

const MainForm = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 36px;
    vertical-align: middle;
    margin: 0px;
  }
`;

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  & p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin: 14px 0 12px 0;
  }

  & span {
    position: relative;
  }
`;

const TextField = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid #04072f66;
  border-radius: 8px;
  padding: 0px 0px 0px 5px;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    vertical-align: middle;
  }
`;

const SuggestionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RememberCap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    font-family: "Poppins", sans-serif;
  }

  & p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  & span {
    color: #f78719;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LoginBtn = styled.button`
  width: 65%;
  height: 40px;
  background-color: #1575a7;
  border: none;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

const PassHint = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #f78719;
  cursor: pointer;
`;

const SuggestionPara = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #04072f;
  text-align: center;

  & span {
    color: #f78719;
    cursor: pointer;
    text-decoration: underline;
  }
`;

function App() {
  const [formData, setFormData] = useState({
    login_id: "",
    password: "",
    remember_check: false,
    agreement: false,
  });

  const [showpsw, setShowPsw] = useState(false);

  const changeHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    e.preventDefault();
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setShowPsw(!showpsw);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      formData.login_id.length !== 0 &&
      formData.password.length !== 0 &&
      formData.remember_check === true &&
      formData.agreement === true
    ) {
      alert("Congratulations!! You are logged in");
      console.log(formData);
    }
  };

  return (
    <Parent>
      <LoginContainer>
        <DisplayImg src="https://i.ibb.co/B4kx4Yc/undraw.png" />
        <FormLayout>
          <MiniForm>
            <MainForm autoComplete="off">
              <h2>Login</h2>
              <InputField>
                <p>Login ID</p>
                <TextField
                  type="text"
                  placeholder="Enter Login ID"
                  onChange={changeHandler}
                  value={formData.login_id}
                  autoComplete="off"
                  name="login_id"
                ></TextField>
              </InputField>
              <InputField>
                <p>Password</p>
                <span>
                  <TextField
                    type={showpsw ? "text" : "password"}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    value={formData.password}
                    name="password"
                    autoComplete="off"
                  ></TextField>
                  {showpsw === true ? (
                    <AiFillEyeInvisible
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        margin: "auto 0",
                        fontSize: "24px",
                        cursor: "pointer",
                        color: "#737B86",
                      }}
                      onClick={togglePassword}
                    />
                  ) : (
                    <AiFillEye
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        margin: "auto 0",
                        fontSize: "24px",
                        cursor: "pointer",
                        color: "#737B86",
                      }}
                      onClick={togglePassword}
                    />
                  )}
                </span>
              </InputField>
              <SuggestionBox>
                <RememberCap>
                  <input
                    type="checkbox"
                    onChange={changeHandler}
                    checked={formData.remember_check}
                    name="remember_check"
                  ></input>
                  <p>Remember Me</p>
                </RememberCap>
                <PassHint>Change Password</PassHint>
              </SuggestionBox>
              <SuggestionBox>
                <RememberCap>
                  <input
                    type="checkbox"
                    onChange={changeHandler}
                    checked={formData.agreement}
                    name="agreement"
                  ></input>
                  <p>
                    Agree to <span>Terms & Conditions</span>
                  </p>
                </RememberCap>
              </SuggestionBox>
              <LoginBtn onClick={submitForm}>Login</LoginBtn>
            </MainForm>
            <SuggestionPara>
              Don’t have an account? <span>Register Here</span>
            </SuggestionPara>
          </MiniForm>
        </FormLayout>
      </LoginContainer>
    </Parent>
  );
}

export default App;
