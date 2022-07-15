const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkills
}

function deleteSkills(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', {skill})
}

function index(req, res){
    //obtain teh array of skills from the skill module
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}
