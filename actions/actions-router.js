const express = require('express');

const Actions  = require('./actions-model.js');

const router = express.Router();

// GET for /api/actions
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.getActions();
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving actions',
            error: error
        });
    }
})

// POST for the /api/actions
// returns an id of the new action
router.post('/', async (req, res) => {
    const newAction = req.body;
    const {description, notes, completed} = req.body;
console.log(Object.keys(completed).length);
     
    try {
            if(! description || !notes ){
        //  if(!description.length  && !notes.length && !completed.length ) {
      //   if (req.body.description === "" || req.body.notes === "") {
            res.status(400).json({ message: "Please do not enter empty fields" });
        } else {
            const action = await Actions.addAction(newAction);
            res.status(201).json(action);
        }
    } catch (error) {
        res.status(500).json({ message: "There was an error while saving the action to the database", error: error });
    }
})

// GET by id for the /api/actions
router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.getAction(req.params.id);
        console.log(action);
        if (action && (Object.keys(action).length)) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: "The action with the specified ID does not exist." })
        }
    } catch (error) {
        res.status(500).json({ message: "The action information could not be retrieved", error: error });
    }
})


// UPDATE
router.put('/:id', async(req, res) => {
    const updatedAction = req.body;
    const {id} = req.params;

    try {
        const actionUpdate= await Actions.updateAction(id, updatedAction);

        if(actionUpdate) {
            res.status(200).json(updatedAction)
        } else {
            res.status(404).json({
                message: `Action id ${id} does not exist`
            })
        }
    } catch (error) {
        res.status(500).json({ message: "The action has a Server Error", error: error });
    }

});

// 
// DELETE  work in progress
router.delete('/:id', async(req, res) => {
    const {id} = req.params;

    try {
        const totalActions = await Actions.deleteAction(id);
     //   const project = await Actions.getAction(id);

        console.log(totalActions);

        if(totalActions) {
            res.status(200).json({message: ` the action with id ${id} has been deleted`});
        } else {
            req.status(404).json({message: `The action with ${id} does not exist`});

       }
    } catch (error) {
        res.status(500).json({ message: "The action has a Server Error", error: error });
    }

})


module.exports = router;