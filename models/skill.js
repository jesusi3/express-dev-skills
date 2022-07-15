const req = require('../controllers/skills')

const skills = [
    {id: 120223, skill: 'Karate', mastery: true},
    {id: 127904, skill: 'Taekwando', mastery: false},
    {id: 139608, skill: 'Brazilian Jiu Jitsu', mastery: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne

  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex( skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create (skill) {
    //create a skill
    skill.id = Date.now() %1000000;
    //so the new skills won't be donw
    skill.mastery = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }
 