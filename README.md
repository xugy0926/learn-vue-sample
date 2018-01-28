#learn-vue-sample

#### lucky

一个抽奖页面

快速部署
```
docker run --name lucky-project -v /some/content:/usr/share/nginx/html:ro -d -p 3001:80 nginx
```

- /some/content 是你 lucky 项目的绝对路径
- 如果部署到服务器，可以把3001改成80。即：-p 80:80。这样可以通过服务器的 ip 地址直接访问，而不需要额外输入端口号。
