import Progressbar from "./Progressbar";

export const Skills = () => {
  const data = [
    {
      label: "java",
      value: 20,
    },
    {
      label: "python",
      value: 50,
    },
  ];
  return (
    <div
      style={{
        width: "80%",
        // backgroundColor: "#f7f1e3",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
          justifyContent: "center",
      }}
    >
      
      {/* //////data */}
      <div style={{ flexGrow: 1, width: "60%" }}>
        {data.map((e) => {
          return <Progressbar label={e.label} value={e.value} />;
        })}
      </div>
    </div>
  );
};
