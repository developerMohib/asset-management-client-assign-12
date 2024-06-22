import { Calendar, theme } from "antd";
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Calender = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div>
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};

export default Calender;
