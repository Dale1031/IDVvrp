const password = prompt("Enter the password:");
if (password !== "Identity V!") {
    alert("Access Denied!");
    window.location.href = "https://example.com";
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    alert("Welcome to the IDV Very Random Cup's website!");
});
