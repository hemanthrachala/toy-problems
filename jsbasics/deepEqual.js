function deepEqual(str1, str2) {
    if(typeof str1 === "object" && typeof str2 === "object" && str1 != null && str2 != null) {

        const keys1 = Object.keys(str1);
        const keys2 = Object.keys(str2);

        if(keys1.length === keys2.length) {

            let c = 0;
            for(let i=0; i<keys1.length ; i++) {
                if(typeof str1[keys1[i]] === typeof str2[keys2[i]]) {

                    return deepEqual(str1[keys1[i]],str2[keys2[i]])
                }
                else if (str1[keys1[i]] === str2[keys2[i]]){
                    c++;
                }
                else {
                    return false;
                }
            }
            if(c === keys1.length){
                return true;
            }else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    else if (str1 === str2) {
        return true;
    }
    else{
        return false;
    }
}


