import { FC, useEffect } from "react";
import { useAction } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Filters } from "../../filters/components/Filters";
import { ToDoList } from "../../todolist/components/ToDoList";
import s from "./HomePage.module.css";

export const HomePage: FC = () => {
  

  return (
    <div className={s.container}>
      

      <Filters />
      <ToDoList />
    </div>
  );
};
