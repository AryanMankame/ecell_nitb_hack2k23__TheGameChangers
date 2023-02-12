import React,{useState} from "react";
import styled from "styled-components";
const Userland = () => {
    const [file, setFile] = useState('');
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <Page>
      <Left>
        {/* <img src="https://img.freepik.com/free-photo/tree-with-blurred-background_1339-3057.jpg?size=626&ext=jpg&ga=GA1.2.1150275853.1672506901&semt=sph"></img> */}
      </Left>
      <Right>
        <Upload>
        <div class="upload-area__header">
        <h1 class="upload-area__title">Upload your file</h1>
        <p class="upload-area__paragraph">
        File should be an image
        <strong class="upload-area__tooltip">
        Like
        <span class="upload-area__tooltip-data"></span>
        </strong>
        </p>
        </div>
        {file === '' ?
        <label for = "file-inp">
            <img src = "https://img.icons8.com/dusk/1x/upload.png" alt = ""></img>
        </label>: <></>
        }
        <input id = "file-inp" type="file" onChange={handleChange} />
        {file !== '' ? <img className = "upload-img" src={file} /> : <></>}
        </Upload>
        <Quant>
          <div>Enter the quantity : </div>
          <input type="text" className="underLine"></input>
        </Quant>
        <Predict>
          <button className="pred-btn">Predict</button>
        </Predict>
      </Right>
    </Page>
  );
};
export default Userland;
const Page = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: pink;
  color: black;
`;
const Left = styled.div`
  width: 60%;
  height: 100vh;
  background-color: darkblue;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: lightgrey;
`;
const Upload = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 40vh;
  margin-top: 15vh;
  background-color: white;
  #file-inp{
    visibility:hidden;
  }
  input{
    // background-image: url(https://img.icons8.com/dusk/1x/upload.png);
    // background-repeat: no-repeat;
    // background-position: 0;
    // padding:0;
    background-color:red;
    color:pink;
  }
  .upload-img{
    height:100%;
    width:200px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:1pc;
  }
`;
const Quant = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6vh;
  input {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid black;
    width: 40px;
  }
`;
const Predict = styled.div`
  margin-top: 5vh;
  button {
    border-radius: 20px;
    border: 1px solid lightgreen;
    background-color: lightgreen;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active {
      transform: scale(0.95);
    }
    &:focus {
      outline: none;
    }
  }
`;
