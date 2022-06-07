const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
      weaponName: 'ПП',
      cartridges: 30, // патроны
    },
    supplies: 3, // припасы
  
    gun: function () { 
        if(this.weapon.cartridges === 0){
        console.log('обойма пуста. перезарядить')
        }
        this.weapon.cartridges--
     console.log('бах-бах')
  },
  
  
    
    
    reloading: function () {
      if(this.supplies === 0){
        console.log('не осталось патронов')
      }else { 
        this.weapon.cartridges = 30;
        this.supplies--
        return ` перезарядка...`
      }
    },
    
    wound: function () {
        if(this.health === 0){
          console.log('you loses')
        } else {
         this.health--
        }
  };
  soldier.reloading()
  console.log(soldier)