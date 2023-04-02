const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for(let i=0; i < this.potions.length; i+=1){
      if(this.potions[i].name === newPotion.name){
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  
  removePotion(potionName) {
    for(let i=0; i < this.potions.length; i+=1){
      if(this.potions[i].name === potionName){
          this.potions.splice(i,1);
      }
    }
  },
  
  updatePotionName(oldName, newName) {
    for(let i=0; i < this.potions.length; i+=1){
      if(this.potions[i].name === oldName){
        this.potions[1].name = newName;
      }
      return `Potion ${oldName} is not in inventory!`;

  },
  // Change code above this line
};
