export async function postFunc (param) {
    try{
        const response_Post = await fetch("https://learn.codeit.kr/api/color-surveys",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(param)
            }
        )
        const data = await response_Post.json();
        console.log("result: ", data);
        return data;
    }catch (e) {
        throw Error;
    }
    
}

export async function getFunc () {
    try{
        const response_Get = await fetch("https://learn.codeit.kr/api/color-surveys")
        const data = await response_Get.json();
        console.log("result: ", data);
        return data;
    }catch (e) {
        throw Error;
    }
}