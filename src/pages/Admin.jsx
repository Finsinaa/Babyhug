// import React, { useContext, useRef, useState } from 'react';
// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';
// import { FaUserAlt } from "react-icons/fa";
// import { HiMiniListBullet } from "react-icons/hi2";
// import { ImFolderOpen } from "react-icons/im";
// import { AuthContext } from '../App'
// import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import { MdAutoDelete } from "react-icons/md";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage
// } from 'mdb-react-ui-kit';
// import {
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalHeader,
//   MDBModalTitle,
//   MDBModalBody,
//   MDBModalFooter,
// } from 'mdb-react-ui-kit';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useParams } from 'react-router-dom';

// export default function App() {
//   const[ItemUpdate,setItemUpdate]=useState('');
//   const [verticalActive, setVerticalActive] = useState('tab1');
//   const {login,products,setProducts} = useContext(AuthContext)
//   const{id}=useParams()

  
//   const nameref = useRef('')
//   const imgref = useRef('')
//   const descref = useRef('')
//   const priceref = useRef('')

//   const edit = (e)=>{
//     e.preventDefault();
//     const temporary = products.map((x)=>
//       x.id == ItemUpdate.id?{
//         ...x,
//         image:imgref.current.value,
//         title:nameref.current.value,
//         description:descref.current.value,
//         price:priceref.current.value,
//       }:x
//     )
//      setProducts(temporary)

//   }



//   const [basicModal, setBasicModal] = useState(false);

//   const toggleOpen = () => setBasicModal(!basicModal);

//   const handleVerticalClick = (value) => {
//     if (value === verticalActive) {
//       return;
//     }

//     setVerticalActive(value);
//   };


//   const removeProduct = (id)=>{
//     let saveditem = products.filter((x)=>x.id !==id)
//     toast.info('Your product has been deleted')
//     setProducts(saveditem)
//   }

//   const [show, setShow] = useState(false);
 

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const addinput = useRef(null)
//   const addsubmit = (e)=>{
//     e.preventDefault()
//     let adtitle = addinput.current.adtitle.value
//     let adimage = addinput.current.adimage.value
//     let addescrip = addinput.current.addescrip.value
//     let adprice = addinput.current.adprice.value
//     let adtype = addinput.current.adtype.value
//     let adquantity = addinput.current.adquantity.value
//     let adid = addinput.current.adid.value
//     const newadd = {title:adtitle,image:adimage,description:addescrip,price:adprice,type:adtype,quantity:adquantity,id:adid}
//     setProducts([...products,newadd])
//     setShow(false);
//   }



//   return (
//     <>
//     <br /><br /><br />
//     <ToastContainer />
//       <MDBRow>
//         <MDBCol size='3'>
//           <MDBTabs className='flex-column text-center' >
//             <MDBTabsItem>
//               <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
//               <FaUserAlt />   Users
//               </MDBTabsLink>
//             </MDBTabsItem>
//             <MDBTabsItem>
//               <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
//               <HiMiniListBullet />  products
//               </MDBTabsLink>
//             </MDBTabsItem>
//           </MDBTabs>
//         </MDBCol>
//         <MDBCol size='9'>
//           <MDBTabsContent>
//             <MDBTabsPane open={verticalActive === 'tab1'}>
                     
//                         <MDBTable align='middle'>
//                         <MDBTableHead>
//                           <tr>
//                             <th scope='col'>Username</th>
//                             <th scope='col'>Email</th>
//                             <th scope='col'>Status</th>
//                           </tr>
//                         </MDBTableHead>
//                         <MDBTableBody>
//                         {login.map((item)=>(
//                           <tr>
//                             <td>
//                               <div className='d-flex align-items-center'>
//                                 <div className='ms-3'>
//                                   <p className='fw-bold mb-1'>{item.username}</p>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <p className='fw-normal mb-1'>{item.email}</p>
//                             </td>
//                             <td>
//                               <MDBBadge color='success' pill>
//                                 Active
//                               </MDBBadge>
//                             </td>
//                           </tr>
//                            ))}
//                         </MDBTableBody>
//                       </MDBTable>
                    
                     
                        
//             </MDBTabsPane>
//             <MDBTabsPane style={{marginTop:'40px'}} open={verticalActive === 'tab2'}>
//              <h2 style={{marginLeft:'70px'}}>Can Add New Product</h2> 

