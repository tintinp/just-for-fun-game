const monsters = {
  cuteGirl: {
    position: {
      x: 280,
      y: 200
    },
    image: {
      src: './img/girl2.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Cute Girl',
    attacks: [attacks.Kiss]
  },
  hotGuy: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/dude3.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Hot Guy',
    attacks: [attacks.Kiss]
  }
}
