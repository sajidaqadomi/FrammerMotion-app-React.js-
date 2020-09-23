import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Header from './components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';


function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] })
  const location = useLocation();//applay animation when location changes
  const [showModal, setShowModal] = useState(false);



  const addBase = (base) => {
    // console.log('add base')
    setPizza({ ...pizza, base })
    // console.log(pizza);

  }

  const addToppings = (topping) => {
    let newToppings;
    let { toppings } = pizza;

    newToppings = toppings.includes(topping) ?
      (toppings.filter(item => item !== topping)) :
      ([...toppings, topping]);

    setPizza({ ...pizza, toppings: newToppings })

  }



  return (


    <div className="App">
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/base'>
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path='/toppings'>
            <Toppings addToppings={addToppings} pizza={pizza} />
          </Route>
          <Route path='/order'>
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>


  );
}

export default App;
