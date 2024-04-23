import { useState } from "react";
import Button from "./components/Button";
import AddTaskPopUp from "./components/AddTaskPopUp";
import KanBanBoard from "./templates/KanBanBoard";


function App() {
  const [ openDialog,setOpenDialog] = useState(false)
  const handleOpenNewTaskDialog = () => {
    setOpenDialog(true)
  }
  return (
    <div >
      <Button onClick={handleOpenNewTaskDialog}>Add new task</Button>
      <KanBanBoard />
      {openDialog && <AddTaskPopUp />}
    </div>
  );
}

export default App;
