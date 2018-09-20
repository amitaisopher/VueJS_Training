new Vue({
    el: "#app",
    data: {
        playerScore: 100,
        monsterScore: 100,
        showStartGameButton: true
    },
    methods: {
        startNewGame: function() {
            this.playerScore = 100;
            this.monsterScore = 100;
            this.showStartGameButton = false;
        },
        giveUp: function() {
            this.showStartGameButton = true;
        },
        attack: function() {
            this.playerScore = this.playerScore - Math.floor((Math.random() * 5) + 1);
            this.monsterScore = this.playerScore - Math.floor((Math.random() * 5) + 1);
        }
    }
})