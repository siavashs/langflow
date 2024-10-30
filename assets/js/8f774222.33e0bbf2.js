"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8661],{1126:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var n=t(4848),r=t(8453);const i={},d="Memories",a={id:"Components/components-memories",title:"Memories",description:"Chat memory components store and retrieve chat messages by session_id.",source:"@site/docs/Components/components-memories.md",sourceDirName:"Components",slug:"/Components/components-memories",permalink:"/Components/components-memories",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Agents",permalink:"/Components/components-agents"},next:{title:"Tools",permalink:"/Components/components-tools"}},c={},o=[{value:"AstraDBChatMemory Component",id:"astradbchatmemory-component",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"CassandraChatMemory Component",id:"cassandrachatmemory-component",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-1",level:4},{value:"ZepChatMemory Component",id:"zepchatmemory-component",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"Outputs",id:"outputs-2",level:4}];function h(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"memories",children:"Memories"}),"\n",(0,n.jsxs)(s.p,{children:["Chat memory components store and retrieve chat messages by ",(0,n.jsx)(s.code,{children:"session_id"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"astradbchatmemory-component",children:"AstraDBChatMemory Component"}),"\n",(0,n.jsxs)(s.p,{children:["This component creates an ",(0,n.jsx)(s.code,{children:"AstraDBChatMessageHistory"})," instance, which allows for storing and retrieving chat messages using Astra DB, a cloud-native database service."]}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.h4,{id:"inputs",children:"Inputs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"collection_name"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Name of the Astra DB collection for storing messages. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"token"}),(0,n.jsx)(s.td,{children:"SecretString"}),(0,n.jsx)(s.td,{children:"Authentication token for Astra DB access. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"api_endpoint"}),(0,n.jsx)(s.td,{children:"SecretString"}),(0,n.jsx)(s.td,{children:"API endpoint URL for the Astra DB service. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"namespace"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Optional namespace within Astra DB for the collection."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"session_id"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Chat session ID. Uses current session ID if not provided."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"outputs",children:"Outputs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_history"}),(0,n.jsx)(s.td,{children:"BaseChatMessageHistory"}),(0,n.jsx)(s.td,{children:"An instance of AstraDBChatMessageHistory for the session."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"cassandrachatmemory-component",children:"CassandraChatMemory Component"}),"\n",(0,n.jsxs)(s.p,{children:["This component creates a ",(0,n.jsx)(s.code,{children:"CassandraChatMessageHistory"})," instance, enabling storage and retrieval of chat messages using Apache Cassandra or DataStax Astra DB."]}),"\n",(0,n.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(s.h4,{id:"inputs-1",children:"Inputs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"database_ref"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Contact points for Cassandra or Astra DB database ID. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"username"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Username for Cassandra (leave empty for Astra DB)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"token"}),(0,n.jsx)(s.td,{children:"SecretString"}),(0,n.jsx)(s.td,{children:"Password for Cassandra or token for Astra DB. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"keyspace"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Keyspace in Cassandra or namespace in Astra DB. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"table_name"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Name of the table or collection for storing messages. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"session_id"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Unique identifier for the chat session. Optional."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cluster_kwargs"}),(0,n.jsx)(s.td,{children:"Dictionary"}),(0,n.jsx)(s.td,{children:"Additional keyword arguments for Cassandra cluster configuration. Optional."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"outputs-1",children:"Outputs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_history"}),(0,n.jsx)(s.td,{children:"BaseChatMessageHistory"}),(0,n.jsx)(s.td,{children:"An instance of CassandraChatMessageHistory for the session."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"zepchatmemory-component",children:"ZepChatMemory Component"}),"\n",(0,n.jsxs)(s.p,{children:["This component creates a ",(0,n.jsx)(s.code,{children:"ZepChatMessageHistory"})," instance, enabling storage and retrieval of chat messages using Zep, a memory server for Large Language Models (LLMs)."]}),"\n",(0,n.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsx)(s.h4,{id:"inputs-2",children:"Inputs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"url"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"URL of the Zep instance. Required."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"api_key"}),(0,n.jsx)(s.td,{children:"SecretString"}),(0,n.jsx)(s.td,{children:"API Key for authentication with the Zep instance."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"api_base_path"}),(0,n.jsx)(s.td,{children:"Dropdown"}),(0,n.jsx)(s.td,{children:'API version to use. Options: "api/v1" or "api/v2".'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"session_id"}),(0,n.jsx)(s.td,{children:"MessageText"}),(0,n.jsx)(s.td,{children:"Unique identifier for the chat session. Optional."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"outputs-2",children:"Outputs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"message_history"}),(0,n.jsx)(s.td,{children:"BaseChatMessageHistory"}),(0,n.jsx)(s.td,{children:"An instance of ZepChatMessageHistory for the session."})]})})]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>a});var n=t(6540);const r={},i=n.createContext(r);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);