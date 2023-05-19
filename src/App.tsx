/* eslint-disable no-restricted-globals */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const onLoad = () => {
    let iframe: any = document.querySelector("iframe");
    iframe = iframe?.contentWindow ?? null;
    console.log(iframe, "===========iframe=============");
    const param = {
      username: "mc_admin2",

      phone: "pentest2",

      code: "1",

      type: "afc",

      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJLQzA4TUE0OVRSRFVjWjkxYTE0VjBubXY3OGVyWmU1SGhaU0dNc0gxNk0wIn0.eyJleHAiOjE2ODM4NjYxNjAsImlhdCI6MTY4Mzc3OTc2MCwianRpIjoiM2QyN2ViYWEtNjg0Zi00OGQwLTgzMzUtYzg4NDBjMjQ2ZmE1IiwiaXNzIjoiaHR0cHM6Ly91YXQta2V5Y2xvYWsubWNyZWRpdC5jb20udm4vYXV0aC9yZWFsbXMvbW9iaWxlLWZvci1zYWxlIiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6ImRmY2NhZWMyLWIwNjctNGJiNy04Y2QyLTM4ZmQ3MDdiZGJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6InVzZXItc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIzMjEyMmNmYS1mYmQ4LTQ5ZjItYTkyNi04ZGQxZGY4Y2Q0NWQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImJwbV9hZG1pbiIsImJwbV9jb250ZW50IiwiYnBtX3VzZXIiLCJicG1fbG9jYWxpdHkiLCJvZmZsaW5lX2FjY2VzcyIsImJwbV9jYWxsIiwiQXBwcmFpc2VyIiwiYnBtX29wIiwidW1hX2F1dGhvcml6YXRpb24iLCJicG1fYXBwcm92YWwiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctdXNlcnMiLCJxdWVyeS1ncm91cHMiLCJxdWVyeS11c2VycyJdfSwidXNlci1zZXJ2aWNlIjp7InJvbGVzIjpbIm9wX2lsIiwiY2FfaWwiLCJkY19jbCIsImZ2X2lsIiwib3BfY2wiLCJjYV9jbCIsImZ2X2NsIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzMjEyMmNmYS1mYmQ4LTQ5ZjItYTkyNi04ZGQxZGY4Y2Q0NWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJNQyBBZG1pbiAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibWNfYWRtaW4yIiwiZ2l2ZW5fbmFtZSI6Ik1DIiwiZmFtaWx5X25hbWUiOiJBZG1pbiAyIn0.Nj_uZ0DH8KiMzIJYH_BNHiilxoEfSqBrv_EgMdtTgvvt_NNEWRVigaQv0slGUiVxayxnviOSAlmjE6WRALMP1lVOJmwBB0XsxJtBgMwH7QRuNnLSMmkFMfnKMq7AxySldU1EMkOAZSVdg6S0PqfZLQQoY56D0pSSzZWksr64A0LYtIs57C5IEYwO17MXm350c5j2riMgL1VT5cUVKOmZrfIm_mY9M1c6-6ntSeFwKqfVMqYJCykGhCyq4BwgotdnrPk4UR6UfP7QjAnihR4Mb7jVve14zDWOwma7frnZPV6uf8ZbBumv9WTo3hhLdWsGrdvX6DHnXFzoDifyXjKp8Q",
    };
    iframe.postMessage(param, "https://agentmc.videocall.vn/staff4");
  };
  return (
    <div className="App">
      <iframe
        src="https://agentmc.videocall.vn/staff4"
        onLoad={onLoad}
        title="zoom-metting"
        width={screen.width}
        height={screen.height}
      />
    </div>
  );
}

export default App;
