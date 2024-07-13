import express from "express";
import { Note } from "../models/noteModel.js";

const router = express.Router();

router.post('/:id', async function(req, res){
    try{
        console.log(req.body);
        if(!req.body.title || !req.body.summary || !req.body.body ){
            return res.status(400).send({
                message: 'Send all required fields: title, summary, body, chapter_id',
            })
        }

        const {id} = req.params;
        // chapter id
        const newNote = {
            title: req.body.title,
            summary: req.body.summary,
            body: req.body.body,
            chapter_id: id
        }

        const note = await Note.create(newNote);
        return res.status(201).send(note);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({messgae: error.message});
    }
})

router.get('/:id', async function(req, res){
    try{
        const {id} = req.params;
        //note id
        const note = await Note.findById(id);
        return res.status(200).send(note);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({messgae: error.message});
    }
})

router.put('/:id', async function(req, res){
    try{
        console.log(req.body);
        if(!req.body.title || !req.body.summary || !req.body.body ){
            return res.status(400).send({
                message: 'Send all required fields: title, summary, body, chapter_id',
            })
        }
        const {id} = req.params;
        const note = await Note.findByIdAndUpdate(id, {
            title: req.body.title,
            summary: req.body.summary,
            body: req.body.body,
        });
        if(!note){
            return res.status(404).send("Note with the given id doesn't exist");
        }
        return res.status(201).send("Note updated successfully");
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

router.delete('/:id', async function(req, res){
    try{
        const {id} = req.params;
        const note = await Note.findByIdAndDelete(id);
        if(!note){
            return res.status(404).send("Note with the given id doesn't exist");
        }
        return res.status(201).send("Note deleted successfully");
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router;