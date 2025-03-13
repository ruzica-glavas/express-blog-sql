const express = require('express')
const router = express.Router();

//Importazione dei dati nel controller

const { index, show, store, update, patch, destroy }=require(`../controllers/postController`)

//Index

router.get(`/`, index);

//Show

router.get(`/:id`, show);

//Create (Store)

router.post(`/`, store);

//Update

router.put(`/:id`, update);

//Modify

router.patch(`/:id`, patch);

//Delete (Destroy)

router.delete(`/:id`, destroy);

module.exports = router;