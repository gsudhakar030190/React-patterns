import { personDataType } from "../../personData";

type smallPersonType = {
  smallPerson: personDataType;
};
const SmallPerson = ({ smallPerson }: smallPersonType) => {
  return (
    <>
      <ul>
        {Object.entries(smallPerson)
          .filter((a, i) => {
            return i <= 2;
          })
          .map((a) => {
            return <li>{`${a[0]}: ${a[1]}`}</li>;
          })}
      </ul>
    </>
  );
};

export default SmallPerson;
