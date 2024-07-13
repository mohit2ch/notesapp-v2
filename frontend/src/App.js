import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Routes, Route, useParams } from 'react-router-dom';
import { useGetChapterQuery } from './slices/chapterApiSlice';

function App() {
  // console.log(useParams());
  const {chapterId} = useParams();
  const {data, isLoading, error} = useGetChapterQuery(chapterId);
  console.log(data)
  return (
    <div className="App">
      <Header chapterId = {chapterId}/>
      <Body chapterId = {chapterId}/>
    </div>
  );
}

export default App;
