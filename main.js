const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const habitBtn = document.getElementById("habitButton")

const getHabit = () => {
    axios.get("http://localhost:4000/api/habit/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

habitBtn.addEventListener('click', getHabit);

const rateBtn = document.getElementById("rateButton")

const getRate = () => {
    axios.get("http://localhost:4000/api/rate/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

rateBtn.addEventListener('click', getRate);

const progressBtn = document.getElementById("progressButton")

const getProgress = () => {
    axios.get("http://localhost:4000/api/progress/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

progressBtn.addEventListener('click', getProgress);







//document.getElementById('submitButton').addEventListener('click', function(){
//    const firstName = document.getElementById('firstName').value;
//    const lastName = document.getElementById('lastName').value; 
//});