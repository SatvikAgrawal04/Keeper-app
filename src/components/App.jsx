import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./../notes"

export default function App() {

    function createNotes(note) {
        return <Note title={note.title} content={note.content} key={note.key} />
    }


    return <div>
        <Header />
        {
            notes.map((note) => createNotes(note))
        }
        <Footer />
    </div>
};