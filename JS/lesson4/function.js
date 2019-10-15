function foo(x) {
    let proizved= x; //присваивание первого значения
    function foo2(y) {
        if (y === undefined) {
            return proizved; //проверка на пустое значение
        } else {
            proizved *= y; //вычисление произведения
            return foo2; }
    }
    return foo2;
}
console.log(foo(5)(2)());
console.log(foo(5)());
console.log(foo(2)(1)(3)(4)());