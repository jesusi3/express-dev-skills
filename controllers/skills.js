const Skill = require('../models/skill');

module.exports = {
    index,
    show
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
