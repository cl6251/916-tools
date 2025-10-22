import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <html>
    <head>
    </head>
    
    <body>
    
      <br></br>
      <br></br>
      <br></br>
      <center>TEST</center>
      <center><img src="/full_logo_service.png"></img></center></center>
    </body>
    
    
    </html>
  );
};
