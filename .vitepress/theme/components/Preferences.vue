<template>
  <ClientOnly>
    <div class="container">
      <div class="main">
        <h2>分类跳转</h2>
        <div>
          仅跳转到指定类型的网站（当前网站分类尚未完成，设置此项后可跳转的网站可能较少）<br />
          杂项网站指导航、论坛、个人主页、维基文档、在线游戏等不方便加以细分的成员网站，杂项网站与博客一样具有访问的价值。
        </div>
        <select class="form-control" v-model="settings.tag">
          <option value="">不使用分类跳转</option>
          <option value="blog">博客网站</option>
          <option value="normal">杂项</option>
          <option value="tech">技术类网站（博客或维基）</option>
          <option value="site">网站分享类博客</option>
          <option value="life">生活类博客</option>
          <option value="hybrid">综合类博客</option>
        </select>
        <h2>跳转延时</h2>
        <div>在跳转页的停留时间，单位：毫秒</div>
        <input
          class="form-control"
          type="number"
          v-model="settings.timeout"
          placeholder="不填写则取默认值“1500”"
        />
        <h2>自定义跳转页</h2>
        <div>
          默认样式看腻了？可以在此选择使用其他样式的跳转页面（<a href="/docs/pages">跳转页面一览</a>），您也可以<a
                href="/docs/join#%E5%8F%82%E4%B8%8E%E9%A1%B9%E7%9B%AE">制作新的跳转页</a>
        </div>
        <select class="form-control" v-model="settings.page">
          <option value="">使用默认跳转页</option>
          <!-- 以下为自定义跳转页 -->
          <option>plain.html</option>
          <option>coder-1024.html</option>
          <option>go-by-clouds.html</option>
          <option>go-robots.html</option>

          <!-- 以上为自定义跳转页 -->
        </select>
        <br>
        <a href="/go.html" class="go-travelling" target="_self">设置好了，继续开往吧~</a>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
const prefix = "t_preference_";

export default {
    data: () => ({
        settings: {
            tag: '',
            timeout: '',
            page: ''
        }
    }),
    
    mounted() {
        for (let key in this.settings) {
            const value = this.getSettings(key);
            if (value) {
                this.settings[key] = value;
            }
        }
    },

    watch: {
        settings: {
            handler(val) {
                for (let key in val) {
                    if (val[key]) {
                      this.setSettings(key, val[key]);
                    } else {
                      this.removeSettings(key);
                    }
                }
            },
            deep: true
        }
    },
    methods: {
        getSettings(key) {
            return localStorage.getItem(prefix + key);
        },
        removeSettings(key) {
            localStorage.removeItem(prefix + key);
        },
        setSettings(key, value) {
            localStorage.setItem(prefix + key, value);
        }
    }
}
</script>

<style scoped>
  .go-travelling {
    margin-top: 2rem;
    display: inline-block;
    text-decoration: none;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s;
  }
  .go-travelling:hover {
    background-color: #555;
    color: white;
  }
  .form-control {
    width: 100%;
    padding: 10px 20px;
    margin-top: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1rem
  }
</style>
