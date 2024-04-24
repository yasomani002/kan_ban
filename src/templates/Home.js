import { useState } from "react";
import Button from "../components/Button";
import KanBanBoard from "./KanBanBoard";
import AddTaskPopUp from "../components/AddTaskPopUp"

function Home() {
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

export default Home;
