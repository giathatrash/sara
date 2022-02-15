const holder = document.querySelector('.holder');
const messageSoundEffect = new Audio("./message.wav");
const music = new Audio("./music.mp3");
const options = {
    speed: 50,
    delay: 1000,
    text: [
        {
            sara: false,
            message: "حبيبتي❤",
        },
        {
            sara: true,
            message: "عيوني🥰"
        },
        {
            sara: false,
            message: "بحبك كتير😍",
        },
        {
            sara: true,
            message: "وأنا بعشئك 😍"
        },
        {
            sara: false,
            message: "ربي يديمنا لبعض",
        },
        {
            sara: false,
            message: "ونحب بعض أكثر وأكثر 😇"
        },
        {
            sara: true,
            message: "آمين يا رب 🌸"
        }
    ],
    linesA: [
        "سارة",
        "المتيم بك وعاشقك غياث",
        "أما بعد،",
        "رغم بعد المسافات الي بينا",
        "ورغم قلة الوقت الي متوفر لحتى نحكي",
        "أنا كل يوم عم حبك أكتر",
        "دائماً بتخيل وجودك معي",
        "وملامسة أيدك الناعمة لوجهي",
        "كل يوم عم بتخيل حضنك",
        "ضحكتك",
        "بسمتك",
        "وبمناسبة عيد الحب قررت اكتب فيك شعر",
        "يعبر عن القليل من حبي الك"
    ],
    linesB: [
        "يا من وصل بك الهوى فقلت كل أسرارك",
        "صدقيني لولا البعد استوطنت تحت دارك",
        "عشق الثمانينات أريك أرمي حجارة على دارك",
        "شعر عاشق أوصل لكِ و حب في قلبك تارك",
        "يا ذروة السعادة وصالك",
        "أيا ليتني جارك",
        "عيوني في عيونك كل صباح أسمع أوتارك",
        "و كمال الفرحة يوم تكون داري هي دارك",
        "يوم الناس تهنئ بنا ولست بيدك تارك",
        "بحبك ❤"
    ]
};

function start() {
    document.querySelector('.start').remove();
    startMessages(() => {
        setTimeout(() => {
            hideMessages();
        }, 2000)
    });
}

function startMessages(callback = function(){}){
    let writer = setInterval(timer, 2000);
    let messageIndex = 0;
    function timer() {
        let className = options.text[messageIndex]['sara'] ? " sara" : "";
        holder.innerHTML += `<div class="message-parent${className}"><div class="message">${options.text[messageIndex].message}</div></div>`;
        holder.scrollTop = holder.offsetHeight;
        messageSoundEffect.currentTime = 0;
        messageSoundEffect.play();
        if(messageIndex == options.text.length - 1){
            clearInterval(writer);
            callback();
        }
        messageIndex++;
    }
}

function hideMessages(){
    $('.message-parent').fadeOut(1000);
    setTimeout(() => {
        $('.message-parent').remove();
        holder.classList.add('started');
        linesA();
    }, 1500);
}

function linesA(line = 0) {
    clearInterval(window.interval);
    let charIndex = 0;
    if(line == 0){
        holder.innerHTML = "";
    }else{
        holder.innerHTML += "<br>";
    }
    if(line < options.linesA.length){
        window.interval = setInterval(timer, options.speed);
        function timer() {
            holder.innerHTML += options.linesA[line][charIndex];
            if(charIndex == options.linesA[line].length - 1){
                clearInterval(interval);
                setTimeout(() => {
                    linesA(line + 1);
                }, options.delay);
            }
            holder.scrollTop = holder.offsetHeight;
            charIndex += 1;
        }
    } else if(line == options.linesA.length){
        music.currentTime = 0;
        music.play();
        linesB();
    }
}

function linesB(line = 0) {
    clearInterval(window.interval);
    let charIndex = 0;
    if(line == 0){
        holder.innerHTML = "";
    }else{
        holder.innerHTML += "<br>";
    }
    if(line < options.linesB.length){
        window.interval = setInterval(timer, 200);
        function timer() {
            holder.innerHTML += options.linesB[line][charIndex];
            if(charIndex == options.linesB[line].length - 1){
                clearInterval(interval);
                setTimeout(() => {
                    linesB(line + 1);
                }, options.delay);
            }
            holder.scrollTop = holder.offsetHeight;
            charIndex += 1;
        }
    }
}

window.onresize = () => {
    holder.scrollTo = holder.offsetHeight;
}