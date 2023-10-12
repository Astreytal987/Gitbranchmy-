const geron = (a,b,c) => {
    p = (a*b*c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
    }
    console.log (geron (3,6,2))