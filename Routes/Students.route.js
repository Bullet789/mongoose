const {Router} = require('express')
const router = Router()

const ContStu = require('../Controllers/Students.controller')


router.get('/students',ContStu.getStudents )
router.post('/students',ContStu.postStudents)
router.delete('/students/:id',ContStu.deleteStudents )
router.patch('/students/:id',ContStu.patchStudents )



module.exports = router;