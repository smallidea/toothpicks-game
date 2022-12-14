Console.WriteLine("将15根牙签，分成三行，每行自上而下（其实方向不限）分别是3、5、7根， 安排两个玩家，每人可以在一轮内，在任意行拿任意根牙签，但不能跨行，拿最后一根牙签的人即为输家。");

// 定义牙签数量
int[] rows = { 3, 5, 7 };

// 定义玩家姓名
string[] players = { "Player 1", "Player 2" };

// 定义当前玩家
int currentPlayer = 0;

// 定义游戏结束标志
bool gameOver = false;

// 开始游戏
while (!gameOver)
{
    // 输出当前玩家
    Console.WriteLine($"{players[currentPlayer]}'s turn");

    // 输入行号
    Console.Write("录入行号(1-3): ");
    int row = Convert.ToInt32(Console.ReadLine());
    if (row < 1 || row > rows.Length) // 行号是否错误
    {
        Console.WriteLine("错误的行号！");
        continue;
    }

    // 输入牙签数量
    Console.Write("录入需要取的火柴数量: ");
    int count = Convert.ToInt32(Console.ReadLine());
    if (count < 1 || count > rows[row - 1]) // 火柴数量是否正确
    {
        Console.WriteLine("错误的火柴数量！");
        continue;
    }

    // 更新牙签数量
    rows[row - 1] -= count;

    // 显示牙签数量
    Console.WriteLine($"Row 1: 剩余牙签 {rows[0]} 根");
    Console.WriteLine($"Row 2: 剩余牙签 {rows[1]} 根");
    Console.WriteLine($"Row 3: 剩余牙签 {rows[2]} 根");

    // 检查是否结束游戏
    if (rows[0] + rows[1] + rows[2] == 0) // 自作孽不可活，录入剩余的牙签数量，另外一个玩家获胜
    {
        gameOver = true;
        Console.WriteLine($"{players[(currentPlayer + 1) % 2]} 赢了!");
    }
    else if (rows[0] + rows[1] + rows[2] == 1) // 只剩一个牙签时，即当前玩家获胜
    {
        gameOver = true;
        Console.WriteLine($"{players[currentPlayer]} 赢了!");
    }
    else  // 轮到下一个玩家，更改当前玩家
    {
        currentPlayer = (currentPlayer + 1) % 2;
    }
}