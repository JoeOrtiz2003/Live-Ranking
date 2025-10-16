document.addEventListener('DOMContentLoaded', function() {
    const scoreboardElement = document.getElementById('scoreboard');
    
    function fetchScoreboardData() {
        // Simulate fetching data from an API or server
        return [
            { player: 'Player 1', score: 150 },
            { player: 'Player 2', score: 120 },
            { player: 'Player 3', score: 100 },
            { player: 'Player 4', score: 80 },
        ];
    }

    function renderScoreboard(data) {
        scoreboardElement.innerHTML = ''; // Clear existing content
        data.forEach(entry => {
            const row = document.createElement('div');
            row.className = 'scoreboard-row';
            row.innerHTML = `<span>${entry.player}</span>: <span>${entry.score}</span>`;
            scoreboardElement.appendChild(row);
        });
    }

    const data = fetchScoreboardData();
    renderScoreboard(data);
});