class Skill{
    constructor(skill){
        this.id = skill.id
        this.name = skill.name
        this.creature_id = skill.creature_id
    }

    static createSkill(event){
        event.preventDefault()
        const li = document.createElement('li')
        const skillName = event.target.children[0].name
        const creatureSkills = event.target.parentElement.dataset.id
        const creatureId = event.target.previousElement.dataset.id
        Skill.submitSkill(skillName, creaturesSkills, creatureId)
        event.target.reset()
    }

    renderSkill(creaturesSkills){
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        li.dataset.id = this.id
        li.innerText = this.name
        li.append(deleteButton)
        deleteButton.addEventListener("click", this.deleteSkill)
        creaturesSkills.appendChild(li)
    }
}