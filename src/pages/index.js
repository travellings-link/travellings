// libraries
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// styles
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="友链接力">
      <main className={styles.main}>
        <div className={styles.content}>
          <h2 className="title is-4">介绍</h2>          
          <p>在去地铁站的路上，两位站长相遇了，他们决定一起同行。</p>
          <p>
            二人聊得很是投机，你一言我一句，其中一位突然说：“欸，对了，你知道有一个叫‘开往’的项目吗？”
          </p>
          <p>“好像有点印象。细说？”</p>
          <p>
            “这是一个友链接力项目，名字取自‘开放的网络’。类似于隔壁十年之约的虫洞，我们可以通过它让友链接力下去，让更多的网页获得流量。我们也可以用开往互相交友。”
          </p>
          <p>“这么说的话，它对站长一定很友好吧！”</p>
          <p>“可以这么说。将开往放入小站里，代表我们乐于分享并支持开放的网络。</p>
          <p>
            每当有人访问加入开往的网页时，点击“开往“会随机跳转到另一个加入开往的网页。
          </p>
          <p>
            之后，再次点击网页上的‘开往’或后退网页，将继续随机跳转到另一个加入开往的网页。
          </p>
          <p>
            同时，它也是一个尊重隐私的非盈利项目，网页全部使用 HTTPS
            抗劫持，项目开源无统计代码。”
          </p>
          <p>
            “哇哦，听起来很不错的样子！看起来项目组希望开往能够让网页互相接力，让流量互相流动，让网络开放起来吧！”
          </p>
          <blockquote>“乘客您好！开往下一个网站的列车即将进站......”</blockquote>
          <p>“车来了，先上车吧。”</p>
        </div>

      </main>
    </Layout>
  );
}
