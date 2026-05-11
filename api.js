// This will handle dynamic data fetching if you want to automate the grid later
async function fetchF1Data() {
    try {
        // Placeholder for an actual Ergast or OpenF1 API call
        // const response = await fetch('https://api.openf1.org/v1/drivers');
        // const data = await response.json();
        console.log("F1 Ultra API initialized. Ready for 2026 data.");
    } catch (error) {
        console.error("Error fetching F1 data:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchF1Data);
