new Vue({
    el: "#app",
    data: {
        playerScore: 100,
        monsterScore: 100,
        showStartGameButton: true,
        actionLog: [],
        gameOver: false,
        playerHealthBarStyle: {
            width: "100%"
        },
        monsterHealthBarStyle: {
            width: "100%"
        }
    },
    methods: {
        startNewGame: function() {
            this.playerScore = 100;
            this.monsterScore = 100;
            this.showStartGameButton = false;
            this.actionLog = [];
            this.gameOver = false;
            this.playerHealthBarStyle.width = "100%";
            this.monsterHealthBarStyle.width = "100%";
        },
        giveUp: function() {
            this.showStartGameButton = true;
        },
        attack: function() {
            var monsterAttack = Math.floor((Math.random() * 5) + 1);
            this.playerScore = this.playerScore - monsterAttack;
            this.playerHealthBarStyle.width = this.playerScore + "%";
            this.actionLog.unshift({
                isPlayer: false,
                text: "Monster attack player for " + monsterAttack
            });
            var playerAttack = Math.floor((Math.random() * 5) + 1);
            this.monsterScore = this.monsterScore - playerAttack;
            this.monsterHealthBarStyle.width = this.monsterScore + "%";
            this.actionLog.unshift({
                isPlayer: true,
                text: "Player attack monster for " + playerAttack
            });
            this.checkGameStatus();
        },
        specialAttack: function() {
            var monsterAttack = Math.floor((Math.random() * 10) + 1);
            this.playerScore = this.playerScore - monsterAttack;
            this.playerHealthBarStyle.width = this.playerScore + "%";
            this.actionLog.unshift({
                isPlayer: false,
                text: "Monster special attack player for " + monsterAttack
            });
            var playerAttack = Math.floor((Math.random() * 10) + 1);
            this.monsterScore = this.monsterScore - playerAttack;
            this.monsterHealthBarStyle.width = this.monsterScore + "%";
            this.actionLog.unshift({
                isPlayer: true,
                text: "Player special attack monster for " + playerAttack
            });
            this.checkGameStatus();
        },
        heal: function() {
            var monsterAttack = Math.floor((Math.random() * 5) + 1);
            var playerHeal = Math.floor((Math.random() * 10) + 1);
            this.playerScore = this.playerScore -monsterAttack;
            this.actionLog.unshift({
                isPlayer: true,
                text: "Monster attack player for " + monsterAttack
            });
            this.playerScore = this.playerScore + playerHeal;
            this.playerHealthBarStyle.width = this.playerScore + "%";
            this.actionLog.unshift({
                isPlayer: true,
                text: "Player heals for " + playerHeal
            });
            this.checkGameStatus();
        },
        checkGameStatus: function() {
            if (this.playerScore <= 0 || this.monsterScore <= 0) {
                this.gameOver = true;
            }
        }
    },
    watch: {
        gameOver: function(value) {
            var winner = this.playerScore > this.monsterScore ? "Player" : "Monster";
            if (value === true) {
                alert("The winner is: " + winner);
                this.showStartGameButton = true;
            }
        }
    }
})