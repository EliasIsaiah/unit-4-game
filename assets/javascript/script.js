$(document).ready(function () {
    let game = {

        targetNumber: null,
        truffle0: null,
        truffle1: null,
        truffle2: null,
        truffle3: null,
        truffles: [],
        won: null,
        wins: 0,
        losses: 0,
        score: 0,
        gameIsOver: false,

        targetNumberDiv: $("p.targetNumber"),

        initGame: function () {
            this.won = null;
            this.score = 0;
            this.truffles = [];

            this.generateTruffleArr();
            this.generateTarget();

            $("p.score").text("0");

        },

        buildTruffleDOM: function () {
            for (i = 0; i < 4; i++) {
                let imageUrl = "./assets/images/truffle" + i + ".png";
                let truffle = $("<div>");
                truffle
                .attr("class", "truffle" + i)
                .attr("sclass", "pulse")
                .attr("value", i)
                .css({
                    'color': '#ffffff',
                    'margin': '.5rem',
                    'background': 'url(' + imageUrl + ')',
                    'background-size': 'contain',
                    'background-repeat': 'no-repeat',
                    'border-radius': '2rem'
                });

                $("div.trufflesDiv").append(truffle);
            }
        },

        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },

        generateTarget: function () {
            this.targetNumber = this.getRandom(100, 40);
            $("p.targetNumber").text(this.targetNumber);
            console.log(`targetNumber: ${game.targetNumber}`);
        },

        generateTruffleArr: function () {
            while (this.truffles.length < 4) {

                let rand = this.getRandom(20, 5);

                if (this.truffles.indexOf(rand) === -1) {
                    this.truffles.push(rand);
                }
            }
            console.log(this.truffles);
        },

        processTruffleClick: function(index) {

            this.score += this.truffles[index];

            $("p.score").text(this.score);

            if(this.gameIsOver() && this.won) {
                this.wins++;
                $("p.wins").text("W: " + this.wins);
                alert("Congratulations, You Won!");
                this.initGame();

            } else if(this.gameIsOver()) {                
                this.losses++;
                $("p.losses").text("L: " + this.losses);
                alert("Aww, you lost :(");
                this.initGame();
            }
        },

        gameIsOver: function() {
            
            if(this.score > this.targetNumber) {
                console.log(this.losses);                
                this.won = false;
                return true;
            }
            if(this.score === this.targetNumber) {
                this.won = true;
                return true;            
            }
        }
    }


    game.generateTarget();
    game.generateTruffleArr();
    game.buildTruffleDOM();

    $("div.trufflesDiv div").on("click", function(event){
        
        let _this = $(this);

        // _this.attr("class", "pulse");
        
        let value = parseInt(_this.attr("value"), 10);

        game.processTruffleClick(value);
    });

});