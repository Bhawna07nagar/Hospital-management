import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setData(res.data);
  };

  const cancel = async (id) => {
    await axios.delete(`http://localhost:5000/api/appointments/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      {data.map(a => (
        <div className="card" key={a._id}>
          {a.patientId} - {a.doctorId} - {a.date}
          <button onClick={() => cancel(a._id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}

export default Appointments;