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

// Function to display the labels corresponding to the random numbers
function displayRandomLabels() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    const randomNumbers = generateRandomNumbers();
    const selectedLabels = randomNumbers.map(num => labels[num]); // Map random numbers to labels

    // Display the labels
    selectedLabels.forEach(label => {
        const labelElement = document.createElement("p");
        labelElement.textContent = label;
        outputDiv.appendChild(labelElement);
    });
}

// Attach event listener to the button
document.getElementById("generateBtn").addEventListener("click", displayRandomLabels);
