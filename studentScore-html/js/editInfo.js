
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
    name = document.getElementById("editName").value;
    id = document.getElementById("editId").value;
    className = document.getElementById("editClassName").value;
    math = document.getElementById("editMath").value;
    chinese = document.getElementById("editChinese").value;
    english = document.getElementById("editEnglish").value;
    program = document.getElementById("editProgram").value;
    sum = parseFloat(math)+parseFloat(chinese)+parseFloat(program)+parseFloat(english);
    average = sum/4;
    average = average.toFixed(2);
    let newNode = new studentScore(name,id,className,math,chinese,english,program,sum,average);
    return newNode;
}

function editInfo() {
    let newNode = getNewNode();
    let node = JSON.stringify(newNode);
    window.localStorage.setItem(newNode.stuId,node);
}

let btn = document.getElementById("editAdd");
btn.addEventListener("click",editInfo);
