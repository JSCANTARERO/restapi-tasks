import {Router} from "express";
const router = Router();

router.get('/', (req,res) => {
    res.send('Tasks');
})

router.post('/', (req,res) => { // La '/' hace referencia a /api/tasks/
    res.json('Saving a new task')
})

export default router;