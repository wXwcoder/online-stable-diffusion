# 使用官方的Python基础镜像
FROM 3.10-alpine3.18

# 设置工作目录
WORKDIR /app

# 将当前目录下的所有文件复制到容器的工作目录中
COPY . /app

# 安装所需的Python依赖包
RUN pip install --no-cache-dir -r requirements.txt

# 将环境变量设置为production
ENV FLASK_ENV=production

# 设置应用运行时的工作目录
WORKDIR /app/api

# 假设prodServer.py是启动你的Flask应用的入口点
CMD ["python", "prodServer.py"]

# 暴露端口（根据实际情况调整）
EXPOSE 80

# 如果需要持久化sdai.db数据库，可以添加卷挂载指令
# VOLUME ["/app/sdai.db"]
