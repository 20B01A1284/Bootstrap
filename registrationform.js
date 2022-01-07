let b = document.getElementById('btn');
b.addEventListener("click",function(e)
{
    e.preventDefault();
    let sname = document.getElementById('sname');
    if (sname.value === "")
    {
        document.getElementById('nameid').innerHTML = "please enter your name";
    }
    else
    {
        document.getElementById('nameid').innerHTML = "";
    }
    let password = document.getElementById('password');
    if (password.value === "")
    {
        document.getElementById('passid').innerHTML = "please enter password";
    }
    else
    {
        document.getElementById('passid').innerHTML = "";
    }
    let selid = document.getElementById('sel');
    if (sel.value === "Branch")
    {
        document.getElementById('branch').innerHTML = "please select branch";
    }
    else
    {
        document.getElementById('branch').innerHTML = "";
    }
    let gender = document.getElementsByName("gender");
    let count = 0;
    for(let i in gender)
    {
        if(gender[i].checked == false)
        {
            count ++;
        }
    }
    if (count === gender.length)
    {
        document.getElementById('gid').innerHTML = "please select your gender";
    }
    else
    {
        document.getElementById('gid').innerHTML = "";
    }
    let ch1 = document.getElementById('ch1');
    let ch2 = document.getElementById('ch2');
    let ch3 = document.getElementById('ch3');
    if (ch1.checked == true || ch2.checked == true || ch3.checked == true)
    {
        document.getElementById('interests').innerHTML = "";
    }
    else{
        document.getElementById('interests').innerHTML = "select your interest";
    }

})