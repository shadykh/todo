import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { SettingContext } from './context.js';
import './setting.scss'

function Settings(props) {

  const context = useContext(SettingContext);

  return (
    <section >
      <strong>Settings</strong>
      <br></br>
      <div  className='divOpt'>
        <Button variant="outline-primary" onClick={() => context.toggleShowCompleted()}>Toggle to show all Tasks</Button>
      </div>
      <div className='divOpt'>
      <strong>Total shown tasks : {context.totalTasks}</strong>
      </div>
      <div className="column-6 form-select" className='divOpt'>
        <label >Sort by</label>
        <select onChange={e => context.setSortField(e.target.value)}>
          <option value="difficulty" >difficulty</option>
          <option value="name" >name</option>
          <option value="task" >task</option>
        </select>
      </div>
      <div className='divOpt'>
        <label >Display</label>
        <select onChange={e => context.setDisplayCount(e.target.value)}>
          <option value="3" >3</option>
          <option value="6" >6</option>
          <option value="9" >9</option>
        </select>
      </div>
    </section>
  )
}
export default Settings;