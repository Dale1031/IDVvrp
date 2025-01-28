// Hunter list
const hunters = [
    "厂长", "小丑", "鹿头", "杰克", "蜘蛛", "红蝶", "黄衣之主", "宿伞之魂",
    "摄影师", "疯眼", "梦之女巫", "爱哭鬼", "孽蜥", "红夫人", "26号守卫", "使徒",
    "小提琴家", "雕刻家", "博士", "破轮", "渔女", "蜡像师", "噩梦", "记录员",
    "隐士", "守夜人", "歌剧演员", "愚人金", "时空之影", "跛脚羊", "喧嚣"
];

// Get DOM elements
const hunterContainer = document.getElementById("hunterContainer");
const confirmButton = document.getElementById("confirmButton");

// Selected hunters storage
let selectedHunters = [];

// Display hunters dynamically
hunters.forEach((hunter, index) => {
    const hunterImg = document.createElement("img");
    hunterImg.src = `../HunterPage/images/${hunter}.png`; // Update with your image folder path
    hunterImg.alt = hunter;
    hunterImg.dataset.name = hunter;

    // Click event for selecting/unselecting a hunter
    hunterImg.addEventListener("click", () => {
        if (selectedHunters.includes(hunter)) {
            // Unselect if already selected
            selectedHunters = selectedHunters.filter(h => h !== hunter);
            hunterImg.classList.remove("selected");
        } else if (selectedHunters.length < 3) {
            // Select if less than 3 are selected
            selectedHunters.push(hunter);
            hunterImg.classList.add("selected");
        } else {
            alert("最多只能选择3名监管！");
        }
    });

    hunterContainer.appendChild(hunterImg);
});

// Confirm selection and proceed to "pick" page
confirmButton.addEventListener("click", () => {
    if (selectedHunters.length === 0) {
        alert("请选择至少一个监管！");
        return;
    }

    // Store selected hunters in localStorage
    localStorage.setItem("bannedHunters", JSON.stringify(selectedHunters));

    // Redirect to the pick page
    window.location.href = "pick.html";
});