//                <Button style={{marginLeft:'200px'}} variant="primary" onClick={handleShow}>
//                 Add
//               </Button>

//               <Modal show={show} onHide={handleClose}>
//               <form ref={addinput} onSubmit={addsubmit}>
//                 <Modal.Header closeButton>
//                   <Modal.Title>Add Product</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   <label>Image URL : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='adimage' /><br /><br />
//                   <label>Title : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='adtitle' /><br /><br />
//                   <label>Description : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='addescrip' /><br /><br />
//                   <label>Price : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='adprice' /><br /><br />
//                   <label>Type : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='adtype' /><br /><br />
//                   <label>Quantity : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='adquantity' /><br /><br />
//                   <label>Id : </label>
//                   <input required style={{marginLeft:'10px',paddingLeft:'5px'}}  name='adid' />
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button type='submit' variant="secondary" onClick={handleClose}>
//                     Close
//                   </Button>
//                   <Button type='submit' variant="primary" onClick={handleClose}>
//                     Add
//                   </Button>
//                 </Modal.Footer>
//                 </form>
//               </Modal>


//             <div style={{display:'flex',flexWrap:'wrap'}}>
//               {products.map((item)=>(
//                   <div key={item.id}>
//                   <MDBCard style={{width:'300px',marginTop:'40px',marginLeft:'60px',boxShadow:'0 0 10px grey'}}>
//                 <MDBCardImage src={item.image} position='top' alt='...' />
//                 <MDBCardBody>
//                   <MDBCardTitle>{item.title}</MDBCardTitle> ``
//                   <MDBCardText>
//                     {item.description}
//                   </MDBCardText>
//                   <MDBCardText>
//                   <p>₹{item.price}</p> 
//                   </MDBCardText>
//                   <MDBBtn onClick={()=>removeProduct(item.id)}>Remove</MDBBtn>
//                   <MDBBtn style={{marginLeft:'10px'}} onClick={()=>{toggleOpen(); setItemUpdate(item)}}>Edit</MDBBtn>
     

//                 </MDBCardBody>
//               </MDBCard>
//               </div>
//               ))}

//                   <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
//                     <MDBModalDialog>
//                       <form  onSubmit={edit}>
//                       <MDBModalContent>
//                         <MDBModalHeader>
//                           <MDBModalTitle>Edit Product</MDBModalTitle>
//                           <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
//                         </MDBModalHeader>
//                         <MDBModalBody>Can Change the Title,Discription and Price of product</MDBModalBody>
                     
//                         <MDBModalBody>
//                           <label>Image : </label>
//                           <input style={{marginLeft:'10px',paddingLeft:'5px'}} defaultValue={ItemUpdate.image}   ref={imgref}   /><br /><br />
//                           <label>Title : </label>
//                           <input style={{marginLeft:'10px',paddingLeft:'5px'}} defaultValue={ItemUpdate.title} ref={nameref}  /><br /><br />
//                           <label>Description : </label>
//                           <input style={{marginLeft:'10px',paddingLeft:'5px'}} defaultValue={ItemUpdate.description}   ref={descref}  /><br /><br />
//                           <label>Price : </label>
//                           <input style={{marginLeft:'10px',paddingLeft:'5px'}} defaultValue={ItemUpdate.price}  ref={priceref}  />
//                         </MDBModalBody>

//                         <MDBModalFooter>
//                           <MDBBtn color='secondary' onClick={toggleOpen}>
//                             Close
//                           </MDBBtn>
//                           <MDBBtn type='submit'>Update</MDBBtn>
//                         </MDBModalFooter>

//                       </MDBModalContent>
//                       </form>
//                     </MDBModalDialog>
//                   </MDBModal>
                 
//             </div>

//             </MDBTabsPane>
//           </MDBTabsContent>
//         </MDBCol>
//       </MDBRow>
//     </>
//   );
// }

