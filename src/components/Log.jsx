import { useState, useEffect } from "react";
import { Card } from "antd";

export default function Log() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Update.txt");
      const jsonData = await response.text();
      const logsArray = jsonData.split("\n\n");
      setData(logsArray);
    };
    fetchData();
  }, []);

  return (
    <>
      {!data && <Card loading></Card>}
      {data &&
        data.map((data, i) => {
          const log = data.split("\n");
          const title = log[0];
          const body = log.slice(1);
          return (
            <Card
              style={{
                width: "68vw",
                margin: "16px auto",
                padding: "8px",
                cursor: "default",
                fontSize: "15px",
              }}
              key={i}
              title={title}
              hoverable
            >
              {body.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </Card>
          );
        })}
    </>
  );
}
