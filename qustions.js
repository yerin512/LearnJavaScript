const data = [
    {name: "자바스크립트", level: 5, code:"j" },
    {name: "html", level: 3, code: "h" },
    {name:"css", level:1, code:"c"},
]



const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    objective.ary[index].assort = name;
    objective.ary[index].objectiveCount = value ? value : '0';
    setObjective({ ...objective, ary: objective.ary });
  };

{data.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>
        <input
          type="text"
          name={item.code}
          defaultValue={item.level}
          onChange={(e) => {
            handleInputChange(e, index);
          }}
        />
      </td>
    </tr>
  ))}