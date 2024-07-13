import Container from "react-bootstrap/esm/Container";
import SideBar from "./SideBar";
import NotesList from "./NotesList";
import { useParams } from "react-router-dom";

export default function Body(){
    const {chapterId} = useParams()
    return (
        <div className="main">
            <NotesList chapterId={chapterId}/>
        </div>
    )
}