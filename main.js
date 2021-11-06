var FriendName = [];

function CallArray() {
    var Name1 = document.getElementById("input1").value;
    var Name2 = document.getElementById("input2").value;
    var Name3 = document.getElementById("input3").value;
    var Name4 = document.getElementById("input4").value;
    FriendName.push(Name1);
    FriendName.push(Name2);
    FriendName.push(Name3);
    FriendName.push(Name4);
    console.log(FriendName);
    document.getElementById("text2").innerHTML = FriendName;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
}

function SortArray() {
    var SortedNames = FriendName.sort()
    console.log(SortedNames)
    document.getElementById("text2").innerHTML = SortedNames;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
}

function CleanArray() {
    FriendName.pop()
    FriendName.pop()
    FriendName.pop()
    FriendName.pop()
    document.getElementById("text2").innerHTML = "";
    document.getElementById("button1").style.display = "inline-block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
}