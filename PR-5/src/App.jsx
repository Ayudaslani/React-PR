import { useEffect, useState } from 'react'
import './App.css';
function App() {

  let [student, setstudent] = useState({})
  let [studentlist, setstudentlist] = useState([])
  let [loading, setloading] = useState(false);
  let [index, setIndex] = useState(-1);
  let [city, setcity] = useState(["surat", "vapi", "vadodra"]);
  let [language, setlanguage] = useState([]);





  useEffect(() => {
    setTimeout(() => {
      getlocalstorgeData();
    }, 500)
  }, [setstudentlist])

  let getlocalstorgeData = () => {
    let data = JSON.parse(localStorage.getItem("student"))
    if (data !== null) {
      setstudentlist(data)
      setloading(true)
    } else {
      setstudentlist([])
    }
  }


  let removeData = (id) => {
    let newlist = [...studentlist];
    let pos = newlist.findIndex((v, i) => v.id == id);
    newlist.splice(pos, 1);
    localStorage.setItem('student', JSON.stringify(newlist));
    setstudentlist(newlist)

  }

  let updateData = (id) => {
    let list = [...studentlist];
    let pos = list.findIndex((v, i) => v.id == id);

    if (pos != -1) {
      setstudent(list[pos]);
      setIndex(pos)
      setlanguage(list[pos].language || []);
    } else {
    }
  }

  let getInputData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newlist = [...language];
    if (name == 'language') {
      if (newlist.includes(value)) {
        let pos = newlist.findIndex((v, i) => v == value)
        if (pos != -1) {
          newlist.splice(pos, 1)
        }
      }
      else {
        newlist.push(value)
      }

      setlanguage(newlist)
      value = newlist
    }

    setstudent({ ...student, [name]: value })

  }
  let submitData = (e) => {
    e.preventDefault();
    let newlist = [...studentlist];
    if (index != -1) {
      newlist[index] = student
    }
    else {
      student.id = Math.round(Math.random() * 100);
      newlist.push(student);
    }

    localStorage.setItem('student', JSON.stringify(newlist));
    setstudentlist(newlist);
    setloading(true);
    setstudent({})
    setIndex(-1)
    setlanguage([])
  }

  return (
    <>
      <h1 align='center'>Student Form</h1>
      <div className='task-form'>
        <form method="post" onSubmit={(e) => submitData(e)}>
          <table align='center'>
            <tr>
              <td>Enter Name :-</td>
              <td><input type='name' name='name' value={student.name ? student.name : ""} onChange={(e) => getInputData(e)}></input></td>
            </tr>
            <tr>
              <td>Enter Last Name  :-</td>
              <td><input type='name' name='lname' value={student.lname ? student.lname : ""} onChange={(e) => getInputData(e)}></input></td>
            </tr>

            <tr>
              <td>Gender :-</td>
              <td>
                <input type='radio' name='gender' value='male' checked={student.gender == 'male' ? 'checked' : ""} onChange={(e) => getInputData(e)} />male
                <input type='radio' name='gender' value='female' checked={student.gender == 'female' ? 'checked' : ""} onChange={(e) => getInputData(e)} />female
              </td>
            </tr>

            <tr>
              <td> language :-</td>
              <td>
                <input type='checkbox' name='language' value='english' onChange={(e) => getInputData(e)} checked={language.includes('english') ? 'checked' : ''} />english
                <input type='checkbox' name='language' value='Hindi' onChange={(e) => getInputData(e)} checked={language.includes('Hindi') ? 'checked' : ''} />Hindi
                <input type='checkbox' name='language' value='Gujarati' onChange={(e) => getInputData(e)} checked={language.includes('Gujarati') ? 'checked' : ''} />Gujarati

              </td>
            </tr>
            <tr>
              <td>city :-</td>
              <td>
                <select name='city' value={student.city ? student.city : ""} onChange={(e) => getInputData(e)}>
                  <option value=''>--select city --</option>
                  {city.map((v, i) => {
                    return (
                      <option value={v} selected={student.city == v ? 'selected' : " "}>{v}</option>
                    )
                  })
                  }
                </select>
              </td>
            </tr>

            <tr>
              <td>Enter Image :- </td>
              <td> <input type='text' name='image' value={student.image ? student.image : ""} onChange={(e) => getInputData(e)}></input></td>
            </tr>

            <tr>
              <td></td>
              <td>
                {
                  index != -1 ?
                    <input type='submit' name='edit' value='edit'></input>
                    :
                    <input type='submit' name='submit' value='submit'></input>
                }
              </td>
            </tr>
          </table>
        </form>
      </div>
      <br></br>
      <div className='show-data-table'>
        <table border={1} align='center'>
          <thead>
            <tr>
              <th>
                No
              </th>
              <th>
                Name
              </th>
              <th>Lname</th>
              <th>gender</th>
              <th>language</th>
              <th>city</th>
              <th>image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {loading ?
              studentlist ? studentlist.map((v, i) => {
                return (
                  <>
                    <tr>
                      <td>{++i}</td>
                      <td>{v.name}</td>
                      <td>{v.lname}</td>
                      <td>{v.gender}</td>
                      <td>{v.language.toString()}</td>
                      <td>{v.city}</td>
                      <td><img src={v.image} height={50}></img></td>
                      <td><button onClick={() => removeData(v.id)}>Delete</button> ||
                        <button onClick={() => updateData(v.id)}>Update</button></td>
                    </tr>
                  </>
                )
              }) : "No data" : <p>Loading...</p>
            }

          </tbody>
        </table>
      </div>

    </>
  )
}

export default App

