let x = 10000;
while ((x++)<=150000) {
    if ((((x-1)+(x-2)+(x-3))%100 === 52) && (x.toString()[1] == "2")) {
            console.log(x);
    }
}