import React,{useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let price = generateRandomIntegerInRange(40, 70);
const Userland = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState('')
    const [showFile,setshowfile] = useState('');
    const [data,setdata] = useState([]);
    const [show,setshow] = useState(false);
    const item1 = new Set();
    console.log(file)
    const handleFile = (e) => {
        let file = e.target.files[0];
        setshowfile(file);
        setFile(URL.createObjectURL(file))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', showFile)
        axios.post('https://CornsilkUnknownServer.freestorage.repl.co/', formData).then(res => {
            let temp = JSON.parse(JSON.stringify(res.data));
            console.log(temp,typeof(temp));
            setdata(temp);
            setshow(true);
            // console.log(item1);
        })
    }
  return (
    <Page>
      <Left>
        <div id = "logo-div">
        <img id = "logo" src="elogopn-removebg-preview.png"></img>
        </div>
        <img id = "left-img" src="kisspng-waste-management-smart-city-municipal-solid-waste-waste-management-of-oregon-inc-5b297d89d784e2.5791379115294457698828.png"></img>
        <div id = "content">
        <div>
        Did you know that 40% of recyclable waste ends up being uncollected/littered, which results in pollution and harms our environment in unimaginable ways.
        </div>
         <div>
         If u want to do your part for protecting our Mother Earth and at the same time earn significant amount from your what u thought was just “waste”
         </div>
        <div id = "join-us">
          Join us !! All u have to do is click a photo of your waste items !!
        </div>
        </div>
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
        <input id = "file-inp" type="file" onChange={handleFile} />
        {file !== '' ? <img className = "upload-img" src={file} alt="img"/> : <></>}
        </Upload>
        <Predict>
          <button className="pred-btn" onClick={handleSubmit}>Predict</button>
          <button className="pred-btn" onClick={() => {navigate('/form')}}>SELL</button>
        </Predict>
        <div>{data}</div>
        <div>{show === true ? <div style={{marginTop:20}}>Your Expected Price for this sale will be: {price}</div> : <></>}</div>
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
  background: linear-gradient( to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1) );;
  #logo{
    height:15vh;
    width:30%;
    // margin-left:auto;
  }
  #logo-div{
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  #left-img{
    margin-top:4vh;
    height:35vh;
    margin-left:15vw;
  }
  #content{
    color:white;
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
    font-weight:bold;
    font-size:20px;
    text-align:left;
    margin-left:2pc;
    font-family: 'Julee', cursive;
  }
  #join-us{
    margin-top:1pc;
    font-size:32px;
    text-align:center;
    padding:1pc
  }
`;
const Right = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: white;
`;
const Upload = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 40vh;
  margin-top: 15vh;
  align-items:center;
  background-color: aliceblue;
  border-radius:10px;
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
    margin:5px;
    &:active {
      transform: scale(0.95);
    }
    &:focus {
      outline: none;
    }
  }
`;