import React, { useState, useContext, useRef } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';
import { FaUserAlt } from "react-icons/fa";
import { HiMiniListBullet } from "react-icons/hi2";
import { AuthContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Admin() {
  const [verticalActive, setVerticalActive] = useState('tab1');
  const { login, products, setProducts } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});
  
  const addInputRef = useRef(null);
  const nameRef = useRef('');
  const imgRef = useRef('');
  const descRef = useRef('');
  const priceRef = useRef('');

  const handleVerticalClick = (value) => {
    if (value !== verticalActive) setVerticalActive(value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = addInputRef.current;
    const newProduct = {
      title: form.adtitle.value,
      image: form.adimage.value,
      description: form.addescrip.value,
      price: form.adprice.value,
      type: form.adtype.value,
      quantity: form.adquantity.value,
      id: form.adid.value,
    };
    setProducts([...products, newProduct]);
    setShow(false);
    toast.success('Product added successfully!');
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.id === itemToUpdate.id
        ? {
            ...product,
            title: nameRef.current.value,
            image: imgRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value,
          }
        : product
    );
    setProducts(updatedProducts);
    setBasicModal(false);
    toast.success('Product updated successfully!');
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    toast.info('Product removed!');
  };

  return (
    <>
      <ToastContainer />
      <MDBRow>
        <MDBCol size="3">
          <MDBTabs className="flex-column text-center">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick('tab1')}
                active={verticalActive === 'tab1'}
              >
                <FaUserAlt /> Users
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick('tab2')}
                active={verticalActive === 'tab2'}
              >
                <HiMiniListBullet /> Products
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
          <MDBTabsContent>
            {/* User Tab */}
            <MDBTabsPane show={verticalActive === 'tab1'}>
              <MDBTable align="middle">
                <MDBTableHead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {login.map((user) => (
                    <tr key={user.email}>
                      <td>
                        <p className="fw-bold mb-1">{user.username}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{user.email}</p>
                      </td>
                      <td>
                        <MDBBadge color="success" pill>
                          Active
                        </MDBBadge>
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBTabsPane>

            {/* Products Tab */}
            <MDBTabsPane show={verticalActive === 'tab2'}>
              <Button variant="primary" onClick={() => setShow(true)}>
                Add Product
              </Button>
              <Modal show={show} onHide={() => setShow(false)}>
                <form ref={addInputRef} onSubmit={handleAddProduct}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <label>Image URL: </label>
                    <input name="adimage" required /><br /><br />
                    <label>Title: </label>
                    <input name="adtitle" required /><br /><br />
                    <label>Description: </label>
                    <input name="addescrip" required /><br /><br />
                    <label>Price: </label>
                    <input name="adprice" required /><br /><br />
                    <label>Type: </label>
                    <input name="adtype" required /><br /><br />
                    <label>Quantity: </label>
                    <input name="adquantity" required /><br /><br />
                    <label>ID: </label>
                    <input name="adid" required />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                      Close
                    </Button>
                    <Button type="submit" variant="primary">
                      Add
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal>

              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {products.map((product) => (
                  <MDBCard style={{ width: '300px', margin: '10px' }} key={product.id}>
                    <MDBCardImage src={product.image} position="top" alt={product.title} />
                    <MDBCardBody>
                      <MDBCardTitle>{product.title}</MDBCardTitle>
                      <MDBCardText>{product.description}</MDBCardText>
                      <MDBCardText>₹{product.price}</MDBCardText>
                      <MDBBtn color="danger" onClick={() => handleRemoveProduct(product.id)}>
                        Remove
                      </MDBBtn>
                      <MDBBtn
                        style={{ marginLeft: '10px' }}
                        onClick={() => {
                          setBasicModal(true);
                          setItemToUpdate(product);
                        }}
                      >
                        Edit
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                ))}
              </div>

              <MDBModal show={basicModal} setShow={setBasicModal}>
                <MDBModalDialog>
                  <form onSubmit={handleEditProduct}>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>Edit Product</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={() => setBasicModal(false)}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <label>Image: </label>
                        <input defaultValue={itemToUpdate.image} ref={imgRef} /><br /><br />
                        <label>Title: </label>
                        <input defaultValue={itemToUpdate.title} ref={nameRef} /><br /><br />
                        <label>Description: </label>
                        <input defaultValue={itemToUpdate.description} ref={descRef} /><br /><br />
                        <label>Price: </label>
                        <input defaultValue={itemToUpdate.price} ref={priceRef} />
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={() => setBasicModal(false)}>
                          Close
                        </MDBBtn>
                        <MDBBtn type="submit">Update</MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </form>
                </MDBModalDialog>
              </MDBModal>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}
