function emailChecker(mail : string) : boolean{
    if(!mail.includes("@")){
        return false;
    }

    return true;
}

export default emailChecker;