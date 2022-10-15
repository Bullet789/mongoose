const Student = require('../models/Student.models')

module.exports = ContStud = {
    getStudents : (req, res) => {
        Student.find({})   
    },
    postStudents : (req, res) => {
        Student.create({
            name : 'john',
            phone : 89734805793,
            age : 22
        }).then(() => {
            res.json('Студент добавлен')
        })
        },
    deleteStudents : (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() => res.json('студент удалён'))},
    patchStudents : (req, res) => {
        Student.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name
        })
    
    .then(() => res.json ('Студент изменен'))
    .catch(() => res.json('Ошибка при изменении'))
    

}}
