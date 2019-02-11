class studentScore {
    constructor(name,stuId,className,mathScore,chineseScore,englishScore,programScore,sum,average) {
        this.name = name;
        this.stuId = stuId;
        this.className = className;
        this.mathScore = mathScore;
        this.chineseScore = chineseScore;
        this.englishScore = englishScore;
        this.programScore = programScore;
        this.sum = sum;
        this.average = average;
    }
}

function getNewNode() {
    let name,id,className;
    let math,chinese,english,program,sum,average;
    name = document.getElementById("name").value;
    id = document.getElementById("stuId").value;
    className = document.getElementById("className").value;
    math = document.getElementById("mathScore").value;
    chinese = document.getElementById("chineseScore").value;
    english = document.getElementById("englishScore").value;
    program = document.getElementById("programScore").value;
    sum = parseFloat(math)+parseFloat(chinese)+parseFloat(program)+parseFloat(english);
    average = sum/4;
    average = average.toFixed(2);
    let newNode = new studentScore(name,id,className,math,chinese,english,program,sum,average);
    console.log(newNode);
    return newNode;
}
function addInfo() {
    let newNode = getNewNode();
    let id = newNode.stuId;
    let node = JSON.stringify(newNode);
    window.localStorage.setItem(id,node);
}
function checkFormat() {
    if(/\D/.test(this.value))
    {
        alert('成绩或学号必须为数字');
        this.value=' ';
    }
}
let button = document.getElementById("add");
button.addEventListener("click",addInfo);
