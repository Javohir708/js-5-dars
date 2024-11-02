// 1-masala 
{
    let n = 8, k = 30
    for(let i = 0; i < n; i++ ){
        console.log(k);
    }
}

// 2-masala
{
    let a = 9, b = 12
    for(let i = a; i <= b; i++)
        console.log(i);
}

// 3-masala
{
    let a = 11, b = 18
    for(let i = b - 1; i > a; i--)
        console.log(i);
}

// 4-masala 
{
    let kg = 10_000
    for(let i = 1; i <= 8; i++) {
        let narx = kg * i;
        console.log(narx);
    }
}

// 5-masala 
{
    {
        let kg = 12_000;
    
        for (let i = 1; i <= 10; i++) {
            let miqdor = i / 10;
            let narx = kg * miqdor;
            console.log(`${miqdor} narxi = ${narx}`);
        }
    }
}

// 6-masala
{
    {
        let kg = 10_000;
    
        for (let i = 12; i <= 20; i += 2) {
            let miqdor = i / 10; //
            let narx = kg * miqdor;
            console.log(`${miqdor} narxi = ${narx}`);
        }
    }
    
}

// 7 -masala 
{
    let a = 3, b = 7, yigindi = 0;

    for (let i = a; i <= b; i++) {
        yigindi += i;
    }

    console.log(`a dan b gacha bo'lgan barcha sonlar yig'indisi = ${yigindi}`);
}

// 8 -masala 

{
    let a = 8, b = 3, kopaytma = 1;

    for (let i = a; i >= b; i--) {
        kopaytma *= i;
    }

    console.log(`a dan b gacha bo'lgan barcha sonlar ko'paytmasi = ${kopaytma}`);
}

// 9-masala 
{
    let a = 3, b = 4, kvadratYigindi = 0;

    for (let i = a; i <= b; i++) {
        kvadratYigindi += i * i;
    }

    console.log(`a dan b gacha bo'lgan barcha sonlar ko'paytmasi = ${kvadratYigindi}`);
}

// 10-masala
{
    let n = 8, s = 0
    for (let i = 1; i <= n; i++){
        s += 1 / i
    }
    console.log(s);
    
}