import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "916 Tools" },
    { name: "description", content: "Welcome to 916 Tools!" },
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
      <center><img src="https://raw.githubusercontent.com/cl6251/916-tools/refs/heads/main/public/full_logo_service.png" width="540" height="540"></img></center>
    <br></br>
    <br></br>
    <br></br>
    <center>Phone (916)470-4699</center>
    </body>
    
    
    </html>
  );
};
