import { Code, Terminal, Globe, Zap } from "lucide-react";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            使用示例
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            通过实际的代码示例，了解如何在不同场景下使用 GPT-Load，
            快速集成到您的应用中。
          </p>
        </div>

        {/* JavaScript Example */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Code className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              JavaScript / Node.js
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              基础使用
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`// 使用 fetch API
const response = await fetch('http://localhost:3000/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk-your-api-key'
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Hello, world!' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`}</code>
              </pre>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              使用 OpenAI SDK
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`import OpenAI from 'openai';

// 配置 GPT-Load 作为代理
const openai = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: 'http://localhost:3000/v1'
});

async function chatCompletion() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Hello, world!' }
    ]
  });
  
  console.log(completion.choices[0].message.content);
}

chatCompletion();`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Python Example */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Terminal className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Python</h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              使用 requests 库
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`import requests
import json

def chat_with_gpt(message):
    url = "http://localhost:3000/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer sk-your-api-key"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "user", "content": message}
        ]
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()["choices"][0]["message"]["content"]

# 使用示例
result = chat_with_gpt("Hello, world!")
print(result)`}</code>
              </pre>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              使用 OpenAI Python SDK
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`from openai import OpenAI

# 配置 GPT-Load 作为代理
client = OpenAI(
    api_key="sk-your-api-key",
    base_url="http://localhost:3000/v1"
)

def chat_completion(message):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": message}
        ]
    )
    return completion.choices[0].message.content

# 使用示例
result = chat_completion("Hello, world!")
print(result)`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* cURL Example */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <Terminal className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              cURL 命令行
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              聊天补全
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`curl -X POST http://localhost:3000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "Hello, world!"}
    ],
    "max_tokens": 150,
    "temperature": 0.7
  }'`}</code>
              </pre>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              流式响应
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`curl -X POST http://localhost:3000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "写一首关于春天的诗"}
    ],
    "stream": true
  }' \\
  --no-buffer`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Web Integration */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">前端集成</h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              React 组件示例
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`import { useState } from 'react';

function ChatComponent() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-component">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="输入您的消息..."
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? '发送中...' : '发送'}
      </button>
      {response && (
        <div className="response">
          <h3>AI 回复：</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ChatComponent;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-red-100 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">高级用法</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                错误处理和重试
              </h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`async function robustChatCompletion(message, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch('http://localhost:3000/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-your-api-key'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }]
        })
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
      
    } catch (error) {
      console.error(\`Attempt \${attempt} failed:\`, error);
      
      if (attempt === maxRetries) {
        throw new Error(\`Failed after \${maxRetries} attempts\`);
      }
      
      // 指数退避
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, attempt) * 1000)
      );
    }
  }
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                并发请求处理
              </h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`async function batchProcess(messages) {
  const promises = messages.map(async (message, index) => {
    try {
      const response = await fetch('http://localhost:3000/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-your-api-key'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }]
        })
      });
      
      const data = await response.json();
      return {
        index,
        success: true,
        result: data.choices[0].message.content
      };
    } catch (error) {
      return {
        index,
        success: false,
        error: error.message
      };
    }
  });

  const results = await Promise.allSettled(promises);
  return results.map(result => result.value);
}

// 使用示例
const messages = [
  "什么是人工智能？",
  "解释机器学习的基本概念",
  "深度学习与传统编程的区别"
];

batchProcess(messages).then(results => {
  results.forEach((result, index) => {
    if (result.success) {
      console.log(\`消息 \${index + 1} 处理成功:\`, result.result);
    } else {
      console.error(\`消息 \${index + 1} 处理失败:\`, result.error);
    }
  });
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Examples */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            💡 配置提示
          </h3>
          <div className="space-y-3 text-blue-800 text-sm">
            <p>• 生产环境建议设置适当的超时时间和重试机制</p>
            <p>• 使用多个 API 密钥时，GPT-Load 会自动进行负载均衡</p>
            <p>
              • 监控 <code className="bg-blue-100 px-1 rounded">/stats</code>{" "}
              端点了解系统性能
            </p>
            <p>
              • 根据您的应用需求调整{" "}
              <code className="bg-blue-100 px-1 rounded">
                MAX_CONCURRENT_REQUESTS
              </code>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
