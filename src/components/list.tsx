import React from "react";

import { personDataType } from "../personData";

type listType = {
  data: personDataType[];
  resourceName: string;
  comp: React.ElementType;
};

const List = ({ data, resourceName, comp: Comp }: listType) => {
  return (
    <>
      {data.map((d) => {
        return <Comp {...{ [resourceName]: d }} />;
      })}
    </>
  );
};

export default List;
