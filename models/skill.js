const req = require('../controllers/skills')

const skills = [
    {id: 120223, skill: 'Karate', mastery: true},
    {id: 127904, skill: 'Taekwando', mastery: false},
    {id: 139608, skill: 'Brazilian Jiu Jitsu', mastery: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }
  console.log(getAll());
 