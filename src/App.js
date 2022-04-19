import { useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [date, setDate] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setDate(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      emotion,
      content,
      created_date,
    };
    dataId.current += 1;
    setDate([newItem, ...date]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = date.filter((it) => it.id !== targetId);
    setDate(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setDate(
      date.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={date} />
    </div>
  );
}

export default App;
