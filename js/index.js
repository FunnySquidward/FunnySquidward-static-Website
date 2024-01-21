/*点击搜索按钮执行的代码 */
const ClickSearchButton = () => {
    alert("搜索功能暂未开放，敬请期待！");
}
/*用来实现跳转页面的JS代码 */
const ToPage = (numStr) => {
    if(numStr == "shufa") {
        window.location.href = "./subpage/shufa.html";
        return;
    }else if(numStr == "shici") {
        window.location.href = "./subpage/shici.html";
        return;
    }else if(numStr == "meishi") {
        window.location.href = "./subpage/meishi.html";
        return;
    }
    else if(numStr == "yueju") {
        window.location.href = "./subpage/yueju.html";
        return;
    }else if(numStr == "piying") {
        window.location.href = "./subpage/piying.html";
        return;
    }else if(numStr == "jiaozi") {
        window.location.href = "https://baike.baidu.com/item/%E9%A5%BA%E5%AD%90/28977";
    }else if(numStr == "zongzi") {
        window.location.href = "https://baike.baidu.com/item/%E7%B2%BD%E5%AD%90/5999";
    }else if(numStr == "mooncake") {
        window.location.href = "https://baike.baidu.com/item/%E6%9C%88%E9%A5%BC/248376";
    }else if(numStr == "hhl") {
        window.location.href = "https://baike.baidu.com/item/%E9%BB%84%E9%B9%A4%E6%A5%BC/10268660?fromModule=lemma_sense-layer#viewPageContent";
    }else if(numStr == "jnflgn") {
        window.location.href = "https://baike.baidu.com/item/%E6%B1%9F%E5%8D%97%E9%80%A2%E6%9D%8E%E9%BE%9F%E5%B9%B4?fromModule=lemma_search-box";
    }else if(numStr == "smhrzgl") {
        window.location.href = "https://baike.baidu.com/item/%E9%BB%84%E9%B9%A4%E6%A5%BC%E9%80%81%E5%AD%9F%E6%B5%A9%E7%84%B6%E4%B9%8B%E5%B9%BF%E9%99%B5/2804672?fromtitle=%E9%80%81%E5%AD%9F%E6%B5%A9%E7%84%B6%E4%B9%8B%E5%B9%BF%E9%99%B5&fromid=2853580";
    }
}
/*点击首页logo跳转 */
const HomeClickLogo = () => {
    window.location.href = "./index.html";
}
/*点击logo跳转 */
const ClickLogo = () => {
    window.location.href = "../index.html";
}