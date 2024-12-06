const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

// Taille des blocs
const BLOCK_SIZE = 30;

// Dimensions de la grille
const ROWS = 20;
const COLUMNS = 10;

// Couleurs des pièces
const COLORS = [
  null,
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "cyan",
  "yellow"
];

// Formes des pièces
const SHAPES = [
  null,
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 1, 1]],          // I
  [[1, 1], [1, 1]],        // O
  [[0, 1, 1], [1, 1, 0]],  // Z
  [[1, 1, 0], [0, 1, 1]],  // S
  [[1, 0, 0], [1, 1, 1]],  // L
  [[0, 0, 1], [1, 1, 1]],  // J
];

// Crée une grille vide
function createGrid() {
  return Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
}

// Dessine un carré
function drawSquare(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
  context.strokeStyle = "#000";
  context.strokeRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
}

// Dessine la grille
function drawGrid(grid) {
  grid.forEach((row, y) => {
    row.forEach((value, x) => {
      const color = value ? COLORS[value] : "black";
      drawSquare(x * BLOCK_SIZE, y * BLOCK_SIZE, color);
    });
  });
}

// Crée une nouvelle pièce
function createPiece(type) {
  return SHAPES[type].map(row => [...row]);
}

// Vérifie si une pièce peut bouger
function isValidMove(grid, piece, offset) {
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      if (piece[y][x]) {
        const newX = x + offset.x;
        const newY = y + offset.y;
        if (
          newX < 0 || // Hors de la grille à gauche
          newX >= COLUMNS || // Hors de la grille à droite
          newY >= ROWS || // En bas de la grille
          (newY >= 0 && grid[newY][newX]) // Collision avec une pièce existante
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

// Ajoute une pièce à la grille
function merge(grid, piece, offset) {
  piece.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        grid[y + offset.y][x + offset.x] = value;
      }
    });
  });
}

// Efface les lignes complètes
function clearLines(grid) {
  let cleared = 0;
  for (let y = grid.length - 1; y >= 0; y--) {
    if (grid[y].every(value => value !== 0)) {
      grid.splice(y, 1);
      grid.unshift(Array(COLUMNS).fill(0));
      cleared++;
      y++; // Vérifie à nouveau la même ligne
    }
  }
  return cleared;
}

// Classe du jeu Tetris
class Tetris {
  constructor(context) {
    this.context = context;
    this.grid = createGrid();
    this.reset();
  }

  reset() {
    this.grid = createGrid();
    this.spawnPiece();
    this.score = 0;
    this.dropCounter = 0;
    this.dropInterval = 1000;
    this.lastTime = 0;
  }

  spawnPiece() {
    const type = Math.floor(Math.random() * (SHAPES.length - 1)) + 1;
    this.piece = createPiece(type);
    this.offset = { x: Math.floor(COLUMNS / 2) - Math.floor(this.piece[0].length / 2), y: 0 };
    if (!isValidMove(this.grid, this.piece, this.offset)) {
      alert("Game Over!");
      this.reset();
    }
  }

  drop() {
    const newOffset = { ...this.offset, y: this.offset.y + 1 };
    if (isValidMove(this.grid, this.piece, newOffset)) {
      this.offset = newOffset;
    } else {
      merge(this.grid, this.piece, this.offset);
      this.score += clearLines(this.grid) * 10;
      this.spawnPiece();
    }
    this.dropCounter = 0;
  }

  move(dir) {
    const newOffset = { ...this.offset, x: this.offset.x + dir };
    if (isValidMove(this.grid, this.piece, newOffset)) {
      this.offset = newOffset;
    }
  }

  rotate() {
    const rotatedPiece = this.piece.map((_, i) => this.piece.map(row => row[i]).reverse());
    const oldOffset = { ...this.offset };

    // Ajuste la position si la rotation est hors de la grille
    while (!isValidMove(this.grid, rotatedPiece, this.offset)) {
      this.offset.x += (this.offset.x > 0 ? -1 : 1);
      if (Math.abs(this.offset.x - oldOffset.x) > 2) {
        this.offset = oldOffset; // Annule la rotation
        return;
      }
    }
    this.piece = rotatedPiece;
  }

  update(deltaTime) {
    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) {
      this.drop();
    }
    this.draw();
  }

  draw() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(this.grid);
    this.piece.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          drawSquare((x + this.offset.x) * BLOCK_SIZE, (y + this.offset.y) * BLOCK_SIZE, COLORS[value]);
        }
      });
    });
  }
}

const tetris = new Tetris(context);

let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  tetris.update(deltaTime);
  requestAnimationFrame(update);
}

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") {
    tetris.move(-1);
  } else if (event.key === "ArrowRight") {
    tetris.move(1);
  } else if (event.key === "ArrowDown") {
    tetris.drop();
  } else if (event.key === "ArrowUp") {
    tetris.rotate();
  }
});

update();
