# rokidos-node

基于 JavaScript 开发的开源交互系统，也许你听说过“天猫精灵”、“小爱同学“亦或者是我们的”若琪“音箱，
这些语音类产品，如何灵活地打造出一款拥有与上述语音交互类产品，一直是 Rokid 在探索的目标，而目前我们
将拥抱 JavaScript，基于丰富的社区，我们将我们从前到后的能力，全部赋予 JavaScript 开发者，在这里
开放。

首先，rokidos-node 被寄予期望为一套跨平台的语音交互系统框架，他能够运行在任意的 Linux、Android 以及
浏览器上。

其次它本身也是一个操作系统，支持完善的网络管理、系统 SDK、多媒体播放等能力，除此之外，他还提供了与
语音交互相关的语音识别、自然语义处理、语音合成等接口。

上述的接口本身都将以类似应用的方式开放给任何 Rokid 开发者，我们称这类应用为本地应用。

## 什么是语音识别

说到语音识别，大家可能想到的就是耳熟能详的 ASR，其实对于语音识别，可远远不止于此，因为对于真实的识别环境，
我们通过麦克风收集而来的语音是远远达不到能够让目前的人工智能算法识别的程度，因此，对于一段音频识别的好坏，
往往最大的决定因素并非来源于识别算法，而是我们位于前端的语音预处理过程。

**为什么要有激活词**

绝大多数人，包括我在内，觉得激活词往往是一个很奇怪的设定，原因是我们日常交流中，可能大部分都不会使用激活词，
除非特别正式的场所。比如跟恋人去逛街时，跟她说话时，并不会预先呼喊她的名字甚至是小名。因为在两人的思维中，
已经默许了对方都是在跟我说话，然而对于我们的音箱、机顶盒或者车载设备，他们对于所听到的声音是一无所知的，甚至
就算场景内只有你们两个存在，音箱也无法分辨什么时候你在跟她说话，而什么时候是在自言自语。

因此，激活词就应运而生。

**音箱的注意力**

对于我们现在接触到的音箱类语音产品，都是同时由多个麦克风扮演着耳朵的角色，首先，我们通过激活词技术，可以方便地
了解到说话的声音是从哪个方位过来的，此时，我们便将指定位置麦克风收集到的音频放大，而其他方向的音频减小，当然还有
一些其他操作用于把激活方向上的音频噪音去掉，这项技术就是我们通常说的“波束成行”（BF, BeamForming），而我称他
做“音箱的注意力”。

**去掉自己的声音**

在发送到语音识别模块之前，我们还需要进行一个步骤，专业名词叫做“自身音源消除”，英文叫：AEC。其实这也是属于我们集中
注意力的一个表现，就跟我们在听别人说话时，倘如自己在说话时，而且可能会更容易听到其他人说话的声音，而把本身自己说
的内容忽略，而 AEC 就是这么一门消灭自己输出音频的技术。

最后，麦克风的数据在经历了多道工序，终于可以得出一个干净名了的音频，在压缩后，就可以发到云端识别服务，就能得到识别
出来的文本结果了。

> 未完待续

## License

Apache v2.0
