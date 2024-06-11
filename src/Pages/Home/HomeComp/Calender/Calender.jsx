import { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default Calender;
