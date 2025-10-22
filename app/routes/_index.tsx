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
      <center><img src="https://raw.githubusercontent.com/cl6251/916-tools/refs/heads/main/public/full_logo_service.png" style="width: 55vw; min-width: 330px;"></img></center>
    </body>
    
    
    </html>
  );
};
