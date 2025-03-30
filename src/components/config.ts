type headerConf_t = {
  operators: {
    text: string;
    href: string;
  }[];
};

export const headerConf: headerConf_t = {
  operators: [
    {
      text: "主站",
      href: "https://www.vertillusion.com",
    },
    {
      text: "社区",
      href: "https://forum.vertillusion.com",
    },
    {
      text: "BILIBILI",
      href: "https://space.bilibili.com/373454723",
    }
  ],
};

type introConf_t = {
  views: {
    icon: string[];
    word: string;
    intro: string;
  }[];
};

export const introConf: introConf_t = {
  views: [
    {
      icon: [
        "M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z",
      ],
      word: "轻量",
      intro:
        "即开即用。使用自开发轻量级框架,实现极低的资源占用¹在满足桌面体验需求的同时保证日常使用流畅。",
    },
    {
      icon: [
        "M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z",
      ],
      word: "灵感",
      intro:
        "使用应用内时钟、日历、便签纸等组件创造一个您喜爱的桌面²。此外,您还可以使用混合、组件切割功能使其更加贴合您的壁纸。",
    },
    {
      icon: [
        "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z",
        "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z",
      ],
      word: "沉浸",
      intro:
        "专注于您的体验。应用提供专注空间功能,您可以轻易组织您的任务。同时您可以搭配桌面组件布置,创造更加丰富的日常体验。",
    },
    {
      icon: [
        "M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z",
      ],
      word: "免费",
      intro:
        "本应用始终不强制收费。当然,在有能力的情况下,希望您可以支持本应用来帮助我们长期开发和维护。",
    },
  ],
};


type contribution_t = {
  title: string;
  explain: string; 
  link: {
    text: string;
    href: string;
  };
  names: string[];
  //设置这个来添加从api获取的数据
  dynamic?:{
    enable: boolean;
    url: string;
    //解析数据的函数，最后要返回一个数组，这个数组会被显示
    solve_func: (data: string) => string[];
  }
  
};

const author: contribution_t = {
  title: "原作",
  explain: '是LightFrame的造物主啦~ "Vertillusion"是属"CimiMoly"所有的发布载体.',
    link: {
    text: "",
    href: "https://github.com/EnderMo/LightFrame",
  }, 
  names: ["沫狐奶昔 CimiMoly"],
};

const participators: contribution_t = {
  title: "贡献者",
  explain: "为本项目提供技术上支持的人~",
  link: {
    text: "关于项目",
    href: "https://github.com/EnderMo/LightFrame",
  },
  names: [
    "沫狐奶昔 CimiMoly",
    "辰落火辉 Haceau-Zoac(vui.parser)",
    "憨包 MeroWindows(vui.dom)",
    "悠瑞 iYoRoy(安装器和资源站)",
    "xihale(网站优化)",
    "诺尔 SlimeNull(网站优化)",
    "Fuwaki(网站优化)",
    "yizhixianyuuuu(网站优化)",
  ],
};

const sponsors: contribution_t = {
  title: "赞助者",
  explain: "提供经费支持的人~",
  link: {
    text: "用爱发电",
    href: "https://afdian.com/@EnderMo",
  },
  names: [
    ""
  ],
  dynamic: {
    enable: true,
    url: "https://api.vertillusion.com/sponsors/all",
    solve_func: (data) => {
      let res = JSON.parse(data);
      if (res != undefined && res.code == 200) { 
        let t: string[] = [];     //用于存放默认名字的数组
        let r: string[] = res.data.sponsors
          .sort()
          .filter((item: string) => {
            if (item.startsWith("爱发电用户_")) {
              t.push("@"+item); 
              return false;
            };
            return true;
          })
          .map((item, index) => "@" + item);
        
        r.reverse().push("*最后一次更新: " + res.data.date+" （非默认名字按照字符顺序排列😃）");
        r.reverse();
        r.push(...t);
        return r;
      }
      console.log(data);
      throw "无法获取赞助者名单_错误的响应";
    },
  }
};

export const contributions=[
  author,
  participators,
  sponsors,
];
