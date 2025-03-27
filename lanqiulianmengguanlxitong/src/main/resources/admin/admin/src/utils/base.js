const base = {
    get() {
        return {
            url : "http://localhost:8080/lanqiulianmengguanlxitong/",
            name: "lanqiulianmengguanlxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lanqiulianmengguanlxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "篮球联盟管理系统"
        } 
    }
}
export default base
