import React, { FC, useEffect } from "react";
import { Badge, Form, Spinner, Table } from "react-bootstrap";
import { useAction } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import s from "./ToDosTable.module.css";

export const ToDosTable: FC = () => {
  const {
    tasks,
    error: terror,
    loading: tloading,
  } = useTypedSelector((state) => state.task);
  const { fetchTasks, fetchCategories } = useAction();
  const {
    categories,
    error: cerror,
    loading: cloading,
  } = useTypedSelector((state) => state.category);

  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log({
      tasks,
      categories,
    });
  });

  if (tloading || cloading) {
    return <Spinner animation="grow" variant="secondary" />;
  }

  if (terror || cerror) {
    return <h1>{terror}</h1>;
  }

  return (
    <div className={s.table_container}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time Start</th>
            <th>Deadline</th>
            <th>Passed</th>
            <th>Cattegory</th>
          </tr>
        </thead>
        <tbody>
          <>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <p contentEditable>{task.name}</p>
                </td>
                <td>{task.timeStart}</td>
                <td>{task.deadline}</td>
                <td>
                  <Form.Switch checked={task.passed} disabled />
                </td>
                <td>
                  <Badge bg={'info'}>
                    {
                      categories.find(
                        (categorie) => categorie.idCategory === task.idCategory
                      ).name
                    }
                  </Badge>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </Table>
    </div>
  );
};
