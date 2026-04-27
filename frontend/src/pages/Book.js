import { useState } from "react";
import axios from "axios";

function Book() {
  const [data, setData] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/api/appointments/book", data);
    alert("Appointment booked");
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input placeholder="Patient ID" onChange={e => setData({...data, patientId: e.target.value})}/>
      <input placeholder="Doctor ID" onChange={e => setData({...data, doctorId: e.target.value})}/>
      <input placeholder="Date" onChange={e => setData({...data, date: e.target.value})}/>
      <button onClick={submit}>Book</button>
    </div>
  );
}

export default Book;