import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./toggleRudex";
import {
  increment,
  decrement,
  initialportal,
  addtocart,
  displaymodal,
  hidemodal,
} from "./Rudex";
import Main from './Main';
import Portal from './Portal';




const Navbar = () => {
const dispatch = useDispatch();

const isOpen = useSelector(
(state) => state.modal.isOpen
);
 

useEffect(() => {
if (isOpen) {
   dispatch(displaymodal());
}
else{


dispatch(hidemodal());
}


}, [isOpen, dispatch]);


    
const cartcounter = useSelector((state) => state.counter.cartcounter);

 const dis = useSelector((state) => state.counter.isportaldispaly);
 



  return (
    <div>
      <div id="nav">
        <a href="#">
          <h2>Sneakers</h2>
        </a>
        <div id="collection">
          <a href="#">
            <p>collection</p>
          </a>
          <a href="#">
            <p>Men </p>
          </a>
          <a href="#">
            <p>Women</p>
          </a>
          <a href="#">
            <p>About</p>
          </a>
          <a href="#">
            <p>Contact</p>
          </a>
        </div>
        <div id="img">
          <div id="counter" onClick={() => dispatch(toggleModal())}>
            

            <p>{cartcounter}</p>
            <a href="#">
              <img id="boket" src="icon-cart.svg" width={"15px"} />
            </a>
          </div>

          <a href="#">
            <img id="ava" src="image-avatar.png" width={"30px"} />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;








/*const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
const log = () => {
if (toggleVisibility) {

}

*/

