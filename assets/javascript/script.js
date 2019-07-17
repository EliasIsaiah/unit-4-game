$(document).ready(function () {
    let game = {

        /* 
        VARIABLES:

        -random number
            --target number
            --truffle1 number
            --truffle2 number
            --truffle3 number
            --truffle4 number
        */

        targetNumber: null,
        truffle0: null,
        truffle1: null,
        truffle2: null,
        truffle3: null,
        truffles: [],
        wins: 0,
        losses: 0,
        score: 0,
        targetNumberDiv: $("div.targetNumberDiv div.targetDiv"),


        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },

        generateTarget: function () {
            this.targetNumber = this.getRandom(100, 40);
            $()
            console.log(`targetNumber: ${game.targetNumber}`);
        },

        generateTruffles: function() {
            while(this.truffles.length < 4) {

                let rand = this.getRandom(20, 5);

                if(this.truffles.indexOf(rand) === -1) {
                    this.truffles.push(rand);
                }
            }
            console.log(this.truffles);
        }
    }

/*     let truffle0 = {
        value: 0,
        counter: 0,
        
        scramble: function() {
            truffles[0] = getRandom(20, 5);

        }
    }

    let truffle1 = {
        value: 0,
    }

    let truffle2 = {
        value: 0,
    }

    let truffle3 = {
        value: 0,
    } */

    //build the truffle divs
    for(i = 0; i < 4; i++) {
        let imageUrl = "./assets/images/truffle" + i + ".png";
        let truffle = $("<div>");
        truffle.attr("class", "truffle" + i).css("border-radius", "1rem").css("margin", ".5rem").css("color", "white");
        truffle.css({
            'background': 'url(' + imageUrl + ')',
            'background-size': 'contain',
            'background-repeat': 'no-repeat',
        });
        // truffle.css("background", "brown");
        
        $("div.trufflesDiv").append(truffle);

        // console.log(truffle);
    }

    game.generateTarget();
    game.generateTruffles();

});