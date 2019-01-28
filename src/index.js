import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

// STEP 1 = WORKING FINE
function preload ()
{
    this.load.multiatlas('humans_tanks_cannons_green_1', 'assets/tanks/cannons/green_1.json', 'assets/tanks/cannons');
}
function create ()
{
    this.add.sprite(100, 100, 'humans_tanks_cannons_green_1', 'cannon_autocannon_0/idle/000/1')
}

// STEP 2 = WORKING FINE
// function preload ()
// {
//     this.load.multiatlas('humans_tanks_leopard_3mbt_green_1', 'assets/tanks/leopard_3mbt/green_1.json', 'assets/tanks/leopard_3mbt');
// }
// function create ()
// {
//     this.add.sprite(200, 200, 'humans_tanks_leopard_3mbt_green_1', 'body/idle/000/1')
// }

// STEP 3 = NOT WORKING
// function preload ()
// {
//     this.load.multiatlas('humans_tanks_cannons_green_1', 'assets/tanks/cannons/green_1.json', 'assets/tanks/cannons');
//     this.load.multiatlas('humans_tanks_leopard_3mbt_green_1', 'assets/tanks/leopard_3mbt/green_1.json', 'assets/tanks/leopard_3mbt');
// }
// function create ()
// {
//     this.add.sprite(100, 100, 'humans_tanks_cannons_green_1', 'cannon_autocannon_0/idle/000/1')
//     this.add.sprite(200, 200, 'humans_tanks_leopard_3mbt_green_1', 'body/idle/000/1')
// }
