export const sponsor = {
    data: [""],
    updated: false,
    get title() {
        var now_month = new Date().getMonth()+1;
        return (now_month-1)+"月"+"赞助者";
    },
    getRawData: async (year: number, month: number, page: number) => {
        try {
            var res=await fetch("https://api.vertillusion.com/afdian/sponsors?user_id=6e896a724cde11ea8f4e52540025c377&month=" + month + "&year=" + year + "&page=" + page)
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
        let now = new Date();
        let pages = [];
        var year, month = 0;
        year=now.getFullYear();
        month = now.getMonth() + 1;
        if (month == 1) {
            month = 12;
            year--;
        } else {
            month--;
        }
        
        pages.push(await this.getRawData(year,month, 1));
        if (pages[0] != null && pages[0].ec == 200 && pages[0].em == "ok") {
            while (pages[pages.length - 1].data.has_more == 1) {
                pages.push(await this.getRawData(year,month, pages.length + 1));
            }
            this.data.length = 0;
            for (let i = 0; i < pages.length; i++) {
                this.data.push(...(pages[i].data.list.map((item) => item.name)));
            }
            if (this.data.length == pages[0].data.total_count) {
                console.log("Sponsors: " + this.data);
                this.updated = true;
                return true;
            } else {
                return false;
            }
        }
        console.log("Error[afadian API]: " + pages[0].em);
        return false;
            
        
    },
    get names() {
        return this.data;
    }
};
