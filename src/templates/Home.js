import { useState } from "react";
import Button from "../components/Button";
import KanBanBoard from "./KanBanBoard";
import AddTaskPopUp from "../templates/AddTaskPopUp"

function Home() {
  const [ openDialog,setOpenDialog] = useState(false)
  const handleOpenNewTaskDialog = () => {
    setOpenDialog(!openDialog)
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
