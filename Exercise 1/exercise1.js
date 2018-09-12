new Vue(
    {
        el: "#exercise",
        data: {
            name: "Amitai",
            age: 35,
            link: "http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/220px-Polar_Bear_-_Alaska_%28cropped%29.jpg",
        },
        methods: {
            getRandomNumber: function () {
                return Math.random();
            }
        }
    }
)