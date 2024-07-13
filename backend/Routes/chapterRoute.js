import express from "express";
import { Chapter } from "../models/chapterModel.js";
import { Note } from "../models/noteModel.js";

const router = express.Router();

router.post('/', async function(req, res){
    try{
        console.log(req.body);
        if(!req.body.title){
            return res.status(400).send({
                message: 'Send all required fields: title',
            })
        }

        const newChapter = {
            title: req.body.title,
        }

        const chapter = await Chapter.create(newChapter);
        return res.status(201).send(chapter);
    }catch(error){
        console.log(error.message);
        res.status(500).send({messgae: error.message});
    }
})

router.post('/:id', async function(req, res){
    try{
        console.log(req.body);
        if(!req.body.title){
            return res.status(400).send({
                message: 'Send all required fields: title',
            })
        }
        const {id} = req.params;
        const newChapter = {
            title: req.body.title,
            parentChapter: id
        }
        const chapter = await Chapter.create(newChapter);
        return res.status(201).send(chapter);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({messgae: error.message});
    }
})

router.get('/', async function(req, res){
    try{
        const chapters = await Chapter.find({parentChapter: null});
        return res.status(200).send({chapterCount: chapters.length, chapters: chapters, noteCount: 0, notes: []});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({messgae: error.message});
    }
})

router.get('/:id', async function(req, res){
    try{
        const {id} = req.params;
        const chapter = await Chapter.findById(id);
        if(!chapter){
            return res.status(200).send();
        }
        const chapters = await Chapter.find({parentChapter: id});
        const notes = await Note.find({chapter_id: id});
        
        return res.status(200).send({chapter, count: chapters.length, chapters: chapters, noteCount: notes.length, notes: notes});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({messgae: error.message});
    }
})

router.put('/:id', async function(req, res){
    try{
        const {id} = req.params;
        if(!req.body.title){
            return res.status(400).send({
                message: 'Send all required fields: title',
            })
        }
        const chapter = await Chapter.findByIdAndUpdate(id, {
            title: req.body.title
        })
        if(!chapter){
            return res.status(404).send("Chapter with the given id doesn't exist");
        }
        return res.status(201).send("Chapter updated successfully!");
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})


export default router;