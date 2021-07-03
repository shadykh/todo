import React, { useState } from 'react';

export const SettingContext = React.createContext();

function SettingsProvider(props) {

  const [completed, setCompleted] = useState(true);
  const [displayCount, setDisplayCount] = useState(3);
  const [sortField, setSortField] = useState('difficulty');
  const [totalTasks, setTotalTasks] = useState(0);

  const toggleShowCompleted = () => setCompleted(Completed => !Completed);

  const state = {
    completed,
    displayCount,
    sortField,
    totalTasks,
    toggleShowCompleted,
    setDisplayCount,
    setSortField,
    setTotalTasks
  }


  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  )
}
export default SettingsProvider;