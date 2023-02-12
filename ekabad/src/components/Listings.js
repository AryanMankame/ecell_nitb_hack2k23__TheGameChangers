import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography
  } from "mdb-react-ui-kit";
  import React,{useState} from "react";
  import "./Listings.css";
  import "mdb-react-ui-kit/dist/css/mdb.min.css";
  // import moment from 'moment';'
  const items = [
    ["plastic", 120,"https://thumb.tildacdn.com/tild6362-3539-4637-b563-353730343534/-/format/webp/tanvi-sharma--4bD2p5.jpg",100,-1],
    ["paper", 100,"https://thumb.tildacdn.com/tild6362-3539-4637-b563-353730343534/-/format/webp/tanvi-sharma--4bD2p5.jpg",50,-1],
    ["glass", 45,"https://ieltsunlocked.files.wordpress.com/2018/10/glass-recycling-2.jpg",300,-1],
    ["flowers waste", 45,"https://thumb.tildacdn.com/tild6362-3539-4637-b563-353730343534/-/format/webp/tanvi-sharma--4bD2p5.jpg",200,-1]
  ];
  export default function Listings() {
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const [total,settotal] = useState(0);
    let currentDate = `${day}.${month}.${year}`;
    let delDate = `${day+5}.${month}.${year}`;
    console.log(date);
    console.log(items[2])
    return (
      <section className="h-100 w-100 gradient-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0">
                    Place your Order
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody id="manage-cards">
                  {items.map((item) => (
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src={item[2]}
                            // src={items[2]}
                            className="w-100"
                            alt={item[1]}
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)"
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
  
                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>{item[0]}</strong>
                        </p>
                        <p>In Stock: {item[1]} Kg</p>
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <MDBBtn className="px-3 me-2">
                            -
                          </MDBBtn>
  
                          <MDBInput
                            defaultValue={0}
                            min={0}
                            type="number"
                            label="Quantity"
                            id = {item[0]}
                          />
  
                          <MDBBtn className="px-3 ms-2" onClick = {() => {
                            document.getElementById(item[0]).value = Number(document.getElementById(item[0]).value) + 1
                            settotal(total+item[1])
                          }}>
                            +
                          </MDBBtn>
                        </div>
  
                        <p className="text-start text-md-center">
                          <strong>{item[3]} /kg</strong>
                        </p>
                      </MDBCol>
                      <hr />
                    </MDBRow>
                  ))}
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">{currentDate} - {delDate}</p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard className="mb-4">
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBListGroup flush="true">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{total}</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>{1000}</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{total+1000}</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>
  
                  <MDBBtn block size="lg">
                    Go to checkout
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div>Done</div>
      </section>
    );
  }
  