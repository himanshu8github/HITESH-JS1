function generateOTP(length){
    let otp = ''
    for(i = 0; 1< length; i++){
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}

console.log(generateOTP(5));
