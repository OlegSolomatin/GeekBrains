let pointPetr = 25;
let pointFedor = 25;
if ((pointFedor === pointPetr) && (pointFedor <22 && pointPetr < 22)) {
    console.log("Game draw"); }
else if ((pointPetr > pointFedor && pointPetr <= 21) || (pointFedor > 21 && pointPetr <= 21)) {
    console.log("Petr won with " + pointPetr + " points"); }
else if ((pointFedor > pointPetr && pointFedor <= 21) || (pointPetr > 21 && pointFedor <= 21)){
    console.log("Fedor won with " + pointFedor + " points"); }
else { console.log("Perebor"); }