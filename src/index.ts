export default {
  async fetch(request: any, env: any) {
    // 自动尝试从静态资源库中匹配文件
    return await env.ASSETS.fetch(request);
  },
};