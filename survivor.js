console.log("survivor.js is loaded and executing");
// List of labels
const labels = [
    "幸运儿", "医生", "律师", "慈善家", "园丁", "魔术师", "冒险家", "佣兵", "祭司", "空军", 
    "机械师", "前锋", "盲女", "调香师", "牛仔", "舞女", "先知", "入殓师", "勘探员", "咒术师", 
    "野人", "杂技演员", "大副", "调酒师", "邮差", "守墓人", "囚徒", "昆虫学者", "画家", "击球手", 
    "玩具商", "病患", "心理学家", "小说家", "小女孩", "哭泣小丑", "教授", "古董商", "作曲家", 
    "记者", "飞行家", "啦啦队员", "木偶师", "火灾调查员", "法罗女士", "骑士"
];

// List of 天赋 (Talents)
const talents = ["回光返照", "膝跳反射", "飞轮效应", "化险为夷", "无"];

// List of 地图 (Maps)
const maps = ["军工厂", "红教堂", "圣心医院", "湖景村", "月亮河公园", "里奥的回忆", "永眠镇(小)", "唐人街", "不归林"];

// Function to generate a single random number
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1; // Random number between 1 and max (inclusive)
}

// Function to generate unique random numbers
function generateRandomNumbers(count, max) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNum = Math.floor(Math.random() * max);
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

// Function to populate the table
function populateTable() {
    // Generate a random map
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    document.getElementById("mapContent").textContent = randomMap;

    // Generate 4 random labels for 求生阵容
    const randomLabelNumbers = generateRandomNumbers(4, labels.length);
    const selectedLabels = randomLabelNumbers.map(num => labels[num]);

    // Determine the range for 选点 based on the map
    let selectionRange = 9; // Default range for all maps
    if (randomMap === "湖景村" || randomMap === "月亮河公园") {
        selectionRange = 12;
    } else if (randomMap === "永眠镇(小)") {
        selectionRange = 10;
    }

    for (let i = 0; i < selectedLabels.length; i++) {
        // Fill the 求生阵容 column
        document.getElementById(`label${i + 1}`).textContent = selectedLabels[i];
        
        // Generate 2 random talents for 天赋
        const randomTalentNumbers = generateRandomNumbers(2, talents.length);
        const selectedTalents = randomTalentNumbers.map(num => talents[num]).join(", ");
        document.getElementById(`talent${i + 1}`).textContent = selectedTalents;

        // Fill the 选点 column based on the map's range
        const randomSelection = generateRandomNumber(selectionRange);
        document.getElementById(`selection${i + 1}`).textContent = randomSelection;
    }
}

// Attach event listener to the button
document.getElementById("generateBtn").addEventListener("click", populateTable);
