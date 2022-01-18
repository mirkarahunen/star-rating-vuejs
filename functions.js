var stars = new Vue({
    el: "#full-stars-example",
    data: function() {
        return {
            starsGiven: 0
        }
    },
    methods: {
        setRating: function(e) {
            var _this = this

            if(e.target.nextElementSibling === _this.$refs.starsGiven_1) {
                _this.starsGiven = _this.$refs.starsGiven_1.value
                //console.log(_this.starsGiven);
            } else if (e.target.nextElementSibling === _this.$refs.starsGiven_2) {
                _this.starsGiven = 2
                //console.log(_this.starsGiven);
            } else if (e.target.nextElementSibling === _this.$refs.starsGiven_3) {
                _this.starsGiven = 3
                //console.log(_this.starsGiven);
            } else if (e.target.nextElementSibling === _this.$refs.starsGiven_4) {
                _this.starsGiven = 4
                //console.log(_this.starsGiven);
            } else if (e.target.nextElementSibling === _this.$refs.starsGiven_5) {
                _this.starsGiven = 5
                //console.log(_this.starsGiven);
            }
        }
    }
    

})