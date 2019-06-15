const express = require('express');
const Projects  = require('./projects-model.js');
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving projects',
            error: error
        });
    }
})



// ADD new project
router.post('/', async (req, res) => {
    try {
        if (req.body.name === "" || req.body.description === "") {
            res.status(400).json({ message: "Please provide name and description for the project." });
        } else {
            const project = await Projects.addProject(req.body);
            res.status(201).json(project);
        }
    } catch (error) {
        res.status(500).json({ message: "There was an error while saving the project to the database", error: error });
    }
})

// GET by id 
router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.getProjectById(req.params.id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "The project with the specified ID does not exist." })
        }
    } catch (error) {
        res.status(500).json({ message: "The project has a Server Error", error: error });
    }
})

// UPDATE
router.put('/:id', async(req, res) => {
    const updatedProject = req.body;
    const {id} = req.params;

    try {
        const projectUpdate = await Projects.updateProject(id, updatedProject);

        if(projectUpdate) {
            res.status(200).json(updatedProject)
        } else {
            res.status(404).json({
                message: `Project id ${id} does not exist`
            })
        }
    } catch (error) {
        res.status(500).json({ message: "The project has a Server Error", error: error });
    }

});

// DELETE
router.delete('/:id', async(req, res) => {
    const {id} = req.params;

    try {
        const totalProjects = await Projects.deleteProject(id);
     //   const project = await Projects.getProjectById(id);

        console.log(totalProjects);
        console.log(totalProjects);
        // console.log(project.actions.length);
        if(totalProjects) {
            res.status(200).json({message: ` the project with id ${id} has been deleted`});
        } else {
            req.status(404).json({message: `The project with ${id} does not exist`});

       }
    } catch (error) {
        res.status(500).json({ message: "The project has a Server Error", error: error });
    }

})


module.exports = router;