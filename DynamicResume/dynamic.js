function getFile(file, callback) {
    let htp = new XMLHttpRequest();
    htp.overrideMimeType("application/json")
    htp.open('GET', file, true);
    htp.onreadystatechange = function () {
        if (htp.readyState === 4 && htp.status == "200") {
            callback(htp.responseText);
        }
    }
    htp.send(null)
}
getFile("dynamic.json", function (text) {
    let data = JSON.parse(text);
    console.log(data);
    profile(data.profile);
    AcademicData(data.career);
});
var left = document.querySelector(".left");
function profile(p) {
    var pimg = document.createElement("img");
    pimg.src = p.img;
    left.appendChild(pimg);

    var ph3 = document.createElement("h1");
    ph3.textContent = p.name;
    left.appendChild(ph3);

    var roll = document.createElement("h3");
    roll.textContent = p.roll;
    left.appendChild(roll);

    var line = document.createElement("hr");
    line.color = " white";
    left.append(line)

    var mail = document.createElement("p");
    mail.textContent = p.email;
    left.appendChild(mail);

    var clg = document.createElement("p");
    clg.textContent = p.clg;
    left.appendChild(clg);

}
var right = document.querySelector(".right");
function AcademicData(d) {
    //HEading
    var head = document.createElement("h2");
    head.textContent = "Carrer Objectives";
    right.appendChild(head);
    //Line
    var line = document.createElement("hr");
    line.color = " white";
    right.append(line)
    //INfo
    var inf = document.createElement("h4");
    inf.textContent = d.info;
    right.appendChild(inf);
    //Edu details
    var head = document.createElement("h4");
    head.textContent = "Educational Details:";
    right.appendChild(head);
    //Table
    var tab = document.createElement("table");
    tab.border = "1%";
    var tr1 = "<tr><td>S.No</td><td>Institute</td><td>Percentage</td><td>Year of passing</td></tr>";
    var tr2 = "";
    for (i = 0; i < d.edu.length; i++) {
        tr2 = tr2 + "<tr><td>" + d.edu[i].sno + "</td><td>" + d.edu[i].ins + "</td><td>" + d.edu[i].percnt + "</td><td>" + d.edu[i].yop + "</td></tr>";
    }
    tab.innerHTML = tr1+tr2;
    right.appendChild(tab);
    
    //Languages
    var h= document.createElement("h4");
    h.textContent="Languages known";
    right.appendChild(h);

    var lan= document.createElement("ul");
    for(i=0;i<d.language.length;i++){
        var t= document.createElement("li")
        t.innerHTML= d.language[i].lang;
        lan.appendChild(t);
    }
    right.appendChild(lan);
    //Skills
    var h= document.createElement("h4");
    h.textContent="Skills:";
    right.appendChild(h);

    var lan= document.createElement("ul");
    for(i=0;i<d.skills.length;i++){
        var t= document.createElement("li")
        t.innerHTML= d.skills[i].s;
        lan.appendChild(t);
    }
    right.appendChild(lan);
}