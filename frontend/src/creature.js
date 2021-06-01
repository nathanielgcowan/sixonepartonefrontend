class Creature{

    static allCreatures = []

    constructor(creature){
        this.id = creature.id
        this.name = creature.attributes.name
        this.image = creature.attributes.image
        this.description = creature.attributes.description
        this.skills = creature.attributes.skills
        Creature.allCreatures.push(this)
        this.renderCreature()
    }

    static renderCreatures(creatures){
        deck.innerHTML = ""
        for (let creature of creatures){
            creature.renderCreature()
        }
    }

    static fetchCreatures(){
        fetch(creaturesURL)
        .then(response => response.json())
        .then(creatures => {
            for(let creature of creatures.data){
                let newCreature = new Creature(creature)
            }
        })
    }

    renderCreature(){
        // make the const
        const creatureLi = document.createElement('li')
        const h3 = document.createElement('h3')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const creatureSkills = document.createElement('ul')

        // The delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'X'
        // The Skill Form
        const skillForm = document.createElement('form')

        creatureLi.dataset.id = this.id
        deck.appendChild(creatureLi)
        h3.className=('creature-card')
        h3.innerText = this.name
        img.width = 100
        img.src = this.image
        p.innerText = this.description
        // The delete button
        deleteButton.addEventListener("click", this.deleteCreature)
        // The Skill Form
        
        // Append Things
        creatureLi.append(h3, img, p, deleteButton)
    }

    static submitCreature(event){
        event.preventDefault()
        fetch(creaturesURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                name: enterCreatureName.value,
                image: enterCreatureImage.value,
                description: enterCreatureDescription.value
            })
        })
        .then(response => response.json())
        .then(creature => {
            let newCreature = new Creature(creature.data)
                makeACreature.reset()
        })
    }

    deleteCreature(){
        const creatureId = this.parentElement.dataset.id
        fetch(`${creaturesURL}/${creatureId}`,{
            method:"DELETE"
        })
        this.parentElement.remove()
    }
}