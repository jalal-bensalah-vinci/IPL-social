function emailChecker(mail : string) : boolean{
    if(!mail.includes("@")){
        return false;
    }
    
    const parts = mail.split("@");
    const domain = parts[1];

    if(!domain.includes(".")){
        return false;
    }

    if(domain.endsWith(".")){
        return false;
    }

    if(mail.includes(" ")){
        return false;
    }

    if(parts[0].length == 0){
        return false;
    }
    
    return true;
}

export default emailChecker;