import React, { CSSProperties } from "react";
import { VariableSizeList, FixedSizeList } from "react-window";
import "./App.css";

const IMAGE_SIZE = 3;
const Row = ({
  data,
  index,
  style,
}: {
  data: any;
  index: number;
  style: CSSProperties;
}) => (
  <li key={index} style={style}>
    <div>{`row${data[index]}`}</div>
    <div>
      {[...new Array(IMAGE_SIZE)].map((_, i) => (
        <img
          width={70}
          height={70}
          src={`https://via.placeholder.com/200?text=img${index * 4 + i}`}
        />
      ))}
    </div>
  </li>
);

const createRows = (n: number) => {
  return Array.from({ length: n }, (_, index) => (
    <li key={index}>
      <div>{`row${index}`}</div>
      <div>
        {[...new Array(IMAGE_SIZE)].map((_, i) => (
          <img
            width={70}
            height={70}
            src={`https://via.placeholder.com/200?text=img${index * 4 + i}`}
          />
        ))}
      </div>
    </li>
  ));
};

function App() {
  const [data, setData] = React.useState(() =>
    Array.from({ length: 15 }, (_, i) => i)
  );

  return (
    <div className="App">
      {/* TODO: 전체 목록이 PX로 픽스되어있는지 디자인 시안 확인.  */}
      {/* TODO: 밖에서 무한 스크롤 래퍼로 감싼다.  */}
      {/* <FixedSizeList
        itemData={data}
        height={500}
        itemCount={data.length}
        itemSize={80}
        width="100%"
        // overscanCount={5}
      >
        {Row}
      </FixedSizeList> */}
      {createRows(15)}
    </div>
  );
}

export default App;
