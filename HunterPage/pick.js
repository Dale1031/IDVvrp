// Hunter list
const hunters = [
    "厂长", "小丑", "鹿头", "杰克", "蜘蛛", "红蝶", "黄衣之主", "宿伞之魂",
    "摄影师", "疯眼", "梦之女巫", "爱哭鬼", "孽蜥", "红夫人", "26号守卫", "使徒",
    "小提琴家", "雕刻家", "博士", "破轮", "渔女", "蜡像师", "噩梦", "记录员",
    "隐士", "守夜人", "歌剧演员", "愚人金", "时空之影", "跛脚羊", "喧嚣"
];

// Exclude banned hunters
const bannedHunters = JSON.parse(localStorage.getItem("bannedHunters")) || [];
const availableHunters = hunters.filter(hunter => !bannedHunters.includes(hunter));
//Debug Test to show banned hunters
console.log(bannedHunters);
// Get DOM elements
const randomButton = document.getElementById("randomButton");
const resultContainer = document.getElementById("resultContainer");

// Function to get two random hunters
function getRandomHunters() {
    if (availableHunters.length < 2) {
        alert("可用猎人不足以选择两个！");
        return [];
    }

    const randomHunters = [];
    while (randomHunters.length < 2) {
        const randomIndex = Math.floor(Math.random() * availableHunters.length);
        const hunter = availableHunters[randomIndex];
        if (!randomHunters.includes(hunter)) {
            randomHunters.push(hunter);
        }
    }
    return randomHunters;
}

// Handle random selection
randomButton.addEventListener("click", () => {
    resultContainer.innerHTML = ""; // Clear previous results

    const selectedHunters = getRandomHunters();
    selectedHunters.forEach(hunter => {
        const hunterImg = document.createElement("img");
        hunterImg.src = `../HunterPage/images/${hunter}.png`; // Update with your image folder path
        hunterImg.alt = hunter;
        resultContainer.appendChild(hunterImg);
    });
});
