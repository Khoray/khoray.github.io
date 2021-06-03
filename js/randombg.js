//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://pic-1254245913.cos.ap-shanghai.myqcloud.com/img/bg3.jpg)",
  "url(https://pic-1254245913.cos.ap-shanghai.myqcloud.com/img/bg2.jpg)",
  "url(https://pic-1254245913.cos.ap-shanghai.myqcloud.com/img/bg1.jpg)",
  "url(https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2xldGUxMTQvQ0ROQDMuMC9Cb0JvUGljLzIzLmpwZw?x-oss-process=image/format,png)"
  
];
//获取背景图片总数，生成随机数
var bgindex = parseInt(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
// document.getElementById("web_bg").style.backgroundImage = backimg[0];