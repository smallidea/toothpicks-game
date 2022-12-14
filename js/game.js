console.log(`将15根牙签，分成三行，每行自上而下（其实方向不限）分别是3、5、7根， 安排两个玩家，每人可以在一轮内，在任意行拿任意根牙签，但不能跨行，拿最后一根牙签的人即为输家。`);

// 定义牙签数量
let rows = [3, 5, 7];

// 定义玩家姓名
let players = ["Player 1", "Player 2"];

// 定义当前玩家
let currentPlayer = 0;

// 定义游戏结束标志
let gameOver = false;

// 开始游戏
while (!gameOver) {
  // 输出当前玩家
  console.log(`${players[currentPlayer]}`);

  // 输入行号
  let row = parseInt(prompt("录入行号(1-3): "));
  // 检查是否越界
  if (row < 1 || row > 3) {
    console.log("错误的行号！");
    continue;
  }

  // 输入牙签数量
  let count = parseInt(prompt("录入需要取的火柴数量: "));
  if (count < 1 || count > length(rows)) {
    console.log("错误的火柴数量！");
    continue;
  }

  // 更新牙签数量
  rows[row - 1] -= count;

  // 显示牙签数量
  console.log(`行 1 剩余火柴数量: ${rows[0]}`);
  console.log(`行 2 剩余火柴数量: ${rows[1]}`);
  console.log(`行 3 剩余火柴数量: ${rows[2]}`);

  // 检查是否结束游戏
  if (rows[0] + rows[1] + rows[2] === 0) {// 自作孽不可活，录入剩余的牙签数量，另外一个玩家获胜
    gameOver = true;
    console.log(`${players[(currentPlayer + 1) % 2]} 赢了!`);
  } else if (rows[0] + rows[1] + rows[2] === 1) {// 只剩一个牙签时，即当前玩家获胜
    gameOver = true;
    console.log(`${players[currentPlayer]} 赢了!`);
  } else {
    // 更改当前玩家
    currentPlayer = (currentPlayer + 1) % 2;
  }
}
