import './App.css';
import {useEffect} from 'react';
import io from 'socket.io-client';
import axios from 'axios';

function App() {

  const socket = io();

  const url = 'wss://6wpovdvzcg.execute-api.us-east-1.amazonaws.com/production';

  var jsonDataOrders = JSON.stringify({action:"orders", order_id:"1", order_status:"in progress", product_order_status:[{ "product_id":"1", "product_status":"done", "product_id":"2", "product_status": "done" }],restaurant_location_id:"id1",restaurant_name:"test1"})
  var jsonDataWaiter = JSON.stringify({"action" : "call_Waiter", "restaurant_location_id": "id1","restaurant_id":"test1","restaurant_name":"test1","table":"2"})
  var jsonDataBill = JSON.stringify({"action" : "order_Bill", "restaurant_location_id": "id1","restaurant_name":"test1","table":"1","payment_type":"1","setTip":"1"})

  
  


  function setConnectionOrder() {
    socket.current = new WebSocket(url);
    socket.current.onopen = () => {
      socket.emit("event")
      socket.current.send(jsonDataOrders)
      alert("Envio con exito!")
    };
    socket.current.onclose = () => alert("socket closed");
    return () => {
      socket.current.close();
    };
    
  }

  function setConnectionWaiter() {
    socket.current = new WebSocket(url);
    socket.current.onopen = () => {
      socket.emit("event")
      socket.current.send(jsonDataWaiter)
      alert("Envio con exito!")
    };
    socket.current.onclose = () => alert("socket closed");
    return () => {
      socket.current.close();
    };
    
  }

  function setConnectionBill() {
    socket.current = new WebSocket(url);
    socket.current.onopen = () => {
      socket.emit("event")
      socket.current.send(jsonDataBill)
      alert("Envio con exito!")
    };
    socket.current.onclose = () => alert("socket closed");
    return () => {
      socket.current.close();
    };
    
  }

  return (
    <>
      <div onClick={setConnectionOrder} style={{
        textAlign: 'center',
        width: '100px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}>
        send order
      </div>

      <div onClick={setConnectionWaiter} style={{
        textAlign: 'center',
        width: '100px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}>
        call waiter
      </div>

      <div onClick={setConnectionBill} style={{
        textAlign: 'center',
        width: '100px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}>
        order bill
      </div>
    </>
  );
  
}


export default App;
