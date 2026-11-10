const JUDGE_USER = "aicompetition";
const JUDGE_PASS = "linda1234";
const TARGET_URL = "https://kechuangrong-techfin-88303.app.workbuddy.host/agent/?sharecode=NVPENN3YOR";

export default async function handler(req) {
  if (req.method === "GET") {
    return new Response(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>智能体评审登录</title>
<style>
*{box-sizing:border-box;font-family:system-ui}
body{display:flex;align-items:center;justify-content:center;height:95vh;background:#f4f7fa;margin:0}
.box{width:360px;padding:32px;background:#fff;border-radius:12px;box-shadow:0 4px 16px #00000015}
h2{text-align:center;margin-top:0}
input{width:100%;padding:12px;margin:8px 0;border:1px #ddd solid;border-radius:8px;font-size:16px}
button{width:100%;padding:12px;margin-top:12px;background:#2563eb;color:#fff;border:0;border-radius:8px;font-size:16px;cursor:pointer}
.err{color:red;text-align:center;display:none}
</style>
</head>
<body>
<div class="box">
<h2>评审入口登录</h2>
<form method="POST">
<input name="user" placeholder="账号" required>
<input name="pass" placeholder="密码" type="password" required>
<div class="err" id="err">账号或密码错误</div>
<button type="submit">进入智能体</button>
</form>
</div>
<script>
const url = new URL(location.href);
if(url.searchParams.get('e')) document.getElementById('err').style.display='block'
</script>
</body>
</html>
`, {headers: {"content-type":"text/html;charset=utf-8"}})
  }
  if (req.method === "POST") {
    const fd = await req.formData();
    const user = fd.get("user");
    const pass = fd.get("pass");
    if(user === JUDGE_USER && pass === JUDGE_PASS){
      return Response.redirect(TARGET_URL,302)
    }else{
      return Response.redirect("/?e=1",302)
    }
  }
  return new Response("404",{status:404})
}
//（注：内容由AI生成）
