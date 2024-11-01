export const sponsor = {
    data: [""],
    month: 0,
    updated: false,
    get title() {
        return this.month+"月"+"赞助者";
    },
    getRawData: async () => {
        try {
            var res=await fetch("https://api.vertillusion.xyz/afdian/monthly-sponsors.php");
            if (!res.ok) {
                console.log("Error: " + res.statusText);
                return null;
            }
            return res.json();
        } catch (error) {
            console.log("Error: " + error);
            return null;
        }
    },
    //如果已经更新成功过了，那么再执行就不会更新，返回值为true,可以通过 ignore_updated 参数强制更新
    update: async function (ignore_updated = false): Promise<boolean> {
        if(this.updated && !ignore_updated) {
            return true;
        }
        var res = await this.getRawData();
        if (res != null && res.status == true) {
            this.data = res.data;
            this.month = res.month;
            this.updated = true;
            return true;
        }
        return false;
            
        
    },
    get names() {
        return this.data;
    }
};
