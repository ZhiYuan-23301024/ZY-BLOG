
const ea = ExcalidrawAutomate;
ea.reset();

// === 配置 ===
const rows = 5;          // 行数
const cols = 1;          // 列数（固定为一列）
const cellWidth = 200;    // 单元格宽度
const cellHeight = 50;    // 单元格高度
const startX = 0;        // 起始X坐标
const startY = 0;        // 起始Y坐标
const strokeWidth = 2;   // 边框线宽

// 样式设置
ea.style.strokeWidth = strokeWidth;
ea.style.strokeColor = "#000000";
ea.style.backgroundColor = "transparent";
ea.style.roughness = 0;  // 0=规整, 1=手绘感
ea.style.fillStyle = "solid";

// === 画矩形格子 ===
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const x = startX + c * cellWidth;
    const y = startY + r * cellHeight;
    ea.addRect(x, y, cellWidth, cellHeight);
  }
}

// === 可选：添加行号文字 ===
ea.style.fontSize = 16;
ea.style.fontFamily = 1; // 1=Virgil, 2=Helvetica, 3=Cascadia

for (let r = 0; r < rows; r++) {
  const x = startX + 10;
  const y = startY + r * cellHeight + cellHeight/2 - 8;
  ea.addText(x, y, `第${r+1}行`, { width: cellWidth - 20 });
}

// 添加到当前画布
await ea.addElementsToView(true, true);
