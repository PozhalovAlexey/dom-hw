document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('.gameContainer');
    const cells = [];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gameCell');
            gameContainer.appendChild(cell);
            cells.push(cell);
        }
    }

    const character = document.createElement('img');
    character.src =
        'https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true';
    character.alt = 'character';
    character.classList.add('char');
    const position = Math.floor(Math.random() * 4);
    cells[position].appendChild(character);

    const moveChar = () => {
        const currentPos = cells.findIndex((cell) => cell.contains(character));
        let newPos;
        do {
            newPos = Math.floor(Math.random() * 4);
        } while (position === newPos);
        cells[newPos].appendChild(character);
        console.log('movechar');
    };

    setInterval(moveChar, 2000);
});