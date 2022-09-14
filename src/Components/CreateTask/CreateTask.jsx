import React from 'react'
import './CreateTask.css'





const CreateTask = () => {

    const url="https://devza.com/tests/tasks/create"
    const config = {
        headers: {
          AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
        },
        data: {
            foo: 'bar', // This is the body part
            message:taskMsg,
            due_date:date,
            priority:pri,
            assigned_to:userlist
          }
      };
      function submitForm(){
        
      }
  return (
    <div>
        <form>
            <input type="text-area" />
            <input type="date" placeholder='Date' />
            <input type="text"  placeholder='priority'/>
            <button onClick={submitForm}>submit</button>
        </form>
    

    </div>
  )
}

export default CreateTask