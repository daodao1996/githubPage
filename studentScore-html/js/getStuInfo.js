function load(row) {
    let oldName = row.cells[0].innerText;
    let oldId = row.cells[1].innerText;
    let oldClassName = row.cells[2].innerText;
    let oldChinese = row.cells[4].innerText;
    let oldMath = row.cells[3].innerText;
    let oldEnglish = row.cells[5].innerText;
    let oldProgram = row.cells[6].innerText;

    setValue(oldId,oldName,oldClassName,oldMath,oldChinese,oldEnglish,oldProgram);
}

function setValue(oldId,oldName,oldClassName,oldMath,oldChinese,oldEnglish,oldProgram) {
    document.getElementById("editId").setAttribute("value",oldId);//'<p>'+oldId+'</p>';
    document.getElementById("editName").setAttribute("value",oldName);//innerHTML='<p>'+oldName+'</p>';
    document.getElementById("editClassName").setAttribute("value",oldClassName);//innerHTML='<p>'+oldClassName+'</p>';
    document.getElementById("editMath").setAttribute("value",oldMath);//innerHTML='<p>'+oldMath+'</p>';
    document.getElementById("editChinese").setAttribute("value",oldChinese);//innerHTML='<p>'+oldClassName+'</p>';
    document.getElementById("editEnglish").setAttribute("value",oldEnglish);//innerHTML='<p>'+oldEnglish+'</p>';
    document.getElementById("editProgram").setAttribute("value",oldProgram);//innerHTML='<p>'+oldProgram+'</p>';
}

function judgeIdFormat(str) {
    let result = true;
    if(str.indexOf(';')>=0 || str.indexOf(' ')!==-1 || str.indexOf('.')!==-1 || str.indexOf('/')!==-1)
        result = false;
    else
        result = true;
    return result;
}



function clearTable()
{
    let bodyObj=document.getElementById("scoreTable");
    if(bodyObj!==null)
    {
        for (let iter = 1; iter < bodyObj.rows.length; )
            bodyObj.deleteRow(iter);
    }
}

function getValue() {
let res,info;

    for(let iter=0;iter<localStorage.length;iter++)
    {
        res = localStorage.getItem(localStorage.key(iter));
        info = JSON.parse(res);
        addrow(info);
    }
    var items=document.getElementById("scoreTable").getElementsByTagName("tr");
    for(let i=0;i<items.length;i++) {
        //items[i].addEventListener("click", load());
        items[i].onclick = function () {
            load(this);
        }
    }
}

function search() {
    let str = document.getElementById("searchId").value;
    if(judgeIdFormat(str)===true){
        clearTable();
        let idArr = str.split(",");
        let keyArr=[];
        for(let iter=0;iter<localStorage.length;iter++) {
           keyArr.push(localStorage.key(iter));
        }

        idArr.forEach(itemI => {
            keyArr.forEach(itemK => {
                let k = JSON.parse(localStorage.getItem(itemK));
                if(itemI === k.stuId){
                    let info = JSON.parse(localStorage.getItem(itemI));
                    addrow(info);
                }
            });
        });
        var items=document.getElementById("scoreTable").getElementsByTagName("tr");
        for(let i=0;i<items.length;i++) {
           // window.alert(i);
            items[i].addEventListener("click", load());
        }
    }
    else
        window.alert("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...）");
}

function addrow(info){
    let leng = document.getElementById("scoreTable");
    let length=leng.rows.length;
    let newrow = document.getElementById("scoreTable").insertRow(length);
    let colName = newrow.insertCell(0);
    colName.innerHTML =  '<p align="center">'+info.name+'</p>';
    let colStuId = newrow.insertCell(1);
    colStuId.innerHTML =  '<p align="center">'+info.stuId+'</p>';
    let colClassName = newrow.insertCell(2);
    colClassName.innerHTML =  '<p align="center">'+info.className+'</p>';
    let colMathScore = newrow.insertCell(3);
    colMathScore.innerHTML =  '<p align="center">'+info.mathScore+'</p>';
    let colChineseScore = newrow.insertCell(4);
    colChineseScore.innerHTML =  '<p align="center">'+info.chineseScore+'</p>';
    let colEnglishScore = newrow.insertCell(5);
    colEnglishScore.innerHTML =  '<p align="center">'+info.englishScore+'</p>';
    let colProgramScore = newrow.insertCell(6);
    colProgramScore.innerHTML =  '<p align="center">'+info.programScore+'</p>';
    let sum = newrow.insertCell(7);
    sum.innerHTML =  '<p align="center">'+info.sum+'</p>';
    let average = newrow.insertCell(8);
    average.innerHTML =  '<p align="center">'+info.average+'</p>';

    newrow.setAttribute("data-toggle","modal");
    newrow.setAttribute("data-target","#myModal");

}

function checkFormat() {
    if(/\D/.test(this.value))
    {
        alert('成绩或学号必须为数字');
        this.value=' ';
    }
}

let button = document.getElementById("search");
button.addEventListener("click",search);
