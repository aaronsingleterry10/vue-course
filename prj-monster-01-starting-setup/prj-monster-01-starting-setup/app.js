function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                return 'Draw';
            } else if (value <= 0) {
                return 'You Lose';
            } 
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                return 'Draw';
            } else if (value <= 0) {
                return 'You Win';
            }
        }
    },
    computed: {
        lowerPlayerHealth() {
            return {
                width: this.playerHealth + '%'
            }
        },
        lowerMonsterHealth() {
            return {
                width: this.monsterHealth + '%'
            }
        },
        specialAttackRound() {
            return this.currentRound % 3 !== 0;
        },
        // gameOver() {
        //     if (this.playerHealth > 0 && this.monsterHealth <= 0) {
        //         console.log('you win');
        //         return 'You Win!';
        //     } else if (this.playerHealth <= 0 && this.monsterHealth > 0 ) {
        //         return 'You Lose!';
        //     } else {
        //         return 'Draw!';
        //     }
        // }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        }
    },
});
app.mount('#game');