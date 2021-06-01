const creaturesURL = "http://localhost:3000/creatures"
const skillsURL = "http://localhost:3000/skills"
const makeACreature = document.querySelector(".makeacreature")
const enterCreatureName = document.querySelector(".creaturename")
const enterCreatureImage = document.querySelector(".creatureimage")
const enterCreatureDescription = document.querySelector(".creaturedescription")
const deck = document.querySelector(".deck")

makeACreature.addEventListener("submit", Creature.submitCreature)
Creature.fetchCreatures()