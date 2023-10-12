const geron = (a,b,c) => {
    const p = (a + b + c) / 2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
    }
    console.log (geron (6,7,8))