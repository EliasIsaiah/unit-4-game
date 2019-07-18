$(document).ready(function () {
    let game = {

        targetNumber: null,
        truffles: [],
        won: null,
        wins: 0,
        losses: 0,
        score: 0,
        gameIsOver: false,
        _this: null,

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
        },

        generateTruffleArr: function () {
            while (this.truffles.length < 4) {

                let rand = this.getRandom(20, 5);

                if (this.truffles.indexOf(rand) === -1) {
                    this.truffles.push(rand);
                }
            }
        },

        processTruffleClick: function (index) {

            this.score += this.truffles[index];

            $("p.score").text(this.score);

            if (this.gameIsOver() && this.won) {
                this.wins++;
                $("p.wins").text("W: " + this.wins);
                alert("Congratulations, You Won!");
                this.initGame();

            } else if (this.gameIsOver()) {
                this.losses++;
                $("p.losses").text("L: " + this.losses);
                alert("Aww, you lost :(");
                this.initGame();
            }
        },

        gameIsOver: function () {

            if (this.score > this.targetNumber) {
                console.log(this.losses);
                this.won = false;
                return true;
            }
            if (this.score === this.targetNumber) {
                this.won = true;
                return true;
            }
        }
    }

    game.generateTarget();
    game.generateTruffleArr();
    game.buildTruffleDOM();

    $("div.trufflesDiv div").on("click", function (event) {

        let _this = $(this);

        let value = parseInt(_this.attr("value"), 10);

        game.processTruffleClick(value);
    });

    // $("div.trufflesDiv div").on("click", function (event) {

    //     let _this = $(this);
    //     animateCSS(this, 'bounce');
    //     animateCSS.handleAnimationEnd();
    //     console.log(this);
    // });

    // function animateCSS(element, animationName, callback) {
    //     const node = element
    //     node.classList.add('animated', animationName)
    
    //     function handleAnimationEnd() {
    //         node.classList.remove('animated', animationName)
    //         node.removeEventListener('animationend', handleAnimationEnd)
    
    //         if (typeof callback === 'function') callback()
    //     }
    
    //     node.addEventListener('animationend', handleAnimationEnd)
    // }
    
});