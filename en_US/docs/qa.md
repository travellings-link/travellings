# 疑难解答

## Q: What benefits does joining Travellings bring to my website?

A: The internet has transitioned from being closed to open, and now it's shifting back towards closure. In this environment, the traffic of standalone web pages (similar to "indie games") is more or less affected. Travellings attempts to make traditional backlinks "active," allowing web pages to relay traffic to each other, fostering a flow of traffic, and opening up the internet.在此环境下，独立网页（类似“独立游戏”）的流量或多或少的受到影响。开往尝试让传统友链“活跃”，让网页相互接力，让流量相互流动，让网络开放起来。

In theory, Travellings can increase web traffic.

With a rough estimate: Suppose there are currently 2 web pages joined Travellings, with 10 users using Travellings on each page, then each page seems to increase `10*2*1/2=10` traffic; if 10 web pages join Travellings, will each still increase 10 traffic on average? Obviously not, because:显然不是，因为：

- Visitors can use Travellings through multiple backlinks;
- With more web pages having Travellings, single-site traffic will also increase;

So let's recalculate, with 10 web pages joined Travellings, the relay times increase to 3, and each page has 15 users using Travellings, then each page increases `15*10*3/10=45` traffic.
This is also why it is recommended to place the Travellings badge in a prominent position on your website (recommended in the top bar, sidebar), to keep the backlinks active and gain more traffic.
这也是为什么建议将开往的徽标放在您网页明显位置（推荐顶栏，侧栏）的原因，以便让友链一直接力下去，获得更多的流量。

Currently, more webmasters are applying to join, so it is believed that Travellings is beneficial to web traffic — at least webmasters can make friends with each other ;-)

Summary:

- For webmasters: Show your support for an open internet and potentially gain more traffic.
- For visitors: Discover more quality web pages, a spontaneous online journey.

## Q: Does it only accept blog sites to join?

A: **All types of websites are qualified to join.**

It doesn't matter whether your website is a blog, a homepage, a tool, or a website navigation category. You are always welcome to join the Travellings project with your love of sharing.

## Q: What's the current project expenditure?

A:

- Server: ¥50/month, used to maintain the project, such as statistical data and observing the online status of member websites.
- Domain: ¥7/month, for renewing the project's .cn domain, averaged monthly over the year.

## Q: Is Travellings safe and secure?

A: Travellings prioritizes security and privacy.

全部 https 抗劫持；前后端完全开源，不侵犯隐私；镜像自动部署，无人工干预。加入开往的网页全部经过人工筛选，确保流量从源头就是干净优质的。

## Q: What does each status in the patrol mean?

A:

- RUN: Everything is normal.
- LOST: The website is alive, but the Travellings badge is not found.
- ERROR 表示网址异常
- Pure numbers: Indicates that the site returned a status code other than 200.
- TIMEOUT: Indicates that the backend patrol exceeded 15 seconds when trying to connect to the site.
- WAIT: Indicates pending, usually due to content violations or other special reasons. The site will not be patrolled and will not be assigned redirection until the issue is resolved (the maintenance team will notify the corresponding webmaster through Issues, etc.).

Only the `RUN` status will be assigned redirection via API. Please wait for the next patrol for status updates. Hovering over the patrol status will show some error reasons.

## Q: How often does the patrol occur?

A:
The patrol backend has two stages of patrols\
The first stage is for the backend patrol to quickly detect all sites (about 30 minutes)\
In the second stage, the backend patrol will use a browser to recheck the abnormal sites detected in the first stage (which may take longer)\
If the backend patrol server does not explode, it usually starts patrolling around 4 am every day.

## Q: What are the characteristics of the patrol?

A: The patrol backend uses a fixed User-Agent as\
`Mozilla/5.0 (compatible; Travellings Check Bot; +https://www.travellings.cn/docs/qa)`\
Using Tencent Cloud servers from Beijing, China for patrols\
Please allow this feature in your firewall / WAF to prevent misjudgments by patrols, thus preventing Travellings from redirecting to your website. Generally, requests within a day will not exceed 10 times, and appropriate throttling can be applied to prevent this feature from being exploited by malicious users.

## Q: Why is my website marked as LOST?

A: Travellings currently uses Axios (Node.JS) and Puppeteer for patrols every day.\
If you are using server-side rendering frameworks like Next.JS, and cannot see the Travellings field in the view-source, it may not be detected by patrols.\
You can try adding a comment with a travellings field to the public / index source code.\
There may be plans to abolish patrols in the future, but so far, there is no good solution to such problems.\
If you have any good ideas, please feel free to propose them to us.

## Q: Why is a website's status marked as RUN, but I can't access it?

A: Suppose a website performs well in coastal areas and loads smoothly, but cannot load in Tibet and other areas. In that case, Travellings will consider it normal. Therefore, you may encounter a very small number of abnormal URLs during the relay process. They can be opened in other areas. Currently, there is no solution to this problem.

## Q: I need to change the URL or report a problematic webpage or quit Travellings or contact the webmaster.

A: If you need to change the URL/name, please go to [Issues](https://github.com/travellings-link/travellings/issues) and choose "Request Information Change" to fill it out.

If you need to report the website to the maintenance team, please search the corresponding site in [Members](https://list.travellings.cn/) and click on Report (Flag) button on the right side to report it, which will be processed as soon as possible;

If you need to provide feedback to the corresponding webmaster, it is recommended to search for the subdomain of the website you need to provide feedback on. For example, if the problematic website is: https\://www\.travellings.cn/, then search for travellings.cn. Please be careful not to enter extra spaces or slashes. Generally, you can find the issue raised during the application. If there are multiple issues, please @ the site owner under the earliest issue.

Feel free to discuss other questions or give your advice via issues or GitHub Discussion.
