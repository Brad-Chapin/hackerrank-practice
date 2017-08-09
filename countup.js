function countUp(start) {
    let str = "";
    let val = start +1
    let count = 0;
    while (count < 10) {
        if (val < start +10){
        str += (val + " then ");
        val++;
        count++;
        } else {
            str += val;
            count++;
        }
    }
    console.log(str);
}

//simple practice problem to prepare for a hacker rank test for a job
