function emailChecker(mail : string) : boolean{
    if(!mail.includes("@")){
        return false;
    }
    
    const parts = mail.split("@");
    const domain = parts[1];

    if(!domain.includes(".")){
        return false;
    }

    return true;
}

export default emailChecker;