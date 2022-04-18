import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const diaryList = [
  {
    id: 1,
    author: "김대희",
    content: "하이 11111",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "addf",
    content: "하이 222",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "dsfefae",
    content: "하이 3333",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "sdfec",
    content: "하이 4444",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={diaryList} />
    </div>
  );
}

export default App;
