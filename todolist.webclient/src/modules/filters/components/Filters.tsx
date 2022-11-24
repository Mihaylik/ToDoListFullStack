import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import s from './Filters.module.css';

export const Filters: FC = () => {
  return (
    <>
      <div className={s.container}>
        <Stack gap={3}>
          <div className="bg-light border">First item</div>
          <div className="bg-light border">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>
      </div>
    </>
  );
};
