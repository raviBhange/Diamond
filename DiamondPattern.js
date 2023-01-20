let  n=prompt("Enter a number");
let diamond = "";
  for (let i = 1; i <= n; i += 2) {
    diamond += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }
  for (let i = n - 2; i >= 1; i -= 2) {
    diamond += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }
  console.log(diamond);
  document.getElementById(diamond);