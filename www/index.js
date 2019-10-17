import {Universe} from 'wasm-game-life';

const pre = document.getElementById('game-of-life-canvas');
const universe = Universe.new();

const renderloop = () => {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderloop);
};

// requestAnimationFrame(renderloop);
renderloop();
