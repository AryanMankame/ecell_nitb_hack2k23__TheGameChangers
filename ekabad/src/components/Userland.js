import React from "react";
import styled from "styled-components";
const Userland = () => {
  return (
    <Page>
      <Left>
        <img src="https://img.freepik.com/free-photo/tree-with-blurred-background_1339-3057.jpg?size=626&ext=jpg&ga=GA1.2.1150275853.1672506901&semt=sph"></img>
      </Left>
      <Right>
        <Upload>
        <div x-data="{photoName: null, photoPreview: null}" class="col-span-6 ml-2 sm:col-span-4 md:mr-3">
    <input type="file" class="hidden" x-ref="photo" x-on:change="
                        photoName = $refs.photo.files[0].name;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            photoPreview = e.target.result;
                        };
                        reader.readAsDataURL($refs.photo.files[0]);
    " />

    <label class="block text-gray-700 text-sm font-bold mb-2 text-center" for="photo">
        Profile Photo <span class="text-red-600"> </span>
    </label>
    
    <div class="text-center">
        <div class="mt-2" x-show={! photoPreview}>
            <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" class="w-40 h-40 m-auto rounded-full shadow" />
        </div>
        <div class="mt-2" x-show="photoPreview" style="display: none;">
            <span class="block w-40 h-40 rounded-full m-auto shadow" x-bind:style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'" style="background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('null');">
            </span>
        </div>
        <button type="button" class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3">
            Select New Photo
        </button>
    </div>
</div>
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
  background-color: white;
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
  height: 200px;
  margin-top: 15vh;
  background-color: white;
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
