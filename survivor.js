// List of labels
const labels = [
    "幸运儿", "医生", "律师", "慈善家", "园丁", "魔术师", "冒险家", "佣兵", "祭司", "空军", 
    "机械师", "前锋", "盲女", "调香师", "牛仔", "舞女", "先知", "入殓师", "勘探员", "咒术师", 
    "野人", "杂技演员", "大副", "调酒师", "邮差", "守墓人", "囚徒", "昆虫学者", "画家", "击球手", 
    "玩具商", "病患", "心理学家", "小说家", "小女孩", "哭泣小丑", "教授", "古董商", "作曲家", 
    "记者", "飞行家", "啦啦队员", "木偶师", "火灾调查员", "法罗女士", "骑士"
];

// Function to generate 4 unique random numbers
function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 4) {
        const randomNum = Math.floor(Math.random() * 46); // Generate a number between 0 and 45
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

// Function to populate the table with random labels
function populateTable() {
    const randomNumbers = generateRandomNumbers();
    const selectedLabels = randomNumbers.map(num => labels[num]); // Map random numbers to labels

    // Populate the table
    for (let i = 0; i < selectedLabels.length; i++) {
        document.getElementById(`label${i + 1}`).textContent = selectedLabels[i];
        document.getElementById(`talent${i + 1}`).textContent = ""; // Placeholder for 天赋
        document.getElementById(`skill${i + 1}`).textContent = "";  // Placeholder for 技能
        document.getElementById(`selection${i + 1}`).textContent = ""; // Placeholder for 选点
    }
}

// Attach event listener to the button
document.getElementById("generateBtn").addEventListener("click", populateTable);
