class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Play");

        //greem ui background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);
        //white top bar
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xffffff0).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xffffff).setOrigin(0,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xffffff0).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xffffff).setOrigin(0,0);
    }

}