// Hunter List
const hunters = [
    "厂长", "小丑", "鹿头", "杰克", "蜘蛛", "红蝶", "黄衣之主", "宿伞之魂",
    "摄影师", "疯眼", "梦之女巫", "爱哭鬼", "孽蜥", "红夫人", "26号守卫", "使徒",
    "小提琴家", "雕刻家", "博士", "破轮", "渔女", "蜡像师", "噩梦", "记录员",
    "隐士", "守夜人", "歌剧演员", "愚人金", "时空之影", "跛脚羊", "喧嚣"
];

// Talent List (天赋)
const talents = ["挽留", "张狂", "禁闭空间", "底牌", "无"];

// Skill List (辅助特质)
const skills = ["聆听", "失常", "兴奋", "巡视者", "传送", "窥视者", "闪现", "移形"];

// Get Elements
const randomButton = document.getElementById("randomButton");
const resultContainer = document.getElementById("resultContainer");
const talentContainer = document.getElementById("talentContainer");
const skillContainer = document.getElementById("skillContainer");

// Retrieve Banned Hunters from LocalStorage
const bannedHunters = JSON.parse(localStorage.getItem("bannedHunters")) || [];
const availableHunters = hunters.filter(hunter => !bannedHunters.includes(hunter));

// Function to Get Two Random Hunters
function getRandomHunters() {
    if (availableHunters.length < 2) {
        alert("可用监管不足以选择两个！");
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

// Function to Get Two Random Talents
function getRandomTalents() {
    const shuffledTalents = [...talents].sort(() => 0.5 - Math.random());
    return shuffledTalents.slice(0, 2);
}

// Function to Get One Random Skill
function getRandomSkill() {
    return skills[Math.floor(Math.random() * skills.length)];
}

// Handle Random Selection
randomButton.addEventListener("click", () => {
    // Clear previous results
    resultContainer.innerHTML = "";
    talentContainer.innerHTML = "";
    skillContainer.innerHTML = "";

    // Get Random Hunters
    const selectedHunters = getRandomHunters();
    selectedHunters.forEach(hunter => {
        const hunterImg = document.createElement("img");
        hunterImg.src = `../HunterPage/images/${encodeURIComponent(hunter)}.png`;
        hunterImg.alt = hunter;
        resultContainer.appendChild(hunterImg);
    });

    // Get Random Talents
    const selectedTalents = getRandomTalents();
    selectedTalents.forEach((talent, index) => {
        const talentImg = document.createElement("img");
        talentImg.src = `../HunterPage/talents/${encodeURIComponent(talent)}.png`;
        talentImg.alt = talent;
        talentImg.style.margin = "0 10px"; // Adds a horizontal gap of 10px between the images
        talentContainer.appendChild(talentImg);
});

    // Get Random Skill
    const selectedSkill = getRandomSkill();
    const skillImg = document.createElement("img");
    skillImg.src = `../HunterPage/skills/${encodeURIComponent(selectedSkill)}.png`;
    skillImg.alt = selectedSkill;
    skillContainer.appendChild(skillImg);

    // Get stored data from localStorage
    const selectedMap = localStorage.getItem("selectedMap") || "未知地图";
    const survivorPositions = JSON.parse(localStorage.getItem("survivorPositions")) || [];

    // Define position range based on the map
    let positionRange;
    if (selectedMap === "湖景村" || selectedMap === "月亮河公园") {
        positionRange = 12;
    } else if (selectedMap === "永眠镇") {
        positionRange = 10;
    } else {
        positionRange = 9;
    }

    // Generate possible positions based on range
    const allPositions = Array.from({ length: positionRange }, (_, i) => i + 1);

    // Filter out survivor positions
    const availablePositions = allPositions.filter(pos => !survivorPositions.includes(String(pos)));
    console.log(survivorPositions)
    // Select a random available position for the hunter
    const randomPosition = availablePositions.length > 0 ?
        availablePositions[Math.floor(Math.random() * availablePositions.length)] :
        "无可用位置";

    // Display the selected hunter position
    document.getElementById("randomHunterPosition").innerText = randomPosition;
});

