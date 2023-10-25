module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["a friend is a present you give yourself", "a good time to finish up old tasks", "a lifetime of happiness lies ahead of you", "adventure can be real happiness", "advice is like kissing, it costs nothing and is a pleasant thing to do", "all your hard work will pay off soon", "any day above ground is a good day"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getHabit: (req, res) => {
        const habits = ["drink water", "go for a walk", "eat some icecream", "take a nap", "call your bestie", "go for a drive"];

        let randomIndex = Math.floor(Math.random() * habits.length);
        let randomHabit = habits[randomIndex];

        res.status(200).send(randomHabit);
    },

    getRate: (req, res) => {
        const rates = ["10/10", "11/10", "20/10", "15/10", "100/10"];

        let randomIndex = Math.floor(Math.random() * rates.length);
        let randomRate = rates[randomIndex];

        res.status(200).send(randomRate);
    },

    getProgress: (reg, res) => {
        const progress = ["half way there", "you're soooooo close", "keep up the good work", "You did it!"];

        let randomIndex = Math.floor(Math.random() * progress.length);
        let randomProgress  = progress[randomIndex];

        res.status(200).send(randomProgress);
    }

    //fetch("http://localhost:4000/api/name/")
      //  .then(response => {
        //    if (response.status === 200) {
          //      return response.json();
       //     } else {
       //         throw new Error('Request failed');
        //    }
        //})
        //.then(data => {
         //   alert
        //})

}