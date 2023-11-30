/*
Zadání

Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr 
len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku
přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
Příklad použití:

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“
*/

const fillcut = (str, len) => {
  if(str.length === len) {
    return str
  } else if(str.length > len) {
    return str.slice(0, len)
  } else {
    return ".".repeat(len - str.length) + str
  }
}

console.log(fillcut("paper", 8))
console.log(fillcut("paper", 2))
console.log(fillcut("paper", 20))
console.log(fillcut("paper", 6))

document.body.innerHTML += fillcut(`paper`, 4)
document.body.innerHTML += fillcut(`paper`, 12)

