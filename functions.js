var stars = new Vue({
    el: "#full-stars-example",
    data: function() {
        return {
            starsGiven: 0,
            hoverState: 0
        }
    },
    methods: {
        checkStarState: function(e) {
            if(e.target.ariaLabel == "1 star") {
                this.hoverState = 1;
            } else if (e.target.ariaLabel == "2 stars") {
                this.hoverState = 2;
            } else if (e.target.ariaLabel == "3 stars") {
                this.hoverState = 3;
            } else if (e.target.ariaLabel == "4 stars") {
                this.hoverState = 4;
            } else if (e.target.ariaLabel == "5 stars") {
                this.hoverState = 5;
            }
        },
        removeStarState: function() {
            this.hoverState = 0;
        }
    }
})