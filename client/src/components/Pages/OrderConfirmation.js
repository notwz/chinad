import React, { useState, useContext } from "react";

import {
  Button as ButtonIcon,
  Delete as DeleteIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";
import {
  IconButton,
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  Launch as LaunchIcon,
} from "@material-ui/icons";

// context provider
import { useCartContext } from "../CartContext";

import CheckoutDialog from "./CheckoutDialog";

// styling
import useStyles from "../MaterialStyles";

const tableStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    maxWidth: 805,
  },
}));

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function Cart() {
  const tableClasses = tableStyles();

  const { prevOrder } = useCartContext();

  const cart = prevOrder.cart;
  const name = prevOrder.name;
  const email = prevOrder.email;
  const phone = prevOrder.phone;
  const orderRequests = prevOrder.orderReqs;
  const pickUpOption = prevOrder.pickUpOption;
  const pickUpTime = prevOrder.pickUpTime;
  const timePlaced = prevOrder.timePlaced;
  const orderReqs = prevOrder.orderReqs;

  const pickUpDetails = (
    <div>
      {" "}
      Pick up Option: {pickUpOption}
      {pickUpOption === "custom time" ? (
        <div> Pick up time: {pickUpTime} </div>
      ) : null}{" "}
    </div>
  );

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cartSubtotal, setCartSubtotal] = useState(0);
  var subt1 = 0;
  cart.forEach((item) => (subt1 = subt1 + item.cartUnitPrice * item.quantity));
  var taxes = subt1 * 0.06;
  var total = subt1 * 1.06;

  const filledCart = (
    <TableContainer component={Paper}>
      <Table className={(tableClasses.table, Cart)} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              {" "}
              <Box>
                <Typography variant="h5"> ~ order ~ </Typography>{" "}
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>
                {" "}
                subtotal: {formatter.format(subt1)} <br /> taxes (6%):{" "}
                {formatter.format(taxes)}
                <br /> total: {formatter.format(total)} <br />{" "}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => {
            const itemOptions = Object.entries(item.options)
              .map(([key, value]) => {
                return value;
              })
              .join(", ");
            const itemTotalPrice = item.cartUnitPrice * item.quantity;
            subt1 = subt1 + itemTotalPrice;

            return (
              <TableRow key={item.title}>
                <TableCell>
                  <Typography> 🍱 {item.title} </Typography>
                  <Typography style={{ color: "#d1d1d1" }} variant="body2">
                    {" "}
                    🥠 {itemOptions}{" "}
                  </Typography>{" "}
                  <Typography style={{ color: "#d1d1d1" }} variant="body2">
                    {" "}
                    👩‍🍳 requests? {item.requestContent}{" "}
                  </Typography>
                  <Box variant="div" className="cartBottomOptions">
                    {" "}
                    <Typography> qty: {item.quantity}</Typography>
                    <Typography>
                      {" "}
                      {formatter.format(item.cartUnitPrice)} ( x {item.quantity}{" "}
                      ) = {formatter.format(itemTotalPrice)}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow key="orderReqs">
            {" "}
            <TableCell>
              <Typography> Order Requests: {orderReqs} </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const emptyCart = (
    <Typography>
      {" "}
      woops! looks like your cart is empty! head over to the menu and add items
      to your cart ~{" "}
    </Typography>
  );

  return (
    <div className="Cart">
      <Typography component="div">
        <Box textAlign="center" m={1} py={8} mx={"1%"}>
          <Box style={{ maxWidth: 650 }}>
            <Typography variant="h4" gutterBottom>
              🎉 confirmation 🙌
            </Typography>
            <Typography gutterBottom>
              {" "}
              🙏 Thank you {name} for your order! You should have received a
              confirmation email ({email}). Check your junk or spam folder if
              you cannot find it. For future orders, adding
              chinadelightnoreply@gmail to your contacts will keep it out of the
              junk folder. If you still can't find your confirmation email, call
              us to ask if we received your online order.{" "}
            </Typography>
            <Box mb={3}> </Box>
            <Typography variant="h5" gutterBottom>
              {" "}
              🔗 quick links{" "}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <a href="/about">
                {" "}
                ⏰ order times
                <LaunchIcon
                  style={{ alignItems: "center", height: "1rem" }}
                />{" "}
              </a>{" "}
              for more details on estimated order times.
              <br />
              <a href="/about">
                {" "}
                💸 pricing
                <LaunchIcon
                  style={{ alignItems: "center", height: "1rem" }}
                />{" "}
              </a>{" "}
              for more details on what costs you can expect.{" "}
            </Typography>
            <Box mb={3}> </Box>
            <Typography gutterBottom>
              {" "}
              📞 If we have any concerns, updates, or concerns about your order,
              we will contact you at {phone}.{" "}
            </Typography>
            <Box mb={3}> </Box>
            <Typography gutterBottom>
              <img
                style={{ maxWidth: 23 }}
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/man-technologist_1f468-200d-1f4bb.png"
                alt="typing-man"
              />{" "}
              How was the ordering experience? Email chinadelightmd@gmail.com
              with any suggestions or feedback. Anything helps us improve and
              learn! <br />
              🤤 Enjoyed the food? click{" "}
              <a href="https://www.google.com/search?q=china+delight&authuser=3&sxsrf=ALeKk0216R8L-eEzUxoNXNmYIss9qtYxsA%3A1617941364003&source=hp&ei=c9NvYOyvOsms5NoPqa2a6Aw&iflsig=AINFCbYAAAAAYG_hhGz9b7oNbJuNgiTNZyyGrLikw5Lt&oq=china+delight&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEMkDMgUIABCSAzIFCAAQkgMyCAguEMcBEK8BMggILhDHARCvATICCAAyAggAMgIIADICCAAyAggAOgUIABCxAzoICAAQsQMQgwE6DgguELEDEIMBEMcBEKMCOgsILhCxAxDHARCjAjoOCC4QsQMQxwEQowIQkwI6CAguELEDEIMBOgUIABDJAzoFCC4QsQNQlhNYuSNg4yRoAnAAeACAAXOIAb8JkgEDOS40mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwistZCipfDvAhVJFlkFHamWBs0Q4dUDCAk&uact=5#lrd=0x89c7deb7b8b012ab:0xd3e57330e03df815,3,,,">
                {" "}
                here
              </a>{" "}
              to leave us a review on Google! Any feedback is appreciated and
              helps us grow!
            </Typography>
            <Box mb={3}> </Box>
            <Typography>
              {" "}
              Order Time: {timePlaced}
              <br /> Pick Up Option: {pickUpOption}{" "}
              {pickUpOption === "custom time" ? (
                <>
                  {" "}
                  <br /> Picking Up At: {pickUpTime}{" "}
                </>
              ) : null}
              <br /> Payment: In-person
            </Typography>
            <Box mb={5}> </Box>{" "}
          </Box>

          <Typography gutterBottom>{filledCart} </Typography>

          <Typography variant="body" gutterBottom>
            <Box mb={5}></Box>
            <Box p={22}> </Box>
          </Typography>
        </Box>
      </Typography>
      <CheckoutDialog open={open} onClose={handleClose} total={total} />
    </div>
  );
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default Cart;