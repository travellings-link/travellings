<template>
    <div class="container">
        <div class="main">
            <h2>分类跳转</h2>
            <div>仅跳转到指定类型的网站（当前网站分类尚未完成，设置此项后可跳转的网站可能较少）</div>
            <select v-model="tag">
                <option value="">不使用分类跳转</option>
                <option value="blog">博客网站</option>
                <option value="normal">杂项</option>
                <option value="coder">技术类网站（博客或维基）</option>
                <option value="site">网站分享类博客</option>
                <option value="life">生活类博客</option>
                <option value="hybrid">综合类博客</option>
            </select>
            <h2>跳转延时</h2>
            <div>在跳转页的停留时间，单位：毫秒</div>
            <input type="number" v-model="timeout" placeholder="不填写则取默认值“1500”">
            <h2>自定义跳转页</h2>
            <div>默认样式看腻了？可以在此选择使用其他样式的跳转页面，您也可以制作新的跳转页</div>
            <select v-model="page">
                <option value="">使用默认跳转页</option>
                <option>plain.html</option>
                <option>coder-1024.html</option>
            </select>
            <a href="/go.html" target="_self">设置好了，继续开往吧~</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tag: this.getSettings('tag') || '',
            timeout: this.getSettings('timeout') || '',
            page: this.getSettings('page') || '',
        }
    },
    watch: {
        tag: function(newVal) {
            if (!newVal) {
                this.removeSettings('tag');
            } else {
                this.setSettings('tag', newVal);
            }
        },
        timeout: function(newVal) {
            if (!newVal) {
                this.removeSettings('timeout');
            } else {
                this.setSettings('timeout', newVal);
            }
        },
        page: function(newVal) {
            if (!newVal) {
                this.removeSettings('page');
            } else {
                this.setSettings('page', newVal);
            }
        }
    },
    methods: {
        getSettings(key) {
            const prefix = "t_preference_";
            return localStorage.getItem(prefix + key);
        },
        removeSettings(key) {
            const prefix = "t_preference_";
            localStorage.removeItem(prefix + key);
        },
        setSettings(key, value) {
            const prefix = "t_preference_";
            localStorage.setItem(prefix + key, value);
        }
    }
}
</script>

<style scoped>
h3, h2 {
    margin-bottom: 10px;
}
select, input {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
}
a {
    display: inline-block;
    padding: 10px 20px;
    color: white;
    background-color: #333;
    text-decoration: none;
    border-radius: 5px;
}
</style>