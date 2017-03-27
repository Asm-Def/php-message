var xmlhttp = new XMLHttpRequest();

function readystatechange(xmlhttp, disp)
{
	if (xmlhttp.readyState===4 && xmlhttp.status===200)
	{
		disp.innerHTML = xmlhttp.responseText;
	}
}
			
function display_page(page, name)
{
	var disp = $(name);
	xmlhttp.abort();
	xmlhttp.open("GET",page + "?t=" + Math.random(),true);
	xmlhttp.onreadystatechange = function(){readystatechange(xmlhttp, disp);};
	xmlhttp.send();
}

function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start !== -1)
		{
			c_start = c_start + c_name.length+1;	
			c_end = document.cookie.indexOf(";",c_start);
			if (c_end === -1) c_end=document.cookie.length;
			return decodeURI(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
}

function setCookie(c_name,value,expiredays=null)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + encodeURI(value) + ((expiredays==null) ? "" : ";expires=" + exdate.toGMTString());
}

function $(id)
{
	return document.getElementById(id);
}

function submit_login()
{
	var uname = $("uname").value, pword = $("pword").value;

	xmlreq = new XMLHttpRequest();
	xmlreq.open("POST","user/userlogin.php",true);
	xmlreq.setRequestHeader('content-type','application/x-www-form-urlencoded');
	xmlreq.onreadystatechange = function()
	{
		if(xmlreq.readyState === 4 && xmlreq.status === 200)
		{
			var json = eval('(' + xmlreq.responseText + ')');
			if(typeof(json['token']) === "undefined")
			{
				alert("用户名或密码错误！");
				$("pword").value = "";
			}
			else
			{
				if($("savecookie").checked === true)
				{
					setCookie("uname", uname, 120);
					setCookie("token", json['token'], 120);
				}
				else
				{
					setCookie("uname", uname);
					setCookie("token", json['token']);
				}
			}
		}
	};
	xmlreq.send("uname="+uname+"&pword="+pword);
}
