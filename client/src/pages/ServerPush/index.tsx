import React from "react";
import { Card } from "antd";
import { js_beautify } from "js-beautify";
import { options, simplePollCode } from "../../assets/code";

export const ServerPush: React.FC = () => {
  return (
    <Card style={{ height: "100%", overflow: "auto" }}>
      <h2>实时数据推送技术详解：从基础轮询到高级WebSocket实践</h2>
      <h3>前言</h3>
      <p>
        <b>服务器推送技术（Server Push）</b>
        是实现客户端与服务器之间实时通信的关键机制。常规的客户端与服务器的交流模式遵循
        <b>请求-响应模式</b>
        ，即客户端发送请求，服务器应答后返回数据，进而客户端处理这些数据。在这种传统模型中，客户端需要主动向服务器请求信息。
      </p>
      <p>
        但在某些应用场景中，情况则完全相反，服务器需“主动”向客户端发送数据，这对于
        <b>聊天应用、实时数据监控、股票行情更新</b>
        等场合尤为重要。这些应用共通之处在于：
        <b>
          对实时性要求极高，并且客户端通常无法准确知道数据更新的时机。当服务器有最新信息时，必需立即将这些更新推送给客户端。
        </b>
      </p>
      <p>
        随着Web应用技术的演进，服务器推送技术的重要性不断提升。从初期的
        <b>简易轮询</b>方式，到<b>基于长轮询技术的COMET</b>
        ，再到HTML5推出的<b>Server-Sent Events (SSE)</b>
        ，直至<b>WebSocket</b>
        协议实现了真正意义上的全双工通信，服务器推送技术持续进化，以满足时代对实时通信的不断增长需求。
      </p>
      <h3>简易轮询</h3>

      <div>
        <p>
          简易轮询是最简单的一种服务器推送实现方式，其本质是客户端创建一个定时器，定期发送请求到服务器，询问是否有新的信息。这是基于HTTP协议的标准请求/响应模型。
        </p>
        <ul>
          <li>有时间间隔的请求：定时向服务器发送请求（即使没有数据更新）</li>
          <li>
            服务器即时响应：服务器响应请求，如果没有数据，返回空 简易轮询示例
          </li>
        </ul>
      </div>
      <b>简易轮询示例</b>
      <div
        style={{
          backgroundColor: "#282c34",
          border: "1px solid #4e5d6c",
          borderRadius: "5px",
          padding: "10px",
          color: "white",
          fontFamily: "Courier, monospace",
          whiteSpace: "pre-line",
        }}
      >
        <pre>
          <code className="language-javascript">
            {js_beautify(simplePollCode, options)}
          </code>
        </pre>
      </div>
      <p>
        <b>优缺点</b>
      </p>
      <ul>
        <li>
          <b>优点：</b>实现简单，<b>兼容性较好</b>，只要<b>支持http协议</b>
          即可以使用。
        </li>
        <li>
          <b>缺点：</b>
          非常消耗资源，因为建立Tcp连接是非常消耗资源的，服务端响应完成就会关闭这个Tcp连接，下一次请求再次建立Tcp连接。
        </li>
      </ul>
    </Card>
  );
};
