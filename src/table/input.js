import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Input() {
  const nav = useNavigate()
  const [data, setdata] = useState({
    student: "",
    teacher: ""
  })

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const submitvalues = async (e) => {
    e.preventDefault()
    const finaldata = {
      student: data.student,
      teacher: data.teacher
    }
    let response = await axios.post("https://61ea3a267bc0550017bc65e5.mockapi.io/user", finaldata)
    setdata({
      student: "",
      teacher: ""
    })
    nav("/")
  }
  return (
    <div>
      <div>
        <form onSubmit={submitvalues} className="formtag">
          <input type="text" placeholder='Enter Student Name' name="student" required="required" value={data.student} onChange={handlechange} />
          <br />
          <br />
          <input type="text" placeholder='Enter Teacher Name' name="teacher" required="required" value={data.teacher} onChange={handlechange} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Input;