// 定义牙签数量
let rows = [3, 5, 7];

// 定义玩家姓名
let players = ["Player 1", "Player 2"];

// 定义当前玩家
let currentPlayer = 0;

// 定义游戏结束标志
let gameOver = false;

// 显示牙签数量
console.log(`Row 1: ${rows[0]} toothpicks`);
console.log(`Row 2: ${rows[1]} toothpicks`);
console.log(`Row 3: ${rows[2]} toothpicks`);

// 开始游戏
while (!gameOver) {
  // 输出当前玩家
  console.log(`${players[currentPlayer]}'s turn`);

  // 输入行号
  let row = parseInt(prompt("录入行号(1-3): "));

  // 输入牙签数量
  let count = parseInt(prompt("录入需要取的火柴数量: "));

  // 检查是否越界
  if (row < 1 || row > 3) {
    console.log("错误的行号！");
    continue;
  }

  if (count < 1 || count > rows[row - 1]) {
    console.log("错误的火柴数量！");
    continue;
  }

  // 更新牙签数量
  rows[row - 1] -= count;

  // 显示牙签数量
  console.log(`Row 1: ${rows[0]} toothpicks`);
  console.log(`Row 2: ${rows[1]} toothpicks`);
  console.log(`Row 3: ${rows[2]} toothpicks`);

  // 检查是否结束游戏
  if (rows[0] === 0 && rows[1] === 0 && rows[2] === 0) {
    gameOver = true;
    console.log(`${players[currentPlayer]} wins!`);
  } else {
    // 更改当前玩家
    currentPlayer = (currentPlayer + 1) % 2;
  }
}
