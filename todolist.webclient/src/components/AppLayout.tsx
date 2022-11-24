import React, { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
import s from './AppLayout.module.css'

type Props = {
    children?: React.ReactNode
}

export const AppLayout: FC<Props> = ({children}) =>  {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">To Do List</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{'height': '100%'}}>
        {children}
      </div>
    </>
  );
};
